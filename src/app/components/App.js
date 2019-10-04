import { h } from 'hyperapp';
import createRouter from 'router5';

import browserPlugin from 'router5-plugin-browser';
import persistentParamsPlugin from 'router5-plugin-persistent-params';

import Route from './base/Route';
import Home from './Home';
import Expenses from './Expenses';

export default ( state ) => {
    return (
        <div class="app">
            Hi there, welcome to the <b>expensometer</b> {state.app.state ? 'true' : 'false'}
            {/* <Switch> */}
                <Route name="home" path="/" render={Home} />
                <Route name="expenses" path="/Expenses" render={Expenses}/>
                {/* <Route render={NoMatch} /> */}
            {/* </Switch> */}
        </div>
    )
};