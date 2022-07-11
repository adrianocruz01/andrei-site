import ImgInstagram from "../../assets/instagram-square-brands.svg";
import ImgTelegram from "../../assets/telegram-svgrepo-com.svg";
import ImgYoutube from "../../assets/youtube-square-brands.svg";
import "./style.css";

export default function Footer() {
	return (
		<div className='co3-content'>
			<img src={ImgYoutube} alt='youtube' className='ico' />
			<img src={ImgInstagram} alt='Instagram' className='ico' />
			<img src={ImgTelegram} alt='telegram' className='ico-telegram' />
		</div>
	);
}
