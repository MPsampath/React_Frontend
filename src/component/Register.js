import inputservice from '../services/Postdata';
import React,{useState} from 'react';
import '../css/Register.css';


function Register() {
    
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [company, setCompany] = useState(null);
    const [department, setDepartment] = useState(null);
    const [project, setProject] = useState(null);
   


    const saveEmploye = async ()=>{
        const data = {
            name, address, company, department, project
        }
        const res = await inputservice.save(data);

        if(res.sucsess){
            console.log("Register sucsessfull !!!....")
        }else
        {
            console.log("Register unsucsessful !!...")
        }
       
    }
           
    return(

        <header>
    <div className = "logo">
        <form>
      
                <div className="form-group">
                   <label htmlFor="name">Your Name </label>
                   <input className="form-control" type="text" name="name" id="name"
                   onChange={(event)=>setName(event.target.value)}/>
               </div>
                   <div className="form-group">
                   <label htmlFor="address">Your Address </label>
                   <input className="form-control" type="text" name="address" 
                   id="address" onChange={(event)=>setAddress(event.target.value)}/>
               </div>
               
            <div>
            
                <label>Company</label>
                    <select className="custom-select" name="company" id="company" onChange ={(event)=>setCompany(event.target.value)}>
                     <option defaultValue = "non">Choose...</option>
                       <option value="company 1">Company 1</option>
                       <option value="company 2">Company 2</option>
                       <option value="company 3">Company 3</option>
                   </select>
            </div>
            <div>
                    <label>Department</label>
                    <select className="custom-select" name="department" id="department" onChange ={(event)=>setDepartment(event.target.value)}>
                    <option defaultValue = "non">Choose...</option>
                       <option value="department 1">Department 1</option>
                       <option value="department 2">Department 2</option>
                       <option value="department 3">Department 3</option>
                   </select>
            </div>
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="project" id="project" onChange ={(event)=>setProject(event.target.value)}>
                       <option defaultValue = "non">Choose...</option>
                       <option value="project 1">Project 1</option>
                       <option value="project 2">Project 2</option>
                       <option value="project 3">Project 3</option>
                   </select>
                  
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>saveEmploye()}>Submit</button>
        </form>
    </div>
    </header>
    );
   

}

export default Register;