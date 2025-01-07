import getManyUser from "@/app/test/service/user";

export const runtime = "edge";

const A = async () => {
  const users = await getManyUser();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default A;
