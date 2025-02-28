import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const loginConcluido = () => {
    alert("Login realizado com sucesso! Para sugestões ou contato, clique em uma das redes sociais abaixo.");
};

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='background__modal' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <img src='/imagens/OptimusTech.png' alt='Logo da Optimus Tech' />
                <div className='modal__content'>
                    <input type='text' placeholder='Digite seu nome de usuário' className='modal__input' />
                </div>
                <div className='modal__content'>
                    <input type='email' placeholder='Digite seu e-mail' className='modal__input' />
                </div>
                <a href='#' className='modal__btnlogin' onClick={loginConcluido}>Login</a>
                <span className='modal__contato'>Minhas Redes</span>
                <div className='modal__icons'>
                    <ul>
                        <li>
                            <a href='https://github.com/esa1715' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "#8e2424" }} />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/erikalves12' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#8e2424" }} />
                            </a>
                        </li>
                        <li>
                            <a href='' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#8e2424" }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;