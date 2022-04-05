import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import style from './Links.module.scss'
import {Link} from "react-router-dom";
import {useHttp} from "../../Hooks/http.hook";
import {Loader} from "../../components/Loader/Loader";
import {LinkList} from "../../components/Links/LinkList";

export function Links() {
	const auth = useContext(AuthContext)
	const [links, setLinks] = useState([]);
	const {request, loading} = useHttp()
	const {token} = useContext(AuthContext)

	function onLogout(e) {
		e.preventDefault()
		auth.logout()
	}

	const fetchLinks = useCallback(async () => {
		try {
			const fetched = await request('/api/link', 'GET', null,
				{Authorization: `Bearer ${token}`})
			setLinks(fetched)
		} catch (e) {
		}
	}, [token, request])

	useEffect(() => {
		fetchLinks()
	}, [fetchLinks]);

	if (loading) return <Loader/>


	return (<div className={style.wrap}>
		<div className={style.col}>
			<h3>Links</h3>
			<span>{' Auth ' + auth.isAuth.toString()}</span>
			<span>{' userId ' + auth.userId.toString()}</span>
			<Link to={'/create'}>Create</Link>
			<div>
				<LinkList links={links}/>
			</div>
			<a href="/" onClick={onLogout}>Выйти</a>
		</div>
	</div>);
};