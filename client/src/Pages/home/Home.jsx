import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <div class="container mb-4">
        <div class="row mt-5">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6">
            <h1
              class="f-130 fw-400 text-white may text-stroke"
              data-text="Doggy Vill"
            >
              Doggy Vill
            </h1>
            <h2 class="f-50 fw-400 text-white dpuff">Discover Best</h2>
            <h2 class="f-88 fw-400 text-white dpuff">Digital Race &</h2>
            <h2 class="f-50 fw-400 text-white dpuff">Collect NFT’s</h2>
            <p class="popins f-14 text-grey1 mt-3 lh-30 fw-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              euismod sem sed consectetur aliquam vivamus. Ullamcorper turpis{" "}
            </p>

            <div class="my-4">
              <button class="btn primary-btn" routerLink="/">
                Start
              </button>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 text-center mb-5">
            <img
              src="/static/assets/images/new-home/home1.svg"
              class="dog-img1 img-fluid"
            />
            <img
              src="/static/assets/images/new-home/home2.svg"
              class=" dog-img  img-fluid"
            />
          </div>
        </div>
      </div>

      {/* <div class="container pt-5 ">
            <div class="row align-items-center">
               <div class="col-md-12 col-sm-12 col-lg-6 col-xl-3">
                  <div class="d-flex align-items-center my-5 pt-5">


                     <div class="dog-card p-3">
                        <img src="/static/assets/images/new-home/home3.svg" class="position-img" />
                        <div class="d-flex align-items-end d-flex-position">
                           <div class="rotate">
                              <p class="dpuff text-white f-50  fw-400">Alano</p>
                              <img src="/static/assets/images/new-home/home4.svg" class="ml-4" />
                           </div>
                           <div>
                              <div class="d-flex justify-content-between">
                                 <label class="text-lwhite mr-3 fw-400 f-14"> Speed</label>
                                 <label class="text-white  fw-400 f-14"> 40kmph</label>
                              </div>
                              <div class="d-flex justify-content-between">
                                 <label class="text-lwhite mr-3 fw-400 f-14"> Agility</label>
                                 <label class="text-white  fw-400 f-14"> 75%</label>
                              </div>
                              <div class="d-flex justify-content-between mb-3">
                                 <label class="text-lwhite mr-3 fw-400 f-14"> Gender</label>
                                 <label class="text-white  fw-400 f-14"> Male</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-12 col-sm-12 col-lg-6 col-xl-9">
                  <div class="next-run-bg p-3 p-xl-5">
                     <div class="row align-items-center justify-content-end">
                        <div class="col-md-12">
                           <h1 class="f-130 fw-400 text-center text-white may text-stroke1" data-text="Live">Live</h1>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-8">

                           <h2 class="f-50 fw-400 text-center text-white dpuff">Next to Run
                           </h2>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-2">
                           <button class="btn primary-btn" routerLink="/">
                              See All</button>
                        </div>
                     </div>

                     <div class="row my-4">
                        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                           <div class="active-violet">
                              <label class="f-14 fw-600 mb-3  text-white">Hamburg Daylight</label>
                              <div class="d-flex  justify-content-between">
                                 <label class="f-14 fw-400 mb-0  text-white">$30 USD</label>
                                 <button class="btn btn-auto " type="button">Live</button>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                           <div class="violet-card">
                              <label class="f-14 fw-600 mb-3  text-white">Viatdesire</label>
                              <div class="d-flex align-items-center justify-content-between">
                                 <label class="f-14 fw-400 mb-0  text-white">$30 USD</label>
                                 <label class="f-12 f-italic fw-400 mb-0  text-white">In 2m 32sec</label>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                           <div class="violet-card">
                              <label class="f-14 fw-600 mb-3  text-white">Pitsburg Juville</label>
                              <div class="d-flex align-items-center justify-content-between">
                                 <label class="f-14 fw-400 mb-0  text-white">$30 USD</label>
                                 <label class="f-12 f-italic fw-400 mb-0  text-white">In 2m 32sec</label>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                           <div class="violet-card">
                              <label class="f-14 fw-600 mb-3  text-white">Helenski</label>
                              <div class="d-flex align-items-center justify-content-between">
                                 <label class="f-14 fw-400 mb-0  text-white">$30 USD</label>
                                 <label class="f-12 f-italic fw-400 mb-0  text-white">In 2m 32sec</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div> */}

      {/* <div class="container">
            <div class="row align-items-center">
               <div class="col-md-12 col-sm-12 col-lg-6 col-xl-9">
                  <h1 class="f-130 fw-400 text-white may mb-0 text-stroke" data-text="Join">Join</h1>
                  <h2 class="f-50 fw-400 text-white dpuff">Up & Coming
                  </h2>
               </div>
               <div class="col-md-12 col-sm-12 col-lg-6 col-xl-3 text-xl-right text-md-right">
                  <button class=" btn primary-btn " routerLink="/ ">
                     More</button>
               </div>
            </div>
         </div> */}

      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-12 text-center  ">
            <h1
              class=" f-130 fw-400 text-white may mb-0 text-stroke"
              data-text="Breeding"
            >
              Breeding
            </h1>
            <h2 class="f-50 fw-400 text-white dpuff ">In Stud</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-1.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Fila{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Rare
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-2.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Bassotto{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Legendary
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-3.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Amstaff{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Epic
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-1.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Fila{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Rare
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-2.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Bassotto{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Legendary
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <div class="grey-card mb-4">
              <div class="d-flex">
                <img
                  src="/static/assets/images/new-home/dog-3.svg"
                  class="img-fluid mr-3"
                />
                <div>
                  <label class="text-white d-block f-16 fw-500">
                    {" "}
                    Amstaff{" "}
                    <span
                      class="text-white opacity-5 f-12
                             fw-400"
                    >
                      Epic
                    </span>
                  </label>
                  <label class="text-white d-block f-14 fw-500">
                    {" "}
                    #DG 22 . Stain . Winger
                  </label>
                  <label class="text-white d-block f-18 fw-600"> $50.10 </label>
                  <button class=" btn primary-btn " routerLink="/ ">
                    Breed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 col-sm-12 col-lg-6 col-xl-3 text-right">
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Age </label>
              <img
                src="/static/assets/images/new-home/g1.gif "
                class=" dog-gif img-fluid "
              />
            </div>
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Intelligence </label>
              <img
                src="/static/assets/images/new-home/g2.gif "
                class=" dog-gif img-fluid "
              />
            </div>
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Strength </label>
              <img
                src="/static/assets/images/new-home/g3.gif "
                class=" dog-gif img-fluid "
              />
            </div>
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Speed </label>
              <img
                src="/static/assets/images/new-home/g4.gif "
                class=" dog-gif img-fluid "
              />
            </div>
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Agility </label>
              <img
                src="/static/assets/images/new-home/g5.gif "
                class=" dog-gif img-fluid "
              />
            </div>
            <div class="mb-5">
              <label class="text-white f-20 mr-3 fw-500 ">Discipline </label>
              <img
                src="/static/assets/images/new-home/g6.gif "
                class=" dog-gif img-fluid "
              />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 ">
            <img
              src="/static/assets/images/new-home/home7.svg "
              class="img-fluid "
            />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-6 col-xl-3 ">
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g7.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Gender </label>
            </div>
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g8.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Blood Line </label>
            </div>
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g9.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Feeding </label>
            </div>
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g10.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Health </label>
            </div>
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g11.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Happiness </label>
            </div>
            <div class="mb-5">
              <img
                src="/static/assets/images/new-home/g12.gif "
                class=" mr-3 dog-gif img-fluid "
              />
              <label class="text-white f-20 fw-500 ">Physical Condition </label>
            </div>
          </div>
        </div>
      </div>

      <section class="Tknomics my-5">
        <div class="container">
          <div class="TknChrt">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <div class="TknChrtsBg">
                  <div class="row align-items-center">
                    <div class="col-md-6 pr-md-0">
                      <div class="TknChrtImg">
                        <img
                          src="/static/assets/images/new-home/chrt-img.png"
                          class="img-fluid mx-auto d-block"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 pl-md-0">
                      <div class="row">
                        <div class="col-lg-7">
                          <div class="ChrtDtls Mxsply">
                            <p>Max Supply</p>
                            <h4>5,000,000 (5 million) DOGGY</h4>
                          </div>
                          <div class="ChrtDtls Lpratio">
                            <p>LP Ratio</p>
                            <h4>1 DOGGY to 10 BUSD</h4>
                          </div>
                          <div class="ChrtDtls Mrktcap">
                            <p>Market Cap</p>
                            <h4>50,000,000 BUSD</h4>
                          </div>
                        </div>
                        <div class="col-lg-5">
                          <div class="ChrtDtls Buyselltx">
                            <p>BUY/SELL/XFR TAX</p>
                            <h4>3%</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="TknDtls">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <h1
                  class="f-130 fw-400 text-white may mb-0 text-stroke"
                  data-text="Details"
                >
                  Details
                </h1>
                <h2 class="f-50 fw-400 text-white dpuff">Tokenomics</h2>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Presale</p>
                    <h4>55,555 NFTs</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Price Per NFT</p>
                    <h4>150 BUSD</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Funds Raised</p>
                    <h4>8,333,250BUSD</h4>
                    <h4>+</h4>
                    <h4>833,325DOGGY</h4>
                    <h6> for LP (16,6665%)</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Platform</p>
                    <h4>3,500,000 DOGGY (70%)</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>InGame Earnings</p>
                    <h4>1,750,000 DOGGY</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Racing/Breeding Pool</p>
                    <h4>700,000 DOGGY</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Betting Pool</p>
                    <h4>350,000 DOGGY</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Staking Pool</p>
                    <h4>350,000 DOGGY</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Game Development</p>
                    <h4>350,000 DOGGY</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Team</p>
                    <h4>500,000 DOGGY (10%)</h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="TknDtlsBox">
                  <div class="TknDtlsCnt text-center">
                    <p>Marketing</p>
                    <h4>166,675 DOGGY (3,3335%)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
