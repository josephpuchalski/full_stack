json.extract! post, :id, :caption, :image, :user_id, :created_at
json.user post.user.username
json.likesCount post.likes.length
json.likes post.likes
json.likesIds post.likes.map { |like| like.user_id }
json.commentBody post.comments.sort_by { |comment| comment.created_at }.map { |comment| [comment.user.username, comment.body, comment.id] }
json.profile_image asset_path(post.user.profile_image.url)
