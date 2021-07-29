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
 
 <h1> Views </h1>

 <p> Though I didn't get as much time to work on styling as I would have liked due to my work schedule blowing up this past week, I prioritized responsive, accessible design. Each view was made with the intent to be simple, beautiful, and useable on both web and mobile devices. A user can navigate to the feed or their profile page via tab navigation at the top, which also renders a link which will log a user out and send them back to the login page. On both the Profile Page component and the AllPosts component there's a hovering button that renders the Create Post view. I wanted the navigation to be simple, but have a bit of flair. I would have really loved to be able to use Material-UI's focus options to make my site more accessible, but that's on the list of things I'm planning on doing to make this project better in the future.</p>

 <details>
 <summary> Main Page </summary>

 <h2> Web View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/221088663_921530861893935_8668663023445339612_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=D-drdgd7iMYAX_GhS2h&_nc_ht=scontent-lga3-2.xx&oh=dea8a1bac2595ffd2fbebb90d5388c01&oe=6127F5D2' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/227423362_1837494736421637_2339359514230761652_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=elUQQxG-DVIAX-cmKvr&_nc_ht=scontent-lga3-2.xx&oh=b4aab1c9ed7b679f4ba2fe363ad9eeba&oe=6129D1CF' width=400/>
 </details>
 
  <details>
 <summary> Login </summary>

 <h2> Web View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/222028065_264217988846496_404413582006684192_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=EMSMKC3TpvUAX9Cgu3v&_nc_ht=scontent-lga3-2.xx&oh=5e06562e8f855bdf45e36301ca3b5b17&oe=612908E2' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/225978109_266072938613183_3345038121094634817_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=IExvD_4xdZEAX8QSKVV&_nc_ht=scontent-lga3-2.xx&oh=577a49de940d6679087b4938e54e9af4&oe=6129F90A' width=400/>
 </details>
 
   <details>
 <summary> SignUp </summary>

 <h2> Web View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/226819262_219963890133047_4063639704102641011_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ec1BSh4XbL0AX_pOswU&_nc_ht=scontent-lga3-2.xx&oh=8f371858c404657377e41cc49c23913c&oe=6127A42C' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/221885418_217707536941779_787708607465941015_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=t_k0XlnffjcAX8Py5S4&_nc_ht=scontent-lga3-2.xx&oh=8a400a684ce2aba4bc1ed7cd7a2b8a3a&oe=6127B7E4' width=400/>
 </details>
 
   <details>
 <summary> Fellowship Feed (All Posts)  </summary>

 <h2> Web View </h2>
 <img src='https://i.ibb.co/sJkzL2T/Screen-Shot-2021-07-29-at-10-44-45-AM.png' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/225583521_1326614561065616_5513772455406534008_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=bbcLqUsnfUsAX8qlb6-&tn=vy1n5qN1gd6TtJt8&_nc_ht=scontent-lga3-2.xx&oh=1dc70ab0081d914c2d878d4c6e479f79&oe=6129F50A' width=400/>
 </details>
 
 <details>
 <summary> Profile Page  </summary>

 <h2> Web View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/226998308_358404842520145_4962834959225934496_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=N5S1WNpfmWIAX8YYS93&_nc_ht=scontent-lga3-2.xx&oh=5e12326c0c30cd4c6def85b40ee57186&oe=6126B7DA' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/226799420_342291227444560_6626012985248245734_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=KlCYg2FTf-8AX_zdwkG&tn=vy1n5qN1gd6TtJt8&_nc_ht=scontent-lga3-2.xx&oh=c7234c9a814d8b47881b81971d280e51&oe=6126AE9F' width=400/>
 </details>
 
  <details>
 <summary> Create Post  </summary>

 <h2> Web View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/227423362_365672948289660_8529095413544944052_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=07WpD-_yNGQAX8bf5JA&_nc_ht=scontent-lga3-2.xx&oh=f671ee915b24e5ac45780754944e293c&oe=61271D7C' width=400/>
<br/>
 <h2> Mobile View </h2>
 <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/225749667_189480713228088_8246517932490776386_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=mldZZgep_OEAX_ULHDQ&_nc_ht=scontent-lga3-2.xx&oh=2a9ae3433324b869add7d9002375ba35&oe=6128E3AB' width=400/>
 </details>

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
