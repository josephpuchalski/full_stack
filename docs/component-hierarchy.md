Component Hierarchy

SignUpContainer
 -SignUpForm

SignInContainer
 -SignInForm

 MainContainer
 -Header
 -ImageIndex

HeaderContainer
 -MainNavigation
  -SearchBar

ImageIndexContainer
 -ImageIndexItem

ImageIndexItemContainer
  -Profile Photo
  -ImageIndexItem Username
  -Image
  -Like Button
  -Comment Button
  -User Likes Total
  -Caption & Hashtags
  -Timestamp
  -Comments

UserProfileContainer
 -NavBar
 -UserDetails

UserDetailsContainer
  -Individual User Detail

EditProfileContainer
-Navigation
-Profile Photo


ImageDetailContainer
  -Image
  -Delete Image
  -Image Comments
  -Image Likes
  -Profile Photo
  -Username who posts
  -Captions
  -Hashtags
  -Like/Comment Submits
  -Timestamp


LikesContainer
  -Likes

CommentsContainer
  -Comments

FollowsContainer
  -Follows

ROUTES
ORGANIZED BY:

PATH | COMPONENT
/sign-up	AuthFormContainer
/sign-in	AuthFormContainer
/	MainContainer
/:username	UserProfileContainer
/account/edit/	EditProfileContainer
