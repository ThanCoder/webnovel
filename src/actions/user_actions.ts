'use server'


import { prisma } from "@/lib/prisma";
import { UserTypes } from "@/types/user_types";
import { redirect } from "next/navigation";

export type UserAddFormState = {
  username: string,
  email: string,
  password: string,
  profileUrl: string,
  userType: string,

  message: string,
  isError: boolean,
}

export type UserLoginFormState = {
  username: string,
  password: string,

  message: string,
  isError: boolean,
}

