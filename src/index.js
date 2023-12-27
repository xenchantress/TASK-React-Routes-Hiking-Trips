import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const CustomInput = (props) => <input className="custom-input" {...props} />;
//  const CustomTextarea = (props) => <textarea className="custom-text-area" {...props} />;

//  const App = () => (
//    <Page>
//      <FormiumForm
//        slug="support-request"
//        components={{
//          TextInput: CustomInput,
//          Textarea: CustomTextarea
//        }}
//      />
//    </Page>
//  );

//  import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// function App() {
//  return (
//    <div className="App">
//      <center>
//        <h1>Register a new account</h1>
//        <Formik>

//            <Form>
//              <Field
//                type="text"
//                name="fullname"
//                placeholder="Enter your fullname"
//              />
//              <ErrorMessage name="fullname" component="div" />

//              <Field
//                type="email"
//                name="email"
//                placeholder="Enter email address"
//              />
//              <ErrorMessage name="email" component="div" />

//              <Field type="password" name="password" />
//              <ErrorMessage name="password" component="div" />

//              <button type="submit" disabled={isSubmitting}>
//                Submit
//              </button>
//            </Form>
//          )}
//        </Formik>
//      </center>
//    </div>
//  );
// }
// export default App;
