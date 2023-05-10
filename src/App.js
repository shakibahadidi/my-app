import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This code was created by Shakiba Hadidi and is{" "}
          <a
            href="https://github.com/shakibahadidi/my-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
