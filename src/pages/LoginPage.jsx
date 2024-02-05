import { Link } from "react-router-dom"
import "./signin.css"
import { appRoutes } from "../lib/appRoutes"
import { useState } from "react"
import { login } from "../api";




export default function LoginPage() {

    const loginForm = {
        login: '',
        password: '',
    };

    const [loginData, setLoginData] = useState(loginForm);



    const  handleLogin = async (e) => {
        e.preventDefault()
     await login(loginData).then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.warn(error)
      })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target; 
      
        setLoginData({
          ...loginData, 
          [name]: value, 
        });
      };

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" 
                            type="text" 
                             
                            id="formlogin"
                             placeholder="Эл. почта"

                              value={loginData.login}
                              onChange={handleInputChange}
                              name="login"
                              label="Login"
                                
                            />
                             <input className="modal__input"
                              type="password" 
                               
                              id="formpassword" 
                              placeholder="Пароль"
                              value={loginData.password}
                              onChange={handleInputChange}
                              name="password"
                              label="Password"
                                    
                            />
                                    <button className="modal__btn-enter _hover01" id="btnEnter" onClick={handleLogin}>
                                        Войти
                                    </button>
                                    <div className="modal__form-group">
                                        <p>Нужно зарегистрироваться?</p>
                                        <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

            )
}

