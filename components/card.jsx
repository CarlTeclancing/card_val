import React from 'react'
//import { useForm } from 'react-hook-form'
import Image from 'next/image'

export default function card(){
    //const { register, handleSubmit, formState:{errors}} = useForm();
    const myFunc = ()=>{
        alert('Button is clicked')
    }

  return (
    <div className='main'>
        <div className='card-front'>
            <h2>Yuven carlson D</h2>
            <h2>0032 7863 0987 8773</h2>
            <div className="info">
                <span>05/25</span>
                <span>123</span>
            </div>
        </div>
        <div className='card-back'> <span className='span'>123</span></div>
        <div className='wrapper'>
            <div className='left-section'>
                
            </div>

            <div className='right-section'>
                <form onSubmit={myFunc}>
                    <label>cardholder name</label>
                    <input type="text" placeholder="enter card number"></input> 
                    <small></small>

                    <label>card number</label>
                    <input type="text" placeholder="enter card number"></input> 
                    <small></small>

                    <label>exp. date (mm/yy) cv</label>
                    <div className='date-sec'>
                        <input class="month" type="text" placeholder="MM"></input> 

                        <input class="year" type="text" placeholder="YY"></input> 

                        <input class="cv" type="text" placeholder="eg. 123"></input> 

                    </div>
                    <small>custom message</small>
                    <button id="submit" >Confirm</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}
