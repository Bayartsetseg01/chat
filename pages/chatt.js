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

// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:5000/api/chat')
//     const data = await res.json();

//     return {
//         props: { ninja: data}
//     }
// }

// const User = ({user}) =>{
//     return (
//         <div>
//             <h1>All</h1>
//             {user.map(user => (
//                 <div key = {user.id}> 
//                 <a>
//                     <h3>{user.name}</h3>
//                 </a>
//                 </div>
//             ))}



//         </div>
//     );
// }

