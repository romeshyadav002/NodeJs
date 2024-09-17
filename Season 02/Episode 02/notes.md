* DEV Tinder features
 1. Create an account
 2. Login
 3. Update your profile
 4. Feed page - explore
 5. Send Connection Request
 6. See our matches
 7. see the request we've sent/received

* Tech Planning
 - 2 Microservices
  1. Frontend
     - React
  2. Backend
     - NodeJs
     - MongoDB

* LLD (Low level design)
  1. DB design
     - user collection :- firstname, lastname, email, password, gender, age
     - connectionRequest collection :- from_userID_1, to_user_ID, status - PENDING, REJECTED, ACCEPTED, IGNORED,
  2. API design
     * REST API's :- GET, POST, PUT, PATCH, DELETE
     - /signup - POST
     - /login - POST
     - /profile - GET
     - /profile - POST
     - /profile - PATCH
     - /profile - DELETE
     - /sendRequest - POST :- ignorr or interested
     - /reviewRequest - POST :- accept or reject
     - /request - GET
     - /connections - GET

