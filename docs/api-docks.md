This document outlines the REST API for a User Interactions. The API allows users to access, create, and delete Users from the Database. This API uses the HTTP protocol and adheres to REST principles.

## Key Features:


1.  User registration: Users will be able to Sign Up using their name, email and password (all fields are mandatory to be there).
2.  User login: Users will be able to Login using their email and password.
3.  List users: A list of all users should be available in an endpoint.
4.  Delete user: We should be able to delete a user account.
5.  User detail: We should be able to search for a particular user using a unique identifier.

## User Schema:

```js
{
	id: string,
	name: string,
	email: string,
	password: string,
	creationTimeStamp: number
}
```

## Required Endpoints:
<br/>

Here are the API endpoints that may be required for the Node.js Blog App. Try them in CLI using [Curl](https://curl.se/).

**1. GET /api/healthcheck:** This route should be present to check if the connections are established properly.
```bash
curl https://scary-pink-bunny.cyclic.app/api/healthcheck
```
<br/>

**2. POST /api/signup:** Allows a user to create a new account by sending a POST request with the necessary user data (e.g., email, password, name).
-   Body should contain: name, email, and password
-   Validation: Proper validation should be done on incoming requests. (eg. email should be validated if it's a valid email. Can use regex)

```bash
curl -H "Content-Type: application/json" -d '{"name":"Weare", "email": "weare@gmail.com", "password": "op1234"}' https://scary-pink-bunny.cyclic.app/api/signup
```
<br/>    

**3. POST /api/login:** Allows a user to log in by sending a POST request with their email and password.
-   Body should contain: email, and password
-   Token: A token should be generated and sent as a response of a successful login.

```bash
curl -H "Content-Type: application/json" -d '{"name":"Weare", "email": "weare@gmail.com", "password": "op1234"}' https://scary-pink-bunny.cyclic.app/api/login
```
<br/>

**4. GET /api/users:** Returns the list of users as response in ascending order of their names (excluding the password)

```bash
curl https://scary-pink-bunny.cyclic.app/api/users
```
<br/>

**5. GET /api/users/:hours:** Returns the list of users created in the in the last specified hours

```bash
curl https://scary-pink-bunny.cyclic.app/api/users/2
```
<br/>

**6. GET /api/user/:id:** Returns a specific user by its ID.
```bash
curl https://scary-pink-bunny.cyclic.app/api/user/2
```
<br/>  

**7. DELETE /api/user/:id:** Allows a user to delete a user by sending a DELETE request and specifying the user ID in the URL.
```bash
curl -X DELETE https://scary-pink-bunny.cyclic.app/api/user/2
```
<br/>
