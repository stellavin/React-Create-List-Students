import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllNationalities } from "./Store/Reducers/StudentReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentView from "./Pages/StudentsView";
import HeaderComponent from "./Components/Header/header";
import AddStudents from "./Pages/Add";

function App() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllNationalities());
  }, []);

  return (
    <Router>
      <HeaderComponent />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<StudentView />} />
          <Route path="/home" element={<StudentView />} />
          <Route path="/new" element={<AddStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
