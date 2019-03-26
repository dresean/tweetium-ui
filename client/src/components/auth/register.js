// import React, { Component } from 'react'
// import { Form, fieldset, h3, label, Input, Button } from 'reactstrap'
// import axios from 'axios'
// // import { withCookies, cookies } from 'react-cookie'
// // import { withRouter } from 'react-router-dom'
// class Register extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             email: '',
//             password1: '',
//             password2: '',
//             name: '',
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         let password 
//         password = this.state.password1 === this.state.password2
//         ? this.state.password1
//         : null
//        axios.post('http://localhost:5000/register', {
//             username: this.state.username,
//             email: this.state.email,
//             password: password,
//             name: this.state.name
//         })
//         .then(res => {
//             // const { cookies } = this.props
//             console.log(res)
//             console.log(res.data)
//             // cookies.set('email', res.data.token.email, { path: '/'})
//             // cookies.set('username', res.data.token.username, { path: '/'})
//             // cookies.set('userId', res.data.token.userId, { path: '/'})
//             // this.setState({message: res.data.Message})
//             // alert(this.state.message)
//             // this.props.history.push('/login')
//         })
//         .catch(err => {
//             console.log(err)
//             // this.setState({message: err.message})
//             // alert(this.state.message)
//             // this.props.history.push('/register')
//         })
//     }

//     render() {
//         const usernameChars = this.state.username.length || 0
//         const nameChars = this.state.name.length || 0
//         return (
//             <div>
//                 <h1>Create your profile</h1>
//                 <Form onSubmit={this.handleChange}>
//                     <fieldset>
//                         <label for='username'>Username</label>
//                         <Input 
//                         type='text' 
//                         value={this.state.username} 
//                         onChange={this.handleChange} 
//                         autoComplete='true'
//                         placeholder='enter your username'
//                         minLength='3'
//                         maxLength='25'
//                         name='username'
//                         />
//                         <h3>Please enter only letters, numbers, and _</h3>
//                         <h3>{usernameChars}/25</h3>
//                     </fieldset>
//                     <fieldset>
//                         <label for='email'>Email</label>
//                         <Input 
//                         type='email'
//                         placeholder='enter your email address'
//                         minLength='5'
//                         maxLength='50'
//                         value={this.state.email}
//                         name='email'
//                         autoComplete='true'
//                         onChange={this.handleChange}
//                         />
//                     </fieldset>
//                     <fieldset>
//                         <label>Password</label>
//                         <Input
//                             type='password'
//                             placeholder='confirm password'
//                             value={ this.state.password1}
//                             onChange={this.handleChange}
//                             name='password1'
//                         />
//                         <h3>Please enter a password at least 8 characters long</h3>
//                     </fieldset>
//                     <fieldset>
//                         <label>Confirm Password</label>
//                         <Input 
//                             type='password'
//                             placeholder='confirm password'
//                             value={ this.state.password2}
//                             onChange={this.handleChange}
//                             name='password2'
//                         />
//                         <h3></h3>
//                     </fieldset>
//                     <fieldset>
//                         <label>Name</label>
//                         <Input 
//                             type='text'
//                             value={this.state.name}
//                             name='name'
//                             onChange={this.handleChange}
//                             maxLength='50'
//                             autoComplete='true'
//                             placeholder='please enter your name'
//                         />
//                         <h3>{nameChars}/50</h3>
//                     </fieldset>
//                     <Button type='submit'>Submit</Button>
//                 </Form>
//             </div>
//         )
//     }
// }

// export default Register


// import React, { Component } from 'react'
// import axios from 'axios'
// import { Form, fieldset, Input, h3, Button, label } from 'reactstrap'
// class Register extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             name: '',
//             email: '',
//             password: ''
//         }
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         axios.post('http://localhost:5000/register', {
//             username: this.state.username,
//             name: this.state.name,
//             password: this.state.password,
//             email: this.state.email
//         })
//         .then(res => {
//             console.log(res.data)
//             console.log(res.data.Message)
//             alert(res.data.Message)
//             this.props.history.push('/login')
//         })
//         .catch(err => {
//             console.log(err)
//             console.log(err.Message)
//         })
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     render() {
//         return(
//         <div>
//         <form onSubmit={this.handleSubmit}>
//             <input placeholder='username' type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
//             <input placeholder='name' type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
//             <input placeholder='email' type='email' value={this.state.email} onChange={this.handleChange} name='email'/>
//             <input placeholder='password' type='password' value={this.state.password} onChange={this.handleChange} name='password'/>
//             <button type='submit'>Submit</button>
//         </form>
//         </div>
//         )
//     }
// }

// export default Register

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