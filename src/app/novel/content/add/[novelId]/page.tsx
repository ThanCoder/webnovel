import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import ContentForm from "./content_form";

async function AddContentPage({
  params,
}: {
  params: Promise<{ novelId: string }>;
}) {
  const novelId = (await params).novelId;
  const novel = await prisma.novel.findUnique({
    where: { id: parseInt(novelId) },
  });
  const user = await getCurrentUser();

  if (!user) {
    return <h1 className="text-center text-red-600 mt-5">Not Sign In</h1>;
  }
  if (user.isBanned) {
    return <h1 className="text-center text-red-600 mt-5">Your Are Banned!</h1>;
  }

  if (novel === null) {
    return (
      <div className="container text-center text-5xl mt-4 text-red-600">
        Not Found Novel!
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center mt-4">{novel.title}</h1>
        {/* add chapter && content */}
        <ContentForm novel={novel} />
    </div>
  );
}

export default AddContentPage;
