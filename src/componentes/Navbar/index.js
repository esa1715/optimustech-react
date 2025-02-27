import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

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
                        <li><a href='https://optimustech-react.vercel.app/' className='btnentrar' target="_blank" rel="noreferrer" onClick={closeMenu}>Entrar</a></li>
                        <li><a href='https://optimustech-react.vercel.app/' className='btncadastrar' target="_blank" rel="noreferrer" onClick={closeMenu}>Cadastrar</a></li>
                    </ul>
                </nav>
            </div>

            <div className='abrir__menu' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} style={{color: "#8e2424"}} />
            </div>

            {menuOpen && (
                <>
                    <div className='navbar__mobile'>
                        <div className='btn__fechar' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} style={{color: "#8e2424"}} />
                        </div>
                        <nav>
                            <ul>
                                <li><a href='https://optimustech-react.vercel.app/' className='btnhome' target="_blank" rel="noreferrer" onClick={closeMenu}>Home</a></li>
                                <li><a href='https://vercel.com/eriks-projects-80eba853' className='btnprodutos' target="_blank" rel="noreferrer" onClick={closeMenu}>Produtos</a></li>
                                <li><a href='https://github.com/esa1715' className='btnrecursos' target="_blank" rel="noreferrer" onClick={closeMenu}>Recursos</a></li>
                                <li><a href='https://www.linkedin.com/in/erikalves12' className='btnsobrenos' target="_blank" rel="noreferrer" onClick={closeMenu}>Sobre nós</a></li>
                                <li><a href='https://optimustech-react.vercel.app/' className='btnhome' target="_blank" rel="noreferrer" onClick={closeMenu}>Entrar</a></li>
                                <li><a href='https://optimustech-react.vercel.app/' className='btnhome' target="_blank" rel="noreferrer" onClick={closeMenu}>Cadastrar</a></li>
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
