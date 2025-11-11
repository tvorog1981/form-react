import { Route, Routes } from "react-router";
import Form from "../component/FormYup/Form/Form";
import FormYup from "../component/FormYup/FormYup";

export default function R() {
  return (
    <Routes>
      <Route path="/form" Component={Form} />
      <Route path="/form-yup" Component={FormYup} />
    </Routes>
  );
}
