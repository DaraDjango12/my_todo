import React, { useContext } from "react";
import { GlobalContext } from "./CreateGlobalContext";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const { onChangeHandler, cardDatas, formData, setForm, setFormData } =
    useContext(GlobalContext);

  const { task } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData.task)
    const data = { task, id: uuidv4() };

    const local = localStorage.getItem("todoListFormDetails")
      ? JSON.parse(localStorage.getItem("todoListFormDetails"))
      : [];

    const localcopy = [...local, data];
    localStorage.setItem("todoListFormDetails", JSON.stringify(localcopy));

    setFormData({ task: "" });

    // cardDatas function causes the page to rerender onclick of the button
    cardDatas();
  };
  // continue from here

  return (
    <div className="w-[40%] h-[70%] bg-slate-100 rounded-lg p-4">
      <form onSubmit={handleSubmit}>
        <label>input TAsk</label>
        {/* <p className="text-[red]">{formData.task}</p> */}
        <input
          name="task"
          value={formData.task}
          onChange={onChangeHandler}
          className="p-2 w-full rounded mt-2"
          type="text"
          placeholder="type ur task here"
        />
        <div className="flex justify-center mt-2">
          <button className="bg-slate-500 rounded-lg mt-2 px-4 py-2">
            Submit
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          setForm(false);
        }}
        className="bg-slate-500 rounded-lg mt-2 px-4 py-2"
      >
        Close
      </button>
    </div>
  );
};

export default TaskForm;
