import { auth } from '@/auth';
import ContentSection from '@/components/dashboardComponents/ContentSection';
import NavigationBar from '@/components/dashboardComponents/NavigationBar';
import ProfileComp from '@/components/dashboardComponents/ProfileComp.jsx'
import React from 'react'


async function Dashboard() {
  let session = await auth();
  let user = session?.user;
  return (
    <div>
      <div className='flex gap-2 bg-slate-200 items-center max-h-screen p-4 w-screen'>
      <NavigationBar/>
      <ContentSection email={user?.email}/>
      <ProfileComp email={user?.email} name={user?.name} />
      </div>
    </div>
  )
}

export default Dashboard