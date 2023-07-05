import logo from './logo.svg';
import './App.css';
import { Counter } from './store/features/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p className="mt-2">
          React template with Redux, Tailwindcss and configured Prettier+ESLint
        </p>
        <div className="flex gap-2">
          <a
            className="App-link hover:text-blue-700"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          |
          <a
            className="App-link hover:text-blue-700"
            href="https://react-redux.js.org/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          |
          <a
            className="App-link hover:text-blue-700"
            href="https://tailwindcss.com/docs/"
            target="_blank"
            rel="noopener noreferrer">
            Tailwindcss
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
