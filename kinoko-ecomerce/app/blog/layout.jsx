export default function BlogLayout({ children }) {
	return (
		<div className="container mx-auto px-4 py-8">
			<article className="prose prose-lg max-w-none">{children}</article>
		</div>
	);
}

