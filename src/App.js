import './App.css';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Home from '../src/modules/home/components/ContentListingPage';


function App() {
  return (
    <div className="App">
      <Router basename="/Content-Page" >
        <Switch>

         <Route exact  path="/" component={Home} />

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
