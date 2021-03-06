import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
