


import { signIn, auth, signOut } from "../../auth"

export default async function SignIn() {

    const session = await auth();

    console.log(session);
    const user = session?.user
   
// console.log(user.image)
    
    return user ? (

        <>
            <h1 className="text-2xl"> Welcome {user.name}</h1>

           <img src= {user?.image} alt="no image" />
            <p>Email: {user.email}</p>
            <form
                action={async () => {
                    "use server"
                    await signOut();
                }}
            >
                <button className="p-2 border-2 bg-blue-400 text-white" type="submit">Sign out</button>
            </form>
        </>

    ) :
        (



            <>
<h1 className="text-2xl"> You are not Authenticate, cheeck bellow to signin</h1>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <button className="p-2 border-2 bg-blue-400 text-white" type="submit">Signin with Google</button>
                </form>




            </>
        )

}

//  <form
// action={async () => {
//     "use server"
//     await signIn("google")
//   }}
// >
//   <button className = "p-2 border-2 bg-blue-400 text-white" type="submit">Signin with Google</button>
// </form>
  