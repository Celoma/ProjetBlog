"use client"
import {prisma} from "../db/prisma"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";



export default async function home() {


  const handleClick = () => {
    const testElement = document.getElementById("test");
      if (testElement) {
        testElement.textContent = "coucou";
      }
  };
  const allUsers = await prisma.user.findMany({
    include : { posts:false }})
  return (
    <main>
      <p id="test">cocou</p>
      <a href="" onClick={handleClick}>Tdest</a>
      <div className="text-center"><ul>{allUsers.map((User: { permission: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (<li>{User.permission}</li>))}</ul></div>
    </main>
  );
}
