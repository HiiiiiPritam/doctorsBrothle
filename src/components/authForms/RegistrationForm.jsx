"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

function RegistrationForm() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");


      const response = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
      if (response.status === 201) {
        alert("user cretaed successfully")
        router.push('/login');
      } else {
        alert("Failed to create user")
        console.error("Failed to create user", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <form className='bg-black text-white' onSubmit={handleSubmit}>
      <br/>
        <label htmlFor="name">Name</label>
        <input className='bg-blue-200' name='name' id='name' />
        <br />
        <br/>
        <label htmlFor="email">Email Address</label>
        <input className='bg-blue-200' name='email' id='email' />
        <br />
        <br/>
        <label htmlFor="password">Password</label>
        <input className='bg-blue-200' name='password' id='password' />
        <br />
        <br/>
        <button className='bg-orange-500 rounded-md p-2' type='submit'>Signup</button>
      </form>
    </>
  );
}

export default RegistrationForm;