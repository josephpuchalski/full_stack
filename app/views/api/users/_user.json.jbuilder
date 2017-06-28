json.id user.id
json.username user.username
json.name user.name
json.bio user.bio
json.profile_image image_path(user.profile_image.url)
json.posts user.posts.reverse, :id, :caption, :image
json.followers user.followers, :follower_id
json.followings user.followings, :following_id
