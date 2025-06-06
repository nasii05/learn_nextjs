import {users} from "../route";

export async function GET(
    request: Request,
    { params} : { params : {id: string} }
){
   const { id } =  await params;
   const user = users.find(user => user.id === parseInt(id));
   return Response.json(user);
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
   const { id } = await params;
   const body = await request.json();

   const userIndex = users.findIndex(user => user.id === parseInt(id));
   if (userIndex === -1) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
   }

   // Merge existing user data with new data
   users[userIndex] = { ...users[userIndex], ...body };
   console.log(users);
   return Response.json(users[userIndex]);
}

export async function DELETE(
    request: Request,
    { params }: { params : {id: string} }
){
   const { id } = await params;

   const userIndex = users.findIndex(user => user.id === parseInt(id));
   if(userIndex === -1){
      return new Response(JSON.stringify({error: "User not found"}), { status: 404 });
   }

   const deletedUser = users.splice(userIndex, 1)[0];
   console.log(users)
   return Response.json({ message: "User deleted", user: deletedUser });
}