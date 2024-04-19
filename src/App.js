import { useEffect } from 'react';
import './App.css';
// window.Telegram.WebApp;
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  })
  return (
    <div className="App">
      work on it
    </div>
  );
}

export default App;
