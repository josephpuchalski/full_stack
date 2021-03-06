class Api::FollowsController < ApplicationController

  def show
    @follow = Follow.find(params[:id])
    render 'api/follows/show'
  end

  def create
    follow = Follow.new(follow_params)
    follow.follower_id = current_user.id

    if follow.save
      @user = current_user
      render 'api/users/show'
    else
      render json: follow.errors.full_messages, status: 422
    end

  end


  def destroy
    follow = current_user.followings.find_by(following_id: params[:id])
    if follow.destroy
      @user = current_user
      render 'api/users/show'
    else
      render json: follow.errors.full_messages, status: 422
    end

  end


  private

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
