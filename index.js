let input = prompt("What would you like to do?");
const todos = ["Practice Guitar!", "Practice French!"];
if (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*****")
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("xxxxxxxxxxx")
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`)
    console.log(todos)
  } else if (input === "delete") {
    const index = parseInt(prompt("Enter an index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(todos);
    } else {
      console.log("Unknown Index");
    }
  }
}
