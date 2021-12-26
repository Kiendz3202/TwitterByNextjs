import React from 'react'

function Comment({ comment }) {
    return (
        <div>
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment
