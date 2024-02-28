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
2. 






