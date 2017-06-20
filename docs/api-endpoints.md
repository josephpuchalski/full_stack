# API Endpoints

ORGANIZED BY:

METHOD | URI | DESCRIPTION

## HTML API

### Root
METHOD | URI | DESCRIPTION
-------|-----|------------
  GET |	/	|Loads React Web App

## JSON API

### Users
METHOD | URI | DESCRIPTION
-------|-----|------------
  GET|	/	|Loads React Web App
  POST	|/api/users|	Create new user
  GET	|/api/users/:id	|Get user by username/id
  PATCH	|/api/users/:id	|Edit user
  GET	|/api/users/search	|Search user via key

### Session
METHOD | URI | DESCRIPTION
-------|-----|------------
  POST	|/api/session|	Sign in
  DELETE	|/api/session|	Sign out

### Posts
METHOD | URI | DESCRIPTION
-------|-----|------------
  GET	|/api/posts	|Fetch all posts
  POST	|/api/posts|	Upload new post
  GET	|/api/posts/:id|	Find post by id
  DELETE	|/api/posts/:id|	Delete post by id
  GET	|/api/users/:user_id/posts|	Fetch all posts by user id

### Likes
METHOD | URI | DESCRIPTION
-------|-----|------------
  POST	|/api/posts/:post_id/likes	|Adds a like to a post
  DELETE	|/api/posts/:post_id/likes|	Removes a like from a post

### Comments
METHOD | URI | DESCRIPTION
-------|-----|------------
  POST	|/api/posts/comments|	Add comment to a post
  DELETE	|/api/posts/comments/:id	|Remove a comment from a post

### Follows
METHOD | URI | DESCRIPTION
-------|-----|------------
  GET	|/api/users/	| Get all users you follow through associations
  GET	|/api/users/	| Get all users that follow you through associations
  POST	|/api/users/:user_id/follows	|Enable following of another user
  DELETE	|/api/users/:user_id/follows| Unfollow a user
