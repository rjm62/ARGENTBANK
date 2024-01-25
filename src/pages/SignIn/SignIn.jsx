import {useEffect, useState } from 'react'
import {getToken, getProfile} from '../../service/dataAPI'
import {userToken, userFirstName, userLastName} from '../../redux/reducers'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../../style/main.css'

function SignIn() {
    const [emailUserName, setEmailUserName] = useState("0")
    const [password, setPassword] = useState("0")
    const [emailUserNameValidate, setEmailUserNameValidate] = useState("0")
    const [passwordValidate, setPasswordValidate] = useState("0")
    const [errorPasswordText, setErrorPasswordText] = useState()
    const [errorEmailUserNameText, setErrorEmailUserNameText] = useState()
    const [token, setToken] = useState()
    const [status, setStatus] = useState()

    var bodyInfo = {email: emailUserName, password: password}
    var navigate = useNavigate()
    const dispatch = useDispatch()

    const formSend = (event) => {
        event.preventDefault()
        //verification de l'adresse mail entrée dans le username, lorsqu'on clique sur entrée ou 'sign in'
        if(emailUserName==0) {
            setErrorEmailUserNameText("vous devez entrer une adresse mail")
        }
        else if(emailUserNameValidate!==true && emailUserName!==0) {
            setErrorEmailUserNameText("adresse mail non correcte")
        }
      
        //vérification du mot de passe entré (11 caractères), lorsqu'on clique sur entrée ou 'sign in'
        if(password==0) { 
            setErrorPasswordText("vous devez entrer un password")  
        } 
        else if(password.length!==0 && password.length!==11)  {
            setErrorPasswordText("mot de passe non correct")
        }
        if ( passwordValidate===true) {
            let tata ="2"
        getToken(bodyInfo).then((data) => (setToken(data.body.token), setStatus(data.status)))    
        }
    }

    // récupération valeur dans le champ username + vérification si correct
    const mailChange = (event) => {
        event.preventDefault()
        setEmailUserName(event.target.value)
        setErrorEmailUserNameText("")
        let regEmail=new RegExp("^[a-z0-9\.\-_]+[a-z0-9]*@[a-z0-9]{2,}\.[a-z\.\-_]+[a-z\-_]{2,}$", "i")
        var emailCheck =(regEmail.test(event.target.value))
        if (emailCheck/1==1) {
            setEmailUserNameValidate(true)
        }
    }

     // récupération valeur dans le champ password et si longueur correcte
    const passwordChange = (event) => {
        event.preventDefault()  
        setErrorPasswordText("")   
        let passwordLength = event.target.value
        if(passwordLength.length===11) {
            setPassword(event.target.value)   
            setPasswordValidate(true)
        }

    }
    useEffect(() => { 
      if(token !==undefined) {
        dispatch(userToken(token))
        navigate('/user')
        if(status===200) {
            getProfile(token).then((data) => (dispatch(userFirstName(data.body.firstName)), dispatch(userLastName(data.body.lastName))))
        }
      }
      }, [token]); 
  

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form className='form' onSubmit={formSend}>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" onChange={mailChange} />
                    </div>
                    <p className='errorText'>{errorEmailUserNameText}</p>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={passwordChange}/>
                    </div>
                    <p className='errorText'>{errorPasswordText}</p>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    <button to= "/user" className="sign-in-button">Sign In</button>     
                </form>
            </section>
      </main>
    )
}

export default SignIn