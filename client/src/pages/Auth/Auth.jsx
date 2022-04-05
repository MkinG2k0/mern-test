import {useContext, useState} from "react";
import style from './Auth.module.scss'
import {useHttp} from "../../Hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

export function Auth() {
	const auth = useContext(AuthContext)
	const [form, setForm] = useState({email: '', password: ''});
	const [message, setMessage] = useState('');
	const {request, loading, error, clearError} = useHttp()

	function onChange(e) {
		setForm({...form, [e.target.name]: e.target.value})
	}

	async function onLogin() {
		try {
			const data = await request('/api/auth/login', 'POST', {...form})
			auth.login(data.token, data.userId)
		} catch
			(e) {
		}
	}

	async function onReg() {
		try {
			const data = await request('/api/auth/register', 'POST', {...form})
		} catch (e) {
		}
	}

	return (
		<div className={style.wrap}>
			<div className={style.column}>
				<h2>Auth </h2>
				<span>email</span>
				<input type="text" onChange={onChange} name={'email'} value={form.email}/>
				<span>password</span>
				<input type="text" onChange={onChange} name={'password'} value={form.password}/>
				<button onClick={onLogin} disabled={loading}>Войти</button>
				<button onClick={onReg} disabled={loading}>Зарегистрироваться</button>
				<span>{error}</span>
				<span>{message}</span>
			</div>
		</div>
	);
}
;