import React from 'react'

const UserList = ({ users }) => {
   // console.log(users)
    return (
        <div>
            <table className='table table-striped table-hover '>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody data-testid="users">
                    {
                        users.map((user,index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default UserList