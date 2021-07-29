# SpeakFriend

<p> An LOTR social media app made for <img alt="Twitch" src="https://img.shields.io/badge/TWITCH-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white"/> that allows a user to sign up and login, upload images, delete their images, edit their profile, and see all their friends' images. </p>

[HOSTED HERE!](https://speakfriend.herokuapp.com/)

<h1> High Level Architectural Overview: </h1>
<h3> Database/Models </h3>
<p> The SpeakFriend database is a Postgres database utilizing Sequelize and is comprised of 4 models: </p>

* Users 
* Posts 
* ProfileInfo

<p> There is a one to many relationship between users and posts, wherein each post instance has a userId, and one-to-one relationship between users and profile info.
 

<h1> MVC Architectural Design Pattern </h1>
<h2> This project utilizes the MVC (Models-Views-Controller) pattern. </h2>
<h3> Models: </h3>
<p>The Models are my models highlighted above, which can be found in the server/db folder, each in their own file, which a separate folder to list out their Typescript attributes.</p>
<h3> Views: </h3>
<p> The Views are comprised of all my components in the client/components folder
<details>
  <summary> Gone into in more depth here </summary>
  
   <h3> Components </h3>
  
- Routes
> the component serving up all routes, rendered in index.tsx <br/>
- Main 
> the first component a user sees when entering Speak Friend. Displays a user greeting and prompt to log in or sign up. <br/>
- LoginNav & MainNav
> 2 Nav bar components to be rendered depending on whether user is logged in or not. <br/>
- Fail 
> an Error handling communication component that's rendered on both Login & Signup
- Login & Signup 
> Components displaying forms that use Firebase auth to sign a user up or log them in
- Quote <br/>
> A reusable component that utilizes The One API to display a random LOTR quote and it's author on each refresh <br/>
- AllPosts <br/>
> A component that renders all posts belonging to all users and the Quote component
- Profile Page <br/>
> a component that renders the logged in user's posts and profile info, with a link to the edit component and buttons to delete a post permanently <br/>
- EditAbout <br/>
> a component that displays a form so a user can edit their Profile Info. <br/>
  </details>
  
 <h3> Controller </h3>
 
 <p> The Controller consists of the routes on my Express backend and the functions performing axios calls to them in the client/components/callFunctions folder </p>



<h2> APIs: </h2>

- [The One API](https://the-one-api.dev/)

  > a Lord of the Rings themed API </br>

- [Firebase](https://firebase.google.com/docs/reference/rest/auth)
  > Google's Authorization RESTful API

</br>
<h2>Tech Stack</h2>
<p align='center'>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
 <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
 <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
 <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> <br/>
 <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="Webpack" src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" /> <br/>
  <img alt="Material UI" src="https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white"/>
  <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
  </p>
