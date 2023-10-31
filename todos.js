const todos = [];

let command = prompt("What would you like to do?");

while (command !== "quit") {
    if (command === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    }
    else if (command === "list") {
        console.log("************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("************");
    }
    else if (command === "delete") {
        let deleteTodo = parseInt(prompt("Enter index of todo to delete"));
        while (deleteTodo >= todos.length || Number.isNaN(deleteTodo)) {
            deleteTodo = prompt("Invalid index. Enter index of todo to delete");
        }
        todos.splice(deleteTodo, 1);
        console.log("Todo Removed");
    }
    command = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");