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

function getTask(id) {
  let task = {};
  task.id = initialTasks.length + 1;
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
  initialTasks.push(task);
}

for (let i = 3; i < 6; i++) {
  getTask();
}

for (let j = 0; j < initialTasks.length; j++) {
  console.log(initialTasks[j]);
}

/** 

// Prompt for Task 1

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
*/
