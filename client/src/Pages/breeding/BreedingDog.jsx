import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const BreedingDog = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Header />

      <section class="pt-xl-5 pt-3 py-xl-5">
        <div class="container mt-xl-5 pt-xl-5">
          <div class="mb-2">
            <a href="" class="text-white bck_btn">
              <span>
                <img
                  class=""
                  src="/static/assets/images/market-place/back-arrow.svg"
                  alt=""
                />
              </span>{" "}
              Go Back
            </a>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h5 class="text-white text-center f-30 mb-5 d-block kids text-uppercase ">
                breeding
              </h5>
            </div>
          </div>
          <div class="row pb-5 align-items-center position-relative">
            <div class="p-2 detail">
              <ul class="text-white">
                <li>Finney</li>
                <li>Z39 Pacer</li>
                <li>Male</li>
                <li>Fawn</li>
              </ul>
            </div>

            <div class="col-sm-12 col-lg-5 col-md-12 col-xl-5">
              <div class="black-border p-3 w-dog text-center mr-auto">
                <label class="f-14 fw-400 text-white sen">
                  Golden Satoshi.{" "}
                  <span class="ml-2 f-14 danger-text">1505</span>{" "}
                </label>
                <label class="f-16 fw-400 text-grey sen">
                  Glue is a Colt andhe is ready to mate.
                </label>
              </div>
              <div class="text-center pb-4 margin-4">
                <img
                  src="/static/assets/images/b-dog1.svg "
                  alt=" "
                  class="position-img1 d-block m-auto img-fluid "
                />
                <img
                  src="/static/assets/images/market-place/stone-b.svg "
                  alt=" "
                  class="mix-bled img-fluid "
                />
              </div>
              <div class="black-border p-3 text-center w-50 m-auto">
                <label class="f-14 fw-400 d-block text-white sen">
                  PERFORMANCE
                </label>
                <label class="f-14 fw-400  d-block  text-white sen">
                  18 2/3/1 W 11.11%
                </label>
                <label class="f-16 fw-400  d-block  text-grey sen">
                  0 3 of 3 left
                </label>
              </div>
            </div>
            <div class="col-sm-12 col-lg-2 col-md-12 col-xl-2 text-center">
              <img
                src="/static/assets/images/heart.svg "
                alt=" "
                class="img-fluid my-4"
              />
            </div>
            <div class="col-sm-12 col-lg-5 col-md-12 col-xl-5 ">
              <div
                class="black-border py-4 w-dog text-center ml-auto"
                onClick={toggle}
                role="button"
              >
                <label class="f-20 fw-400 text-yellow sen" role="button">
                  Select Female
                </label>
              </div>
              <div class="text-center pb-4 margin-r-4">
                <img
                  src="/static/assets/images/black-dog.svg"
                  alt=" "
                  class="position-img1 d-block m-auto img-fluid "
                />
                <img
                  src="/static/assets/images/market-place/stone-b.svg"
                  alt=" "
                  class="mix-bled img-fluid "
                />
              </div>
              <div class="black-border p-3 text-center  w-50 m-auto h-33"></div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={"modal-md"}
        modalClassName="email-bg1"
        contentClassName="email-bg"
        centered={true}
      >
        <ModalHeader
          toggle={toggle}
          className="justify-content-center border-0 pt-5 text-center "
        >
          <h4
            id="dialog-static-name "
            class="modal-title text-white pull-left kids text-uppercase "
          >
            Select Female
          </h4>
        </ModalHeader>
        <ModalBody className="select-breed ">
          <div class="breed-h ">
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
            <div class="d-flex flex-wrap align-items-center BrdBottm pb-2 mb-3 ">
              <div>
                <img
                  src="/static/assets/images/b-dog.svg "
                  class="img-fluid mr-3 mb-3 "
                />
              </div>
              <div class="ml-xl-4 ml-sm-4 ">
                <label class="text-white f-16 fw-400 sen ">NBFLETCHER</label>
                <span class="text-grey f-16 fw-400 stall sen ml-2 "> Z2 </span>
                <span class="text-grey f-16 fw-400 sen "> Stallion</span>
                <span class="text-grey f-16 d-block fw-400 sen ">
                  2 Breeds Left
                </span>
              </div>
            </div>
          </div>
        </ModalBody>
        <div class="position-relative" onClick={toggle}>
          <img
            src="/static/assets/images/wallet/close.svg "
            class="img-fluid close-bg "
          />
        </div>
      </Modal>

      <Footer />
    </>
  );
};
export default BreedingDog;
