import coin from "../../../../common/assets/BeijeCoin.png"
import properties from '../../../../gamification/utilities/properties';
import '../userNavbar/UserNavbar.css'

const UserNavbar = (props) => {
    let levelExp = 1000
    let userPath = JSON.parse(localStorage.getItem('userInfo'))
    let totalExp = userPath.experience
    let percentageExp=0
    
    const userLevel = () =>{
        if(userPath.experience < 1000){
            percentageExp = totalExp / levelExp   * 100
            return 1
        }
        if(userPath.experience >= 1000 &&  userPath.experience < 3000){
            totalExp -= 1000
            levelExp = 2000
            percentageExp = totalExp / levelExp   * 100
            return 2
        }
        if(userPath.experience >= 3000 &&  userPath.experience < 6000){
            totalExp -= 3000
            levelExp = 3000
            percentageExp = totalExp / levelExp   * 100
            return 3
        }
        if(userPath.experience >= 6000 &&  userPath.experience < 10000){
            totalExp -= 6000
            levelExp = 4000
            percentageExp = totalExp / levelExp   * 100
            return 4
        }
        if(userPath.experience >= 10000){
            percentageExp = totalExp / levelExp   * 100
            return 5
        }
    }
    
    const callbackHandler = (e) => {
        props.callback(e);
    }

    return (
        <nav className='frontend-navbar-user-page'>
            <div className='frontend-nav-user-icon'>
                <img src={properties.avatar_list[userPath.avatar.selectedAvatar].image} alt="avatar" onClick={callbackHandler} name='userAvatar'/>
                <div className='frontend-inner-nav-user-icon'>
                    <img src={properties.badge_list[userPath.badge.selectedBadge].image} alt='badge' onClick={callbackHandler} name='userBadge'/>
                </div>
            </div>

            <div className='frontend-nav-middle-user'>
                <span className='frontend-user-name'>{userPath.userName + " " + userPath.surname}</span>
                <span>Livello: <span><b>{userLevel()}</b></span></span>
                <div className= 'progress-bar-exp-container'>
                    <div style={{width: `${percentageExp}%`}} className="progress-bar-exp"></div>
                </div>
                <span><b>{`${totalExp}/${levelExp}`}</b></span>
            </div>


            <div className='frontend-nav-right-user'>
                <div className='frontend-nav-user-coin'>
                    <img src={coin} alt="coin" />
                    <div className='frontend-inner-nav-user-info' onClick={callbackHandler} name='coinInfo'>
                        <span style={{ pointerEvents: 'none' }} className='frontend-inner-i-txt'>i</span>
                    </div>
                </div>

                <span>{userPath.beijeCoin} BC</span>
            </div>

        </nav>
    );
}

export default UserNavbar;