import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import Fail from './Fail';
import {User} from '../../server/db/index'
import axios from 'axios'

interface PageProps {
  name: string
}

const Signup: React.FunctionComponent<PageProps> = (props) => {
  const [signup, setSignup] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirm, setConfirm] = useState<string>('')
  const [error, setError] = useState<string>('')
  const history = useHistory()

  const signUpWithEmailAndPassword = async (e: any) => {
    e.preventDefault()
    if (error !== '') setError('')
    if (password !== confirm) setError('Passwords do not match!')
    setSignup(true)
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
      createUser(username, email, result.user.uid)
        history.push(`/${result.user.uid}`);
      })
      .catch((error) => {
        console.log(error);
        if (error.code.includes('auth/weak-password')) {
          setError(`It is not the strength of the body, but the strength of the spirit. ...and also your password. Please make it stronger.`);
        } else if (error.code.includes('auth/email-already-in-use')) {
          setError('Email is already in use! You shall not pass!');
        } else {
          setError('Unable to register. Please take off the ring and try again.');
        }
        setSignup(false);
      });
  };

async function createUser(username: string, email: string, firebase: string){
  await axios.post('/api/create', { username, email, firebase })
  }

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={(e) => signUpWithEmailAndPassword(e)}>
        <label htmlFor="email">Sign up with your email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /><br/>

        <label htmlFor="username">Create a username:</label>
        <input
          type="username"
          name="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /><br/>
        

        <label htmlFor="password">Choose your password:</label>
        <input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>

        <label htmlFor="confirm">Make sure it's strong! (Confirm:)</label>
        <input
          autoComplete="new-password"
          type="password"
          name="confirm"
          id="confirm"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        /><br/>
        <button>Sign Up!</button>
        <p>
          If you've already spoken friend, enter here: <Link to="/login">Login</Link>
        </p>
      </form>
      <Fail error={error} />
    </div>
  );
};
export default Signup;