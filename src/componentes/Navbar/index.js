import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Modal from '../Modal';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const toggleModal = () => setModalOpen(!modalOpen);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [menuOpen]);

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <img src='./imagens/OptimusTech.png' alt='Logo da Optimus Tech'></img>
                <nav className='navbar__content'>
                    <ul>
                        <li><a href='https://optimustech-react.vercel.app/' className='btnhome' target="_blank" rel="noreferrer" onClick={closeMenu}>Home</a></li>
                        <li><a href='https://vercel.com/eriks-projects-80eba853' className='btnprodutos' target="_blank" rel="noreferrer" onClick={closeMenu}>Produtos</a></li>
                        <li><a href='https://github.com/esa1715' className='btnrecursos' target="_blank" rel="noreferrer" onClick={closeMenu}>Recursos</a></li>
                        <li><a href='https://www.linkedin.com/in/erikalves12' className='btnsobrenos' target="_blank" rel="noreferrer" onClick={closeMenu}>Sobre nós</a></li>
                    </ul>
                </nav>
                <div className='navbar__logo'></div>
                <nav className='navbar__actions'>
                    <ul>
                        <li className='navbar__btnentrar' onClick={toggleModal}>Entrar</li>
                        <li className='navbar__btncadastrar' onClick={toggleModal}>Cadastrar</li>
                    </ul>
                </nav>
            </div>

            <div className='abrir__menu' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} style={{color: "#8e2424"}} />
            </div>

            {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} />}

            {menuOpen && (
                <>
                    <div className='navbar__mobile'>
                        <div className='navbar__mobile__x' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} style={{color: "#8e2424"}} />
                        </div>
                        <nav className='navbar__mobile__content'>
                            <ul>
                                <li><a href='https://optimustech-react.vercel.app/' className='btnhome' target="_blank" rel="noreferrer" onClick={closeMenu}>Home</a></li>
                                <li><a href='https://vercel.com/eriks-projects-80eba853' className='btnprodutos' target="_blank" rel="noreferrer" onClick={closeMenu}>Produtos</a></li>
                                <li><a href='https://github.com/esa1715' className='btnrecursos' target="_blank" rel="noreferrer" onClick={closeMenu}>Recursos</a></li>
                                <li><a href='https://www.linkedin.com/in/erikalves12' className='btnsobrenos' target="_blank" rel="noreferrer" onClick={closeMenu}>Sobre nós</a></li>
                                <li><a className='btnhome' onClick={toggleModal}>Entrar</a></li>
                                <li><a className='btnhome' onClick={toggleModal}>Cadastrar</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='overlay-menu' onClick={toggleMenu}></div>
                </>
            )}
        </div>
    );
};

export default Navbar;
