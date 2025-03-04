import './Modal.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ModalSucesso from '../ModalSucesso';

const Modal = ({ isOpen, onClose }) => {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSucessoOpen, setModalSucessoOpen] = useState(false);
    
    const toggleModal = () => setModalOpen(!modalOpen);
    const closeModal = () => setModalOpen(false);

    const toggleModalSucesso = () => setModalSucessoOpen(!modalSucessoOpen);
    const closeModalSucesso = () => setModalSucessoOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleLogin = () => {
        if (!username.trim() || !email.trim()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        toggleModalSucesso();
    };

    return (
        <>
            <div className='background__modal' onClick={onClose}>
                <div className='modal' onClick={(e) => e.stopPropagation()}>
                    <div className='modal__x' onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} style={{ color: "#8e2424" }} />
                    </div>
                    <img src='/imagens/OptimusTech.png' alt='Logo da Optimus Tech' />
    
                    <div className='modal__content'>
                        <input
                            type='text'
                            placeholder='Digite seu nome de usuário'
                            className='modal__input'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type='email'
                            placeholder='Digite seu e-mail'
                            className='modal__input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
    
                    <button className='modal__btnlogin' onClick={handleLogin}>
                        Login
                    </button>
    
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
                                <a href='https://api.whatsapp.com/send/?phone=%2B5511933329021&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#8e2424" }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {modalSucessoOpen && <ModalSucesso username={username} msOpen={modalSucessoOpen} msClose={closeModalSucesso} />}
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
