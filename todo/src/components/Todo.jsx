import { useState } from "react";

export const Todo = ()=>{
    // Varibles 
    let [inptext,setInptext] = useState("");
    let [storetext,setStoretext] = useState([]);

    // Functions 
    function taskBtn(){
        // console.log("Task",inptext)
        setStoretext([...storetext,{value:inptext , status:false}])
        // console.log(storetext)
        setInptext("")
    }

    function text(value){
        setInptext(value)
    }

    // function del(index){
    //     console.log("delete",index)
    //     let updatetext = [...storetext]
    //     updatetext.splice(index,1)
    //     setStoretext(updatetext)
    // }

    function status(index){
            let statusArr = storetext.map((value , i)=>{
            return index === i ? {...value , status : !value.status}: value ;
            
            })
            setStoretext(statusArr)
            // console.log(storetext)
    }

    function edit(index){
        let EditArr = storetext.map((value , i)=>{
            
            return index === i ? {...value , value :prompt("Edit Here...", value.value)}: value ;
            
            })
            setStoretext(EditArr)
    }

    return(
        <div>
            <div className="flex w-[80%] mx-auto gap-2 mt-8">
                <input onChange={(e)=>{text(e.target.value)}} placeholder="Enter Todo..." value={inptext} className="flex-1 border-2 border-black rounded-xl p-4 h-[50px]" type="text" />
                <button onClick={taskBtn} className="rounded-lg text-white px-4 h-[50px] bg-green-600 hover:bg-green-700">Add Task</button>
            </div>

            <div className=" w-[80%] mx-auto mt-8 gap-4">
                <ul>
                    {
                        storetext.map((task,index)=>{
                            return(
                                <div className="flex  bg-slate-100 m-2 p-2  rounded-md hover:bg-slate-200">
                                    <p className={`${task.status ? "line-through" : "" } flex-1`}>
                                    <li key={index} className="w-[100%] p-2 ">{task.value}</li> 
                                    </p>
                                    <p className="">
                                    <button onClick={()=>{edit(index)}} className="bg-green-500 h-[40px]  rounded-md text-white px-4 hover:bg-green-700">Edit</button>
                                    <button onClick={()=>{status(index)}} className="bg-blue-500 h-[40px] rounded-md text-white ml-4 w-[90px] px-2  hover:bg-blue-700">{task.status ? "Completed" : "Complete"}</button>
                                    </p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}