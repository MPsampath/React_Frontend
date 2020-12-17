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
                        departments:'',
                        
                
                    };
                this.projectChange = this.projectChange.bind(this);
                this.companyChange = this.companyChange.bind(this);
                this.departmentChange = this.departmentChange.bind(this);
                this.dataInput = this.dataInput.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                  
            }
        // project get value
            projectChange (event){
                this.setState({ 
                    projects: event.target.value

                });


                this.handleSubmit();
            
                };
        //department get value
            departmentChange (event){
                this.setState({ 
                    departments: event.target.value
                                
                });

                this.handleSubmit();
                                    
                };
        //company get value
        companyChange (event) {
                this.setState({ 
                    companys: event.target.value
                                                
                });
                    
                this.handleSubmit();                           
                
                };

        handleSubmit(event) {
     
            alert("click ok")
            
         this.dataInput();
         
                    }
        dataInput(event){
            console.log(this.state);  
            let formData = new FormData();
            formData.append('projects', this.state.projects);
            formData.append('companys', this.state.companys);
            formData.append('departments', this.state.departments);
            formData.append('search',  this.state.search);
        axios.post("http://127.0.0.1:8000/api/getSerchData", formData)
        .then(response=>{
        console.log(response);
        const search = response.data

                this.setState({

                    search
                                
                            });

                });

        }               

        componentDidMount() {
                
                this.dataInput();
            
            }    


render(){
   
    return(

            <div className="search_forme">
                <div>
                    
                    <label>Company</label>
                        <select className="custom-select" name="companys" value={this.state.value} onChange={this.companyChange}>
                            <option value = "null">Choose...</option>
                            {
                            this.state.search.map((search ,index) =>(
                            <option key={index} value= {search.com_nsme}>{search.com_nsme}</option>
                            ))
                            }                
                        </select>
                
                </div>
                <div>
                        <label>Department</label>
                            <select className="custom-select" name="departments" value={this.state.value} onChange={this.departmentChange}>
                                <option    value = "null">Choose...</option>
                                {
                                this.state.search.map((search ,index) =>(
                                <option key={index} value= {search.dep_name}>{search.dep_name}</option>
                                ))
                                }
                            </select>
                    </div> 

                    <div>
                        <label>Project</label>
                            <select className="custom-select" name="projects" value={this.state.value} onChange={this.projectChange}>
                                <option value = "null">Choose...</option>
                                {
                                this.state.search.map((search ,index) =>(

                                <option key={index} value= {search.pro_name}>{search.pro_name}</option>
                                
                                ))
                                }
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

                    </div>`
            
            </div>
      
        );
    
    }

}
export default Search;