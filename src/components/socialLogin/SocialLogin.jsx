import React from 'react'
import { doSocialLogin } from '@/app/actions/authActions'


function SocialLogin() {
  return (
    <div>
      <form action={doSocialLogin}>
      <button className='bg-green-500 mx-2 text-white'  type='submit' name='action' value="google" >Login with google</button >

      <button className='bg-purple-500 text-blue-900' type='submit' name='action' value="github">Login with github</button >
      </form>
    </div>
  )
}

export default SocialLogin