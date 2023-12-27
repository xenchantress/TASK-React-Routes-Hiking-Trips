import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
function App() {
  const [userInfo, setUserInfo] = useState(5);
  let x = 1;
  console.log(userInfo);
  // function handleValues(values) {
  //   console.log(values);
  // }
  // const init = {
  //   username: "",
  //   password: "",
  // };
  return (
    <div>
      {/* <Formik initialValues={init} onSubmit={handleValues}>
        <Form>
          <div>
            <Field name="username" />
          </div>
          <div>
            <Field name="password" />
          </div>
          <button>login</button>
        </Form>
      </Formik> */}

      <button onClick={() => setUserInfo(userInfo + 1)}>+</button>
      <div>{userInfo}</div>
      <button onClick={() => setUserInfo(userInfo - 1)}>-</button>
    </div>
  );
}

export default App;
