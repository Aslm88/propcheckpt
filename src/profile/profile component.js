import React from "react";
import PropTypes from "prop-types";


const Profile = props  =>{
    function handleName(e) {
        e.preventDefault();
        alert("hello , my name is John Doe and you're checking my profile.. Take your time :D");
        
    }
    const styleButton = {
        width:"300px",
        height:"40px",
        borderRadius:"10px",
        color:"white",
        border:"none",
        fontWeight:"bold",
        backgroundColor:"blue",
    }
    return (
        <div>

            <div>
            <h3>FullName: {props.fullName}  </h3>
            </div>
            {props.children}
            <div>
            <h3>Bio: {props.bio} </h3>
            </div>
            <div>
            <h3>Profession: {props.profession}</h3>
            </div>
            <button onClick={handleName} style={styleButton}>Click me !</button>
        
        </div>

    )
    
};
Profile.defaultProps = {
    fullName:"John Doe" ,
    bio :"Programming , Sports",
    profession : "Web Developement",
}

export default Profile;

Profile.prototypes= {
    fullName:PropTypes.string,
    bio: PropTypes.string, 
    profession:PropTypes.string,
    onClick:PropTypes.func,
}


