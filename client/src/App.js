import "./App.css";
import SignInAdmin from "./Components/SignInAdmin";
import { Route, Switch } from "react-router-dom";
import Adminpage from "./Components/Adminpage";
import AddAnnonce from "./Components/AddAnnonce";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import DraftsAnnonce from './Components/DraftsAnnonce';
function App() {
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/addannonce" component={AddAnnonce} />
                <Route path="/admin/adminroute" component={Adminpage} />
                <Route path="/annonceList" component={DraftsAnnonce} />
                <Route path="/admin/signin" component={SignInAdmin} />
            </Switch>
            <Footer />
        </div>
    );
}
export default App;
