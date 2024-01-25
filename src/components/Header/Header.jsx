import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'

function Header() {
const nomAChanger=1

    return (
        <nav className="main-nav">
      <Link className="main-nav-logo" to = "/">
        <img
          className="main-nav-logo-image"
          src= {argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {nomAChanger===1 ?
        <Link className="main-nav-item" to = "/sign-in">
          <i className="fa fa-user-circle"></i>
          <i className='fa fa-sign-in'>&nbsp;&nbsp;&nbsp;Sign In</i>
        </Link> :
        <Link className="main-nav-item" to = "/">
        <i className="fa fa-user-circle"></i>
        <i className='fa fa-sign-out'>&nbsp;&nbsp;&nbsp;Sign Out</i>
      </Link>}
      </div>
    </nav>
    )
}

export default Header