import React, {useEffect, useState} from "react";
// import Chat from "../components/chat/Message";
import axios from "axios";

 const Chatt = () => {
    //  const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const data = await axios.get("/api/chat");
        console.log(data);
        // setChats(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);
    return <div> hh
        {/* {chats.map((chat) => (
        <div>{chat.chatName}</div>
        ))} */}
        </div>;

};
export default Chatt;