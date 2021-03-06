import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {id} = useParams();
   const [friend, setFriends] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    // console.log(id);

    return (
        <div>
           <p>Friend ID : {id}</p>
           <h3>{friend.name}</h3>
           <p>Email : {friend.email}</p>
           <p>Phone : {friend.phone}</p>
           <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;