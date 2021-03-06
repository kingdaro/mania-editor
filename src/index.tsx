import { Global, ThemeProvider } from "@emotion/react"
import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App.old"
import { reset } from "./ui/reset"
import { darkTheme } from "./ui/theme"

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <App />
    <Global styles={reset} />
  </ThemeProvider>,
  document.getElementById("root"),
)
