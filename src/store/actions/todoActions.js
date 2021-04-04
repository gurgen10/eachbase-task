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
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo
} from "../../services/TodoService";
import store from '../index'
/**
 * Fetch all todos and save in the state.
 * @returns {void}
 */
export const loadTodos = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const todos = await getTodos();
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      });
      dispatch(setLoading(false));
      dispatch(setError(null));

    } catch (error) {
      console.log('error');
      dispatch(setError('Something went wrong when trying to load the data.'));
    }
    finally {
      dispatch(setLoading(false));
    }
  }
}
/**
 * Create a new todo and save in the state.
 * @param {obkect} newTodo - New Todo
 * @returns {void}
 */
export const createNewTodo = newTodo => async dispatch => {
    try {
      dispatch(setLoading(true));
      const todo = await createTodo(newTodo);
      dispatch({
        type: CREATE_TODO,
        payload: todo
      });
      dispatch(setLoading(false));
      dispatch(setError(null));

    } catch (error) {
      console.log(error);
      dispatch(setError('Create todo error.'));
    }
    finally {
      dispatch(setLoading(false));
    }
}
/**
 * Update selected todo and save in the state.
 * @param {object} updatedTodo - Updated todo.
 * @returns {void}
 */
export const updateSelectedTodo = updatedTodo => async dispatch => {
    try {
      dispatch(setLoading(true));
      const todo = await updateTodo(updatedTodo);
      dispatch({
        type: UPDATE_TODO,
        payload: todo
      });
      dispatch(setLoading(false));
      dispatch(setError(null));

    } catch (error) {
      console.log(error);
      dispatch(setError('Update todo error.'));
    }
    finally {
      dispatch(setLoading(false));
    }
}
/**
 * Delete todo and save in the state.
 * @param {string} todoId - Deletable todo id.
 * @returns {void}
 */
export const deleteSelectedTodo = todoId => async dispatch => {
  try {
    dispatch(setLoading(true));
    await deleteTodo(todoId);
    dispatch({
      type: DELETE_TODO,
      payload: todoId
    });
    dispatch(setLoading(false));
    dispatch(setError(null));

  } catch (error) {
    console.log(error);
    dispatch(setError(error));
  }
  finally {
    dispatch(setLoading(false));
  }
}
/**
 * Delete all todos and save in the state.
 * @returns {void}
 */
export const deleteAllTodos = () => async dispatch => {
  try {
    const {todos} = store.getState().todo
    dispatch(setLoading(true));
    todos.forEach(async todo => {
      try {
        await deleteTodo(todo.id);
      } catch (error) {
        throw error
      }
    })
    dispatch({
      type: DELETE_ALL_TODOS,
    });
    dispatch(setLoading(false));
    dispatch(setError(null));

  } catch (error) {
    console.log(error);
    dispatch(setError('Delete todo error.'));
  }
  finally {
    dispatch(setLoading(false));
  }
}
/**
 * Get selected todo nad save in the state.
 * @param {string} todoId - Id of the todo.
 * @returns {void}
 */
export const getSelectedTodo = todoId => async dispatch => {
  try {
    dispatch(setLoading(true));
    const todo = await getTodo(todoId);
    dispatch({
      type: SELECTED_TODO,
      payload: todo
    });
    dispatch(setLoading(false));
    dispatch(setError(null));

  } catch (error) {
    console.log(error);
    dispatch(setError('Something went wrong when trying to get the todo.'));
  }
  finally {
    dispatch(setLoading(false));
  }
}
/**
 * Show or hide the loading.
 * @param {boolean} isLoading - Loading value.
 * @returns {void}
 */
export function setLoading(isLoading) {
  return {
    type: SHOW_LOADER,
    payload: isLoading
  }
}
/**
 * Set or clear error text.
 * @param {string} error - Error text.
 * @returns {void}
 */
export function setError(error) {
  return {
    type: ERROR,
    payload: error
  }
}
