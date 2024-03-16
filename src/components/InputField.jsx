import { useState } from "react";

function InputField() {
    const [userName, setuserName] = useState("");
    const [email, setemail] = useState('');
    return(
    <form>
    <div className='enter-info'>
        <label> Enter your Name </label>
        <input type='text' 
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        placeholder='Fall Name'
        required/>
        </div>
        <div className='enter-info'>
        <label> Enter your Email </label> 
        <input type='text' 
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder='Official Email'
        pattern='example@gmail.com'
        required/>
        </div>
        
    </form>
    );
}
export default InputField;