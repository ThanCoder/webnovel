import { getCurrentUser } from "@/lib/user";
import Form from "./form";
import { redirect } from "next/navigation";

async function newUserPgae({params}:{params:Promise<{userId:string}>}) {
  const userId = (await params).userId;
  const user = await getCurrentUser();
  if(!user){
    return redirect('/')
  }

  return <div className="container">
    <Form userId={userId} />
  </div>;
}

export default newUserPgae;
