import {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttp} from "../../Hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Loader} from "../../components/Loader/Loader";
import {LinkCard} from "../../components/LinkCard/LinkCard";

export default function Detail() {
	const {token} = useContext(AuthContext)
	const {request, loading} = useHttp()
	const [link, setLink] = useState(null);
	const linkId = useParams().id

	const getLink = useCallback(async () => {
		try {
			const fetched = await request(`/api/link/${linkId}`, 'GET', null,
				{Authorization: `Bearer ${token}`})
			setLink(fetched)
		} catch (e) {
		}
	}, [token, request, linkId])

	useEffect(() => {
		getLink()
	}, [getLink])

	if (loading) return <Loader/>

	return (
		<div>
			<h3> Detail </h3>
			{!loading && link && <LinkCard link={link}/>}
		</div>
	);
};