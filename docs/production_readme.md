# Travelscape

 http://travelscape2.herokuapp.com


 Travelscape is a full-stack web app that lets users share their travel photography to highlight all of the trips they have taken. The app is influenced by Instagram. Travelscape uses Ruby on Rails on the backend and React.js + Redux on the frontend.



## Features & Implementation

### Posts
Posts are the main highlight of Travelscape. In order to manage all of the user uploads - I utilized AWS S3 to store any photos that a user uploads. This enables the web app the have endless expansion in terms of content. On the backend - I connected posts to an individual user using user_id association. With this - it allows me to connect all the addition features that a post has to manage which includes likes and comments.

There are many components involved in delivering the posts - I decided to break it out into two container components:
 - One that specifically handles the creation/upload of posts with the PostFormContainer and PostForm component.

 - The other is what the user profile provides - an index of all his/her own posts. This is done through PostIndexContainer, PostIndex, PostIndexItem. Finally, I also enabled a modal view of the photo itself and that leverages the PostShowComponent.

### Post Feed

The Post feed is the other main part of the app. It organizes all of the content that a user is following. This is what the user will interact with most of the time. On the backend the post feed leverages the same posts table, but uses association of the current user to deliver the content. I accomplished this through utilitze the FeedContainer, Feed, Feed components. The feed is also sorted by when the actual post was created by the users you are following.


## Future Features for the App

I plan to constantly make updates to the app to improve its overall functionality. Here are some of the features that I plan to include in later versions of the app:

### Video Support

I plan to extend posts with the ability to post your own videos as well. With all of the camera phones out there today, this is a feature that will be utilized almost as much as photo posts.

### Infinity Scroll and Advanced Post Feed Algorithm
By implementing an infinity scroll feature - I can deliver an endless feed experience to the user just by scrolling. Along with this, an advanced post feed algorithm will enable me to tailor the best posts for the user so that they show up on top of feed.

### Search

With the search function - users will be able to tailor their content. They will be able to search by username, hashtags, multiple hashtags, and general categories. This will enable them to engage with the community of the App in deeper ways.

### Private Chat

People today love to chat with each other. When users find content they enjoy from a particular user - the private chat feature will enable them to get to know each other without everything being public. This will enable users to build lasting relationships and further engage with each other.
