const Test = () => {
  const users = [
    {
      id: 1,
      username: "a",
      email: "public.a@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];
  return (
    <>
      <div key={users.id}>
        <h1>{users.username}</h1>
      </div>
    </>
  );
};
export default Test;
