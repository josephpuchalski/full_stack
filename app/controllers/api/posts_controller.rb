class Api::PostsController < ApplicationController


  def index
    @posts = []
    current_user.followings.each do |following|
      following.following.posts.each do |post|
      @posts << post
      end
    end

    # current_user.posts.each do |post|
    #   @posts << post
    # end

    @posts
    render 'api/posts/index'
  end

  def show
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  private

  def post_params
    params.require(:post).permit(:caption, :user_id, :image)
  end
end
