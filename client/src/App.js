import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import CategoryView from './components/CategoryView';
import Login from "./components/Login";
import NewThread from './components/NewThread';
import Register from "./components/Register";
import {tryPersistUser} from './store/user';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import ThreadView from "./components/ThreadView";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tryPersistUser())
      .then( _ => console.log(_ => 'Persisting user...'));

  }, [])

  return (
    <Layout>
      <Switch>
        <Route exact path='/' render={() => <Home />}/>
        <Route path='/cat/:id' render={({match}) => <CategoryView match={match}/>} />
        <Route path='/thread/:id' render={({match}) => <ThreadView match={match}/>} />
        <Route path='/login' render={() => <Login/>} />
        <Route path='/register' render={() => <Register/>} />
        <Route path='/new-thread/:id' render={({match}) => <NewThread match={match}/>} />
      </Switch>
    </Layout>
  )
}

export default App;
