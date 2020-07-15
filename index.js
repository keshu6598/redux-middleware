const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){

    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    };
}

const initialCakeState = {
    numofCakes: 10
}
const initialIcreamState = {
    numofIceCreams: 20
}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state 
    }
}

const icecreamReducer = (state = initialIcreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }

        default: return state 
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer 
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();


