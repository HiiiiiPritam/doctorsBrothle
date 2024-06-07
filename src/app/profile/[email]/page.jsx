import React from 'react'

function ProfilePage({params}) {
  let email= params.email;
  ////a fetch request to get the user by his id
  
  return (
    <>
    <div>ProfilePage</div>
    <h1>{email}</h1>
    </>
  )
}

export default ProfilePage