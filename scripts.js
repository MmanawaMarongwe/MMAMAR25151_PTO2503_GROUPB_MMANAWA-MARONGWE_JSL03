const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Get id of last id and add 1 to it for a more robust code for future foolproof
function getNextId() {
  //get the last object in the array
  lastObject = initialTasks[initialTasks.length - 1];
  //Extract the id of the last object
  lastId = lastObject.id;
  //Set the next id to last object id + 1
  nextId = lastId + 1;

  //return the next id so it can be used for the next object
  return nextId;
}

// Maximum number of tasks set to current tasks plus three more
let maxTasks = initialTasks.length + 3;

function getTask() {
  let task = {};
  // Assigns a new ID based on the current length of the tasks array using the getTaskId function.
  task.id = getNextId();
  task.title = prompt("Enter task 1 title");
  task.description = prompt("Enter task 1 description");
  task.status = prompt("Enter task 1 status").toLowerCase();
  const invalidStatusMessage =
    "Invalid status. Please enter: todo, doing, or done.";

  // Keep prompting the user until a valid status ("todo", "doing", or "done") is entered
  while (
    task.status !== "done" &&
    task.status !== "doing" &&
    task.status !== "todo"
  ) {
    alert(invalidStatusMessage);
    task.status = prompt("Enter task 1 status").toLowerCase();
  }
  //adds the new task to the initial tasks array
  initialTasks.push(task);
}

// Adds new tasks until reaching the max limit
for (let i = initialTasks.length; i < maxTasks; i++) {
  getTask();
  // Alerts the user exactly when the max limit is reached
  if (initialTasks.length === maxTasks) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

console.log("All tasks:", initialTasks);

// Creates a new array containing only tasks with status "done"
let completeTasks = initialTasks.filter((task) => task.status === "done");

console.log("Complete tasks:", completeTasks);
