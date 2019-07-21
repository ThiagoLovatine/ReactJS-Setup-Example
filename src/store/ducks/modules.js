import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addModule: ["text", "currentId", "currentText"],
  toggleModule: ["id"],
  removeModule: ["id"]
});

/**
 * Handlers
 */
const data_prefetched = { id: 1, text: 'Aula 1' };
const INITIAL_STATE = { currentId: data_prefetched.id, currentText: data_prefetched.text, data: [data_prefetched] };

const add = (state = INITIAL_STATE, action) => {
  return {
    currentId: state.data.length + 1,
    currentText: action.text,
    data: [...state.data, { id: Math.random(), text: action.text, complete: false }]
  }
};

const toggle = (state = INITIAL_STATE, action) => {
  return {
    currentId: state.currentId,
    currentText: state.currentText,
    data: state.data.map(
      module =>
        module.id === action.id ? { ...module, complete: !module.complete } : module
    )
  }
}

const remove = (state = INITIAL_STATE, action) => {
  return {
    currentId: state.currentId,
    currentText: state.currentText,
    data: state.data.filter(module => module.id !== action.id)
  }
}


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_MODULE]: add,
  [Types.TOGGLE_MODULE]: toggle,
  [Types.REMOVE_MODULE]: remove
});