import React from 'react'
const Header = (props) => {
    const element = gender => {
        return gender === 'male' ? "he" : "she";
    }
    return (
        <div>
            <p onClick={ props.click }>This is {props.name}, and I am {props.age}</p>
            <p>and {element(props.gender)} {props.children}</p>
            <input type="text" onChange={props.changename} value={ props.name }></input>
        </div>
    )
}

export default Header;