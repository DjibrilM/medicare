import { lazy } from "react";

const Calendar = lazy(() => import("../pages/Calendar"));
const Chart = lazy(() => import("../pages/Chart"));
const FormElements = lazy(() => import("../pages/Form/FormElements"));
const FormLayout = lazy(() => import("../pages/Form/FormLayout"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Tables = lazy(() => import("../pages/Tables"));
const Alerts = lazy(() => import("../pages/UiElements/Alerts"));
const Buttons = lazy(() => import("../pages/UiElements/Buttons"));
const Triage = lazy(() => import("../pages/services/serviceTriage/TriagePage"));
const Doctor = lazy(() => import("../pages/services/serviceDoctor/Doctor"));
const ComptableOne = lazy(
  () => import("../pages/services/comptableOne/ComptableOne")
);
const Laboratoire = lazy(
  () => import("../pages/services/serviceLamboratoir/Laboratoire")
);
const PharmacyOne = lazy(
  () => import("../pages/services/servicePharmacy/PharmacyOnePage")
);
const PharmacyStock = lazy(
  () => import("../pages/services/servicePharmacy/PharmacyStock")
);
const ProfilePatients = lazy(
  () => import("../components/profilPacient/profilPacient")
);
const DoctorOperation = lazy(
  () => import("../pages/services/serviceDoctor/DoctorOperation")
);
const Reception = lazy(
  () => import("../pages/services/reception/ReceptionPage")
);
const Surveillance = lazy(
  () => import("../pages/services/surveillance/surveillance")
);
const FromReceptionPatient = lazy(
  () => import("../components/formReceptionPatient/FromReceptionPatient")
);
const Plantes = lazy(() => import("../components/plantes/Plantes"));
const ExamenLabo = lazy(
  () => import("../components/laboFormeDoctor/LaboFormDoctor")
);
const Diagnostic = lazy(() => import("../components/diagnostic/Diagnostic"));
const Traitement = lazy(() => import("../components/diagnostic/Diagnostic"));
const Hospitalisation = lazy(
  () => import("../pages/services/serviceHospitalisation/Hospitalisation")
);
const RegistreHospi = lazy(
  () => import("../components/registreHosp/RegistreHospi")
);
const coreRoutes = [
  {
    path: "/calendar",
    title: "Calender",
    component: Calendar,
  },
  {
    path: "/hospitalisation/registre",
    title: "RegistreHospi",
    component: RegistreHospi,
  },
  {
    path: "/services/doctor",
    title: "Doctor",
    component: Doctor,
  },
  {
    path: "/services/hospitalisation",
    title: "Hospitalisation",
    component: Hospitalisation,
  },
  {
    path: "/doctor/plantes",
    title: "plantes",
    component: Plantes,
  },
  {
    path: "/doctor/labo",
    title: "examen_labo",
    component: ExamenLabo,
  },
  {
    path: "/doctor/diagnostic",
    title: "diagnostic",
    component: Diagnostic,
  },
  {
    path: "/doctor/traitement",
    title: "traitement",
    component: Traitement,
  },
  {
    path: "/From/reception/patient",
    title: "FromReceptionPatient",
    component: FromReceptionPatient,
  },
  {
    path: "/services/doctor/operation",
    title: "Doctor",
    component: DoctorOperation,
  },
  {
    path: "/services/comptable_one",
    title: "comptableOne",
    component: ComptableOne,
  },
  {
    path: "/services/laboratoire",
    title: "laboratoire",
    component: Laboratoire,
  },
  {
    path: "/services/reception",
    title: "reception",
    component: Reception,
  },
  {
    path: "/services/surveillance",
    title: "surveillance",
    component: Surveillance,
  },
  {
    path: "/services/pharmacy/people",
    title: "phormacy_people",
    component: PharmacyOne,
  },
  {
    path: "/services/pharmacy/stock",
    title: "pharmacy_stock",
    component: PharmacyStock,
  },
  {
    path: "/services/triage",
    title: "Triage",
    component: Triage,
  },
  {
    path: "/profile",
    title: "Profile",
    component: Profile,
  },
  {
    path: "/forms/form-elements",
    title: "Forms Elements",
    component: FormElements,
  },
  {
    path: "/forms/form-layout",
    title: "Form Layouts",
    component: FormLayout,
  },
  {
    path: "/tables",
    title: "Tables",
    component: Tables,
  },
  {
    path: "/settings",
    title: "Settings",
    component: Settings,
  },
  {
    path: "/chart",
    title: "Chart",
    component: Chart,
  },
  {
    path: "/profile/patients",
    title: "profile_patients",
    component: ProfilePatients,
  },
  {
    path: "/ui/alerts",
    title: "Alerts",
    component: Alerts,
  },
  {
    path: "/ui/buttons",
    title: "Buttons",
    component: Buttons,
  },

];

const routes = [...coreRoutes];
export default routes;
