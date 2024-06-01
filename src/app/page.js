import { auth } from "@/auth";
import HomeComp from "@/components/calls/Loaded";



export default async function Home() {
 
  let session= await auth();
  let user= session?.user;
  return (
  <>
  <h1>This is the home page</h1>
    <HomeComp email={user?.email}/>
  </>
  );
}
