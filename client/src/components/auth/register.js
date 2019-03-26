

import React, { Component } from 'react'
import axios from 'axios'
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            name: '',
            email: '',
            password1: '',
            password2: '',
            password: '',
            validating: false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.password1 === this.state.password2) {
            this.setState({password: this.state.password2})
        } else if(this.state.password1 !== this.state.password2) {
            alert('Your passwords do not match! Please try again')
            return
        }
        axios.post('http://localhost:5000/register', {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        })
        .then(res => {
            console.log("It worked", res.data)
            console.log("Here is the message", res.data.Message)
            alert(res.data.Message)
            return this.props.history.push('/login')
        })
        .catch(err => {
            if(err.response) {
            if(err.response.status === 401){
                alert(err.response.data.Message, "\n response.status")
                console.log('err response received! \n\n\n\n')
                this.props.history.push('/login')
                return
            } else return console.log('THis is fucked up!', err.response.data.Message)
            } else if(err.request) {
                console.log('no response recieved! \n\n\n\n', err.request)
            } else console.log('the request had a trigger, oh no! \n\n\n\n', err.message)
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBlur = () => {
        return this.setState({validating: true})
    }

    usernameValid = text => {
        let reg = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    }

    render() {
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label for='username'>Username</label>
            <input placeholder='username' type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
                <h3>Please use letters, numbers, underscores (_) and periods (.) only</h3>
            </fieldset>
            <fieldset>
                <label for='name'>Name</label>
            <input placeholder='name' type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <h3></h3>
            </fieldset>
            <fieldset>
                <label for='email'>Email</label>
            <input placeholder='email' type='email' value={this.state.email} onChange={this.handleChange} name='email'/>
                <h3></h3>
            </fieldset>
            <fieldset>
                <label for='password1'>Password</label>
            <input placeholder='password' type='password' value={this.state.password1} onChange={this.handleChange} name='password1'/>
                <h3></h3>
            </fieldset>
            <fieldset>
                <label for='password2'>Confirm Password</label>
            <input placeholder='confirm password' type='password' value={this.state.password2} onChange={this.handleChange} name='password2'/>
                <h3></h3>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
        </div>
        )
    }
}



export default Register


//todo fix errors:
// form filled but not seeing new values
// form filled with duplicate info not correct error
// form errors in duplicate headers in server route handling