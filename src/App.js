import "./App.css";
import Discover from "./Component/Discover";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import HeroSection from "./Component/HeroSection";
import HeroSection2 from "./Component/HeroSection2";
import HeroSection3 from "./Component/HeroSection3";
import { Switch, Route } from "react-router-dom";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";

function App() {
  return (
    <div>
      

      <Switch>
        <Route exact path="/">
        <Header />
          <Hero />
          <HeroSection />
          <HeroSection2 />
          <HeroSection3 />
          <Discover />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
