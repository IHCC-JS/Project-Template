import {Task} from "./Task";

const STORAGE_KEY = "todo_tasks";

export class TaskManager {
    private tasks: Task[] = [];

    async init(seedUrl: string): Promise<void> {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            this.tasks = JSON.parse(stored);
            return;
        }
        const response = await fetch(seedUrl);
        if (!response.ok) {
            console.error("Error loading seed tasks:");
            this.tasks = [];
            return;
        }
        this.tasks = await response.json();
        this.save();
    }

    private save(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    }

    addTask(title: string, description: string, priority: Task["priority"]): void {
        if (!title.trim()) return;
        const task: Task = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            completed: false,
            priority,
            createdAt: new Date().toISOString(),
        };
        this.tasks.push(task);
        this.save();
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter((t) => t.id !== id);
        this.save();
    }

    clearTasks(): void {
        this.tasks = [];
        this.save();
    }

    toggleTask(id: number): void {
        this.tasks = this.tasks.map((t) =>
            t.id === id ? {...t, completed: !t.completed} : t
        );
        this.save();
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}
