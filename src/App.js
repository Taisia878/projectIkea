import logo from './logo.svg';
import './App.css';
import Collection from './components/Collection/Collection';
import Recommendation from './components/Recommendation/Recommendation';
import New from './components/New/New';
function App() {
  return (
    <div className="App">
      <Collection/>
      <Recommendation/>
      <New/>
    </div>
  );
}

export default App;
