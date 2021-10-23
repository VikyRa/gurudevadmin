import React from 'react';
import { Container, Jumbotron, Form, Row, Col, Button } from 'react-bootstrap';
/**
* @author
* @function Input
**/

const Input = (props) => {
  return (
    <div className={props.col}>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
      
      {  props.error ? Object.keys(props.error).map((key) => (
          <span key={key} style={{ color: 'red', fontSize: '12px' }}>{props.error[key]}</span>
        )) : null }
    </div>
  )

}

export default Input