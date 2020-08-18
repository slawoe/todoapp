export default async function postToDo() {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: "TestToDo",
      author: "Slawo",
      completed: false,
    }),
  });
  return response.ok;
}
