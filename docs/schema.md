# Schema Information

EVERYTHING IS ORGANIZED BY:

COLUMN NAME | DATA TYPE | DETAILS

## USERS
column name | data type | details
------------|-----------|-----------------------
id	|integer|	not null, primary key, unique
username	|string	|not null, indexed, unique
password_digest|	string|	not null
session_token	|string	|not null, indexed, unique
email | string | not null, unique
name	|string|
bio	|string|

## POSTS
column name | data type | details
------------|-----------|-----------------------
id	|integer	|not null, primary key, unique
caption	|string
user_id	|integer	|not null, foreign key, indexed

## LIKES
column name | data type | details
------------|-----------|-----------------------
id	|integer	|not null, primary key, unique
user_id	|integer	|not null, foreign key, indexed, unique combined with photo_id
post_id	|integer	|not null, foreign key, indexed, unique combined with user_id

## COMMENTS
column name | data type | details
------------|-----------|-----------------------
id	|integer	|not null, primary key, unique
body	|string|	not null
user_id	|integer|	not null, foreign key, indexed
post_id	|integer|	not null, foreign key, indexed

## FOLLOWS
column name | data type | details
------------|-----------|-----------------------
id	|integer|	not null, primary key, unique
follower_id	|integer|	not null, foreign key, indexed, unique combined with following_id
following_id	|integer|	not null, foreign key, indexed, unique combined with follower_id
