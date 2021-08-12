import logo from './logo.svg';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <Post username="sang" caption="WOW" imageUrl="https://i.pinimg.com/originals/f5/25/6f/f5256f22b9dea5d4eb80c41f91f87793.jpg"/>
      <Post />
      <Post />
      {/* Header */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
