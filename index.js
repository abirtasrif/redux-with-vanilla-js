const redux = require("redux");

const createStore = redux.createStore;

const BUY_PASTA = "BUY_PASTA";

function buyPasta() {
  //Action Creator
  return {
    type: BUY_PASTA, //Action
    quantity: 10, //Payload
  };
}

const initialState = {
  numberOfPasta: 20,
  numberOfCake: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTA:
      return {
        ...state, //must spread for copying from initialState or other data will be lost
        numberOfPasta: state.numberOfPasta - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("INITIAL STATE", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("UPDATED STATE", store.getState())
);

store.dispatch(buyPasta()); //1st buy
store.dispatch(buyPasta()); //2nd buy

unsubscribe();
