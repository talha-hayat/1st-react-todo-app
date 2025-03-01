import { useState } from "react";

export const Todo = ()=>{

    // Varibles 
    let [inptext,setInptext] = useState(" ");
    let [storetext,setStoretext] = useState([]);

    // Functions 
    function taskBtn(){
        console.log("Task",inptext)
        setStoretext([...storetext,inptext])
    }

    function text(value){
        // console.log("Change",value)
        setInptext(value)
    }
    return(
        <div>
            <div className="flex w-[80%] mx-auto gap-2 mt-8">
                <input onChange={(e)=>{text(e.target.value)}} className="flex-1 border-2 border-black rounded-xl p-4 h-[50px]" type="text" placeholder="Enter Task Here" />
                <button onClick={taskBtn} className="rounded-lg text-white px-4 h-[50px] bg-green-600 hover:bg-green-700">Add Task</button>
            </div>

            <div className=" w-[80%] mx-auto mt-8">
                <ul>
                    {/* <li className="p-4 rounded-md bg-slate-100 w-[100%] hover:bg-slate-200">
                        {storetext}
                    </li> */}

                    {
                        storetext.map((task,index)=>{
                            return(<li key={index} className="p-4 rounded-md bg-slate-100 w-[100%] mb-2 hover:bg-slate-200">
                        {task}
                    </li> )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}