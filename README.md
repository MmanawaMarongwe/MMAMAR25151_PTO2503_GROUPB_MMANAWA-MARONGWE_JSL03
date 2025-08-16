# JSL03 Project Brief: Console-Based Task Manager

## ⚙️ Project description

This project involves creating a **simple task management system** where users can add **up to three new tasks** to an existing task array. Tasks are **stored as objects in an array**, each with a **unique incremental ID**. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on **array manipulation, user interaction via prompts and alerts, and console logging for task management**.

---


## 🛠️ Technologies Used
- **HTML5** — static Kanban board layout (columns, header, sidebar)  
- **CSS3** — custom theme with CSS variables, grid/flex layouts, responsive media queries, and hover states  
- **JavaScript** — task management logic running in the console (add, validate, filter tasks)  
- **Browser Console** — displays all tasks and completed tasks

---

# ✨ Features
- Add up to **three new tasks** to an existing task list  
- Store tasks as structured **objects inside an array**  
- Automatically assign each task a **unique incremental ID**  
- Validate task status (`todo`, `doing`, `done`) with re-prompts until valid  
- Alert users when the task limit is reached  
- Log **all tasks** and a filtered list of **completed tasks** in the console  
- Styled with **CSS variables, grid layouts, and responsive design** for a clean Kanban look

---
## 📂 Setup Instructions
1. Clone or download this repository.  
2. Open the project folder on your computer.  
3. Launch `index.html` in your browser.  
4. Use the browser’s **console (F12 → Console tab)** to view and interact with tasks.

---
  
## ▶️ Usage
1. When the page loads, you’ll be prompted to enter:  
   - **Task title**  
   - **Task description**  
   - **Task status** (`todo`, `doing`, or `done`)  
2. If the status is invalid, you’ll be asked again until it’s valid.  
3. After three new tasks are added, an alert notifies you:  
   > "There are enough tasks on your board, please check them in the console."  
4. The console will then display:  
   - **All tasks** under `"All tasks:"`  
   - **Completed tasks** under `"Complete tasks:"`


---

## 📑 Code Quality & Maintainability
- Clear, descriptive variable and function names  
- Consistent formatting and indentation  
- Inline comments explaining core logic and decisions  
- Modular functions (`getNextId`, `getTask`) for easier readability and reuse  

---

## ✅ Expected Outcome
A hybrid task management project that combines a **visual Kanban board (HTML/CSS)** with **console-based JavaScript logic**.  
Users can add, validate, review, and filter tasks effectively, while practicing core JavaScript concepts.


**Console Log Example:**  
![console log](./explainer-images/console%20log.png)  

---
## 🔮 Future improvements
- Dynamically generate task elements from the initial data and insert them into the DOM  
- Ensure tasks appear in the correct columns (**To Do**, **In Progress**, **Done**) based on their status  
- Enable task click functionality to open a modal showing full task details  
- Provide editable fields in the modal for task title and description  
- Add a status dropdown in the modal to allow changing the task’s status  
- Include a close button in the modal for easy exit  


