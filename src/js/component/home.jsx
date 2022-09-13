import React from "react";
import { Input} from "reactstrap";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const[Todolist,setTodoList] = useState([]);
    const[nuevaTask,setnuevaTask] = useState(" ");
	const handleChange =(evento) => {
		setnuevaTask(evento.target.value);
	};
	const handlerKeypress =(evento) => {
		//event.preventDefault();
		if(evento.key=='Enter') {
			
			if(nuevaTask!=' '){
				
				setTodoList([...Todolist,nuevaTask])
				setnuevaTask(' ')
			}
		}
	};
	const borrar =(id) => {
		const listafiltrada = Todolist.filter((e,index) => index !==id); 
		setTodoList(listafiltrada);
	};

	return (
		<div className="container">
			<h1>ToDo List</h1>
			
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">

						<div className="todo-list">
                        	<div className="todo-item">
                            	<div className="checker">
									<Input 
									type="text"
									placeholder="Tarea por hacer"
									className="form-control"
									id="floatingInput"
									onChange={handleChange} 
									value={nuevaTask}
									onKeyDown={handlerKeypress}
									/>
									
									{Todolist.map((tarea,i)=>{
										return(
											<div class="todo-list">
												<div className="todo-item">
													<div className="checker"><span className=""><input type="checkbox"/></span></div>
													<span key={i} >{tarea}
													</span>
													<a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>	
												</div>
											</div>
										)
									})
									}	
									
									</div>
									</div>
									</div>
					</div>
				</div>
			</div>
		</div>	
    </div>
  
	);
};

export default Home;
