"use client"
import {prisma} from "@/db/prisma";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";



export default async function home() {


  const handleClick = () => {
    const testElement = document.getElementById("test");
      if (testElement) {
        testElement.textContent = "coucou";
      }
  };
  await prisma.user.create({
    data:{
      sex: 0,
      password: "admin",
      permission: "admin",
      username : "admin",
      email : "admin@admin.com",
          posts:{
            create:{
              title:"My First Post",
              body:"Lots of interesting stuff",
              slug:"my-first-post"	    },},},})
  const allUsers = await prisma.User.findMany({
    include : { post:true }})
  return (
    <main>
      <p id="test">cocou</p>
      <a href="" onClick={handleClick}>Test</a>
      <div className="text-center"><ul>{allUsers.map((User: { username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (<li>{User.username}</li>))}</ul></div>
    </main>
  );
}
