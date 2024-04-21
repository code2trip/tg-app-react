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
      it works
    </div>
  );
}

export default App;
