import { h } from 'hyperapp';
import actions from '../../actions/route';

console.log(actions);
export default ({name, path, render}) => {
    console.log(name, path, render, actions);
    return (
        render(render)
    )
};