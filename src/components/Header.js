import PropTypes from 'prop-types'
import Button from './Button'



// not needed anymore: import React from 'react'
// set css within lines of html/js
// can add other buttons,reusable components with differnet properities (props)
// title brings it in from below
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header"> 
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}onClick={onAdd}/>
        
        </header>
  )
}

// goes into the function of header
// onSubmit eventlistener *side ni
Header.defaultProps = {
  title: 'Task Tracker',
}

// put in where u want the style in {headerStyle}
// const headerStyle = {
//   color: 'red'
// }
export default Header;