import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	render() {
		return (
			<body>
   	 			<div class="login">
      				<div class="avatar">
        				<img src="avatar.png" alt="avatar img" />
      				</div>
      				<h2>Login</h2>
      				<h3>Welcome back Kelly</h3>

      				<form class="login-form">
        				<div class="textbox">
          					<input type="email" placeholder="Username" />
          					<span class="material-symbols-outlined"></span>
        				</div>
        				<div class="textbox">
          					<input type="password" placeholder="Password" />
          					<span class="material-symbols-outlined"></span>
        				</div>
        				<button type="submit">LOGIN</button>
        				<a href="https://website.com">Forgot your credentials?</a>
      				</form>
    			</div>
  			</body>
			);
	}
}

export default Login