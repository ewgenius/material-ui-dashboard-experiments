import * as React from "react";
import { render } from "react-dom";
import { Button, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div>
      <CssBaseline />
      <Button>test</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
