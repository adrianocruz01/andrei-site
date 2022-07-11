import "./style.css";

export default function Card({ title, description, url, cover }) {
	return (
		<div className='card'>
			<img className="img-video" src={cover} alt='card cover' />
			{/* <iframe
				width='400'
				height='300'
				src={url}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
        title="This is a unique title"
			></iframe> */}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
