import React ,{useState , useEffect} from "react";
import axios from "axios";
const Todo =(prob) =>
{
    const[todos , settodos] = useState("")
    const[lists , setlists ] = useState([])

useEffect(
    ()=> {
       axios.get('http://localhost:5000/api/todo').then(
           (result)=> {
           const todoData = result.data
           const todolist = []
        
            for(const key in todoData)
            {
                todolist.push(
                    {
                      id : key , 
                      title: todoData[key].title
                    }
             )
            }
            setlists(todolist)
           })
    })

    const handlecheck = async(id)=>
    {   
       
      try{ 
       
        const res = await axios.delete(`http://localhost:5000/api/todo/${id}`)
        const newListItems = lists.filter((item) => item.title !== id)
            
        setlists(newListItems);
 
      }catch(err){
        console.log(id);
       }

         
       
    }


    const handlelist =(e)=>
    {
        e.preventDefault()

      setlists(lists.concat(todos))

       todoprint()
    }

     const todoprint = ()=>
     {
        axios.post('http://localhost:5000/api/todo' ,{title:  todos}).then(
            (res)=>{console.log(res)}
          ).catch(
            (err)=>{console.log(err)}
          )
          settodos("")
     }
    return(
        <div>

       <div className="modal fade" id="myModal">
        <div className="modal-dialog">
       <div className="modal-content">   
       <div className="modal-header">
        <h2>fais-le suprêmement</h2>
       <button id="closse" className="close" data-dismiss="modal">×</button>
       </div>
       <div className="modal-body">
        <form  onSubmit={handlelist}>
        <input id="inputc" className="form-control " type="text" placeholder="to do..."  onChange={(e)=> {settodos(e.target.value)}}
         value={todos}></input>
         <button  className="btn btn-primary "> Add </button>
        </form>
        </div>  
        </div>
        </div>
        </div>
        <div id="moncard" className="card  bg-secondary text-white justify-content-center"> 
        <h1>Todo List</h1>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Add Task
       </button>
        <ul id="ulc" className=" list-group form-check">
            <li id="ins"  className="list-group-item  " > <h5> my tasks </h5> </li>
            {
               lists.map((title) =>{ 
                return( 
                    <>
                   <li className="list-group-item  form-check-label"  key={title.id}>
                    <input type="checkbox"  className="form-check-input"  key={title.id} onChange={()=>{
                    handlecheck(title.title)
                   
                    } } ></input>
                        
                     {title.title}
                    </li>
                     
                       </>
                )
               })

            }
        </ul>
        </div>
        </div>
    
    )



}

export default Todo





