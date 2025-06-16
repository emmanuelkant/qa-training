import { useState, useEffect } from 'react';

interface HistoryItem {
  num1: number;
  num2: number;
  operation: string;
  result: number;
  timestamp: string;
}

export const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = sessionStorage.getItem('calculatorHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const clearHistory = () => {
    sessionStorage.removeItem('calculatorHistory');
    setHistory([]);
  };

  if (history.length === 0) {
    return (
      <div className="history">
        <h2>Calculation History</h2>
        <p>No calculations yet</p>
      </div>
    );
  }

  return (
    <div className="history">
      <h2>Calculation History</h2>
      <button onClick={clearHistory} className="clear-button">
        Clear History
      </button>
      <table>
        <thead>
          <tr>
            <th>First Number</th>
            <th>Operation</th>
            <th>Second Number</th>
            <th>Result</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.num1}</td>
              <td>{item.operation}</td>
              <td>{item.num2}</td>
              <td>{item.result}</td>
              <td>{new Date(item.timestamp).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 