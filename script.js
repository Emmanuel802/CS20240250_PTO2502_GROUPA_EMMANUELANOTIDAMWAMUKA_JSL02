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
