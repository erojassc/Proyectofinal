import axios from "axios";

//axios.defaults.headers.common["Token"] = "123456789";
const API_URL = axios.create({
  baseURL: `http://localhost:3021/`
});

export function getTodos() {
  return API_URL.get(`/GET`, {}); // Config en el segundo param
}

export function deleteTodos(id) {
  return API_URL.delete(`/DELETE/${id}`, {}); // Config en el segundo param
}

export function saveTodo(todo) {
  console.log(`Creado: ${todo.id}`);
  return API_URL.post(`/POST`, todo); // Instancia en el segundo param
}

export function putTodo(todo) {
  var id = todo.id;
  return API_URL.put(`/PUT/${id}`, todo); // Instancia en el segundo param
}