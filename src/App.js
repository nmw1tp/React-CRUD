import logo from './logo.svg';
import './App.css';
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

function App() {
  return (
    <div className="App">
      <Create/>
      <Read/>
      <Update/>
      <Delete/>
    </div>
  );
}

export default App;
