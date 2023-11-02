import { useSelector } from "react-redux";
import { checkOnlineStatus, getConversationId } from "../../../utils/chat";
import Conversation from "./Conversation.jsx";

export default function Conversations({ onlineUsers, typing }) {
    const {conversations}=useSelector((state)=>state.chat);
  return(<div className="convos scrollbar">
    {conversations && conversations.map((convo) =>
    <Conversation convo={convo} key={convo._id} /> )
    
    }
  </div>
    
  );
}