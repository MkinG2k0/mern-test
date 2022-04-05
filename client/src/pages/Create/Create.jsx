import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../Hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

export function Create() {
	const {request} = useHttp()
	const [link, setLink] = useState('');
	const navigate = useNavigate()
	const auth = useContext(AuthContext)


	async function send() {
		try {
			const data = await request('/api/link/generate', 'POST', {from: link}, {Authorization: `Bearer ${auth.token}`})
			navigate(`/detail/${data.link._id}`)
		} catch (e) {
		}
	}

	const onKeyPress = (e) => e.key === 'Enter' && send()

	const onClick = () => send()


	return (
		<div>
			<input type="text" value={link} onChange={e => setLink(e.target.value)} onKeyPress={onKeyPress}/>
			<button onClick={onClick}>Create</button>
		</div>
	);
};