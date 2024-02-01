import '../../style/main.css'
import '../../style/Form.css'
import Form from '../../components/Form/Form'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userFirstName, userLastName, userToken, userLogin } from '../../redux/reducers'

function User() {
    const [profileChange, setProfileChange] = useState("off")
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const selectorFirstName = useSelector((state) => state.user.firstName)
    const selectorLastName = useSelector((state) =>state.user.lastName)
    const selectorToken = useSelector((state) => state.user.token )
    const dispatch = useDispatch()

    useEffect(() => {
        setPrenom(selectorFirstName)
        setNom(selectorLastName)
        setProfileChange("off")
    }, [selectorFirstName, selectorLastName])
    
    const nameChange = (event) => {
        event.preventDefault()
        setProfileChange("on")
        dispatch(userLogin("out"))
    }

    return (
        <main className="main bg-dark">,
          {  profileChange==="on" ? <Form /> :  
            <div className="header">
                <h1>Welcome back<br />{prenom}&nbsp;&nbsp;{nom}</h1>
                <button className="edit-button" onClick={nameChange}  >Edit Name</button>
            </div>
            }
            <h2 className="sr-only">Accounts</h2>
        { selectorToken !== "" ? <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            </> : ("") 
          }
      </main> 
      

    )
}

export default User