export default async function postToDo(task, author, completed) {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: task,
      author: author,
      completed: completed,
    }),
  });
  return response.ok;
}
