import React from 'react';
 
const Team = props => {
    return(
        <div className='team-members'>
            {props.team.map(member => (
                <div className='member' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                </div>
            ))};
        </div>
    );
};
 
export default Team;

//<p>ID: {member.id}</p>