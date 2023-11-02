import React from 'react'

function Conversation({convo}) {
    // console.log(convo.latestMessage!="undefined"?convo.latestMessage.message:undefined)
  return (
    <div>
      {/* {convo.latestMessage.message} */}
      {convo._id}
    </div>
  )
}

export default Conversation
