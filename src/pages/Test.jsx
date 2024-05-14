import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TestPage from "../components/test/TestPage";
const Test = () => {
  const { id } = useParams();
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(id || "");
  }, []);

  return (
    <>
      <TestPage />
    </>
  );
};
export default Test;
