import react, {useState} from "react";
import {Link} from "react-router-dom";
import Main from './../components/Main';
import './../media/css/Register.css';

const Register = () => {
 const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: '', terms: false});

 const changeForm= (e: React.ChangeEvent<HTMLInputElement>) => {
	let value: string = e.currentTarget.value;
 	let name:string = e.currentTarget.name;
	if (name == 'username' || name == 'email' || name =='password' || name == 'confirmPassword')
 	setForm({...form, [name]: e.currentTarget.value}); 
	if (name== 'terms') 
	setForm({...form, terms: !form.terms})
 }

	return <Main><form className="r-form">
		<div className="r-form-group r-form-header">
			<span>R 2-7000</span>
		</div>
		<div className="r-form-group">
			<label htmlFor="r-username">username</label>
			<input onChange={changeForm} name="username" value={form.username} id="r-username" placeholder="username" autoComplete="off" />
		</div>
		<div className="r-form-group">
			<label htmlFor="r-email"> email</label>
			<input onChange={changeForm} name="email" value={form.email} id="r-email" placeholder="email" autoComplete="off" />
		</div>
		<div className="r-form-group">
			<label htmlFor="r-password">password</label>
			<input onChange={changeForm} name="password" type="password" value={form.password} id="r-password" placeholder="password" autoComplete="off" />
		</div>
		<div className="r-form-group">
			<label htmlFor="r-confirm-password">confirm password</label>
			<input onChange={changeForm} name="confirmPassword" type="password" value={form.confirmPassword} id="r-confirm-password" placeholder="confirm password" autoComplete="off" />
		</div>
		<div className="r-form-group r-form-terms">
			<input onChange={changeForm} name="terms" value="terms" checked={form.terms} type="checkbox" />
			<span> accept <Link to="/terms" className="">terms and conditions</Link></span>

		</div>
		<input id="r-form-submit" type="submit" value="Register" />
		<div className="form-group l-form-footer">
			<span> already account? <Link to="/login">login</Link></span>
		</div>
	</form></Main>
}
export default Register;
