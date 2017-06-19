Component Hierarchy

SignUpContainer
 -SignUpForm

SignInContainer
 -SignInForm

 MainContainer
 -Header
 -ImageIndex

HeaderContainer
 -NavBar
 -SearchBar

ImageIndexContainer
 -ImageIndexItem

ImageIndexItemContainer
  -Profile Picture Thumbnail
  -ImageIndexItem Username
  -Image
  -Like Button & Comment Button
  -User Likes & Count
  -Caption & Hashtags
  -Timestamp
  -Comments

UserProfileContainer
 -NavBar
 -UserDetails

UserDetailsContainer
  -Individual User Detail

EditProfileContainer
-NavBar
-Profile Picture Thumbnail


ImageDetailContainer
  -Image
  -Delete Image
  -Image Comments
  -Image Likes
  -Profile Picture Thumbnail
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
