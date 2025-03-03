import { useEffect } from 'react';
import './ModalSucesso.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalSucesso = ({ msOpen, msClose, username }) => {
    useEffect(() => {
        if (msOpen) {
            document.body.classList.add('modalsucesso-open');
        } else {
            document.body.classList.remove('modalsucesso-open');
        }

        return () => {
            document.body.classList.remove('modalsucesso-open');
        };
    }, [msOpen]);

    if (!msOpen) return null;
    
    return (
        <div className='background__modalsucesso' onClick={msClose}>
            <div className='modalsucesso' onClick={(e) => e.stopPropagation()}>
                <div className='modalsucesso__x' onClick={msClose}>
                    <FontAwesomeIcon icon={faXmark} style={{ color: "#8e2424" }} />
                </div>
                <img src='/imagens/OptimusTech.png' alt='Logo da Optimus Tech' />
                <div className='modalsucesso__content'>
                    <p>Bem-vindo, {username}!<br />Seu login foi realizado com sucesso!<br />Para sugestões ou contato, fique à vontade para clicar em uma das minhas redes sociais abaixo</p>
                    <div className='modalsucesso__contato'>Minhas Redes
                        <div className='modalsucesso__icons'>
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
            </div>
        </div>
    );
};

export default ModalSucesso;