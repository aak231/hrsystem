import React from 'react'

const AddEmployee = () => {
  return (
    <>
        <div className='ui main'>
            <br />
            <h2>Add Employee</h2>
            <form className= "ui form">
                <div className='field'>
                    <label >Name</label>
                    <input type="text" name= "name" placeholder='Name' />
                </div>
                <div className='field'>
                    <label >Email</label>
                    <input type="text" name= "email" placeholder='Email' />
                </div>
                <button className='ui button purple'> Add</button>
            </form>
        </div>
    </>
  )
}

export default AddEmployee