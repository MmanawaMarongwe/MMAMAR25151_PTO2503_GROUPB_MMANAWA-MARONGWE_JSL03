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

// Prompt for Task 1
let taskTitle1 = prompt("Enter task 1 title");
let taskDescription1 = prompt("Enter task 1 description");
let taskStatus1 = prompt("Enter task 1 status").toLowerCase();
const invalidStatusMessage =
  "Invalid status. Please enter: todo, doing, or done.";

// Keep prompting the user until a valid status ("todo", "doing", or "done") is entered
while (
  taskStatus1 !== "done" &&
  taskStatus1 !== "doing" &&
  taskStatus1 !== "todo"
) {
  alert(invalidStatusMessage);
  taskStatus1 = prompt("Enter task 1 status").toLowerCase();
}

// Prompt for Task 2
let taskTitle2 = prompt("Enter task 2 title");
let taskDescription2 = prompt("Enter task 2 description");
let taskStatus2 = prompt("Enter task 2 status").toLowerCase();

// Keep prompting the user until a valid status ("todo", "doing", or "done") is entered
while (
  taskStatus2 !== "done" &&
  taskStatus2 !== "doing" &&
  taskStatus2 !== "todo"
) {
  alert(invalidStatusMessage);
  taskStatus2 = prompt("Enter task 2 status").toLowerCase();
}

// If a task is marked as "done", log its title and status
if (taskStatus1 === "done") {
  console.log(`Title: "${taskTitle1}", status: "${taskStatus1}"`);
}
// If a task is marked as "done", log its title and status
if (taskStatus2 === "done") {
  console.log(`Title: "${taskTitle2}", status: "${taskStatus2}"`);
}
// If neither task is marked as "done", display a motivational message
if (taskStatus1 !== "done" && taskStatus2 !== "done") {
  console.log("No tasks completed, let's get to work!");
}
