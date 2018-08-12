import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createVolunteer} from '../actions/postActions'
import '../styles/PostForm.css';

import Navbar from './Navbar'

import 'bootstrap';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            city: '',
            state: 'FL',
            zip: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault()

        const post = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        console.log(post);
    
        // Call Action
        this.props.createVolunteer(post);
    }

    render() {
        return (
            <div>
            <Navbar />

            <div class="container">
            <div className="MarginingPostForm">
                <div class="jumbotron">
                    <div className="Middle">
                        <h1>Signup Form</h1>
                        <p><em>We love our Volunteers!</em></p>
                    </div>
                </div>
                </div>
                
                <div class="BoxForm">
                <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                    </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Confirm Password</label>
                    <input type="password" name="confirmPassword" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onChange}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.address} onChange={this.onChange}/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" name="city" class="form-control" id="inputCity" value={this.state.city} onChange={this.onChange}/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" name="state" value={this.state.state} onChange={this.onChange} class="form-control">
                        <option selected>FL</option>
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" name="zip" class="form-control" id="inputZip" value={this.state.zip} onChange={this.onChange}/>
                </div>
            </div>
            <div className="Middle"> 
             <button type="submit" class="btn btn-info">Sign in</button>
             </div>
            </form>
            </div>
            </div> 
            </div>
        )
    }
}

PostForm.propTypes = {
    createVolunteer: PropTypes.func.isRequired
}

export default connect(null, { createVolunteer })(PostForm)