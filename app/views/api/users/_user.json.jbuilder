json.id user.id
json.username user.username
json.name user.name
json.bio user.bio
json.profile_image image_path(user.profile_image.url)
json.posts user.posts.reverse, :id, :caption, :image, :likes, :comments
json.followerCount user.followers.length
json.followingCount user.followings.length


json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.id follower.id
      json.username follower.follower.username
      json.profile_image asset_path(follower.follower.profile_image.url)
    end
  end
end

json.followings do
  user.followings.each do |following|
    json.set! following.id do
      json.id following.id
      json.username following.following.username
      json.profile_image asset_path(following.following.profile_image.url)
    end
  end
  json.followingIds user.user_followings.map { |user| user.id }
end

  json.likes do
    user.likes.each do |like|
      json.set! like.id do
        json.id like.id
        json.post_id like.post_id
        json.username like.user.username
      end
    end
    json.likesIds user.post_likes.map { |user| user.id }
  end
