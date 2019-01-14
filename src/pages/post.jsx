import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
// import Card from '@material-ui/core/Card';
// import Typography from '@material-ui/core/Typography';
import {getDateFromNow} from '../shared-components/utility-functions';
let url = "http://localhost:8000/posts";
class ViewPost extends Component {
    state = { posts : [] }
     componentDidMount = () => {
        axios.get(url)
            .then(data => this.setState({posts : data.data}))
             .catch(err => console.log(err));
    }
    
    displaypost = () => {
        const {posts } = this.state;
        console.log(posts.post)
        return (
            <React.Fragment>
                {posts.map(data => (
                    <div key={data.id}>
                        <p variant="body">
                            {data.post}
                        </p>
                        <p>{getDateFromNow(data.date)}</p>
                        {/* <p>
                            { moment(data.date).isBefore(moment().subtract(3, "days")) ?
                                moment(data.date).format('llll') : <Moment fromNow>{data.date}</Moment>
                            
                            }
                        </p> */}
                        
                        {/* <Moment fromNow>{data.date}</Moment> */}
                        <p>-------------------------------------------</p>
                    </div>
                ))}
            </React.Fragment>
        )
    }

    render() { 
        return ( 
           <React.Fragment>
               <h2>views</h2>

                {this.displaypost()}
           </React.Fragment>
         );
    }
}
 
export default ViewPost;