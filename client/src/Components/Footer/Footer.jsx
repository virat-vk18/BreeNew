import "./Footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="py-3 footer-bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <img src="/static/assets/images/logo.png" class="img-fluid" />
              <label class="text-lwhite f-12 ml-5 fw-400">
                Ⓒ 2022 Osiz. All rights reserved.
              </label>
            </div>

            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-5">
              <ul class="list-style d-flex flex-wrap  justify-content-center mb-0">
                <li onClick={() => navigate("/faq")}>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms of Conditions</a>
                </li>
                <li onClick={() => navigate("/privacy")}>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="d-flex media-icon justify-content-center ">
                <ul class="list-unstyled d-flex justify-content-center mb-0 ">
                  <li>
                    <a>
                      <i class="fab fa-facebook "></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-telegram "></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-instagram "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
