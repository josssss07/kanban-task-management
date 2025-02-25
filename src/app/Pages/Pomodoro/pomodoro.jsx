// components/PomodoroTimer.js
import { useState, useEffect, useRef } from 'react';

const PomodoroTimer = ({ onLogUpdate }) => {
  const [mode, setMode] = useState('work'); // 'work' or 'break'
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  
  const timerRef = useRef(null);

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0) {
      const newMode = mode === 'work' ? 'break' : 'work';
      const duration = mode === 'work' ? 25 : 5; // work: 25min, break: 5min
      
      // Log completed session
      if (mode === 'work' && sessionStartTime) {
        const duration = (Date.now() - sessionStartTime) / 1000; // duration in seconds
        const formattedDuration = formatTime(Math.floor(duration));
        const newLogs = [...logs, {
          type: 'work',
          duration: formattedDuration,
          completedAt: new Date().toLocaleTimeString()
        }];
        setLogs(newLogs);
        if (onLogUpdate) onLogUpdate(newLogs);
      }
      
      // Reset timer for new mode
      clearInterval(timerRef.current);
      setMode(newMode);
      setTimeLeft(duration * 60);
      setIsRunning(false);
      
      // Play notification sound
      playNotification();
    }
  }, [timeLeft, mode, sessionStartTime, logs, onLogUpdate]);

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      
      // If stopping during work mode, log the time spent
      if (mode === 'work' && sessionStartTime) {
        const duration = (Date.now() - sessionStartTime) / 1000; // duration in seconds
        const formattedDuration = formatTime(Math.floor(duration));
        const newLogs = [...logs, {
          type: 'work (paused)',
          duration: formattedDuration,
          completedAt: new Date().toLocaleTimeString()
        }];
        setLogs(newLogs);
        if (onLogUpdate) onLogUpdate(newLogs);
        setSessionStartTime(null);
      }
    } else {
      // If starting in work mode, record the start time
      if (mode === 'work') {
        setSessionStartTime(Date.now());
      }
      
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    const duration = mode === 'work' ? 25 : 5;
    setTimeLeft(duration * 60);
    setIsRunning(false);
    
    // Log reset if in work mode and timer was running
    if (mode === 'work' && isRunning && sessionStartTime) {
      const duration = (Date.now() - sessionStartTime) / 1000;
      const formattedDuration = formatTime(Math.floor(duration));
      const newLogs = [...logs, {
        type: 'work (reset)',
        duration: formattedDuration,
        completedAt: new Date().toLocaleTimeString()
      }];
      setLogs(newLogs);
      if (onLogUpdate) onLogUpdate(newLogs);
      setSessionStartTime(null);
    }
  };

  const switchMode = () => {
    const newMode = mode === 'work' ? 'break' : 'work';
    const duration = newMode === 'work' ? 25 : 5;
    setMode(newMode);
    setTimeLeft(duration * 60);
    
    // Log mode switch if timer was running
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      
      if (mode === 'work' && sessionStartTime) {
        const duration = (Date.now() - sessionStartTime) / 1000;
        const formattedDuration = formatTime(Math.floor(duration));
        const newLogs = [...logs, {
          type: 'work (switched)',
          duration: formattedDuration,
          completedAt: new Date().toLocaleTimeString()
        }];
        setLogs(newLogs);
        if (onLogUpdate) onLogUpdate(newLogs);
        setSessionStartTime(null);
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playNotification = () => {
    // Create audio element and play sound
    const audio = new Audio('/notification.mp3');
    audio.play().catch(e => console.log('Error playing notification sound:', e));
  };

  // Calculate progress percentage for the circle
  const progress = mode === 'work' 
    ? (timeLeft / (25 * 60)) * 100 
    : (timeLeft / (5 * 60)) * 100;
  
  // Calculate circle circumference and offset
  const circleRadius = 80;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h1 className="text-3xl font-medium mb-8 text-white">pomodoro</h1>
      
      <div className="bg-very-dark-grey rounded-full p-2 mb-8 flex">
        <button 
          onClick={() => { if (mode !== 'work') switchMode(); }}
          className={`px-6 py-2 rounded-full text-sm ${mode === 'work' ? 'bg-red-400 text-semi-white' : 'text-medium-grey'}`}
        >
          work
        </button>
        <button 
          onClick={() => { if (mode !== 'break') switchMode(); }}
          className={`px-6 py-2 rounded-full text-sm ${mode === 'break' ? 'bg-deep-purple text-dark-grey' : 'text-white'}`}
        >
          break
        </button>
      </div>
      
      <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
        {/* Background circle */}
        <div className="absolute w-full h-full rounded-full bg-main-purple glow-effect"></div>
        
        {/* Progress circle */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={circleRadius}
            strokeWidth="6"
            stroke={mode === 'work' ? 'rgb(248, 113, 113)' : 'rgb(129, 140, 248)'}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        
        {/* Timer text */}
        <div className="text-5xl font-light z-10">
          {formatTime(timeLeft)}
        </div>
      </div>
      
      <button 
        onClick={toggleTimer}
        className="w-12 h-12 rounded-full bg-dark-grey flex items-center justify-center mb-8"
      >
        {isRunning ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>

      {/* Time Logs Section */}
      {logs.length > 0 && (
        <div className="mt-8 w-full">
          <h2 className="text-xl mb-4 text-center">Session Logs</h2>
          <div className="bg-very-dark-grey rounded-lg p-4 max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-2 last:mb-0 flex justify-between">
                <span>{log.type}</span>
                <span>{log.duration} @ {log.completedAt}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;