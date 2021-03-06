import ImgMaoComMoeda from "../../assets/elementovisual1.png";
import "./style.css";

export default function ComponentTwo() {
	return (
		<div className='co2-container'>
			<div className='co2-content'>
				<h1 className='primeiro-h1'>LA MOEDITA SECRETA</h1>
				<div className='ct-container'>
					<p className='font-p'>
						Eu vou compartilhar com você, as estratégias que uso para selecionar as
						melhores e pouco exploradas oportunidades neste novo mercado. Além disso, eu ainda vou
						te levar para Dubai, com os lucros que você terá com as operações!
					</p>
					<img src={ImgMaoComMoeda} alt='' className='maoComMoeda' />
				</div>
			</div>
			<div className='co2-content2'>
				<h1 className='segundo-h1'> CLIQUE NO BOTÃO ABAIXO</h1>
				<a className='participe-link' href='https://t.me/GoldarioPortuguese' target="_blank">
					PARTICIPAR
				</a>
				<div className='segundo-p'>
					<p>VENHA FAZER PARTE DO MEU SELETO GRUPO DE INVESTIDORES EM CRIPTOS</p>
					<p>
						QUE É O{" "}
						<b className='font-strong'>LÁ MOEDITA SECRETA</b>.
					</p>
				</div>
			</div>
		</div>
	);
}
