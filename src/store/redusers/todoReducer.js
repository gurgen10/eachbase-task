import {
  CREATE_TODO,
  FETCH_TODOS,
  SELECTED_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  SHOW_LOADER,
  ERROR,
  UPDATE_TODO
} from "../types";
/**
 * Initial state.
 */
const initialState = {
  todos: [],
  selectedTodo: {},
  loading: true,
  error: null
};
/**
 * Change specified state value.
 * @param {object} state - Current state
 * @param {object} action - type and payload object.
 * @returns {object} New state object.
 */
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TODOS: {
      return {
        ...state,
        todos: [...payload],
      }
    }
    case CREATE_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      }
    }
    case SELECTED_TODO: {
      return {
        ...state,
        selectedTodo: {...payload},
      }
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === payload.id) {
            todo.title = payload.title;
            todo.description = payload.description;
            todo.color = payload.color;
          }
          return todo;
        }),
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      }
    }
    case DELETE_ALL_TODOS: {
      return {
        ...state,
        todos: [],
      }
    }
    case SHOW_LOADER: {
      return {
        ...state,
        loading: payload,
      }
    }
    case ERROR: {
      return {
        ...state,
       error: payload ,
      }
    }
    default: return state
  }
};
