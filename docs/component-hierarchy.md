## Component Hierarchy

**SignUpContainer**
 - SignUpForm

**SignInContainer**
 - SignInForm

 **MainContainer**
 - Header
 - ImageIndex

**HeaderContainer**
  - MainNavigation
  - Search

**ImageIndexContainer**
 - ImageIndexItem

**ImageIndexItemContainer**
  - Profile Photo
  - ImageIndexItem Username
  - Image
  - Like Button
  - Comment Button
  - User Likes Total
  - Hashtags
  - Body Caption
  - Timestamps

**UserProfileContainer**
 - Navigation
 - UserDetails

**UserDetailsContainer**
  - Individual User Detail

**EditProfileContainer**
  - Navigation
  - Profile Photo


**ImageDetailContainer**
  - Image
  - Delete Image
  - Image Comments
  - Image Likes
  - Profile Photo
  - Username who posts
  - Captions
  - Hashtags
  - Like/Comment Submits
  - Timestamp


**LikesContainer**
  - Likes

**CommentsContainer**
  - Comments

**FollowsContainer**
  - Follows

## ROUTES


PATH | COMPONENT
------------|-----------|
/sign-up	|AuthFormContainer|
/sign-in	|AuthFormContainer|
/	MainContainer|
/:username	|UserProfileContainer|
/account/edit/	|EditProfileContainer|
