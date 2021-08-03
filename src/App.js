import './App.scss';
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar"/>
      <Feed className="feed"/>
      <Widgets className="widgets"/>
    </div>
  );
}

export default App;
