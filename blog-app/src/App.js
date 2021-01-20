import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/blogs/:id" component={BlogDetails} />
          <Route path="/create" component={Create} />
          <Route path="/" component={Home} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
