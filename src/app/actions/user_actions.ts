'use server'

import { signJwt } from "@/lib/jwt";
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

export async function addUserAction(prevState: UserAddFormState | null, formData: FormData) {
  let state: UserAddFormState = {
    username: "",
    email: "",
    password: "",
    profileUrl: "",
    userType: "",
    message: "",
    isError: false
  }
  try {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const profileUrl = formData.get('profileUrl') as string;
    const userType = formData.get('userType') as string;

    //set state
    state.username = username;
    state.email = email;
    state.password = password;
    state.profileUrl = profileUrl;
    state.userType = userType;



    if (!username) {
      state = { ...state, isError: true, message: 'username is empty' }
      return state;
    }
    if (!email) {
      state = { ...state, isError: true, message: 'email is empty' }
      return state;
    }
    if (!userType) {
      state = { ...state, isError: true, message: 'type is empty' }
      return state;
    }

    const user = await prisma.user.findUnique({ where: { username } })
    if (user) {
      state = { ...state, isError: true, message: 'username already exists!.choose another username!' }
      return state;
    }

    await prisma.user.create({ data: { username, email, password, profileUrl, type: userType, } })

    //check
    // await new Promise((res) => setTimeout(res, 2000));
    const newState: UserAddFormState = {
      username: "",
      email: "",
      password: "",
      profileUrl: "",
      userType: UserTypes.normal,
      message: "Added",
      isError: false
    }
    state = newState;
  } catch (error) {
    state = { ...state, isError: true, message: `${error}` }
  }
  if (state.isError) {
    return state;

  } else {
    redirect('/login')

  }
}

export async function loginUserAction(prevState: UserLoginFormState | null, formData: FormData) {
  let state: UserLoginFormState = {
    username: "",
    password: "",
    message: "",
    isError: false
  }

  try {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    state.username = username;
    state.password = password;

    if (!username) {
      return { ...state, isError: true, message: 'username is empty!' };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // ✅ cookie send/receive OK
    });

    if (res.ok) {
      return { ...state, isError: false, message: 'Login Success' };
    } else {
      const data = await res.json();
      return { ...state, isError: true, message: `Login error -> ${data.message}` };
    }

  } catch (error) {
    return { ...state, isError: true, message: `${error}` };
  }
}
