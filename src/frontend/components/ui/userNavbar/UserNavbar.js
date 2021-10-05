
import '../userNavbar/UserNavbar.css'

const UserNavbar = (props) => {

    const callbackHandler = (e) => {
        props.callback(e);
    }

    return (
        <nav className='frontend-navbar-user-page'>
            <div className='frontend-nav-user-icon'>
                <img src={props.userAvatar} alt="avatar" onClick={callbackHandler} name='userAvatar'/>
                <div className='frontend-inner-nav-user-icon'>
                    <img src={props.userBadge} alt='badge' onClick={callbackHandler} name='userBadge'/>
                </div>
            </div>

            <div className='frontend-nav-middle-user'>
                <span className='frontend-user-name'>{props.userName}</span>
                <span>Livello: <span><b>{props.userLvl}</b></span></span>
                <span>Esperienza: <span><b>{props.userExp}</b></span></span>
            </div>


            <div className='frontend-nav-right-user'>
                <div className='frontend-nav-user-coin'>
                    <img src={props.coin} alt="coin" />
                    <div className='frontend-inner-nav-user-info' onClick={callbackHandler} name='coinInfo'>
                        <span style={{ pointerEvents: 'none' }} className='frontend-inner-i-txt'>i</span>
                    </div>
                </div>

                <span>{props.userCoins} BC</span>
            </div>

        </nav>
    );
}

export default UserNavbar;