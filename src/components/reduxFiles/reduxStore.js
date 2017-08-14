import { createStore } from "redux"
import actions from './actions.js'
function counter(state = 0, action) {
    switch (actions.type) {
    case "ADD_ITEM":
    case "DECREMENT":
        return state - 1;
    case "":
    return 2;
    default:
        return state
    }
}

let reduxStore = createStore(counter)
module.exports = reduxStore


