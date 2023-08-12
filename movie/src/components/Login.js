import React,{useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {

     const [email, setEmail] = useState ('');
     const [password, setPassword] = useState ('');
     const [msg, setMsg] = useState('');
     const history = useHistory();

     const Login = async (e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login',{
                email:email,    
                password:password,
            }); 
            history.push("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
     }

  return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title">Login</h3>
                    <p className="subtitle">Silakan masuk ke akun Anda</p>
                    <div className="box">
                        <figure className="avatar">
                        </figure>
                        <form onSubmit={Login}>
                            <div className="field"> 
                                <div className="control">
                                <p className='has-text-centered has-text-danger-dark'>{msg}</p>
                                <input type="text" className="input" placeholder="Email or Username" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <input type="text" className="input" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <button className="button is-block is-info is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p className="has-text-grey">
                        <a href="#">Lupa password</a> &nbsp;·&nbsp;
                        <a href="#">Daftar akun</a> &nbsp;·&nbsp;
                        <a href="../">Beranda</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
)
}

export default Login