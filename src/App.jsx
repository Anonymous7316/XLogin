import { useState } from 'react';
import './App.css'

function App() {
  const [validUser,setValidUser] = useState('');
  const user = {username:'user',password:'password'};
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
    if(user.username === data.username && user.password === data.password)
      setValidUser(1);
    else
      setValidUser(0);
  };

  return (
    <>
      <h1>
        Login Page
      </h1>
      {
        validUser===1?
        <p>Welcome, user!</p>:
        validUser===0?
        <p>Invalid username or password</p>:
        <p/>
      }
      <form action="" onSubmit={(e)=>handleSubmit(e)} style={{display:'flex',flexDirection:'column', gap:10}}>
        <div>
          <label htmlFor="username">Username</label>
          <input required id='username' name='username' type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required id='password' name='password' type="password" />
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
