export function YouTube({ id }) {
	return (
		<div className="aspect-w-16 aspect-h-9">
			<iframe
                title={id}
				src={`https://www.youtube.com/embed/${id}`}
				allow="autoplay; encrypted-media"
				allowFullScreen
				className="w-full h-full"
			/>
		</div>
	);
}

