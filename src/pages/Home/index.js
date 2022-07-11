import { useState } from "react";
import Card from "../../components/Card";
import ComponentOne from "../../components/ComponentOne";
import ComponentTwo from "../../components/ComponentTwo";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { videos } from "../../videos";
import "./style.css";

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [url, setUrl] = useState("");
	return (
		<div className='container'>
			<ComponentOne />
			<ComponentTwo />
			<main>
				<h2>Aprenda tudo que você precisa</h2>
				<div className='container-cards'>
					{videos.map((video) => (
						<div
							onClick={() => {
								setOpenModal(true);
								setUrl(video.url);
							}}
							key={video.id}
						>
							<Card
								title={video.title}
								cover={video.cover}
								description={video.description}
							/>
						</div>
					))}
				</div>
			</main>
			{openModal && (
				<Modal
					url={url}
					setUrl={setUrl}
					handleClose={() => setOpenModal(false)}
				/>
			)}

			<Footer />
		</div>
	);
}

// Card
// Header

export default App;
