"use client"

import { doCredentialLogin } from "@/app/actions/authActions";
import { useRouter } from 'next/navigation'
import SocialLogin from "../socialLogin/SocialLogin";
import React, { useState } from 'react'

function LoginForm() {

  let [error, setError]= useState("")
    let router= useRouter();
  async function handelFormSubmit(e){
    e.preventDefault();
    try {
      const formData= new FormData(e.currentTarget);
      const response= await doCredentialLogin(formData)
      if(!!response.error){
        setError(response.error.message)
      }else{
        router.push('/')
      }

    } catch (error) {
      setError("Check your credentials")
    }
  }
  return (
    <>
    {<h3 className="text-red-500">{error}</h3>}
    <form onSubmit={handelFormSubmit}>
    <label htmlFor="email">Email Address</label>
    <input name='email' id='email' />
    <br />
    <label htmlFor="password">Password</label>
    <input name='password' id='password' />
    <br />
    <button >Login</button>
    </form>

    <SocialLogin/>
    </>
  )
}

export default LoginForm