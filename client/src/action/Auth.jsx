
const APIURL = "http://localhost:3001"

import { toast } from 'react-toastify';
import { setAuth } from '../reducer/AuthSlice';
import { setAuthentication } from '../reducer/AuthenticationSlice';

export const register = (registerData) => {
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/auth/register`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData)
        }
      );
      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Dispatch success action if the request is successful
      dispatch(setAuth({ auth: true, userInfo: data }));

      let token = localStorage.getItem("token");
      if (token) {
        dispatch(setAuthentication({ authentication: true }));
      }
      toast.success('Registration successful!');

    } catch (error) {
      // Dispatch failure action if there's an error
      toast.error(error);
      console.log(error, 'error');
    }
  }
}

export const login = (loginData) => {
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/auth/login`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData)
        }
      );
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      let token = localStorage.getItem("token");
      if (token) {
        dispatch(setAuthentication({ authentication: true }));
      }
      // Dispatch success action if the request is successful
      dispatch(setAuth({ auth: true, userInfo: data }));
      toast.success('Login successful!');

    } catch (error) {
      toast.error("Email or password is not correct.");
    }
  }
}