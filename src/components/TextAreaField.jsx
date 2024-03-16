import { useState } from "react"; 
function TextAreaField() {
    const [textarea, settextarea] = useState('');
    return(
    <form>
    <div className='enter-info'>
        <label>Massege<br/></label>
        <textarea
        value={textarea}
        onChange={(e) => settextarea(e.target.value)}
        placeholder='comments ...'
        rows={5}
        required
        />
        </div>
        
    </form>
    );
}
export default TextAreaField;