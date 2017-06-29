class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render 'api/comment/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comment.find_by(id: params[:id])

    if @comment.destroy
      render 'api/comment/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end
