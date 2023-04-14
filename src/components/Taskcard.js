import React, { useEffect, useContext } from "react";
import { GlobalContext } from "./CreateGlobalContext";

const Taskcard = () => {
  const { cardData, cardDatas } = useContext(GlobalContext);

  useEffect(() => {
    cardDatas();
  }, []);

  const deleteHandler = (cardD) => {
    const filterTask = cardData.filter(
      (deleteCard) => deleteCard.id !== cardD.id
    );

    if (filterTask) {
      window.confirm("are you sure you wish to delete");
      localStorage.setItem("todoListFormDetails", JSON.stringify(filterTask));

      cardDatas();
    } else {
      window.confirm("your task is empty");
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {cardData &&
        cardData.map((cardD) => {
          return (
            <div
              key={cardData.id}
              className="w-[20%] h-[10rem] bg-slate-600 m-4 rounded-lg p-4 flex flex-col justify-between"
            >
              <p>
                Please remember to
                <p>{cardD.task}</p>
              </p>
              <div className="flex justify-between ">
                <button
                  onClick={()=>deleteHandler(cardD)}
                  className="px-2 rounded-lg bg-[grey] "
                >
                  delete
                </button>
                <button className="px-4 rounded-lg p-2  bg-[grey] ">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Taskcard;
