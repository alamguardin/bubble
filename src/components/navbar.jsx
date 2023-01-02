import bubbleLogo from '../assets/bubble-logo-color.svg'
import SwitchButton from './switchButtom'

function Navbar() {
    return (
        <>
        <header className='navbar'>
            <nav className='navbar__container'>
                <div className='navbar__brand'>
                    <a href="#" className='navbar__logo'>
                        <img src={bubbleLogo} alt='Bubble logo' />
                        <span>Bubble</span>
                    </a>
                </div>
                <div className='navbar__menu'>
                    <div className='navbar__list'>
                        <a href="#" className='navbar__item'>Nuevo</a>
                        <a href="#" className='navbar__item'>Buscar</a>
                    </div>
                    <div className='navbar__actions'>
                        <SwitchButton/>
                        <a href="#" className='navbar__item --icon'>
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href="#">
                            <i className='bx bxl-twitter' ></i>
                        </a>
                    </div> 
                </div>
                <label className='navbar__btn'>
                    <i className='bx bx-menu-alt-right' ></i>
                    <input type="checkbox" />
                </label>
            </nav>
        </header>
        </>
    )
}

export default Navbar