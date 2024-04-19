import { useEffect } from 'react';
import './App.css';
// window.Telegram.WebApp;
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
      work on it
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
