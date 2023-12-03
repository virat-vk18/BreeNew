import {
  Button,
  Card,
  CardBody,
  CardHeader,
  UncontrolledCollapse,
} from "reactstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useGetNftQuery } from "../walletApi/walletApi";
import { useNavigate, useParams } from "react-router-dom";

const Specification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: getData,
    isSuccess,
    isError,
  } = useGetNftQuery();
  const loggedIn = JSON.parse(localStorage.getItem("token"));
  let content;
  let displayData;

  try {
    if (isError) {
      displayData = <p>Sorry An Error Occured</p>;
    } else if (isLoading) {
      displayData = <p>Data is Loadingg....</p>;
    } else {
      const getQueryData = getData.data;
      const findData = getQueryData.find((item) => id == item._id);
      displayData = (
        <section class="specifications pt-0">
          <div class="container  pt-5">
            <div class="row ">
              <div class="col-sm-4 col-5">
                <div class="mb-5 myclass  text-center">
                  <a
                    class="text-yellow bck_btn"
                    onClick={() => navigate("/market-place")}
                  >
                    <span>
                      <img
                        class="myclass"
                        src="/static/assets/images/pages/go-bck-icon.svg"
                        alt=""
                      />
                    </span>
                    Go Back
                  </a>
                </div>
              </div>
            </div>
            <div class="row align-items-center pt-3">
              <div class="col-xl-5 spe_cation mt-3">
                <div class="">
                  <div class="text-center">
                    <img
                      class="img-fluid"
                      src={`http://localhost:3981/${findData.nftImage}`}
                      alt=""
                    />
                    {/* <div class="content">
                                    <div class="content-overlay"></div>
                                    <div class="gft-stbl-cont-align">
                                       <div class="stbl-tab-img text-center">
                                             <img alt="" class="img-fluid" src="/static/asstes/images/market-place/dog-img/amstaff-4.png" />
                                       </div>
                                       <div class="stbl-tab-cnt">
                                             <h3 class="mb-0 lg-37">
                                                Boxer #1234</h3>
                                       </div>
                                    </div>
                                    <div class="content-details cur-pointer">
                                       <ul class="list-unstyled">
                                             <li>Specification</li>
                                             <li class="ng-star-inserted">Sell Now</li>
                                             <li class="ng-star-inserted">Auction Now</li>
                                       </ul>
                                    </div>
                                 </div> */}
                  </div>
                  {/* <div class="spe_cation_1">
                           </div> */}
                </div>
              </div>
              <div class="col-xl-7 mt-3">
                <div class="spe_cation_cd">
                  <h2>Specifications</h2>
                  <div class="row">
                    <div class="col-sm-6">
                      <div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_1.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Age : <span>Puppy</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_2.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Gender : <span>{findData.gender}</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_3.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Blood Line : <span>Big</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_4.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Feeding : <span>70.0 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_7.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Health : <span>69 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_6.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Happiness : <span>{findData.happiness}</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_7.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Physical Condition : <span>12 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_8.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Intelligence : <span>12 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_9.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Strength : <span>12 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_10.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Speed : <span>{findData.speed}</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_11.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Agility : <span>12 %</span>
                          </h3>
                        </div>
                        <div class="d-flex align-items-center icon_size_spc_hd_total ">
                          <div class="icon_size_spc_hd mr-1">
                            <img
                              class="icon_size_spc "
                              src="/static/assets/images/spi_icon_12.gif"
                              alt=""
                            />
                          </div>
                          <h3>
                            Discipline : <span>Discipline</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      console.log(findData);
    }
  } catch (err) {
    console.log(err.message);
  }
  if (!loggedIn) {
    content = (
      <h1>
        Please Connect to MetaMask
        <button
          className="btn btn-danger"
          onClick={() => navigate("/connect-wallet")}
        >
          Click Here
        </button>
      </h1>
    );
  } else {
    content = displayData;
  }
  // // const getData = getData.data
  // if (isLoading)
  // {
  //    content =   <div class="f20 text-yellow fw-400  text-uppercase dpuff">
  //              Market place is Loading
  //             </div>
  // }
  // else {
  //    content = <>
  //       {getData.map((item) => (
  //             //   <div class="col-sm-12 col-lg-4 col-xl-3 col-md-6">
  //             //          <div class="mrkt-dg-img cur-pointer">
  //             //             <div class="rookie-dg-img text-center">
  //             //                <img className="img-fluid" src={`http://localhost:3981/${item.nftImage}`} alt="" />
  //             //             </div>
  //             //             <div class="rookie-dg-cnt">
  //             //                <h3 class="mb-0">
  //             //                   #1328
  //             //                </h3>
  //             //                <h2 class="mb-0">0.0001<span>MATIC</span></h2>
  //             //                <div class="tym-bg">
  //             //                   <span class="f_18 f_w_500 text-center">09:12</span>
  //             //                </div>
  //             //             </div>
  //             //          </div>
  //          //       </div>
  //           <div class="col-xl-7 mt-3">
  //                      <div class="spe_cation_cd">
  //                         <h2>Specifications</h2>
  //                         <div class="row">
  //                               <div class="col-sm-6">
  //                                  <div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_1.gif" alt="" />
  //                                           </div>
  //                                           <h3>Age : <span>Puppy</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_2.gif" alt="" />
  //                                           </div>
  //                                           <h3>Gender : <span>Male</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_3.gif" alt="" />
  //                                           </div>
  //                                           <h3>Blood Line : <span>Big</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_4.gif" alt="" />
  //                                           </div>
  //                                           <h3>Feeding : <span>70.0 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_7.gif" alt="" />
  //                                           </div>
  //                                           <h3>Health : <span>69 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_6.gif" alt="" />
  //                                           </div>
  //                                           <h3>Happiness : <span>71.0 %</span></h3>
  //                                     </div>

  //                                  </div>
  //                               </div>
  //                               <div class="col-sm-6">
  //                                  <div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_7.gif" alt="" />
  //                                           </div>
  //                                           <h3>Physical Condition : <span>12 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_8.gif" alt="" />
  //                                           </div>
  //                                           <h3>Intelligence : <span>12 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_9.gif" alt="" />
  //                                           </div>
  //                                           <h3>Strength : <span>12 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_10.gif" alt="" />
  //                                           </div>
  //                                           <h3>Speed : <span>23 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_11.gif" alt="" />
  //                                           </div>
  //                                           <h3>Agility : <span>12 %</span></h3>
  //                                     </div>
  //                                     <div class="d-flex align-items-center icon_size_spc_hd_total ">
  //                                           <div class="icon_size_spc_hd mr-1">
  //                                              <img class="icon_size_spc " src="/static/assets/images/spi_icon_12.gif" alt="" />
  //                                           </div>
  //                                           <h3>Discipline : <span>Discipline</span></h3>
  //                                     </div>

  //                                  </div>
  //                               </div>
  //                         </div>

  //                      </div>

  //                   </div>
  //          ))
  //    }
  //    </>
  // }
  //  } catch (err) {
  //    console.error(err.message);
  // }
  // console.log(getData);
  return (
    <>
      {/* <Header /> */}

      {content}

      {/* <Footer /> */}
    </>
  );
};
export default Specification;
