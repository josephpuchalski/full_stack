# Travelscape

- Heroku link - coming soon
- Trello link

## Minimum Viable Product

Travelscape is a web application inspired by Instagram built using Ruby on Rails and React/Redux. In two weeks, this app will meet all of the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

 - Hosting on Heroku
 - New account creation, login, and guest/demo login
 - Upload/Delete Photos
 - User Profiles
 - Ability to Like and Comment Photo Posts
 - Able to follow other users
 - Photo Feed and Show Page Infinite Scroll

 BONUS:
 * Intelligent Search
  + Hash Tags
  + Username
 * Direct Messaging
  + Private one-to-one conversation
  + Group Chat

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

  **Objective:** Functioning rails project with front-end Authentication

### Phase 2: Images Model, API, and components (2 days)

  **Objective:** Images can be created, read, edited and destroyed through the API.

### Phase 3: Interactive Like Counter (1 days)

  **Objective:** Images can be liked or can remove their likes.

### Phase 4: Comments can be added to Images (1 day)

  **Objective:** Users can post and remove their own comments on any image post. Also, the main post has the ability to remove any comment.

### Phase 5: Unlimited scrolling of Image Feed (1 day)

**Objective:** Allow users to scroll and have images preload themselves into the feed. This will start by loading roughly 10 images,
  then as the user gets half way through 5, the next batch of 10 should load. Images will be organized by the timestamp of image post.

### Phase 6: - Basic Search (1 day)

  **Objective:** The overall goal of this feature is to search for your friends and find their pages. I plan to extend this feature to search
  for hash tags as part of the bonus feature.

### Bonus Features (TBD)

 - Search by hash tags
 - Direct private message
 - Discover based on top results for the overall user hash tags used.
