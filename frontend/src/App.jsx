import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [job, setJob] = useState(null);

  const handleSubmit = async (e) => {
    const newUser = {
      name,
      surname,
      job,
    };

    await axios.post("http://localhost:8080/users", newUser);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input
            name="name"
            for="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="surname"
            for="surname"
            placeholder="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            name="job"
            for="job"
            placeholder="job"
            onChange={(e) => setJob(e.target.value)}
          />
          <button>Submit</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
