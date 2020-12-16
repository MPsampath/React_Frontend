import React,{Component} from 'react';
import axios from 'axios';
import '../css/Search.css';


class Search extends Component{

    constructor(props)
    {
         super(props);

        this.state = 
        {
            search:[],
            projects:'',
            companys:'',
            departments:''
            
           
        };
        this.handleChange = this.handleChange.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);  
    }
   
  handleChange = (e) => {
    
    const departments = e.target.value;
    console.log(departments)
    this.setState({ 
        departments
    });
    this.componentDidMount();
    e.preventDefault();
     
  
   
    
  };
    componentDidMount() {

        console.log(this.departments);  
        // let formData = new FormData();
        // formData.append('projects', this.state.projects);
        // formData.append('companys', this.state.companys);
        // formData.append('departments', this.state.departments);
        // formData.append('search',  this.state.search);
       axios.post("http://127.0.0.1:8000/api/getSerchData", this.state,this.departments)
       .then(response=>{
        console.log(response);
        const search = response.data
       
         this.setState({
             search
         });
    
    });
       
}    
    // componentDidMount() 
    // {

    //     fetch('http://127.0.0.1:8000/api/search', this.state)
    //     .then(res => res.json())
    //     .then(result=>
    //     {
           
    //         this.setState
    //         ({

    //             search: result
                
                
    //         });
    //     });
       
    // }



    render(){

        const {project,department,company} =this.state
        
    return(

        <div className="search_forme">
   
            <div>
               
                    <label>Company</label>
                  
                    <select className="custom-select" name="companys">
                     <option value = "null">Choose...</option>
                     {this.state.search.map((search ,index) =>(
                       <option key={index} value= {search.com_nsme}>{search.com_nsme}</option>
                       ))}
                   
                   </select>
           
           </div>
        
        
            <div>
                    <label>Department</label>
                    <select className="custom-select" name="departments" value={this.state.value} onChange={this.handleChange}>
                       <option    value = "null">Choose...</option>
                       <option value="department 1">Department 1</option>
                       <option value="department 2">Department 2</option>
                       <option value="department 3">Department 3</option>
                   </select>
            </div>
            <div>
                    <label>Project</label>
                    <select className="custom-select" name="projects" value={project} onChange={(item)=>{this.setState({projects:item.target.value})}}>
                       <option value = "null">Choose...</option>
                       <option value="project 1">Project 1</option>
                       <option value="project 2">Project 2</option>
                       <option value="project 3">Project 3</option>
                   </select>
            </div>
            
           
                
               
        <div>
            
            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Id</th>
                        <th scope="col">Address</th>
                        <th scope="col">Company</th>
                        <th scope="col">Department</th>
                        <th scope="col">Project</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    
                        {
                            //allway need to define key to <tr> tag
                                
                            this.state.search.map((search, index) =>{
                                
                                return(
                                        <tr key={index}>
                                        <th>{search.emp_name}</th>
                                        <td>{search.id}</td>
                                        <td>{search.emp_address}</td>
                                        <td>{search.com_nsme}</td>
                                        <td>{search.dep_name}</td>
                                        <td>{search.pro_name}</td>
                                       
                                        </tr>
                                       
                        );
                        })
                        }
                        
                    </tbody>
                    
            </table>

        </div>
        
         </div>
      
        
    );

    
}
}
export default Search;