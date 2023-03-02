import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
  cancel(){
      this.props.history.push('/employees');
  }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
            <h3 className='text-center'>View Employee Details</h3>
            <div className="card-body">
                <div className="row table-bordered">
                    <label><b>Employee First Name: </b></label>
                    <div>{this.state.employee.firstName}</div>
                    <label><b>Employee Last Name: </b></label>
                    <div>{this.state.employee.lastName}</div>
                    <label><b>Employee Email Address: </b></label>
                    <div>{this.state.employee.emailId}</div>
                </div>
            </div>
        </div>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "440px",marginTop:"15px",width:"20%"}}>Cancel</button>
      </div>
    )
  }
}
export default ViewEmployeeComponent