json.id user.id
json.username user.username
json.name user.name
json.bio user.bio
json.profile_image image_path(user.profile_image.url)
json.posts user.posts, :id, :caption, :image
