"use client";

import { useSession } from "next-auth/react";

const page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return( 
    <div>
        Página administrativa <br />
        {JSON.stringify(session)}
    </div>
  )
};

export default page;
