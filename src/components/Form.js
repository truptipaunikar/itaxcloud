import React from 'react'

function Form() {
  return (
    <div style={{transform: "translate(-50%, -50%)", position:"absolute", top:"50%", left:"50%", backgroundColor:"white"}} id='form'   >
         <form className=' text-lg  text-left border  p-10 m-5'>
        <h2 className='p-5'>Sign in to your account</h2>
        <div className="mb-3 p-6">
          <label>
            Email
          </label><br/>
          <input className='border p-3'
            type="email"
            name="user_name"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3 p-6">
          <label>
            Password
          </label> <br/>
          <input className='border p-3'
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
        <label className='p-6'>
            <input className='m-2' type='checkbox'>
            </input>
            Stay Signed in for a Month
            </label>
        </div>
        <button style={{borderRadius:"8px"}} className=' bg-blue-600 text-white p-3 w-56 font-semibold m-6'>Continue</button>
      </form>
    </div>
  )
}

export default Form