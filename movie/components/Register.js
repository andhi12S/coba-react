import React,{ useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
     const [name, setName] = useState ('');
     const [email, setEmail] = useState ('');
     const [password, setPassword] = useState ('');
     const [confPassword, setConfPassword] = useState ('');
     const [msg, setMsg] = useState('');
     const history = useHistory();

     const Register = async (e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name:name,
                email:email,    
                password:password,
              confPassword:confPassword
            }); 
            history.push("/login");
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
                    <h3 className="title">Register</h3>
                    <p className="subtitle">Silakan masuk ke akun Anda</p>
                    <div className="box">
                        <figure className="avatar">
                        </figure>
                        <form onSubmit={Register}>
                            <div className="field">
                                <div className="control">
                                    <p className='has-text-centered'>{msg}</p>
                                <input type="text" className="input" placeholder="username" value={name} onChange={(e)=> setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <input type="text" className="input" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <input type="text" className="input" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <input type="text" className="input" placeholder="confPassword" value={confPassword} onChange={(e)=> setConfPassword(e.target.value)} />
                                </div>
                            </div>
                            <button className="button is-block is-info is-fullwidth">Register</button>
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

export default Register