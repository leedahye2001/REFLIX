import { useState } from "react";
import axios from "axios";

const New = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    // axios
    //   .post("/new", {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     email: title,
    //     password: body,
    //   })
    //   .then((response) => console.log(response));
  };
  return (
    <div>
      <h2>아아아아</h2>
      <div className="mb-6">
        <label
          htmlFor="title-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          제목
        </label>
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>
      <div className="mb-6">
        <label
          htmlFor="body-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          내용
        </label>
        <textarea
          type="text"
          id="body-input"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows="15"
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        전송
      </button>
    </div>
  );
};

export default New;
