import {Link} from "react-router-dom";

export function LinkList({links}) {

	if (!links.length) return <div>Link not found</div>

	return (
		<div>
			{links.map((link, index) => {
				return (
					<div key={link._id}>
							<span>
							{index}
						</span>
						<span>
							{link.from}
						</span>
						<span>
							{link.to}
						</span>
						<Link to={`/detail/${link._id}`}>Open</Link>
					</div>
				)
			})}
		</div>
	);
};