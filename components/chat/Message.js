import React, { useEffect } from "react";
import 'antd/dist/antd.css';

// import "../styles/globals.css";
import { Button, Input, Row, Col, Space} from 'antd';

const {TextArea} = Input;
const onChange = e =>{
    console.log('Change:', e.target.value);
};
const Message = () =>{

    
    return (
        <Row>
            <Col>
            <Space align = "end">
            <TextArea placeholder="Message" 
            autoSize = {{minRows: 2 
                // , maxRows: 5
            }}
            style ={{
                width: 1000,
                marginTop: 700, 

            }}
             onChange={onChange}/>
             </Space>
            </Col>
            <Col>
            <Button className="send"
            style={{ 
                marginTop: 700,
                // marginleft: 20,
                }}> Send</Button>
            </Col>
            {/* <Button className="voice"
            style={{ 
                marginTop: 700,
                // marginleft: 20,
                
                }}  
                > Voice </Button> */}
        </Row>
    )
}
export default Message;