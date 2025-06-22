async function getTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);
  if (title === null) return null;

  const description = prompt(`Enter the description for "${title}":`);
  if (description === null) return null;

  let status = prompt(`Enter the status for "${title}" (todo, doing, done):`);
  if (status === null) return null;

  status = status.toLowerCase();

  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Invalid status. Please enter 'todo', 'doing', or 'done'.`);
    if (status === null) return null;
    status = status.toLowerCase();
  }

  return { title, description, status };
}

async function collectTasks() {
  const task1 = await getTask(1);
  if (!task1) {
    console.log("Task 1 entry cancelled. Exiting task collection.");
    return;
  }

  const task2 = await getTask(2);
  if (!task2) {
    console.log("Task 2 entry cancelled. Exiting task collection.");
    return;
  }

  let anyDone = false;

  if (task1.status === "done") {
    console.log(
      `${task1.title}: ${task1.title}, Description: ${task1.description}, Status: ${task1.status}`
    );
    anyDone = true;
  }

  if (task2.status === "done") {
    console.log(
      `${task2.title}: ${task2.title}, Description: ${task2.description}, Status: ${task2.status}`
    );

    anyDone = true;
  }

  if (!anyDone) {
    console.log("No tasks completed, let's get to work!");
  }
}

document.addEventListener("DOMContentLoaded", collectTasks);
