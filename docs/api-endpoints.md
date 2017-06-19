# API Endpoints

ORGANIZED BY:

METHOD | URI | DESCRIPTION

## HTML API

### Root
  - GET	/	Loads React Web App

## JSON API

### Users

  - GET	/	Loads React Web App
  - POST	/api/users	Create new user
  - GET	/api/users/:id	Get user by username/id
  - PATCH	/api/users/:id	Edit user
  - GET	/api/users/search	Search user via key

### Session

  - POST	/api/session	Sign in
  - DELETE	/api/session	Sign out

### Photos

  - GET	/api/photos	Fetch all photos
  - POST	/api/photos	Upload new photo
  - GET	/api/photos/:id	Find photo by id
  - DELETE	/api/photos/:id	Delete photo by id
  - GET	/api/users/:user_id/photos	Fetch all photos by user id

### Likes

  - POST	/api/photos/:photo_id/likes	Adds a like to a photo
  - DELETE	/api/photos/:photo_id/likes	Removes a like from a photo

### Comments

  - POST	/api/comments	Add comment to a photo
  - DELETE	/api/comments/:id	Remove a comment from a photo

### Follows

  - GET	/api/users/:user_id/following	Get all users you follow
  - GET	/api/users/:user_id/followers	Get all followers
  - POST	/api/users/:user_id/follows	Enable following of another user
  - DELETE	/api/users/:user_id/follows Unfollow a user
