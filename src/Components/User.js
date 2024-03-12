import React from 'react'

const User = (props) => {

  return (
    <div className="card_container">
        <span className={props.online ? "pro online" : "pro offline"}>
            {props.online ? "ONLINE" : "OFFLINE"}
            </span>
        <img src={props.profile} className='img' width={"150px"}  alt='user'/>
        <h1>{props.name}</h1>
        <h3>{props.city}</h3>
        <p>{props.job}</p>
        <div className='button'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Follwing</button>
        </div>
        <div className='skills'>
            <h5>Skills</h5>
            <ul>
               {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
               ))}
            </ul>
        </div>
    </div>
  )
}

export default User