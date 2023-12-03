import { Outlet, Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const MarketLayout = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header />

      <div class="container site-cnt">
        <div class="basic-layout mt-3">
          <div class="sidenav">
            <nav id="sidebar">
              <ul class="list-unstyled components">
                <li class="mt-3" onClick={() => navigate("market-place")}>
                  <a class="sen-reg">
                    <i class="fa fa-shopping-cart mr-3"></i> Market Place{" "}
                  </a>
                </li>
                <li class="mt-3" onClick={() => navigate("my-stable")}>
                  <a class="sen-reg">
                    <i class="fa fa-user mr-3"></i> My Stable{" "}
                  </a>
                </li>
                <li class="mt-3">
                  <a class="sen-reg">
                    <i class="fa fa-sign-out mr-3"></i> Logout{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="main-cont">
            <div class="cnt-load-div">
              <button
                class="menutoggle d-xl-none ml-4 btn bg-primary1 mt-2"
                type="button"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <span className={openMenu ? "" : "d-none"}>
                  <i class="fa fa-bars text-pink"></i>
                </span>
                <span className={openMenu ? "d-none" : ""}>
                  <i class="fa fa-bars text-pink"></i>
                </span>
              </button>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MarketLayout;
