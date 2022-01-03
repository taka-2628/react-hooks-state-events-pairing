import {useState} from "react";

function Info({ title, views, dateUpload, upvotes, downvotes }){
  const [numOfUpvotes, setNumOfUpvotes] = useState(upvotes);
  const [numOfDownvotes, setNumOfDownvotes] = useState(downvotes);

  function incrementUpvotes(){
    setNumOfUpvotes(numOfUpvotes + 1);
  }

  function incrementDownvotes(){
    setNumOfDownvotes(numOfDownvotes +1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{views} Views | Uploaded {dateUpload}</p>
      <button onClick={incrementUpvotes}>{numOfUpvotes}👍</button>
      <button onClick={incrementDownvotes}>{numOfDownvotes}👎</button>
    </div>
  )
}

export default Info;