# Features
- Login/Signup
 - Signin/Signup form
 - redirect to Browse page
- Browse(after authentication)
  - Header
  - Main Movie
   - trailer in background
   - Title and description
   - Moview suggestion
      - movie list * n
- Netflix gpt
  - search bar
   - movie suggestion

##################### Form validation #########################

1. If you have application which has big form, then use library called formic.
2. Build forms in react without tears : https://formik.org/    
3. This is open source react form library.
4. find regex for email validation  
5. hooks useRef is used to refer value of fields   
6. To avoid page being refreshed when form is submitted : onSubmit={(e)=>e.preventDefault()}
7. 

########################### Authentication ########################
1. Use Google firebase for authentication.
2. A lot of start up uses this. So it's not just for demo.
3. Click get started and create a project. Add project . Name : NetflixGPT
4. Disable analytics as we are not doing for analytic(you can have if u wish): Let's enable it
5. if analytics, select "Default Account for Firebase". Click Create Project
6. Select web project : icon </>
7. Let's host also our application on firebse. Click Register APP
8. Run npm install firebase in ur application
9. Click AUthentication under Build on left panel menu to enable authentication.
10. If enabling gives error, switch off CORS on your chrome browser
11. Go to users tab to register users.
12. Go to firebase authentication and search for web authentication using password.
13. Go to section : Create a password-based account : It has javascript code
14. 

// Deploy app on firebse
1. npm i -g firebase-tools

############################### Redux and Firebase ########################
1. Instead of calling dispacth action here and there, we will use onAuthStateChanged of firebase
2. This API is called whenevr user signs up or sign in or sign out.
3. So this is best place to use dispatch logic. A kind of event listener
4. Since it needs to be called only once, so let's put it inside useEffect.
5. This useEffect could be either in Body.js or App.js. Let's do it in Body.js

########################## Build Movies ###############################
1. Fetch movies from TMDB Movies API
2. I registerd with login : mursheed.khan@qsstechnosoft.com / react
3. API Key : 4d69cfb327f328598b30579c299c072b
4. Access Token : 
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDY5Y2ZiMzI3ZjMyODU5OGIzMDU3OWMyOTljMDcyYiIsInN1YiI6IjY1ZTBjYmQ0ZGFmNTdjMDE2MjliNzBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3pmSiwtTtk95Ky0TYR71GdwHrdfpXo2xPVY_Z4iffo
5. Click documentation then click API References 
6. Go down to Movie Lists . Click Now Playing
7.

###################### Movie Browse UI design #########################
- Header( Which is common with Login Page also)
- Main Container
---- VideoBackground
---- Video titles
- Secondary Containe
----  Movie List * n
------  Cards * n






