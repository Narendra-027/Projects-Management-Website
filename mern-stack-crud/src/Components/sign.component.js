import React,{Component} from 'react';
import axios from "axios";
import './form.css';


class Sign extends Component{
    constructor(){
        super()
        this.state={
            fullname:'',
            username:'',
            email:'',
            password:'',
           
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    

    
    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password

        }
        axios.get("http://localhost:4000/projects/signup/",registered)
        .then(response=>window.location="/Add")

        // this.setState({
        //     fullname:'',
        //     username:'',
        //     email:'',
        //     password:''
        // })
        localStorage.setItem("user",registered.email);
    }
    render(){
        
  return (
      
     <div>
         <div className='container'>
             <center>
             <div className='form-div'>
                 <form onSubmit={this.onSubmit} action='/' method="GET">
                     <input type='text'
                     placeholder='Full Name'
                     onChange={this.changeFullName}
                     value={this.state.fullname}
                     className = 'form-control form-group'
                     />
                     <br/>
                     <input type='text'
                     placeholder='Username'
                     onChange={this.changeUsername}
                     value={this.state.username}
                     className = 'form-control form-group'
                     />
                     <br/>
                     <input type='text'
                     placeholder='E-mail'
                     onChange={this.changeEmail}
                     value={this.state.email}
                     className = 'form-control form-group'
                     />
                     <br/>
                     <input type='password'
                     placeholder='Password'
                     onChange={this.changePassword}
                     value={this.state.password}
                
                     className = 'form-control form-group'
                     />
                     <br/>
                     <br/>
                     <input type ='submit' className='btn btn-danger btn block'  value='Submit'/>
                 </form>
             </div>
             </center>
         </div>

     </div>
     
   
  );
  
 
}}

export default Sign;

