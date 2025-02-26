import './Depoimentos.css'

const Depoimentos = () => {
    return (
        <section className='depoimentos'>
            <div className='depoimentos__content'>
                <div className='depoimentos__text'>
                    <h3 className='depoimentos__sub'>Veja o que nossos colaboradores falam sobre nós</h3>
                    <span className='depoimentos__com'>OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.</span>
                </div>
                <div className='depoimentos__atribuicao'>
                    <img src='./imagens/Avatar.png' className='depoimentos__avatar'></img>
                    <div className='depoimentos__nec'>
                        <span className='depoimentos__nome'>Júlia Castro</span>
                        <span className='depoimentos__cargo'>Desenvolvedora Web</span>
                    </div>
                </div>
            </div>
        </section>
    )  
}

export default Depoimentos