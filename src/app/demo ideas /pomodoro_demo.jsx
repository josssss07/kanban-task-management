import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Clock, CheckSquare, BarChart2, Play, Pause, RefreshCw, Save } from 'lucide-react';

// Mock data
const initialTasks = [
  { id: 1, title: "Design UI Components", completed: false, timeSpent: 85, category: "Design" },
  { id: 2, title: "Implement Authentication", completed: true, timeSpent: 120, category: "Development" },
  { id: 3, title: "Fix API Response Bug", completed: false, timeSpent: 45, category: "Bug Fix" },
  { id: 4, title: "Write Documentation", completed: false, timeSpent: 60, category: "Documentation" },
];

const POMODORO = 25 * 60;
const SHORT_BREAK = 5 * 60;
const LONG_BREAK = 15 * 60;

const PomodoroTaskTracker = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState(null);
  const [timer, setTimer] = useState(POMODORO);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro');
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('Development');
  const [activeTab, setActiveTab] = useState('timer');

  useEffect(() => {
    let interval = null;
    
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      clearInterval(interval);
      
      if (mode === 'pomodoro') {
        setPomodoroCount(pomodoroCount + 1);
        
        if (activeTask) {
          const updatedTasks = tasks.map(task => 
            task.id === activeTask.id 
              ? {...task, timeSpent: task.timeSpent + POMODORO / 60} 
              : task
          );
          setTasks(updatedTasks);
        }
        
        // After 4 pomodoros, take a long break
        if ((pomodoroCount + 1) % 4 === 0) {
          setMode('longBreak');
          setTimer(LONG_BREAK);
        } else {
          setMode('shortBreak');
          setTimer(SHORT_BREAK);
        }
      } else {
        // After a break, go back to pomodoro
        setMode('pomodoro');
        setTimer(POMODORO);
      }
    }
    
    return () => clearInterval(interval);
  }, [isActive, timer, mode, pomodoroCount, activeTask, tasks]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (mode === 'pomodoro') {
      setTimer(POMODORO);
    } else if (mode === 'shortBreak') {
      setTimer(SHORT_BREAK);
    } else {
      setTimer(LONG_BREAK);
    }
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: tasks.length + 1,
        title: newTask,
        completed: false,
        timeSpent: 0,
        category: newCategory
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const selectTask = (task) => {
    setActiveTask(task);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
  };

  // Analytics data
  const categoryData = Object.entries(
    tasks.reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + task.timeSpent;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const productivityByDay = [
    { day: "Mon", completed: 4, incomplete: 1 },
    { day: "Tue", completed: 3, incomplete: 2 },
    { day: "Wed", completed: 5, incomplete: 0 },
    { day: "Thu", completed: 2, incomplete: 3 },
    { day: "Fri", completed: 3, incomplete: 1 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2 bg-white rounded-lg shadow-md">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'timer' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('timer')}
          >
            <Clock className="w-4 h-4 mr-2" />
            Timer
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'tasks' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('tasks')}
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Tasks
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart2 className="w-4 h-4 mr-2" />
            Dashboard
          </button>
        </div>
      </div>

      {activeTab === 'timer' && (
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            <button 
              className={`px-4 py-2 rounded-lg ${mode === 'pomodoro' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => { setMode('pomodoro'); setTimer(POMODORO); setIsActive(false); }}
            >
              Pomodoro
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${mode === 'shortBreak' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => { setMode('shortBreak'); setTimer(SHORT_BREAK); setIsActive(false); }}
            >
              Short Break
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${mode === 'longBreak' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => { setMode('longBreak'); setTimer(LONG_BREAK); setIsActive(false); }}
            >
              Long Break
            </button>
          </div>
          
          <div className="text-8xl font-bold mb-8 text-center">
            {formatTime(timer)}
          </div>
          
          <div className="flex space-x-4 mb-8">
            <button 
              className="p-4 bg-blue-500 text-white rounded-full"
              onClick={toggleTimer}
            >
              {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button 
              className="p-4 bg-gray-300 text-gray-700 rounded-full"
              onClick={resetTimer}
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>
          
          <div className="w-full max-w-md">
            <div className="text-lg font-semibold mb-2">Current Task:</div>
            <div className="p-4 bg-white rounded-lg shadow mb-4">
              {activeTask ? (
                <div>
                  <div className="font-medium">{activeTask.title}</div>
                  <div className="text-sm text-gray-500">{activeTask.category} • {activeTask.timeSpent} minutes logged</div>
                </div>
              ) : (
                <div className="text-gray-500">No task selected</div>
              )}
            </div>
            
            <div className="text-lg font-semibold mb-2">Task List:</div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {tasks.filter(task => !task.completed).map(task => (
                <div 
                  key={task.id} 
                  className={`p-3 border-b flex justify-between items-center cursor-pointer ${activeTask && activeTask.id === task.id ? 'bg-blue-50' : ''}`}
                  onClick={() => selectTask(task)}
                >
                  <div>
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-gray-500">{task.category} • {task.timeSpent} minutes</div>
                  </div>
                  <button 
                    className="p-1 text-gray-400 hover:text-green-500"
                    onClick={(e) => { e.stopPropagation(); toggleTaskCompletion(task.id); }}
                  >
                    <CheckSquare className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex mb-2">
              <input
                type="text"
                className="flex-1 p-3 border rounded-l-lg"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <select 
                className="p-3 border-t border-b border-r"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option>Development</option>
                <option>Design</option>
                <option>Bug Fix</option>
                <option>Documentation</option>
                <option>Meeting</option>
              </select>
              <button 
                className="p-3 bg-blue-500 text-white rounded-r-lg"
                onClick={addTask}
              >
                <Save className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Active Tasks</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {tasks.filter(task => !task.completed).length === 0 ? (
                <div className="p-4 text-gray-500">No active tasks</div>
              ) : (
                tasks.filter(task => !task.completed).map(task => (
                  <div key={task.id} className="p-4 border-b">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{task.title}</h3>
                      <button 
                        className="text-gray-400 hover:text-green-500"
                        onClick={() => toggleTaskCompletion(task.id)}
                      >
                        <CheckSquare className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>{task.category}</span>
                      <span>{task.timeSpent} minutes logged</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-2">Completed Tasks</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {tasks.filter(task => task.completed).length === 0 ? (
                <div className="p-4 text-gray-500">No completed tasks</div>
              ) : (
                tasks.filter(task => task.completed).map(task => (
                  <div key={task.id} className="p-4 border-b opacity-70">
                    <div className="flex justify-between">
                      <h3 className="font-medium line-through">{task.title}</h3>
                      <button 
                        className="text-green-500"
                        onClick={() => toggleTaskCompletion(task.id)}
                      >
                        <CheckSquare className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>{task.category}</span>
                      <span>{task.timeSpent} minutes logged</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Time by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} minutes`, 'Time Spent']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Weekly Productivity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={productivityByDay}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#4CAF50" name="Completed" />
                <Bar dataKey="incomplete" stackId="a" fill="#FF5722" name="Incomplete" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Productivity Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-700 mb-1">Total Time Tracked</h3>
                <p className="text-3xl font-bold">
                  {tasks.reduce((total, task) => total + task.timeSpent, 0)} minutes
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-green-700 mb-1">Completed Tasks</h3>
                <p className="text-3xl font-bold">
                  {tasks.filter(task => task.completed).length}/{tasks.length}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-purple-700 mb-1">Pomodoros Today</h3>
                <p className="text-3xl font-bold">
                  {pomodoroCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTaskTracker;