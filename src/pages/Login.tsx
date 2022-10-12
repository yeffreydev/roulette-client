import react, {useState} from 'react';
import Main from './../components/Main';
import {Link } from 'react-router-dom';
import './../media/css/Login.css';

const Login = () => {
const [form, setForm] = useState({username: '', password: ''});

const changeForm = (e: React.ChangeEvent<HTMLInputElement>)=> {
	let value = e.currentTarget.value;
	let name = e.currentTarget.name;
	if (name == 'username' || name == 'password')
	{
	 let newForm = {...form, [name]: value};
         setForm(newForm);
	}
}


return <Main>
	<form className="l-form">
		<div className="l-form-group l-form-header">
			<span className="l-form-logo">R 2-7000</span>
		</div>
		<div className="l-form-group">
			<label htmlFor="l-username">username or email</label>
			<input name="username" id="l-username" onChange={changeForm} value={form.username} placeholder="username" autoComplete="off" />
		</div>
		<div className="l-form-group">
			<label htmlFor="l-password">password</label>
			<input name="password" id="l-password" onChange={changeForm} value={form.password} placeholder="password" autoComplete="off" />
		</div>
		<input id="l-form-submit" type="submit" value="Login" />
		<div className="l-form-group l-form-footer">
			<span>if don't have an account <Link to="/register">register</Link></span>
		</div>
	</form>
</Main>
};
export default Login;