type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const res = await fetch("https://68468d087dbda7ee7aaf6c87.mockapi.io/users", {
    cache: "no-store", // Optional: ensures fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: MockUser[] = await res.json();

  return (
    <div className="grid grid-cols-4 gap-4 py-10 px-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}
