import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BurritoList from './components/BurritoList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={BurritoList} />
                    <Route path="/order" component={OrderForm} />
                    <Route path="/orders" exact component={OrderList} />
                    <Route path="/orders/:orderId" component={OrderDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
