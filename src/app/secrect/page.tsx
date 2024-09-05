
import {  auth } from "../../auth"


export default async function Secrect() {

    const session = await auth();
    if(!session) return <div>You Have No Access.</div>


    return (
      <main className="font-semibold text-green-500">
          <h3>welcome, to the secrect client</h3>
       
         
      </main>
    );
  }
  