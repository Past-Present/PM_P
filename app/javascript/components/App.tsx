import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProjectsPage from "../page/ProjectPage";
import ProjectDetailPage from "@/page/ProjectDetailPage";
import NavBar from "./Shared/NavBar";
import TalentPoolPage from "../page/TalentPoolPage";
import React, { useEffect, useState } from 'react';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#80A4AE",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });

  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  return (
    <Router future={{ v7_startTransition: true }}>
      <ThemeProvider theme={theme}>
        <NavBar
          projectId={currentProjectId}
          content={
            <Routes>
              <Route
                path="/projects"
                element={<ProjectsPage />}
              />
              <Route
                path="/projects/:id"
                element={<ProjectDetailPage setCurrentProjectId={setCurrentProjectId} />}
              />
              <Route
                path="/talent_pool"
                element={<TalentPoolPage />}
              />
            </Routes>
          }
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;
