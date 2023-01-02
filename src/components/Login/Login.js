import './Login.css'
import ReactDOM from 'react-dom'

const Login = () => {
  const content = 
    <>

                <div className="d-flex justify-content-center">
                    <div className="login-modal bg-white borderRadius10 px-4 py-4 box-shadow">
                        <form className=''>
                            <div className="mb-3">
                            <label className='form-label' htmlFor="email"><i className="fa-solid fa-user"></i> User Email</label>
                            <input className='form-control' type="text" name='email' required />
                            </div>
                            <div className="mb-3">
                            <label className='form-label' htmlFor="password"><i className="fa-solid fa-key"></i> Password</label>
                            <input className='form-control' type="password" name='password' required />
                            </div>
                            <div className="mb-1">
                            <button type="submit" className='btn btn-primary'>Login</button>
                            </div>
                            forgot password?
                        </form>
                    </div>
                </div>

        
    </>
  
  return ReactDOM.createPortal(content, document.getElementById('login-modal'))
}

export default Login