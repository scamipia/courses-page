import React, { SyntheticEvent, useState } from 'react';

export const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const content = await response.json();
    console.log(content)
  }

  return (
    <form onSubmit={submit}>
     <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input type="username" className="form-control" placeholder="Username" required
        onChange={e => setUsername(e.target.value)}/>
      <input type="email" className="form-control" placeholder="Email adress" required
        onChange={e => setEmail(e.target.value)}/>
      <input type="password" className="form-control" placeholder="Password" required
        onChange={e => setPassword(e.target.value)}/>

     <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
 </form>
 )
};

export default Register