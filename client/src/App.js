import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import CategoryView from './components/CategoryView';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' render={() => <Home />}/>
        <Route path='/cat/:id' render={() => <CategoryView></CategoryView>} />
      </Switch>
    </Layout>
  )
}

export default App;
