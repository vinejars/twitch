import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import Fail from './Fail';


interface PageProps {
  name: string;
}

const Login: React.FunctionComponent<PageProps> = (props) => {
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const history = useHistory();
  const signInWithEmailAndPassword = async (e: any) => {
    e.preventDefault();
    if (error !== '') setError('');
    setLoggingIn(true);
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        //console.log('this is the uid: ', result.user.uid);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        setLoggingIn(false);
        setError('Not able to sign in! Please try again!');
      });
  };
  return (
    <div>
      <h1>Log In!</h1>
      <form onSubmit={(e) => signInWithEmailAndPassword(e)}>
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Enter Your Password</label>
        <input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Log In!</button>
        <p>
          If you'd like to join the party go to: <Link to="/signup">Sign Up</Link>
        </p>
      </form>
      <Fail error={error} />
    </div>
  );
};
export default Login;