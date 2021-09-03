import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import Lenders from './components/Lenders';
import Borrowers from './components/Borrowers';
import BorrowersRequests from './components/BorrowersRequests';
import Transactions from './components/Transactions';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/lenders' component={Lenders} />
        <Route path='/borrowers' component={Borrowers} />
        <Route path='/borrowers-requests' component={BorrowersRequests} />
        <Route path='/transactions' component={Transactions} />
        <Route path='/lenders/:id' component={Lenders} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
