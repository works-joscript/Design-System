import "./App.css";
import EcommerceFinance from "./pages/EcommerceFinance/EcommerceFinance";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <Landing />
      <EcommerceFinance/>
      <Projects/>
    </div>
  );
}

export default App;