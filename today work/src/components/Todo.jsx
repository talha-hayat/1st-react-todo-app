import { useState } from "react"

export function Todo(){

    let [inp,setInp] =useState("") 
    let [inpArr , setInpArr] = useState([])

    function change(value){
        setInp(value)
    }

    function addTask(){
        setInpArr([...inpArr , {value:inp.trim() , status:false}]);
        console.log(inpArr)
        setInp("");
    }

    function deleteAll(){
        setInpArr([])
    }

    return(
        <div>

            <div className="flex h-[40px] mt-8 gap-2 w-[80%] mx-auto">
                <input value={inp} onChange={(e)=>{change(e.target.value)}} className="border-2 border-black flex-1 px-3 rounded-xl" type="text" placeholder="Enter Task..."/>
                <button onClick={addTask} className="border-2 border-green-500 text-green-500 rounded-lg px-2 hover:bg-green-500 hover:text-white">Add Todo</button>
                <button onClick={deleteAll} className="border-2 border-red-500 text-red-500 rounded-lg px-2 hover:bg-red-500 hover:text-white">Delete All</button>
            </div>

            <div className=" h-[100%] mt-8  w-[80%] mx-auto ">
                <ul >
                    {
                        inpArr.map((task , index)=>{

                            return(
                            <li key={index} className="mt-3 p-4 w-[100%] flex justify-between items-center bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200">
                                <p>{task.value}</p>
                                <div className="">
                                <button className=" bg-green-500 text-white rounded-lg p-1 px-4 mr-4 hover:bg-green-600">Edit</button>  
                                <button className="text-white bg-red-500 rounded-lg p-1 px-4  hover:bg-red-600 ">Delete</button>
                                </div> 
                            </li>)
                        })
                    }

                    {/*  */}
                </ul>
            </div>
        </div>
    )
}