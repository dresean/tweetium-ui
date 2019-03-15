import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Form, FormGroup, Label, Input, Col, Row, FormText } from 'reactstrap'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password1: '',
            password2: '',
            email: '',
            name: '',
        }
    }
    handleSubmit = (e) => {
        return axios.post('localhost:5000/register', this.state)
        .then(res => {
            
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        let property = e.target.name
        showCharacterCount(property)
    }
    showCharacterCount = (property) => {
       let str = this.state.property
       let arr = str.split('')
       return `${arr.length}/50`
    }
    render() {
        return (
            <div>
                <Card>
                    <h1>Create your account</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input
                            type='text'
                            value={this.state.value}
                            onChange={this.handleChange}
                            name='name'
                            placeholder='name'
                            />
                            <FormText></FormText>
                        </FormGroup>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Register