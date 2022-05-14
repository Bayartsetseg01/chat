import React from "react";
// import "../styles/globals.css";
import { Button, Input, Row, Col, Space} from 'antd';

const {TextArea} = Input;
const onChange = e =>{
    console.log('Change:', e.target.value);
};
const History = () =>{
    return (
            <Button style ={{
            marginTop:40,
            width:350,
            height:40,
            
        }}>
        
            user
        </Button>
        
    )
}
export default History;