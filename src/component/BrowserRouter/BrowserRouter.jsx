import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Stock from './pages/Stock';
import Sparepart from './pages/Sparepart';
import Motor from './pages/Motor';


const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="content flex-grow">
                    <Switch>
                        <Route path="/stock" component={Stock} />
                        <Route path="/sparepart" component={Sparepart} />
                        <Route path="/motor" component={Motor} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
