import React, { useEffect, useState } from "react";
import HeaderBar from "./comman/HeaderBar";
import TopBar from "./comman/TopBar";
import Footer from "./comman/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderContruction from "./comman/UnderContruction";
import Verify from "../pages/ContactSerch/filterCompo/Verify";
import Filter from "../pages/ContactSerch/Filter";
import url from "../helper/config.js";
import AuthContext from "./Context/AuthContext";
import ProtectedRoutes from "./Context/ProtectRoutes";
import HeaderFilterTopBarWrapper from "../helper/MainWrapper";
import Congratulations from "../pages/ContactSerch/AuthModule/Congratulations";
import ContactSearchManagement from "../pages/ContactSerch/ContactSearch/ContactSearch";
import ProfileManagement from "../pages/ContactSerch/ProfileTab/ProfileIndex";
import MyList from "../pages/ContactSerch/MyList/MyList";
import PasswordChange from "../pages/ContactSerch/AuthModule/PasswordChange";
import VerifyEmailPage from "../pages/ContactSerch/AuthModule/VerifyEmailPage";
import Company from "../pages/ContactSerch/Admin/Companies/Company";
import FlageButton from "../componants/comman/FlageButton"
import Categories from "../pages/ContactSerch/Admin/Companies/Categories";
import Leads from "../pages/ContactSerch/Admin/Companies/Leads";



const DocDBI = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContext>
          <Routes>
            {/* <Route path="/" element={<LoginManagement />}/>
            <Route path="/signUp" element={<LoginMainPage />}/>
            <Route path="/email" element={<VerifyEmailPage />}/> */}

            {/* <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  {HeaderFilterTopBarWrapper(<UnderContruction />)}
                </ProtectedRoutes>
              }
            /> */}
            <Route path="/home" element={HeaderFilterTopBarWrapper(<UnderContruction />)} />
            <Route
              path="/contactsearch"
              element={HeaderFilterTopBarWrapper(
                <ProtectedRoutes>
                  <ContactSearchManagement />
                </ProtectedRoutes>
              )}
            />
            <Route
              path="/mylist"
              element={HeaderFilterTopBarWrapper(<MyList />)}
            />
            {/* <Route path="/verify" element={<VerifyEmailPage />} /> */}
            <Route path="/congrats" element={<Congratulations />} />

            <Route
              path="/dashboard"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />
            <Route
              path="/home"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />
            <Route
              path="/mylist"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />

            <Route
              path="/lookup"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />
            <Route
              path="/subscription"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />

                   

            <Route path="/lookup" element={HeaderFilterTopBarWrapper(<UnderContruction />)} />
            <Route
              path="/profile"
              element={ 
                // <ProtectedRoutes>
                HeaderFilterTopBarWrapper(<ProfileManagement />)
                // </ProtectedRoutes>
              }
            />
            <Route
              path="/subscription"
              element={HeaderFilterTopBarWrapper(<UnderContruction />)}
            />
            <Route path="/verify" element={<VerifyEmailPage />} />
           
            <Route path="/forgotpassword" element={<PasswordChange />} />


            <Route path="/company" element={HeaderFilterTopBarWrapper(<Company />)} />
            <Route path="/flageButton" element={HeaderFilterTopBarWrapper(<FlageButton />)} />

            <Route path="/categories" element={HeaderFilterTopBarWrapper(<Categories />)} />



            <Route path="/leads" element={HeaderFilterTopBarWrapper(<Leads />)} />

          </Routes>
        </AuthContext>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default DocDBI;
