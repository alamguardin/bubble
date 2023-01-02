import '../styles/switchButton.css'

function SwitchButton() {
    return (
        <button className="switch">
            <i className='bx bxs-sun'></i>
            <i className='bx bxs-moon' ></i>
            <div className='switch__circle'></div>
        </button>
    )
}

export default SwitchButton