import "./App.css";
import AddUser from "./componenets/AddUser";
import AllUser from "./componenets/AllUser";
import Landing from "./componenets/Landing";
import Navbar from "./componenets/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./componenets/NotFound";
import UserEdit from "./componenets/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar of Application  */}
        <Navbar />
        {/* Routing all Pages  */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/all" component={AllUser} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={UserEdit} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
