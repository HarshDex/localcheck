import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-form'>
      <header>LoginPage</header>
      <h3>Only letters, numbers and symbols are allowed !!</h3>
      <form>
        <div className="user-name">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pass-word">
          <label htmlFor="text">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link className='submit-login'
                  to={`/CheckDetails?username=${username}&type=lkjdf234ljlkj_23JLKJ;jlkadflkj93ioru309&kjh^5&6;LJKLljkljalkjz$3233&password=${password}`}

        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
