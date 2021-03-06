import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    // console.log(props);
    const {name,email, id} = props.friend;
    let history = useHistory();
    const friendStyle ={
        border:'1px solid purple',
        margin:'20px ',
        padding:'20px',
        borderRadius:'20px'
    }
    const handleClick = (id) => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h1>Name : {name}</h1>
            <p>Email:  {email}</p>
            {/* <Link to={`/friend/${id}`}>
               
            </Link> */}
            <button onClick={() => handleClick(id)}>Details About {name}</button>
        </div>
    );
};

export default Friends;