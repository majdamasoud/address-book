import React from 'react';
import './display.css';
import { Link, useParams } from "react-router-dom";

function Display({ users }) {
    const { index } = useParams();
    const user = users[index];
  return (
    <div className="display">
         {
            users.length > 0?
                  <div className="userInfoContainer">
                      <div className="displayCloseContainer">
                          <Link to="/" className="displayClose">&times;</Link>
                      </div>
                      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                      <h1>{user.name.title}. {user.name.first} {user.name.last}</h1>
                      <div className="infoContainer">
                          <h3>Age: {user.dob.age}</h3>
                          <h3>Phone: {user.phone}</h3>
                          <h3>Cell: {user.cell}</h3>
                          <h3>Email: {user.email}</h3>
                      </div>
                  </div>
            : <p>Loading display, if this is taking too long refresh the page</p>
        }
        
    </div>
  )
}

export default Display;

