import TImage from "@/components/t_image";
import TTimeAgo from "@/components/time_ago";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { UserTypes } from "@/types/user_types";

async function UserListPage() {
  const user = await getCurrentUser();

  if (!user) {
    return <h1 className="text-center text-red-600 mt-5">Not Sign In</h1>;
  }
  if (user.type !== UserTypes.admin) {
    return <h1 className="text-center text-red-600 mt-5">You Not Adamin</h1>;
  }
  const userList = await prisma.user.findMany({ orderBy: { date: "desc" } });

  return (
    <div className="container">
      <div className="table w-full ...">
        <div className="table-header-group ...">
          <div className="table-row">
            <div className="table-cell text-left ...">Image</div>
            <div className="table-cell text-left ...">Name</div>
            <div className="table-cell text-left ...">Type</div>
            <div className="table-cell text-left ...">isBanned</div>
            <div className="table-cell text-left ...">Email</div>
            <div className="table-cell text-left ...">Date</div>
          </div>
        </div>
        <div className="table-row-group">
          {userList.map((u) => (
            <div className="table-row border-b-gray-400 border-2 ">
              <div className="table-cell ..."><TImage src={u.profileUrl} width={50} height={50}/></div>
              <div className="table-cell ...">{u.name}</div>
              <div className="table-cell ...">{u.type}</div>
              <div className="table-cell ...">{`${u.isBanned}`}</div>
              <div className="table-cell ...">{u.email}</div>
              <div className="table-cell ..."><TTimeAgo date={u.date}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserListPage;
