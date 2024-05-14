import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Stock from './pages/Stock';
import Sparepart from './pages/Sparepart';


const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="content flex-grow">
                    <Switch>
                        <Route path="/stock" component={Stock} />
                        <Route path="/sparepart" component={Sparepart} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
