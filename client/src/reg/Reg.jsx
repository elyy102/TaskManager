import React from 'react'
import { Link } from 'react-router-dom'

export const Reg = () => {
    
  return (
    <div className='wrapper'>
        <div className="login_2">
        <div className="login">
            <h1 className='login_rectangle_h1'>Регистрация</h1>
            <div className="login_rectangle">
                <input className='login_input' placeholder='Введите имя...' type="text" />
                <input className='login_input' placeholder='Введите email...' type="email" />
                <input className='login_input' placeholder='Введите номер телефона..' type="text" />
                <input  className='password_input' placeholder='Введите пароль...' type="password" />
                <button className='login_btn'>Зарегистрироваться</button>
                <p className='login_p'>Уже есть аккаунт? 
                <a href=""> Войти</a>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reg