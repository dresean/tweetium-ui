import axios from 'axios'
import React, { Component } from 'react'
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: false
        };
    }

    handleSubmit = () => {
        const { email, password } = this.state
        return axios.post('http://localhost:5000', {email, password})
        .then(response => {
            if(response) {
                this.props.history.push('')
            }
        })
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
            auth: true
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    placeholder="Email"/>
                    <input 
                    type="text" 
                    name="password" 
                    value={this.state.password} 
                    placeholder="Password"/>
                </form>
            </div>
        );
    }
}

export default login;