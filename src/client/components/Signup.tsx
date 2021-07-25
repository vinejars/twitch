// import * as React from 'react';
// import firebase from '../../firebase/config'


// export default function Signup() {
//    const [email, setEmail] = React.useState("")
//    const [password, setPassword] = React.useState("")



//   function onSubmit(e: any){
//       e.preventDefault();
// const funcCreateUserWithEmailAndPassword = (
//   email: string,
//   password: string
// ) => firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const uid: string = userCredential.user.uid;
//         const data: object = {
//           id: uid,
//         }
//        funcCreateUserWithEmailAndPassword(email, password)
//    }
//     return (
//         <div>
//         <form onSubmit={onSubmit}>
//         <h2> Input Email Here! </h2><br/>
//         <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//          {/* <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
//          <h2> Input Email Here! </h2> <br/>
//         <input name='password' value={password} onChange={(e)=>setEmail(e.target.value)}/>
//         <button> Sign Up! </button>
//         </form>
//         </div>
//     )
// }
