import axios from 'axios';
import { todoBaseUrl } from './apiBase';

/**
 * Todo list data.
 * @returns {Array} Get all todos.
 */
export async function getTodos() {
  const url = `${todoBaseUrl}`
  try {
    const res = await axios.get(url)
    return res.data.map(_transformData)
  } catch (error) {
    throw error
  }
}
/**
 * Get single too from the server.
 * @param {string} id - Id of the todo.
 * @returns {Object} Todo object.
 */
export async function getTodo(id) {
  const url = `${todoBaseUrl}/${id}`
  try {
    const res = await axios.get(url)
    return _transformData(res.data);
  } catch (error) {
    throw error
  }
}
/**
 * Create a new todo.
 * @param {Object} todo - New todo.
 * @returns {Object} Created todo.
 */
export async function createTodo(todo) {
  const url = `${todoBaseUrl}`
  try {
    const res = await axios({
      method: 'POST',
      url,
      data: todo,
    })
    
    return _transformData(res.data);
  } catch (error) {
    throw error
  }
}
/**
 * Update the todo.
 * @param {Object} todo - Updated todo.
 * @returns {Object} Updated todo.
 */
export async function updateTodo(todo) {
  const url = `${todoBaseUrl}/${todo.id}`;
  try {
    const res = await axios({
      method: 'PATCH',
      url,
      data: todo,
    })
    return _transformData(res.data)
  } catch (error) {
    throw error
  }
}
/**
 * Delete todo from the list.
 * @param {string} id - Id of the todo.
 * @returns id of the deleted todo.
 */
export async function deleteTodo(id) {
  const url = `${todoBaseUrl}/${id}`;
  try {
    const res = await axios({
      method: 'DELETE',
      url
    })
    return res.data
  } catch (error) {
    throw error
  }
}
/**
 * Transform todo keys.
 * @param {object} todo - Transform todo.
 * @returns Transformed todo.
 */
function _transformData(todo) {
  return {
    id: todo._id,
    title: todo.title,
    description: todo.description,
    color: todo.color
  }
}
