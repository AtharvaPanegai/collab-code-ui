import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinRoomComponent from "./Components/JoinRoomComponent";
import HomePage from "./Pages/HomePage";
import EditorPage from "./Pages/EditorPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:loungeId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
