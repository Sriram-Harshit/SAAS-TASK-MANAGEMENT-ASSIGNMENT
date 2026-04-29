import { useEffect, useState } from "react";
import API from "../services/api";
import { Check, Trash2, LogOut } from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.put(`/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      {/* Header */}
      <div className="max-w-2xl mx-auto flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">My Tasks 🧠</h1>
          <p className="text-gray-200 text-sm">Stay organized and focused</p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Card */}
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
        {/* Add Task */}
        <div className="flex gap-2 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={addTask}
            className="bg-white text-indigo-600 px-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-gray-300">No tasks yet 🚀</p>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-white/20 p-3 rounded-lg"
            >
              {/* Task Title */}
              <span
                className={`text-white ${
                  task.status === "Completed"
                    ? "line-through text-gray-300"
                    : ""
                }`}
              >
                {task.title}
              </span>

              {/* Actions */}
              <div className="flex gap-2">
                {/* Complete Button */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition transform hover:scale-110"
                >
                  <Check size={16} />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition transform hover:scale-110"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
