import logo from './logo.svg';
import './App.css';
import NameCard from './component/NameCard';
import LikesButton from './component/LikesButton';
import DigitalClock from './component/DigitalClock';
import CommentBox from './component/CommentBox'

const tags = ['dragon', 'soccer']

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NameCard name="viking" number={123456} isHuman tags={tags}/>
      <LikesButton />
      <DigitalClock />
      <CommentBox />
    </div>
  );
}

export default App;
