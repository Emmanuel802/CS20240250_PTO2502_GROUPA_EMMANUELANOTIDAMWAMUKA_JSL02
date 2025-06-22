async function getTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);
  if (title === null) return null;

  const description = prompt(`Enter the description for "${title}":`);
  if (description === null) return null;
}
