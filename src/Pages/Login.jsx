import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userContext } from '../Context/UserContext';

const Login = () => {
  const { users } = useContext(userContext); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    const matchedUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      setError('');
      localStorage.setItem("currentUser", JSON.stringify(matchedUser)); 
      navigate('/user');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-[86.5vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-zinc-800">Welcome Back</h2>

        <form className="space-y-4" onSubmit={handleSubmit(loginUser)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-black text-white cursor-pointer font-semibold rounded-lg hover:bg-zinc-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
