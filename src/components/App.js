import {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments";
import Video from "./Video";
import Info from "./Info"
import HideCommentsButton from "./HideCommentsButton";

function App() {
  console.log("Here's your data:", video);

  const [isCommentShown, setIsCommentsShown] = useState(true);

  function handleCommentsVisibility(){
    console.log("CLICKED")
    setIsCommentsShown(!isCommentShown)
    
  }

  return (
    <div className="App">
      <Video url={video.embedUrl}/>
      <Info 
        title={video.title} 
        views={video.views} 
        dateUpload={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <HideCommentsButton onHideCommentsClick={handleCommentsVisibility}/>
      <Comments comments={video.comments} isCommentShown={isCommentShown}/>
    </div>
    
  );
}

export default App;
