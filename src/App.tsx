import React, { useState } from "react"
import { loadOsuFile } from "./loadOsuFile"

export default function App() {
  const [content, setContent] = useState<string>()

  const showOpenDialog = () => {
    loadOsuFile()
      .then((content) => content && setContent(content))
      .catch((error) => alert(error?.message || String(error)))
  }

  return (
    <main>
      {content ?? <button onClick={showOpenDialog}>load .osu file</button>}
    </main>
  )
}
