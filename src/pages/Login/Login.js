import React from 'react'

import awsconfig from '../../aws-exports.js';
import '@aws-amplify/ui-react/styles.css'
import {Amplify} from "aws-amplify"
import {withAuthenticator} from '@aws-amplify/ui-react'


Amplify.configure(awsconfig);

function Login() {
  return 
  
  <div id='page'>
    <h1>Login</h1>
  </div>

  
}
export default withAuthenticator(Login)