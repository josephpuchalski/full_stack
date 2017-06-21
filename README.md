# Travelscape

- Heroku: http://travelscape2.herokuapp.com

## Minimum Viable Product

Travelscape is a web application inspired by Instagram built using Ruby on Rails and React/Redux. In two weeks, this app will meet all of the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

 - Hosting on Heroku
 - New account creation, login, and guest/demo login
 - Upload/Delete Photos
 - User Profiles
 - Ability to Like and Comment Photo Posts
 - Able to follow other users
 - Photo Feed

 BONUS:
 * Infinity Scroll on Photofeed and User Profiles
 * Intelligent Search by hash tags or username
 * Direct Messaging - private one-to-one conversation or group chat

## Design Docs

 * [View Wireframes][wireframes]
 * [React Components][components]
 * [API endpoints][api-endpoints]
 * [DB schema][schema]
 * [Sample State][sample-state]

 [wireframes]: docs/wireframes
 [components]: docs/component-hierarchy.md
 [sample-state]: docs/sample-state.md
 [api-endpoints]: docs/api-endpoints.md
 [schema]: docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

  **Objective:** Functioning rails project with front-end Authentication hosted on Heroku.

### Phase 2: Production README (1 days)

  **Objective:** Highly detailed overview of how to use the app with wireframe support.

### Phase 4: Posts Model, APIs, and components (2 days)

  **Objective:** Posts can be created, read, edited and destroyed through the API.

### Phase 5: Interactive Like Counter (1 days)

  **Objective:** Images can be liked by users or  users can remove their likes.

### Phase 6: Comments can be added to Images (1 day)

  **Objective:** Users can post and remove their own comments on any image post. Also, the main post has the ability to remove any comment.

### Phase 7: Following & Photo Feed (1 day)

  **Objective:** Users can follow / unfollow other users. Also, a photo feed will be implemented, so users can view the image posts of who they follow.



### Bonus Features (TBD)
 - Infinity scroll for Photo feed
 - Basic Search by usernames
 - Advanced Search by hash tags / usernames
 - Discover based on top results for the overall user hash tags used.
 - Direct private message
