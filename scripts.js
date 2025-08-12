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

//initiate a maximum length to use for the tasks object array
let maxTasks = 6;

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

// use a for loop to add the user input in the object array. Let i start at the current array length so it doesn't override what is stored in the array
for (let i = initialTasks.length; i < maxTasks; i++) {
  getTask();
  // checks if the user has reached maximum tasks needed by checking if the array length is equal to the maximum tasks needed
  if (initialTasks.length === maxTasks) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

for (let j = 0; j < initialTasks.length; j++) {
  console.log(initialTasks[j]);
}

let completeTask = initialTasks.filter((task) => task.status === "done");

console.log(completeTask);
