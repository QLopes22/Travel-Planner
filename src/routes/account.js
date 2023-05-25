import "./account.css"

function account () {
    return (
        <div className="account-form">
               <form>
                    <div className='form-inputs'>
                        <h2 className='form-text'>Login to Your Account</h2>
                        <input type="text" name="name" placeholder="Name/Username..."></input>
                        <input type="text" name="name" placeholder="Email..."></input>
                        <input type="text" name="name" placeholder="Password..."></input>
                        <p><a href='/'>Forget Password?</a></p>
                        <button className='sign-in-btn'>Login</button>
                        <p><a href='/'>Create your new account?</a></p>
                    </div>
                    
                </form>
            </div>
    )
}

export default account;