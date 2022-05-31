import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://tata123.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }

        })
            }

            const handleDelete =id =>{
                const url =`https://tata123.herokuapp.com/user/${id}`;
                fetch(url,{
                    method: 'DELETE'
                })
                .then(res => 
                    res.json()
                    
                )
                .then(data => {
                    if (data.deletedCount){
                        alert('Deleted Successfully');
                        refetch();
                    }
                })
            }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={()=> handleDelete(user.id)} class="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;