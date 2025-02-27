import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <div className='formulario__content'>
                <div className='formulario__text'>
                    <h2 className='formulario__tit'>Acompanhe as nossas oportunidades</h2>
                    <p className='formulario__sup'>Seja o primeiro a saber quando novas vagas serão abertas!</p>
                </div>
                <div className='formulario__email'>
                    <input type='email' className='formulario__input' placeholder='Seu e-mail'>
                    </input>
                    <a href='https://optimustech-react.vercel.app/' className='btncadastrar' target="_blank"  rel="noreferrer">Cadastrar</a>
                </div>
            </div>
            <span className='direitos'>© 2022 OptimusTech. Todos os direitos reservados.</span>
        </section>
    )  
}

export default Formulario