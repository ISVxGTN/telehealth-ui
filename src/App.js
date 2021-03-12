import { Route, Switch } from "react-router-dom";
import Landingpage from "./pages/Landing";
import "./index.css";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <div className="bg-white">
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/login" component={SignIn} />
        {/* <Route exact path="/" component={Landingpage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={Forgotpassword} />
        <Route exact path="/create-account" component={Signup} /> */}
      </Switch>
    </div>
  );
};

export default App;
