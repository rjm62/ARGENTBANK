import '../../style/Form.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userToken, userFirstName,userLastName , userLogin} from '../../redux/reducers'
import { useNavigate } from 'react-router-dom'
import { putNewName } from '../../service/dataAPI'


function Form() {
    const selectorFirstName = useSelector((state) => state.user.firstName)
    const [firstName, setFirstName] = useState(selectorFirstName)
    const [lastName, setLastName] = useState(useSelector((state) => state.user.lastName))
    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectorToken = useSelector((state) => state.user.token )

  
    const changeFirstName = (event) => {
        event.preventDefault()
        setNewFirstName(event.target.value)
    }
   
    const changeLastName = (event) => {
        event.preventDefault()
        setNewLastName(event.target.value)
    }

    const cancel = (event) => {
        event.preventDefault()
        setNewFirstName("")
        setNewLastName("")
    }

    const save = (event) => {
        event.preventDefault()
        setLastName(newLastName)
        dispatch(userFirstName(newFirstName))
        dispatch(userLastName(newLastName))
        const bodyInfo = {firstName: newFirstName, lastName: newLastName}
        putNewName(selectorToken, bodyInfo).then((data) => console.log(data.body))
        dispatch(userLogin("out"))      
    }

    return (
        <div className="formContainer">
            <h1>Welcome back</h1>
            <form className="editName">
                <input type="text" id="firstName" onChange={changeFirstName} name="firstName" placeholder= {firstName} value= {newFirstName}/>  
                <input type="text" id="lastName" onChange={changeLastName} name="lastName" placeholder= {lastName} value={newLastName} />
            </form>
            <div className="buttonsContainer"> 
                <button className="saveButton" onClick={save}>Save</button>
                <button className="cancelButton" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Form