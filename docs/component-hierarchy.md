## Component Hierarchy

**ABOUT TOP AND BOTTOM**

**HeaderContainerComponent**
- MainNavigation
- Search

**FooterContainerComponent**
- Navigation

**ABOUT FRONTEND AUTH**

**SignUpContainer**
 - SignUpForm

**SignInContainer**
 - SignInForm

 **MainContainer**
 - Header
 - ImageIndex

**ABOUT IMAGES**

**ImageIndexContainerComponent**
 - ImageIndexItem

**ImageIndexItemContainerComponent**
  - Profile Photo
  - ImageIndexItem Username
  - Image
  - Like Button
  - Comment Button
  - User Likes Total
  - Hashtags
  - Body Caption
  - Timestamps

  **ImageDetailContainerComponent**
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

**ABOUT USERS**

**UserProfileContainerComponent**
 - Navigation
 - UserDetails

**UserDetailsContainerComponent**
  - Individual User Detail

**EditProfileContainerComponent**
  - Navigation
  - Profile Photo

**ABOUT USERS AND IMAGES**

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
/	| MainContainer|
/:username	|UserProfileContainer|
/account/edit/	|EditProfileContainer|
