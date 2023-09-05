import { useState } from "react";
import { RenderArea, Sidebar } from "./pages";

const App = () => {
  const [htmlTemplate, setHtml] = useState("")
  const [style, setStyle] = useState("")

  return (
    <main className="grid lg:grid-cols-6 h-screen overflow-hidden">
      <Sidebar />
      <RenderArea html={htmlTemplate} setHtml={setHtml} setStyle={setStyle} style={style}/>
    </main>
  );
};

export default App;
