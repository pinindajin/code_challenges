## Passport Express
Authenticated Express App.

## The Problem:
Integrate Passport into an Express app for authentication.

### Requirements:
- User trying to hit a route that requires authorization but is not logged in should be redirected to login.
- User trying to hit route that requires authorization and IS logged in should have his permissions checked. Proceed if yes, not if no.
- User hitting login route should be able to login using passport, thus being authenticated.

### Notes:
Authentication strategy doesn't matter. Just try a few different ones.