
import { Switch, Route } from "react-router-dom";
import "./App.scss";

//pages
import { Welcome } from "./pages/welcome";
import { Break } from "./pages/break";
import { Relax } from "./pages/relax";
import { Work } from "./pages/work";
import { Categories } from "./pages/categories";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/break" exact>
          <Break />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
        <Route path="/relax" exact>
          <Relax />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
