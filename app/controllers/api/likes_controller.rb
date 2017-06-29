class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    # @like = current_user.likes.find_by(id: params[:id])
    @like = current_user.likes.find_by(post_id: params[:id])
    if @like.destroy
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end
