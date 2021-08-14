import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db } from './firebase'
import { Modal } from '@material-ui/core';

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fired!!
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post: doc.data()
      })));
    })
  }, [])

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am modal</h2>
        </div>  
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
