import React from "react";
import { useState, createContext } from "react";

export const GlobalContext = createContext();
const CreateGlobalContext = ({children}) => {

  // switches on or off the Modal which carries the form
  const  [form, setForm] = useState(false);

// handles the collection of the form Data from the form
  const [formData,setFormData]=useState({task:"",
})





// handles the input of the task
const onChangeHandler =(e)=>{
  const{name,value} = e.target
  setFormData(
    {
      ...formData,[name]:value
    }
  )
}
// monitors the contents or collections of the card lists
const[cardData,setCardData]=useState([])


// function gets from local storage to be used in each card
const cardDatas = () => {
  const localCard=JSON.parse(localStorage.getItem("todoListFormDetails"));
  setCardData(localCard)
};

  const myDependency = {
    form,
    cardDatas,
    setForm,
    formData,
    setFormData,
    onChangeHandler,
    setCardData,
    cardData
  };

  return (
    <GlobalContext.Provider value={myDependency}>
      {children}
    </GlobalContext.Provider>
  );
};

export default CreateGlobalContext;
