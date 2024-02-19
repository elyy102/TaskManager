import React from 'react'

export const Profile = () => {
  return (
    <div className="wrapper">
        <div className="profile">
            <div className="profile_2">
                <div className="my_data">
                    <h1 className='my_data_h1'>Мои данные</h1>
                    <div className="my_data_rectangle">
                        <p>Имя</p>
                        <hr className='hr_line'/>
                        <p>Email</p>
                        <hr className='hr_line'/>
                        <p>Номер телефона</p>
                        <hr className='hr_line'/>
                        <div className="my_data_btns">
                            <button id='edit'>Изменить данные</button>
                            <button id='logout'>Выйти</button>   
                        </div>
                        
                    </div>
                </div>
                <div className="my_teams">
                <h1 className='my_data_h1'>Мои команды</h1>
                <div className="my_data_rectangle">
                    <div className="team">
                        <h2>Команда №1</h2>
                        <div className="task">
                             <div className="circle"></div>
                             <p>Задача №1</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile