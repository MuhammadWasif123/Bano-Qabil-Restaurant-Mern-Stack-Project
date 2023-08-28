import React, {useState} from 'react'
import axios from 'axios';
import "./signupPage.css";
import Loading from '../loading';
import { Alert } from 'react-bootstrap';
const SignupPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState(''); 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try{
      const config = { headers: {"Content-type": "application/json"}};
      setLoading(true);

      const {data} = await axios.post('/api/users/register', {name, email, password, contact, address}, config);
      console.log(data);
      localStorage.setItem("User", JSON.stringify(data));
      setError('New User has been Registered!');
      
      setTimeout(() => {
        setError(null);
      }, 2000);


      setLoading(false);

    } catch(error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
  

        setLoading(false);
    }

    console.log(email);
  };

  return (
    <div className='main-container-1'>
      <h1 className='main-heading-3'>Sign-Up</h1>
      {error && <Alert><strong>{error}</strong></Alert> }
      {loading && <Loading/> }
      <form onSubmit={handleSubmit}>
        
        <div>
          <label className='label-class' htmlFor="name">Name:</label>
          <input
            className='input-2'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label-class' htmlFor="email">Email:</label>
          <input
            className='input-2'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label-class' htmlFor="password">Password:</label>
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
          <label className='label-class' htmlFor="contact">Contact:</label>
          <input
            className='input-2'
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div>
          <label className='label-class' htmlFor="address">Address:</label>
          <input
            className='input-2'
            type="text"
            id="addresss"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='button-style-1' type="submit">Sign up</button>
        </div>

      </form>
    </div>
  )
}

export default  SignupPage