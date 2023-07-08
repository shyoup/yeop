import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db, auth } from './firebase'
import { makeStyles } from '@mui/material';
import Modal from '@mui/material';
import { Button, Input } from '@mui/material';
import ImageUpload from './ImageUpload';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function App() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user has looged in...
        console.log(authUser);
        setUser(authUser);

        if(authUser.displayName) {
          // don't update username
        } else {
          return authUser.updateProfile({
            displayName: username,
          })
        }
      } else {
        // user has logged out...
        setUser(null);
      }
    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // every time a new post is added, this code fired!!
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post: doc.data()
      })));
    })
  }, [])

  const signUp = (event) => {
    event.preventDefault();
  
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      authUser.user.updateProfile({
        displayName: username,
      })
    })
    .catch((error) => alert(error.message))
  }

  const signIn = (event) => {
    event.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));

    setOpenSignIn(false);
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
                />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>Sign Up</Button>
          </form>
        </div>  
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
                />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>Sign Up</Button>
          </form>
        </div>  
      </Modal>

      <div className="app__header">
        <div className="app__headerContainer">
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
          {user ? (
            <Button onClick={() => auth.signOut()}>Logout</Button>
          ): (
            <div className="app__loginContainer">
              <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign up</Button>
            </div>
          )}
        </div>
      </div>

      <div className="app__main">
        <div className="app__posts">
          {
            posts.map(({id, post}) => (
              <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} timeStr={post.timeStr}/>
            ))
          }
        </div>
        <div className="app__upload">
          {user?.displayName ? (
            <ImageUpload username={user.displayName}></ImageUpload>
          ): (
            <h3>Sorry you need to login to upload</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
