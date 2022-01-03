
function Comments({comments, isCommentShown}){
  const commentsList = comments.map((post) => {
    return (
      <div key={post.id}> 
        <strong>{post.user}</strong>
        <p>{post.comment}</p>
      </div>
    )
  })

  return (
    <div style={{display: isCommentShown ? "block" : "none"}}>
      <h2>{comments.length} Comments</h2>
      {commentsList}
    </div>
  )
}

export default Comments;