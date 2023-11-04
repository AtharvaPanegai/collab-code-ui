import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinRoomComponent from "./Components/JoinRoomComponent";
import HomePage from "./Pages/HomePage";
import EditorPage from "./Pages/EditorPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <div>
        <ToastContainer/>
      </div>
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
