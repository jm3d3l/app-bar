import React, { Component } from 'react';
import axios from 'axios';

let url = "http://localhost:8000/posts";
class CreatePost extends Component {
    state = { 
        post : "",
     }

     handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    submit =(e) => {
        e.preventDefault();
        const {post} = this.state;
        axios.post(url, {
            post: post,
            date : new Date()
        }).then(data => console.log(data))
        .catch(err => console.log(err))
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.submit}>
                    <div style={{display:'flex', alignItems:"center"}}>
                    <p>title</p>
                    <input type="text" id="" name="post" onChange={this.handleChange} placeholder="" />
                </div>

                <button type="submit">submit</button>
                </form>
            </div>

         );
    }
}
 
export default CreatePost;