import { auth } from '@/auth';
import NavigationBar from '@/components/dashboardComponents/NavigationBar';
import ProfileComp from '@/components/dashboardComponents/ProfileComp.jsx'
import React from 'react'


async function Dashboard() {
  let session = await auth();
  let user = session?.user;
  return (
    <div>
      <div className='flex gap-4 items-center max-h-screen w-screen'>
      <NavigationBar/>
      
      <ProfileComp email={user?.email} name={user?.name} />
      </div>
    </div>
  )
}

export default Dashboard