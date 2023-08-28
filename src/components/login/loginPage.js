import React, { useState} from 'react'
import "./LoginPage.css";
import axios from 'axios';
import Loading from '../loading';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  
  // Function to handle form submission
  const handleSubmit =  async (e) => {
    e.preventDefault();

    try{
      const config = { headers: {"Content-type": "application/json"}};
      setLoading(true);

      const {data} = await axios.post('/api/users/login', {email, password}, config);
      console.log(data);
      localStorage.setItem("User", JSON.stringify(data));

      setError( data.name + " Has Been loggen in!");
      setTimeout(() => {
        setError(null);
        navigate("/");

      }, 2000);



      setLoading(false);

    } catch(error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
  
        setLoading(false);
    }

  };

  return (
    <div className='main-container-1'>
      <h1 className='main-heading-3'>Login</h1>
      {error && <Alert><strong>{error}</strong></Alert> }
      {loading && <Loading/> }
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label-class' htmlFor="email">Email:</label>
          <input
            className='input-2' // ye classname sirf color change krne kelye h taake nazar aye
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className='input-2'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='button-style-1' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage