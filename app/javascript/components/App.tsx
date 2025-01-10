import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProjectsPage from "./page/ProjectPage";
import NavBar from "./shared/NavBar";

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

  return (
    <Router future={{ v7_startTransition: true }}>
      <ThemeProvider theme={theme}>
        <NavBar
          content={
            <Routes>
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          }
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;
