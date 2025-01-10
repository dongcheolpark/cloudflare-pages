import { getManyUser } from "@/app/test/service/user";

export const runtime = "edge";

const A = async () => {
  const users = await getManyUser();

  return (
    <div>
      <p>이건 서버 컴포넌트입니다.</p>
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
