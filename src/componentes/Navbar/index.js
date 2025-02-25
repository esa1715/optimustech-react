import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <nav className='navbar__container'>
            <img src='./imagens/OptimusTech.png' alt='Logo da Optimus Tech'></img>
            <div className='navbar__content'>
                <a href='' className='btnhome'>Home</a>
                <a href='' className='btnprodutos'>Produtos</a>
                <a href='' className='btnrecursos'>Recursos</a>
                <a href='' className='btnsobrenos'>Sobre nós</a>
            </div>
            <div className='navbar__logo'></div>
            <div className='navbar__actions'>
                <a href='' className='btnentrar'>Entrar</a>
                <a href='' className='btncadastrar'>Cadastrar</a>
            </div>
        </nav>
        </div>
    )  
}

export default Navbar