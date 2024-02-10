import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userFirstName } from '../../redux/reducers'

function Header() {
  // 2 constantes, pour récupérer état du login ou pour le modifier
  const [loginInOrOut, setLoginInOrOut] = useState("in")
  const selector = useSelector((state) => state.user.login)
  const selectorFirstName = useSelector((state) =>state.user.firstName)
  const dispatch = useDispatch()

  // si dessous fonction qui va changer valeur de changeLogin si clic sur loginOut ou logo
  const modifyLogin = () => {
  setLoginInOrOut("in")
  dispatch(userFirstName(""))
  }

  // useEffect ci dessous va permettre de changer la valeur du change Login si user.login change
  useEffect(() => {
  setLoginInOrOut(selector)
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
        {loginInOrOut==="in" ?
        <Link className="main-nav-item" to = "/sign-in">
          <i className="fa fa-user-circle"></i>
          <strong>&nbsp;&nbsp;&nbsp;{selectorFirstName}</strong>
          <i className='fa fa-sign-in'>&nbsp;&nbsp;&nbsp;Sign In</i>
        </Link> :
        <Link className="main-nav-item" onClick={modifyLogin} to = "/">
        <i className="fa fa-user-circle"></i>
        <strong>&nbsp;&nbsp;&nbsp;{selectorFirstName}</strong>
        <i className='fa fa-sign-out'>&nbsp;&nbsp;&nbsp;Sign Out</i>
      </Link>}
      </div>
    </nav>
    )
}

export default Header