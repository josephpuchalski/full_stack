Schema Information

EVERYTHING IS ORGANIZED BY:

COLUMN NAME | DATA TYPE | DETAILS

USERS

id	integer	not null, primary key, unique
username	string	not null, indexed, unique
password_digest	string	not null
session_token	string	not null, indexed, unique
name	string
bio	text
profile_photo	string

PHOTOS

id	integer	not null, primary key, unique
caption	string
user_id	integer	not null, foreign key, indexed
photo	string	not null


LIKES

id	integer	not null, primary key, unique
user_id	integer	not null, foreign key, indexed, unique combined with photo_id
photo_id	integer	not null, foreign key, indexed, unique combined with user_id

COMMENTS

id	integer	not null, primary key, unique
body	string	not null
user_id	integer	not null, foreign key, indexed
photo_id	integer	not null, foreign key, indexed

FOLLOWS

id	integer	not null, primary key, unique
follower_id	integer	not null, foreign key, indexed, unique combined with following_id
following_id	integer	not null, foreign key, indexed, unique combined with follower_id
