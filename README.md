# Open Garden

[Live App](https://opengarden.wmq516.now.sh)

![Alt text](https://github.com/Mengqi89/open-garden-client/blob/master/src/images/Screenshot.png "Screenshot of live app")

## About 
Open Garden provides a platform for people to share homegrown vegetables and fruit. It connects people and creates a community of eating healthy and local. You can view all the listings or filter them by zipcode and type ('vegetable' or 'fruit'). Each listing comes with the lister's contact information. Moreover, you can delete and edit all your personal listings in 'My List'. 

Use the demo credentials on the landing page or sign up for an account to explore the wonderful opportunities this community has to offer.

## Documentation of the API

Domain: https://enigmatic-shelf-57504.herokuapp.com

### By users 
* GET - returns all users /api/users
* POST - register a user /api/users

### By listing
* GET - returns all listings /api/list
* POST - post a listing /api/list
* GET - get a listing by listing id /api/list/:listingId
* GET - get all listings of a particular username /api/list/users/:username
* GET - get a listing by username and listing id /api/list/users/:username/:listingId
* PATCH - update a listing of a particular username /api/list/users/:username/:listingId
* DELETE - delete a listing of a particular username /api/list/users/:username/:listingId

## Technology used

* HTML
* CSS
* JavaScript
* React
* Node
* Express
* PostgreSQL
