const MysteryBox = () => {
  return (
    <>
      <section>
        <div class="container">
          <div class="mb-2">
            <a href="" class="text-white bck_btn">
              <span>
                <img
                  class=""
                  src="/static/assets/images/market-place/back-arrow.svg"
                  alt=""
                />
              </span>
              Go Back
            </a>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="myst_box">
                <img
                  src="/static/assets/images/market-place/mrkt-2.gif"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6 ">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="myst_txt">
                  <h2 class="text-white">NBFLETCHER</h2>
                  <h3>
                    $29.3<span> BNB </span>{" "}
                  </h3>
                </div>
                <div class="">
                  <button
                    class="btn text-white f15 btn-bg bg-transparent"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade email-bg1"
        bsModal
        tabindex="-1"
        role="dialog"
        aria-labelledby="dialog-static-name"
      >
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content email-bg">
            <div class="modal-header justify-content-center  border-0 pt-5 text-center"></div>
            <div class="modal-body">
              <div class="MystryMdlSec">
                <div class="MystryBox">
                  <img
                    src="/static/assets/images/pages/mystry-box.gif"
                    class="img-fluid d-block mx-auto"
                  />
                </div>
                <div class="MystryDogSec">
                  <div class="MystryDogImg">
                    <img
                      src="/static/assets/images/pages/mystry-dog.png"
                      class="img-fluid"
                    />
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn BtnPrmry BtnGrd150-50 kids fw-400">
                      collect
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-relative">
              <img
                src="/static/assets/images/wallet/close.svg"
                class="img-fluid close-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MysteryBox;
