import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
           id: this.props.match.params.id,
           firstName: '',
           lastName: '',
           emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) =>{
          let employee = res.data;
          this.setState({firstName:employee.firstName,
                         lastName: employee.lastName,
                         emailId: employee.emailId});
        });
    }
    updateEmployee= (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId};
        console.log('employee => '+ JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
            this.props.history.push('/employees');
        })
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input className="form-control" placeholder='First Name' name='firstName' 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input className="form-control" placeholder='Last Name' name='lastName' 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id: </label>
                                        <input className="form-control" placeholder='Email Address' name='emailId' 
                                        value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    <button className="btn btn-success" onClick={this.updateEmployee}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "15px"}}>Cancel</button>
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
