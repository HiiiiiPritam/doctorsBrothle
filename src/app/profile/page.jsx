"use client"

import { useEffect } from "react";



function Page() {
  
  useEffect(() => {
    console.log("Logging from client component");
    console.log("Logging inside useEffect - client only");
  }, []);

  return (
    <div>Page</div>
  )
}

export default Page;
