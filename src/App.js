import "./App.css";
import EcommerceFinance from "./pages/EcommerceFinance/EcommerceFinance";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
      <Home />
      <Landing />
      <EcommerceFinance />
    </div>
  );
}

export default App;