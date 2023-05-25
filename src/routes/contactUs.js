import './contactUs.css' 

function contactUs () {
    return (
        <div className='container'>                       
            <div className='form-side'>
                <div>
                    <img className='contact-img' src='https://images.unsplash.com/photo-1583528306385-8f29f27cb2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
                </div>

                <form>
                    <div className='form-inputs'>
                        <img className='form-icon' src='/images/small-logo (1).png'></img>
                        <input type="text"  placeholder="Name/Username..."></input>
                        <input type="text"  placeholder="Email..."></input>
                        <input className='message-box' type="text"  placeholder="Message..."></input>
                        <button className='sign-in-btn'>Submit</button>
                    </div>
                    
                </form>

                
            </div>    
        </div>
        
    )
}

export default contactUs;