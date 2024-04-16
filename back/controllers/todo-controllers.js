const Todos = require('../models/todo.js')

const getTodos = async(req, res , next)=> {
   const todos = await Todos.find().exec()
      
      
        res.json(todos)
      
      
}

const createTodo = async (req , res , next) => {

    const title = req.body.title
    
    const made =  new Todos (
        {
            title : title
        }
    ) 

   await made.save()
   
   res.json( {massege : 'ok'})
}



 
const deleteTodo= async (req, res)=>{
    
       try{ 
       let moi  = req.params.title ;
      
      
                
        const deleteItem = await Todos.findOneAndDelete({title : moi})
        
        res.json(moi);
       }catch(err){  
        res.json("toi");
       }
}





exports.deleteTodo = deleteTodo
exports.getTodos = getTodos 
exports.createTodo = createTodo 