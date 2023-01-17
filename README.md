# passport-google-oauth2.0
Implemented a basic login mechanism using passport-google-oauth2 strategy 



Routes-
<br>
1) / ---> Shows a link to login via Google which redirects to /oauth/google
<br><br>
2) /oauth/google ---> Redirects the user to the google login page where user signs up using their google account
<br><br>
3) /oauth/google/callback ---> Callback url that google call's after authentication
<br>
If user is authenticated successfully then user is routed to /protected if not user is routed to a failure path.


