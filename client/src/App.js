import "./App.css";
import AnnonceList from "./Components/AnnonceList";
import SignInAdmin from "./Components/SignInAdmin";
import { Route, Switch } from "react-router-dom";
import Adminpage from "./Components/Adminpage";
import AddAnnonce from "./Components/AddAnnonce";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
// const Route = require("react-router-dom").Route;
// const Switch = require("react-router-dom").Switch;
function App() {
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route path="/home" component={Home} />

                <Route path="/addannonce" component={AddAnnonce} />
                <Route path="/admin/adminroute" component={Adminpage} />
                <Route path="/admin/annonceList" component={AnnonceList} />
                <Route path="/admin/signin" component={SignInAdmin} />
            </Switch>
            <Footer />
        </div>
    );
}
export default App;
