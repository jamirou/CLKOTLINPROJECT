import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverPassword from "../pages/RecoverPassword";
import ChangePassword from "../pages/ChangePassword";
import { UpdateVacancy } from "../pages/UpdateVacancy";
import CV from "../pages/CV";
import Vacancies from "../pages/Vacancies";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateVacancy } from "../pages/CreateVacancy";
import { CreateUser } from "../pages/CreateUser";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";
import NotFound from "../pages/NotFound";
import { paths } from "./paths";
import { RequireAuth } from "./RequireAuth";
import { ROLES } from "../helpers/constants";
import NotAccess from "../pages/NotAccess";
import VacancyView from "../pages/VacancyView";
import ManagerSearchPage from "../pages/ManagerSearchPage";
import InvitationPage from "../pages/InvitationPage";
import CandidateProfileInfo from "../components/CandidateProfileInfo";
import ManagerVacanciesPage from "../pages/ManagerVacanciesPage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<Register />} />
      <Route path={paths.recoverPassword} element={<RecoverPassword />} />
      <Route path={paths.changePassword} element={<ChangePassword />} />

      <Route element={<RequireAuth />}>
        <Route path={paths.notifications} element={<Notifications />} />
        <Route path={paths.messaging} element={<Messaging />} />
        <Route path={paths.messagingUser} element={<Messaging />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.vacancies} element={<Vacancies />} />
        <Route path={paths.vacancyDetails} element={<VacancyView />} />
        <Route
          path={paths.candidateProfile}
          element={<CandidateProfileInfo />}
        />
        <Route path={paths.profile} element={<Profile />} />
      </Route>

      <Route element={<RequireAuth role={ROLES.CANDIDATE} />}>
        <Route path={paths.cv} element={<CV />} />
      </Route>
      <Route element={<RequireAuth role={ROLES.MANAGER} />}>
        <Route path={paths.createVacancy} element={<CreateVacancy />} />
        <Route path={paths.managerSearchPage} element={<ManagerSearchPage />} />
        <Route path={paths.sendInvitation} element={<InvitationPage />} />
        <Route
          path={paths.managerVacanciesPage}
          element={<ManagerVacanciesPage />}
        />
        <Route
          path={paths.managerVacanciesPage}
          element={<ManagerVacanciesPage />}
        />
        <Route path={paths.updateVacancy} element={<UpdateVacancy />} />
      </Route>
      <Route element={<RequireAuth role={ROLES.ADMIN} />}>
        <Route path={paths.createUser} element={<CreateUser />} />
      </Route>

      <Route path={paths.notAccess} element={<NotAccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
