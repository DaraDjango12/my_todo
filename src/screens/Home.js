import React,{useContext} from 'react'
import Modal from '../Modal'
import TaskForm from '../components/TaskForm'
import { GlobalContext } from '../components/CreateGlobalContext'
import Taskcard from '../components/Taskcard'

const Home = () => {

    const {form,setForm,setCardData,cardDatas} = useContext(GlobalContext)

    const toggle=()=>{
        setForm(true)
        
    }

    const handleClearTask=()=>{
        localStorage.removeItem("todoListFormDetails")
        cardDatas()

        // setCardData([])

        // const collect={task:""}
        // const copyCollect=[...collect]

        // localStorage.setItem('todoListFormDetails',JSON.stringify({task:""}));
        

    }


  return (
    <div>
        <div className='flex justify-between'>
        <button onClick={toggle} className='rounded-lg px-8 py-2 mt-8 bg-slate-500' >
            Add Task
        </button>

        <button onClick={handleClearTask} className='rounded-lg px-8 py-2 mt-8 bg-slate-500' >
            Clear All Task
        </button>
        </div>

        { form &&
            (<Modal>
                <TaskForm/>
            </Modal> )
        }
        <div>
            <Taskcard/>
        </div>

    </div>
  )
}

export default Home