import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TestPage from "../components/Test/TestPage";
import { useUserState } from "../context/context";
import Login from "./Login";

const Test = () => {
  const { id } = useParams();
  const { user } = useUserState();
  const [page, setPage] = useState("");
  useEffect(() => {
    setPage(id || "");
  }, []);

  // return <>{user ? <TestPage /> : <Login />}</>;
  return (
    <>
      <TestPage />
    </>
  );
};
export default Test;
