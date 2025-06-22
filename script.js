// Asynchronous function to gather tasks' details
async function getTask(taskNumber) {
  // Prompt user to enter the task title
  const title = prompt(`Enter task ${taskNumber} title:`);
  if (title === null) return null; // Exit if user cancels the prompt

  // Prompt user to enter a description for the task
  const description = prompt(`Enter the description for "${title}":`);
  if (description === null) return null; // Exit if user cancels

  // Prompt user to enter the task status (must be todo, doing, or done)
  let status = prompt(`Enter the status for "${title}" (todo, doing, done):`);
  if (status === null) return null; // Exit if user cancels

  // Convert status to lowercase for consistency
  status = status.toLowerCase();

  // Keep prompting until the user enters a valid status
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Invalid status. Please enter 'todo', 'doing', or 'done'.`);
    if (status === null) return null; // Exit if user cancels during correction
    status = status.toLowerCase(); // Normalize again
  }

  // Return the task object with title, description, and status
  return { title, description, status };
}

// Asynchronous function to collect tasks
async function collectTasks() {
  // Gets task 1
  const task1 = await getTask(1);
  if (!task1) {
    console.log("Task 1 entry cancelled. Exiting task collection.");
    return; // Exit if task 1 is cancelled
  }

  // Gets task 2
  const task2 = await getTask(2);
  if (!task2) {
    console.log("Task 2 entry cancelled. Exiting task collection.");
    return; // Exit if task 2 is cancelled
  }

  // Track if any task is marked as 'done'
  let anyDone = false;

  // If task 1 is done
  if (task1.status === "done") {
    console.log(
      `${task1.title}: ${task1.title}, Description: ${task1.description}, Status: ${task1.status}`
    );
    anyDone = true;
  }

  // If task 2 done
  if (task2.status === "done") {
    console.log(
      `${task2.title}: ${task2.title}, Description: ${task2.description}, Status: ${task2.status}`
    );
    anyDone = true;
  }

  // If no tasks are done
  if (!anyDone) {
    console.log("No tasks completed, let's get to work!");
  }
}

// Run the task collection when the page has fully loaded
document.addEventListener("DOMContentLoaded", collectTasks);
