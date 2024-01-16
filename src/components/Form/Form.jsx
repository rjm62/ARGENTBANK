import '../../style/Form.css'

function Form() {
    return (
        <div className="formContainer">
            <h1>Welcome back</h1>
            <form className="editName">
                <input type="text" id="firstName" name="firstName" placeholder="firstname initial" />  
                <input type="text" id="lastName" name="lastName" placeholder="lastName initial" />
            </form>
            <div className="buttonsContainer"> 
                <button className="saveButton">Save</button>
                <button className="cancelButton">Cancel</button>
            </div>
        </div>
    )
}

export default Form