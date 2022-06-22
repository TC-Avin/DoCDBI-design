import axios from "axios";
import Cookies from "js-cookie";

// for live server
const API = axios.create({
  baseURL: "https://docdbi-user.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("token")) {
    req.headers["token"] = `${Cookies.get("token")}`;
  }
  return req;
});

export const loginUser = (values) => {
  return API.post("/auth/login", values);
};

export const getTest = (values) => {
  return API.get("/company/auth/");
};

export const signUp = (values) => {
  return API.post("https://docdbi-user.herokuapp.com/company/auth/register", {
    name: values.name,
    email: values.email,
    company_name: values.companyName,
    password: values.password,
    confirm_password: values.password,
  });
};

export const resendEmail = (email) => {
  return API.post("company/auth/resendActivation", {
    email: email,
  });
};

export const forgetPassword = (email) => {
  return API.post("auth/forgotPassword", {
    email: email,
  });
};

export const allContacts = (page) => {
  return axios.post(
    "https://docdbi-kylo.herokuapp.com/api/leads/filter_contacts",
    {
      page: page,
      limits: 100,
    }
  );
};

export const filterContacts = (filterOptions) => {
  return axios.post(
    "https://docdbi-kylo.herokuapp.com/api/leads/filter_contacts",
    {
      query: filterOptions,
    }
  );
};

export const getTeamMembers = () => {
  return API.get("/company/members/");
};

export const inviteTeamMembers = (values) => {
  return API.post("company/members/invite", values);
};

export const getPlans = () => {
  return API.get("admin/subscription/getAll");
};

export const buySubscription = (sub_id) => {
  return API.post("company/plans/buyPlan", {
    subscription_id: sub_id,
  });
};
