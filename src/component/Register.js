import React,{Component} from 'react';
import '../css/Register.css';
import axios from 'axios';


class Register extends Component{

    constructor(props)
    {
        super(props);

            this.state = 
            {
                projects:'',
                companys:'',
                departments:'',
                name:'',
                address:''
                
        
            };
            this.saveEmploye = this.saveEmploye.bind(this);

          
    }
   
    saveEmploye(){
          
        let formData = new FormData();
        formData.append('project', this.state.projects);
        formData.append('company', this.state.companys);
        formData.append('department', this.state.departments);
        formData.append('name',  this.state.name);
        formData.append('address',  this.state.address);
        console.log(this.state);
    axios.post("http://127.0.0.1:8000/api/saveEmploy", formData)
    .then(response=>{
    console.log(response);
    if(response.sucsess){
                    console.log("Register sucsessfull !!!....")
                }else
                {
                    console.log("Register unsucsessful !!...")
                }
    
})

    }

    render(){
           
    return(

        <header>
    <div className = "logo">
        <form>
      
                <div className="form-group">
                   <label htmlFor="name">Your Name </label>
                   <input className="form-control" type="text" name="name" id="name"
                   onChange={e => this.setState({ name: e.target.value })}/>
               </div>
                   <div className="form-group">
                   <label htmlFor="address">Your Address </label>
                   <input className="form-control" type="text" name="address" 
                   onChange={e => this.setState({ address: e.target.value })}/>
               </div>
               
            <div>
            
                <label>Company</label>
                    <select className="custom-select" name="companys" id="companys" onChange={e => this.setState({ companys: e.target.value })}>
                     <option defaultValue = "non">Choose...</option>
                       <option value="company 1">Company 1</option>
                       <option value="company 2">Company 2</option>
                       <option value="company 3">Company 3</option>
                   </select>
            </div>
            <div>
                    <label>Department</label>
                    <select className="custom-select" name="departments" id="departments" onChange={e => this.setState({ departments: e.target.value })}>
                    <option defaultValue = "non">Choose...</option>
                       <option value="department 1">Department 1</option>
                       <option value="department 2">Department 2</option>
                       <option value="department 3">Department 3</option>
                   </select>
            </div>
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="projects" id="projects" onChange={e => this.setState({ projects: e.target.value })}>
                       <option defaultValue = "non">Choose...</option>
                       <option value="project 1">Project 1</option>
                       <option value="project 2">Project 2</option>
                       <option value="project 3">Project 3</option>
                   </select>
                  
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>this.saveEmploye()}>Submit</button>
        </form>
    </div>
    </header>
    );
   

}
}


export default Register;