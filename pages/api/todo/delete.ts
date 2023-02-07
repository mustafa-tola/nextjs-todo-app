import { deleteTodo } from "./list";

export default function handler(req:any, res:any) {
  if (req.method === "GET") {
    let { id } = req.query;
    deleteTodo(id);
    res.status(200).json({ msg: "todo deleted" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
    // res.status(200).json({ msg: req.method });
}
