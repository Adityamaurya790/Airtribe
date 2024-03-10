import "./App.css";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";
function App() {
  return (
    <div className="w-screen h-screen bg-slate-500">
    <Navbar/>
    <Dashboard/>
    </div>
  );
}

export default App;
