# Full-Stack-Movie-Streaming-App


# Technologies Used
1. html
2. bootstrap
3. ejs/javascript
4. jQuery
5. NodeJS/ExpressJS
6. mongoDB/Mongoose for Backend

# Approach/Steps
1. Get an idea of what the project would do. => Frontendmentor.io
2. Wireframe of project => Frontendmentor.io
3. Planned routes based on all features and including all 7 RESTful routes with full CRUD functional
4. Implemented code based on wireframe and planned routes.

# Unresolved 
1. Due to creating multiple collections based on movie genres, when referencing a movie, if movie is in a different genre when added the resulting id generated by mongodb will be different. Leading to the get route to mismatch the genre with the id.
..* Possible solutions: 
  A. limit each movie in favorites array using title.
  B. When movie is added into favorites array possibly include the genre it was found in.
 
2. Weird bug where the edit or delete icons will not disappear when mouseleaves the element.
