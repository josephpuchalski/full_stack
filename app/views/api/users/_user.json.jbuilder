json.id user.id
json.username user.username
json.name user.name
json.bio user.bio
json.profile_image image_path(user.profile_image.url)
json.posts user.posts.reverse, :id, :caption, :image

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
end
