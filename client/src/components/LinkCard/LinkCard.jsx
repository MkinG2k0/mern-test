export function LinkCard({link}) {

	return (<div>
		<h4>
			Link
		</h4>
		<p> Ваша ссылка
			<a href={link.to} target={'_blank'} rel={'noopener noreferrer'}>
				{link.to}
			</a>
		</p>
		<p> Откуда
			<a href={link.from} target={'_blank'} rel={'noopener noreferrer'}>
				{link.from}
			</a>
		</p>
		<p> Количество кликов
			<strong>
				{link.clicks}
			</strong>
		</p>
		<p>
			Дата создания
			<strong>
				{new Date(link.data).toLocaleDateString()}
			</strong>
		</p>
	</div>);
};