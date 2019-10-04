import { h, app } from "hyperapp";

//app files
import actions from './actions';
import state from './state';
import view from './components/App';

//app style
//import "../style/app.css";
console.log(state);
app({
    init: state,
    node: document.getElementById("app"),
    view: view
});