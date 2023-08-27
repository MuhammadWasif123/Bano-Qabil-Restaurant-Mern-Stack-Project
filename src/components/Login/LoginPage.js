// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import './LoginPage.css';
// import Input from '../../components/Input/Input';
// // import { Margin } from '@mui/icons-material';

// export default function LoginPage() {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const { user, login } = useAuth();
//   const [params] = useSearchParams();
//   const returnUrl = params.get('returnUrl');

//   useEffect(() => {
//     if (!user) return;

//     returnUrl ? navigate(returnUrl) : navigate('/') ;
//   }, [user]);

//   const submit = async ({ email, password }) => {
//     await login(email, password);
//   };

//   return (
//     <div className={'container'}>
//       <div className={'details'}>
//         <h1 className= {'title'} >Login Page</h1>
//         <form onSubmit={handleSubmit(submit)} noValidate>
//           <Input
//             type="email"
//             label="Email"
//             {...register('email', {
//               required: true,
//               pattern: {
//                 value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
//                 message: 'Email Is Not Valid',
//               },
//             })}
//             error={errors.email}
//           />

//           <Input
//             type="password"
//             label="Password"
//             {...register('password', {
//               required: true,
//             })}
//             error={errors.password}
//           />

//           <div className={'btncontainer'} >
//             <button type='submit'>Login</button>
//           </div>

//           <div className={'register'}>
//             New user? &nbsp;
//             <Link to={`/register${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
//               Register here
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import "./LoginPage.css";

import React, { useState } from 'react';

function LoginForm() {
  // Dummy data array (replace with your actual data)
  const dummyData = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  // Initialize state variables for input values and login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the provided email and password match any user in the dummy data
    const user = dummyData.find((user) => user.email === email && user.password === password);

    if (user) {
      // Authentication successful
      setLoginStatus('Login Successful');
      console.log('Authentication successful');
    } else {
      // Authentication failed
      setLoginStatus('Authentication failed');
      console.log('Authentication failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginStatus === 'Login Successful' ? (
        <p>{loginStatus}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input" // Add the className "input" here
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input" // Add the className "input" here
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;



