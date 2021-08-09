import Home from "./views/home"
import AView from "./views/aview";
import BView from "./views/bview";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App (){


  return  (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/a">
            <AView></AView>
          </Route><Route path="/b">
          <BView></BView>
        </Route>

        </Switch>
      </Router>
  )
}

export default App;