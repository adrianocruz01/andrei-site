import ImgMaoComMoeda from "../../assets/elementovisual1.png";
import "./style.css";

export default function ComponentTwo() {
	return (
		<div className='co2-container'>
			<div className='co2-content'>
				<h1 className='primeiro-h1'>LA MOEDITA SECRETA</h1>
				<div className='ct-container'>
					<p className='font-main blue'>
						Eu vou compartilhar as estratégias que uso para selecionar as
						melhores oportunidades neste novo mercado, pouco explorado e ainda
						te levar a Dubai comigo com lucros que você terá com as operações!
					</p>
					<img src={ImgMaoComMoeda} alt='' className='maoComMoeda' />
				</div>
			</div>
			<div className='co2-content2'>
				<h1 className="segundo-h1"> CLIQUE NO BOTÃO ABAIXO</h1>
				<a className="participe-link" href='#'>PARTICIPE</a>
				<div className="segundo-p">
					<p>VENHA FAZER PARTE DO MEU SELETO GRUPO </p>
					<p>
						DE INVESTIDORES EM CRIPTO, QUE É
						O LÁ MOEDITA SECRETA.
					</p>
				</div>
			</div>
		</div>
	);
}
