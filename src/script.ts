import {TaskManager} from "./classes/TaskManager";
import {Task} from "./classes/Task";

const form = document.querySelector<HTMLFormElement>("#task-form")!;
const titleInput = document.querySelector<HTMLInputElement>("#title")!;
const descInput = document.querySelector<HTMLTextAreaElement>("#description")!;
const priorityInput = document.querySelector<HTMLSelectElement>("#priority")!;
const taskList = document.querySelector<HTMLUListElement>("#task-list")!;

const manager = new TaskManager();

function priorityColor(priority: Task["priority"]) {
    //TODO  is there a way to avoid hardcoding "hard" and "medium" here?
    switch (priority) {
        case "high":
            return "text-red-600";
        case "medium":
            return "text-yellow-600";
        default:
            return "text-green-600";
    }
}

function renderTasks() {
    const tasks = manager.getTasks();
    console.log(tasks);
    taskList.innerHTML = tasks
        .map(
            (task) => `
      <li class="flex items-start justify-between bg-gray-50 p-3 rounded border">
        <div>
          <h3 class="font-semibold ${task.completed ? "line-through text-gray-400" : ""}">
            ${task.title}
            <span class="text-sm ${priorityColor(task.priority)}">(${task.priority})</span>
          </h3>
          <p class="text-sm text-gray-600">${task.description}</p>
          <p class="text-xs text-gray-400">${new Date(task.createdAt).toLocaleString()}</p>
        </div>
        <div class="flex gap-2">
          <button data-action="toggle" data-id="${task.id}" class="text-green-600 hover:text-green-800">✓</button>
          <button data-action="delete" data-id="${task.id}" class="text-red-500 hover:text-red-700">✕</button>
        </div>
      </li>`
        )
        .join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    manager.addTask(
        titleInput.value,
        descInput.value,
        priorityInput.value as Task["priority"]
    );
    form.reset();
    renderTasks();
});

taskList.addEventListener("click", (e) => {
    // TODO is there a way to clean this up?
    const target = e.target as HTMLElement;
    const id = Number(target.dataset.id);
    const action = target.dataset.action;

    if (action === "delete") {
        manager.removeTask(id);
    } else {
        manager.toggleTask(id);
    }
    renderTasks();
});

manager.init("./data/tasks.json")
    .then(() => renderTasks());
