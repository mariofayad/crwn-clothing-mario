import "./authentication.styles.scss";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

import SignInForm from "../../component/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in with google Popup</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
