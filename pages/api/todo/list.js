import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    id: uuidv4(),
    text: "Learn Next.js",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Learn HTML",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Start new sideproject",
    completed: false,
  },
];

export const addTodo = (name) => {
  let newTodo = {
    id: uuidv4(),
    text: name,
    completed: false,
  };
  todos.push(newTodo);
};

export const deleteTodo = (id) => {
  todos = todos.filter((obj) => {
    return obj.id !== id;
  });
};

export const updateTodo = ({ id, isDone }) => {
  // only isDone can be updated atm
  let newTodos = [];
  todos.map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        text: obj.text,
        completed: isDone,
      };
    }
    newTodos.push(newTodo);
  });
  todos = newTodos;
};

export default function handler(req, res) {
  res.status(200).json({ todos });
}
