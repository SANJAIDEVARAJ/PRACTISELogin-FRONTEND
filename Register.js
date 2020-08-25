import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



class Register extends React.Component{
    constructor(props){
        super();
        this.state={
            email:"",password:""
        }
     }
    
handler =() =>{
    
}



render(){
    return(
        <div>
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Registeration</h3>
                        
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.handler}>
                            <div class="input-group form-group">
                                
                                <input type="text" class="form-control" placeholder="Full Name" id="name" 
                                />
                                
                            </div>
                            <div class="input-group form-group">
                                
                                <input type="text" class="form-control" placeholder="email" id="email" 
                                value ={this.state.email} onChange={(e) =>this.setState({email:e.target.value})}/>
                                
                            </div>
                            <div class="input-group form-group">
                               
                                <input type="password" class="form-control" placeholder="password" id="password"
                                value ={this.state.password} onChange={(f) =>this.setState({password:f.target.value})}/>
                            </div>
                        
                            <div class="form-group">
                                <input type="submit" value="Register" class="btn float-right btn-primary"/>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
        
          </div>
    );
}
}

export default Register;