import React from 'react'

const MapDemo = () => {

    let users = [   
        {id:1, name:"kiran", age:23, city:"deesa"},
        {id:2, name:"saurav", age:23, city:"deesa"},
        {id:3, name:"rahul", age:23, city:"deesa"}
    ]

    
  return (
    <>
    <h1>MapTable</h1>

        <table border={2}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </thead>
            {users.map((users)=>{
                return (
                <tr>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.age}</td>
                    <td>{users.city}</td>
                </tr>
                
           ) })}

        </table>
    </>
  )
}

export default MapDemo