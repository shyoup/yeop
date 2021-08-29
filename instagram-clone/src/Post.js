import React, { useEffect, useState } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from './firebase';
import firebase from 'firebase';

function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="hyeop_92"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/201111416_208072207837303_993554199430242986_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=qy00gAkB3QsAX_eUqYY&edm=AP_V10EBAAAA&ccb=7-4&oh=e6e6b21cd528e189ab919e86a150a31e&oe=611B6432&_nc_sid=4f375e"
                ></Avatar>
                {username}
            </div>
            <img className="post__image" src={imageUrl}/>
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

            <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <b>{comment.username}</b> {comment.text}
                    </p>
                ))}
            </div>

            {user && (
                <form className="post__commentBox">
                    <input
                        className="post__input"
                        type="text"
                        placeholder="댓글 달기..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        게시
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post