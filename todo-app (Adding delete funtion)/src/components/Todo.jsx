import { useState } from "react";

export const Todo = ()=>{
    // Varibles 
    let [inptext,setInptext] = useState(" ");
    let [storetext,setStoretext] = useState([]);

    // Functions 
    function taskBtn(){
        console.log("Task",inptext)
        setStoretext([...storetext,inptext])
        setInptext("")
    }

    function text(value){
        setInptext(value)
    }

    function del(index){
        console.log("delete",index)
        let updatetext = [...storetext]
        updatetext.splice(index,1)
        setStoretext(updatetext)
    }
    return(
        <div>
            <div className="flex w-[80%] mx-auto gap-2 mt-8">
                <input onChange={(e)=>{text(e.target.value)}} placeholder="Enter Todo..." value={inptext} className="flex-1 border-2 border-black rounded-xl p-4 h-[50px]" type="text" />
                <button onClick={taskBtn} className="rounded-lg text-white px-4 h-[50px] bg-green-600 hover:bg-green-700">Add Task</button>
            </div>

            <div className=" w-[80%] mx-auto mt-8">
                <ul>
                    {
                        storetext.map((task,index)=>{
                            return(
                                <div className="flex justify-around bg-slate-100 m-2 p-2  rounded-md    hover:bg-slate-200">
                            <li key={index} className="w-[100%] p-2 ">
                        {task}
                        
                    </li> 
                    <button onClick={()=>{del(index)}} className="bg-red-500 h-[40px]  rounded-md text-white px-4 hover:bg-red-700">Delete</button>
                    </div>
                )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}