// auth.js

import axios from 'axios';
import Cookies from 'js-cookie';

const setToken = async (token) => {
  Cookies.set('token', token);
  Cookies.set('isLogin', true);
};

const getToken = () => {
  return Cookies.get('token');
};

const getIsLogin = () => {
  const isLoginCookie = Cookies.get('isLogin');
  return isLoginCookie === 'true';
};

const removeToken = () => {
  Cookies.remove('token');
  Cookies.set('isLogin', false);
};



export { setToken, getToken, removeToken, getIsLogin };
