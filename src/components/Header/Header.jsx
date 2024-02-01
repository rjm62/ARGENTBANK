import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import User from '../../pages/User/User'
// import { useSelector, useDispatch} from 'react-redux'
import { userLogin, userFirstName, userLastName } from '../../redux/reducers'

function Header() {
  const [changeLogin, setChangeLogin] = useState("in")
  const selector = useSelector((state) => state.user.login)
  const dispatch = useDispatch


  const modifyLogin = () => {
  setChangeLogin("in")
  }

  useEffect(() => {
  setChangeLogin(selector)
  },[selector])

    return (
        <nav className="main-nav">
      <Link className="main-nav-logo" onClick={modifyLogin} to = "/">
        <img
          className="main-nav-logo-image"
          src= {argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {changeLogin==="in" ?
        <Link className="main-nav-item" to = "/sign-in">
          <i className="fa fa-user-circle"></i>
          <i className='fa fa-sign-in'>&nbsp;&nbsp;&nbsp;Sign In</i>
        </Link> :
        <Link className="main-nav-item" onClick={modifyLogin} to = "/">
        <i className="fa fa-user-circle"></i>
        <i className='fa fa-sign-out'>&nbsp;&nbsp;&nbsp;Sign Out</i>
      </Link>}
      </div>
    </nav>
    )
}

export default Header