import './Talentos.css'

const Talentos = () => {
    return (
        <section className='talentos'>
            <div className='talentos__text'>
                <div className='talentos__badtit'>
                    <span className='talentos__badge'>Vagas abertas!</span>
                    <h2 className='talentos__title'>Estamos procurando por talentos</h2>
                </div>
                <h3 className='talentos__sub'>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</h3>
                </div>
                <img src='/imagens/Reunião.png' className='talentos__img' alt='Pessoas em uma reunião'></img>
            </section>
    )
}

export default Talentos