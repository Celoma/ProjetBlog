import {prisma} from "../db/prisma"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export default async function home() {


  const allUsers = await prisma.user.findMany({
    include : { posts:false }})
  return (
    <main>
      <p id="test">cocou</p>
      <div className="text-center"><ul>{allUsers.map((User) => (<li>{User.username} {User.permission}</li>))}</ul></div>
    </main>
  );
}
