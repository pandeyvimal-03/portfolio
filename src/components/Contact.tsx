"use client"
import React, { useState } from 'react'
import { isValidate } from '@/lib/utils';
import {  user } from '@/types/contact';

function Contact() {

  
    const [user , setUser] = useState<user>({
            email : {name : 'email' , value : '' , error : '' , isRequired : true},
            name : {name : 'name' , value : '' , error : '' , isRequired : true},
            desc : {name : 'desc' , value : '' , error : '' , isRequired : true}
          })

    const onChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name , value} = e.target as HTMLInputElement | HTMLTextAreaElement;
        setUser((prev : user)=>({
            ...prev ,
            [name as keyof user] : {...prev[name as keyof user] , error : '', value : value}
        }))
    }

    const onBlurChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name  , value} = e.target
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        type UserKey = keyof typeof user;
        const key = name as UserKey;
        if(key == 'email' && (value == '' || !emailRegex.test(value))){
              setUser((prev : user)=>({
                ...prev,
                 [key] : {...prev[key] , error : "enter a valid email"}
              }))
        }
        else if (user[key] && user[key].isRequired && value == ''){
            setUser((prev : user)=>({
                ...prev,
                 [key] : {...prev[key] , error : `${key} can not be blank`}
              }))
        }
    }

    const onSubmit = async(e : React.FormEvent)=>{
        e.preventDefault();
        const formStatus = isValidate(user)
        if(formStatus.status){
                const model = {
                    name : user.name.value,
                    email : user.email.value,
                    desc : user.desc.value
                }
              fetch('https://portfoliodb-e6386-default-rtdb.firebaseio.com/portDB.json' , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(model)
              })
              .then(()=>{
                  alert("form submitted successfully !!")
              })
              .catch(()=>{
                 alert("Submission Failed")
              })
        }
        else{
            
           setUser((prev : user)=>{
               const updated = {...prev}
               for(const key in formStatus.error){
                updated[key as keyof user].error = formStatus.error[key]
               }
               return updated
           })
        }

    }

    return (
        <div className='w-[95vw] sm:w-[82vw] h-auto pl-6 mx-auto pt-8 py-16 sm:py-16 sm:pt-0 pb-16' id='contact'>
            <h3 className='secHead sm:hidden text-2xl text-left mx-auto sm:ml-16 font-bold text-gray-300 pb-8'>Let&apos;s Connect</h3>
            <div className="section-heading">
                <span className="line"></span>
                <span className="content text-4xl text-left font-bold text-gray-300 pb-8">Let&apos;s Connect</span>
                <span className="line"></span>
            </div>
            <div className=' w-[100%] sm:w-auto flex items-center justify-center'>
                <form action="" className='sm:px-4 py-2 w-[100%] sm:w-[80%]  flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center' onSubmit={(e)=>onSubmit(e)}>
                    <label htmlFor='name' className='text-gray-400 w-[95%] sm:w-[40%] flex flex-col flex-wrap'>
                        <span>Name</span>
                        <input type="text" id='name' name = {user.name.name} value={user.name.value} className=" w-[100%] outline-none  bg-transparent border rounded-md px-4 py-2 bg-none border-green-500" onChange={(e) => onChange(e)} onBlur={onBlurChange}/>
                        <span className='text-xs text-red-600'>{user.name.error ? user.name.error : ''}</span>
                    </label>
                    <label htmlFor='email' className='text-gray-400 w-[95%] sm:w-[40%] flex flex-col'>
                        <span>Email</span>
                        <input type="text" id='email' name = {user.email.name} value={user.email.value} className=" w-[100%] outline-none  bg-transparent border rounded-md px-4 py-2 bg-none border-green-500" onChange={(e) => onChange(e)} onBlur={onBlurChange}/>
                        <span className='text-xs text-red-600'>{user.email.error ? user.email.error : ''}</span>
                    </label>
                    <label htmlFor='msg' className='text-gray-400 w-[95%] sm:w-[82%] flex flex-col'>
                        <span>Message</span>
                        <textarea  id='msg' name = {user.desc.name} value={user.desc.value} rows={8} className=" w-[100%]  outline-none  bg-transparent border  border-green-500 rounded-md px-8 py-2 bg-none" onChange={ (e)=>onChange(e)} onBlur={onBlurChange}/>
                        <span className='text-xs text-red-600'>{user.desc.error ? user.desc.error : ''}</span>
                    </label>
                    <div className='w-[80%] text-left'>
                       <button className=' w-[95%] sm:w-[20%] px-4 py-2 text-white bg-green-700 rounded-md' type='submit'>Send Message</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact
