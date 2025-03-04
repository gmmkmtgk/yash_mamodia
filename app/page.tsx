// import { PrismaClient } from "@prisma/client";
import client from "@/db";
// const client = new PrismaClient();
// async function getUserDetails() {
//   try {
//     const response = await axios.get("http://localhost:3000/api/user");
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// }

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      name: user?.username,
      email: user?.username,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
