import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <Card className="w-[400px] p-4">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Task Manager</h2>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter a task"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <Button onClick={addTask}>Add</Button>
          </div>
          <div className="mt-4 space-y-2">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center gap-2">
                <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
                <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
                <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
