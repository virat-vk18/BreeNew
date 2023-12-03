import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const DogDetails = () => {
  return (
    <>
      <Header />

      <div class="DogDtlsPg">
        <div class="dog-bg DogDtlsBg py-5 ">
          <div class="container">
            <div class="DogDtlsTpHdd">
              <div class="GoBck">
                <a href="">
                  <img
                    src="/static/assets/images/pages/go-bck-icon.svg"
                    class="mr-2"
                  />
                  Go Back
                </a>
              </div>
              <div class="ShreLnk">
                <a href="" class="mr-4">
                  <img
                    src="/static/assets/images/pages/dog-dtls-lnk-icon1.png"
                    class="mr-2"
                  />
                  0x68bfbe03f9121...
                </a>
                <a href="">
                  <img
                    src="/static/assets/images/pages/dog-dtls-lnk-icon2.svg"
                    class="mr-2"
                  />
                  Share
                </a>
              </div>
            </div>
            <div class="row py-5 align-items-center">
              <div class="col-sm-12 col-lg-4 col-xl-3 col-md-4">
                <div class="shadow-dog mr-3 mt-5 DogBrdDtlsbg text-right">
                  <p>Bloodline</p>
                  <h4>Finney</h4>
                </div>
                <div class="shadow-dog  mr-5 mt-5  DogBrdDtlsbg text-right">
                  <p>gen</p>
                  <h4>Z39 Pacer</h4>
                </div>
                <div class="shadow-dog mr-3 mt-5  DogBrdDtlsbg text-right">
                  <p>Gender</p>
                  <h4>Male</h4>
                </div>
              </div>
              <div class="col-sm-12 col-lg-4 col-xl-6 col-md-4 text-center">
                <img
                  src="/static/assets/images/home16.svg"
                  class="img-fluid zoom-img my-5"
                />
              </div>
              <div class="col-sm-12 col-lg-4 col-xl-3 col-md-4">
                <div class="shadow-dog-left ml-3 mt-5 DogBrdDtlsbg ">
                  <p>coat</p>
                  <h4>Fawn</h4>
                </div>
                <div class="shadow-dog-left ml-5 mt-5 DogBrdDtlsbg ">
                  <p>offspring</p>
                  <h4>
                    0<span>3 of 3 Left</span>
                  </h4>
                </div>
                <div class="shadow-dog-left ml-3 mt-5 DogBrdDtlsbg ">
                  <p>breeding decay</p>
                  <h4>
                    Tier 0 <span>4 of 4 left</span>
                  </h4>
                </div>
              </div>
              <div class="col-md-12 text-center DogNme">
                <h2 class="text-white mt-4 f60 kids">dancing glue</h2>
                <h4>
                  {" "}
                  Owner <span>Taar-Stables</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="CareerPrfSec mb-5">
            <div class="SlctMtBg DgDtlsPgSlctMt">
              <div class="SlctMtHdd align-items-center">
                <div class="SlctMtSec TmLftSec d-flex">
                  <p class="mr-4">TIME LEFT</p>
                  <h4>2d 20h 11m</h4>
                </div>
                <div class="SlctMtSec  d-flex align-items-center flex-wrap">
                  <div class="TmLftSec mr-3">
                    <h4 class="mb-0">STUD FEE</h4>
                  </div>
                  <div class="SlctMtSec StudFee d-flex mr-5 ">
                    <h4 class="mr-2 mb-0">$29.3</h4>
                    <p>BNB</p>
                  </div>
                  <div class="Btns d-flex">
                    <button class="btn Btn BtnGrdnt BtnPrmry Btn170-50 kids BtnF16-400 ">
                      select mate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center AvlblDtls">
              <p>Dancing Glue is available for breeding until 13th Sep 2022</p>
            </div>
            <div class="CprfmsSec mb-4">
              <div class="CrPrfmHdd mr-3">
                <h4>Career Performance</h4>
              </div>
              <div class="CrPrfmHddDtls">
                <h4>
                  <span class="PrfmGrd mr-3">D</span>5/10
                  <img
                    src="/static/assets/images/pages/tbl-prc-icon.svg"
                    class="ml-2"
                  />
                </h4>
              </div>
            </div>
            <div class="CrPrfmSubHdd">
              <h4>
                Discovery Phase
                <img
                  src="/static/assets/images/pages/tbl-prc-icon.svg"
                  class="ml-2"
                />
              </h4>
            </div>
            <div class="PhaseLine">
              <ul class="wizard-timeline center-align">
                <li class="completed">
                  <div class="StpLine">
                    <span class="step-num">1</span>
                    <label class="TopThree">2nd</label>
                  </div>
                </li>
                <li class="completed">
                  <div class="StpLine">
                    <span class="step-num">2</span>
                    <label>4th</label>
                  </div>
                </li>
                <li class="completed">
                  <div class="StpLine">
                    <span class="step-num">3</span>
                    <label class="TopThree">1st</label>
                  </div>
                </li>
                <li class="completed">
                  <div class="StpLine">
                    <span class="step-num">4</span>
                    <label>9th</label>
                  </div>
                </li>
                <li class="completed">
                  <div class="StpLine">
                    <span class="step-num">5</span>
                    <label>9th</label>
                  </div>
                </li>
                <li class="active">
                  <div class="StpLine">
                    <span class="step-num">6</span>
                    <label>RACE</label>
                  </div>
                </li>
                <li>
                  <div class="StpLine">
                    <span class="step-num">7</span>
                  </div>
                </li>
                <li>
                  <div class="StpLine">
                    <span class="step-num">8</span>
                  </div>
                </li>
                <li>
                  <div class="StpLine">
                    <span class="step-num">9</span>
                  </div>
                </li>
                <li>
                  <div class="StpLine">
                    <span class="step-num">10</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="LinageOver mb-5 pb-5">
            <div class="LinageHdd">
              <div class="CrPrfmHdd mb-4 pb-1">
                <h4>Lineage Overview</h4>
              </div>
              <div class="CrPrfmSubHdd mb-4 pb-2">
                <h4>Parents</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <div class="LinPrntBg">
                  <div class="RcDogNme align-items-start mb-lg-0 mb-2">
                    <div class="d-flex mr-3">
                      <div class="">
                        <img
                          src="/static/assets/images/pages/tbl-dog.png"
                          class=" TblDogImg"
                        />
                      </div>
                      <div class="">
                        <div class="EvntNme">Golden Satoshi</div>
                        <div class="PrntsDgNme">Z254 • Pacer • Buterin</div>
                      </div>
                    </div>
                    <div class="RcDogBdge mr-5">
                      <span>1505</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn Btn BtnTrnsp BtnPrmry Btnbg110-45 kids BtnF16-400">
                      Details
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-3">
                <div class="LinPrntBg">
                  <div class="RcDogNme align-items-start mb-lg-0 mb-2">
                    <div class="d-flex mr-3">
                      <div class="">
                        <img
                          src="/static/assets/images/pages/tbl-dog.png"
                          class=" TblDogImg"
                        />
                      </div>
                      <div class="">
                        <div class="EvntNme">Golden Satoshi</div>
                        <div class="PrntsDgNme">Z254 • Pacer • Buterin</div>
                      </div>
                    </div>
                    <div class="RcDogBdge mr-5">
                      <span>1505</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn Btn BtnTrnsp BtnPrmry Btnbg110-45 kids BtnF16-400">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default DogDetails;
