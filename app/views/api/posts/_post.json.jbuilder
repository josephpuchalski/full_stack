json.extract! post, :id, :caption, :image, :user_id, :created_at
json.user post.user.username
json.profile_image asset_path(post.user.profile_image.url)
