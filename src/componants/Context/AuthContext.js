import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";
import {
  BUY_PLAN,
  FILTER_CONTACTS,
  FORGET_PASSWORD,
  GET_ALL_CONTACTS,
  GET_ALL_TEAM_MEMBERS,
  GET_SUBSCRIPTION,
  INVITE_TEAM_MEMBER,
  LOGIN_USER,
  RESEND_EMAIL,
  SIGNUP_USER,
} from "./Types";
import { loginUser, signUp } from "./APIs";
import UnProtectedRoutes from "./UnProtectedRoutes";
import Cookie from "js-cookie";
import { handleSignup } from "./Reducer/SignupReducer";
import { handleEmail, handleForgetPassword } from "./Reducer/EmailReducer";
import { getAllContacts } from "./Reducer/ContactsReducre";
import { fill } from "lodash";
import { filterAllContacts } from "./Reducer/ConactsFilterReducer";
import SignInPage from "../../pages/ContactSerch/AuthModule/SignInPage.";
import SignUpPage from "../../pages/ContactSerch/AuthModule/SignUpPage";
import VerifyEmailPage from "../../pages/ContactSerch/AuthModule/VerifyEmailPage";
import { getMembers, inviteMember } from "./Reducer/TeamMembersReducer";
import { buyPLan, getSubscriptionPlans } from "./Reducer/SubscriptionReducer";

export const AuthContext = createContext();

export default ({ children }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(Cookie.get("token")); //because after refresh state changes and was changing the value to default  by that it was redirect to dashboard page
  const [isAuthLoading, setIsAuthLoading] = useState();
  const [loggedUser, setLoggedUser] = useState();
  const [allContacts, setAllContacts] = useState();

  const [filter, setFilter] = useState({
    contact_name: [],
    title: [],
    phone_number: [],
    email: [],
    address: [],
    name: [],
  });
  useEffect(() => {}, [isAuthenticated]);

  //login
  const handleLogin = async (values, resetForm, setIsLoading) => {
    setIsLoading(true);
    try {
      const res = await loginUser(values);
      console.log(res);
      if (res.data.message === "Login Successful!") {
        setIsAuthenticated(true);
        if (res.data.remember_me) {
          console.log("asd");
          var inFifteenMinutes = new Date(
            new Date().getTime() + 15 * 60 * 1000
          );
          Cookies.set("token", res.data.access_token, {
            expires: 60,
          });
        } else {
          Cookies.set("token", res.data.access_token);
        }
        if (location.state) {
          const from = location.state.from;
          navigate(`/${from}`);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  // reducer function
  function reducer(state, action) {
    switch (action.type) {
      case LOGIN_USER:
        handleLogin(action.payload, action.resetForm, action.setIsLoading);
        break;
      case SIGNUP_USER:
        handleSignup(
          action.payload,
          action.resetForm,
          action.setIsLoading,
          navigate
        );
        break;
      case RESEND_EMAIL:
        handleEmail(action.payload, action.setIsLoading);
        break;
      case FORGET_PASSWORD:
        handleForgetPassword(action.payload, action.setResetPassword);
        break;
      case GET_ALL_CONTACTS:
        getAllContacts(action.page, action.setAllContacts);
        break;
      case FILTER_CONTACTS:
        filterAllContacts(filter, action.setAllContacts);
        break;
      case GET_ALL_TEAM_MEMBERS:
        getMembers(action.upDateState);
        break;
      case INVITE_TEAM_MEMBER:
        inviteMember(action.payload, action.resetForm, action.setIsLoading);
        break;
      case GET_SUBSCRIPTION:
        getSubscriptionPlans(action.upDateState);
        break;
      case BUY_PLAN:
        buyPLan(action.payload, navigate, action.setIsLoading);
        break;
    }
  }
  const initialValues = {};
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          dispatch,
          isAuthLoading,
          loggedUser,
          filter,
          setFilter,
          allContacts,
          setAllContacts,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <UnProtectedRoutes>
                <SignInPage />
              </UnProtectedRoutes>
            }
          />
          <Route
            path="/signUp"
            element={
              <UnProtectedRoutes>
                <SignUpPage />
              </UnProtectedRoutes>
            }
          />
          <Route
            path="/email"
            element={
              <UnProtectedRoutes>
                <VerifyEmailPage />
              </UnProtectedRoutes>
            }
          />
        </Routes>
        {children}
      </AuthContext.Provider>
    </>
  );
};
