import {Route, Switch} from 'react-router-dom'
import './App.css';
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Home from './components/Home';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch >
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/add' component={() => <AddContact />} />
        <Route exact path='/view/:id' component={() => <ViewContact />} />
        <Route exact path='/edit/:id' component={() => <EditContact />} />
        
        <Route exact path='*' component={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
