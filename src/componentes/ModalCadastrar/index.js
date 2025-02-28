import './ModalCadastrar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const cadastroConcluido = () => {
    alert("Login realizado com sucesso, espero que tenha gostado do projeto! Para sugestões ou contato, basta clicar em um dos ícones na classe minhas redes")
}

const ModalCadastrar = () => {
    return (
        <div className='background__modal'>
            <div className='modalcadastrar'>
                <img src='./imagens/OptimusTech.png' alt='Logo da Optimus Tech'></img>
                <div className='modalcadastrar__content'>
                    <input type='text' placeholder='Digite seu nome de usuário' className='modalcadastrar__input'></input>
                </div>
                <div className='modalcadastrar__content'>
                    <input type='e-mail' placeholder='Digite seu e-mail' className='modalcadastrar__input'></input>
                </div>
                <a href='#' className='modal__btncadastrar' target="_blank" rel="noreferrer" onClick={cadastroConcluido}>Login</a>
                <span className='modal__contato'>Minhas Redes</span>
                <div className='modalcadastrar__icons'>
                    <ul>
                    <li><a href='https://github.com/esa1715' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#8e2424",}} />
                    </a></li>
                    <li><a href='https://www.linkedin.com/in/erikalves12' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#8e2424",}} />
                    </a></li>
                    <li><a href='' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#8e2424",} } />
                    </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )  
}

export default ModalCadastrar