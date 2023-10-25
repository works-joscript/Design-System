import "./App.css";
import EcommerceFinance from "./pages/EcommerceFinance/EcommerceFinance";
import CommingSoon from "./pages/commingSoon/CommingSoon";
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
      <CommingSoon/>
 </div>
  );
}

export default App;