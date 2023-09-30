import React, { useState } from 'react'

function UserForm({ addUser }) {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    //console.log(addUser)
    //Obje olarak tuttuğumuz stateyi dinamşk fonksiyon ile değiştirme
    const changeState = (key, e) => {
        setUser({ ...user, [key]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('yeni satate', user.name, user.email)
       addUser(user)
        setUser({ name: '', email: '' })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Kullanıcı İsmi Girin</label>
                <input
                    value={user.name}
                    onChange={(e) => changeState('name', e)}
                    type="text" id='name' className='form-control my-3' />
            </div>
            <div>
                <label htmlFor="mail">Kullanıcı Mail Girin</label>
                <input
                    value={user.email}
                    onChange={(e) => changeState('email', e)}
                    type="email" id='mail' className='form-control my-3' />
            </div>
            <button className='btn btn-primary' >Kullanıcı Ekle</button>
        </form>
    )
}
export default UserForm