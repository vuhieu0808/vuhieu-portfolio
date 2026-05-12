import "./common/styles/App.css";

import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { SkillsPage } from "./pages/SkillsPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <MainLayout>
              <ProjectDetailPage />
            </MainLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <MainLayout>
              <SkillsPage />
            </MainLayout>
          }
        />
        <Route
          path="/certifications"
          element={
            <MainLayout>
              <CertificationsPage />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
