import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Button } from "@workspaces/component-library";
import { serverValue } from "@workspaces/server";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await fetch("/api");
      const data = await response.json();

      setApiData(data);
    };

    getDataFromServer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This value is imported from @workspaces/server:{" "}
          <code>{serverValue}</code>
        </p>

        <p>
          {apiData ? (
            <>
              This data is fetched from the running server:{" "}
              <code>{JSON.stringify(apiData)}</code>
            </>
          ) : (
            "Calling /api..."
          )}
        </p>

        <p>These buttons are imported from @workspaces/component-library:</p>
        <Button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          label="Link"
        />
        <br />
        <Button className="App-button" label="Button" />
      </header>
    </div>
  );
}

export default App;
