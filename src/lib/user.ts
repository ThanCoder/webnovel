"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";
import { UserTypes } from "@/types/user_types";
import { User } from "@prisma/client";

export async function getCurrentUser(): Promise<User | null> {
  const user = await prisma.user.findFirst({where:{id:'1'}});
  // console.log(user);
  
  return user;
  // const user = await currentUser();
  // if (!user) return null;

  // //create
  // const userList = await prisma.user.findMany();
  // if (userList.length == 0) {
  //   //create new user
  //   const newUser = await prisma.user.create({
  //     data: {
  //       id: user.id,
  //       name: user?.firstName ?? "",
  //       email: user.emailAddresses[0].emailAddress,
  //       password: "",
  //       profileUrl: user.imageUrl,
  //       type: UserTypes.admin,
  //     },
  //   });
  //   return newUser;
  // }
  // //exists user
  // const foundUser = await prisma.user.findFirst({ where: { id: user.id } });
  // if(foundUser) return foundUser;

  // //not exists
  // const newUser = await prisma.user.create({
  //     data: {
  //       id: user.id,
  //       name: user?.firstName ?? "",
  //       email: user.emailAddresses[0].emailAddress,
  //       password: "",
  //       profileUrl: user.imageUrl,
  //       type: UserTypes.normal,
  //     },
  //   });
  //   return newUser;
}
