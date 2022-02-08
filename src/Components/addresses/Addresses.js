import React from 'react'
import './addresses.css';
import { Link } from 'react-router-dom';

function Addresses({ users }) {
    return (
        <div className="addresses">
            <div className="topBar"></div>
            <div className="users">
                {users.length > 0 ?
                    users.map((user, index) => (
                        <Link
                            to={`/display/${index}`}
                            className="userCard"
                            key={index}
                        >
                            <img
                                className="thumbnail"
                                src={user.picture.medium}
                                alt={`${user.name.first} ${user.name.last}`}
                            >
                            </img>
                            <h1 className="userTitle">
                                {user.name.title}. {user.name.first} {user.name.last}
                            </h1>
                        </Link>
                    ))
                    : <p>Loading users, if this is taking too long refresh the page</p>
                }
            </div>
        </div>
    )
}

export default Addresses
