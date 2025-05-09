import { useContext, useEffect, useState } from "react";
import { addData } from "../Api/PostApi";
import { ContextData } from "../context/ContextApi";

// eslint-disable-next-line react/prop-types
export const Input = ({ setApiData, apiData }) => {
  const { updatedData, setUpdatedData } = useContext(ContextData);

  const [userInput, setInput] = useState({
    title: "",
    body: "",
  });

  const postData = async () => {
    try {
      const res = await addData(userInput);

      if (res.status === 201) {
        setApiData([...apiData, userInput]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    //handling form submit
    e.preventDefault();
    postData();
    setInput({
      title: "",
      body: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value })); //handling input fields
  };

  useEffect(() => {
    // console.log(updatedData);

    updatedData &&
      setInput({
        title: updatedData.title || "",
        body: updatedData.body || "",
      });
  }, [updatedData]);
  return (
    <form
      className="w-[100%] flex justify-center items-start gap-9  md:gap-[1] sm:w-50% p-2 mb-12"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        name="title"
        type="text"
        placeholder="....write title"
        className="input input-primary placeholder:text-[1.2rem]"
        value={userInput.title}
        onChange={(e) => handleInput(e)}
      />
      <input
        name="body"
        type="text"
        placeholder="....write post"
        className="input input-primary  placeholder:text-[1.2rem]"
        value={userInput.body}
        onChange={(e) => handleInput(e)}
      />
      <button className="btn btn-soft btn-primary inline w-[6rem]">Add</button>
    </form>
  );
};
