import React from 'react';
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
function LoginAuthGoogle({ funAuth }) {
  return (
    <GoogleLogin
      onSuccess={async credentialResponse => {
        const token = await credentialResponse.credential;
        var res = jwtDecode(token);
        funAuth(res);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );

}
export default LoginAuthGoogle;