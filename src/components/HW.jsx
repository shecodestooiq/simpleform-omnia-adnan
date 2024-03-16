function HW(props) {
    return(
        <form>
        <div className='enter-info'>
        <button type='submit' onClick={() => alert(`name: ${props.userName}
emali: ${props.email}     
message: ${props.textarea}`)}>submit</button>

</div>
</form>
    
    );
}
export default HW;