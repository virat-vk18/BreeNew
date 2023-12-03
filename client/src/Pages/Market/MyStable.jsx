import { useState } from "react";
import {
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from "reactstrap";
import classnames from "classnames";
import shadowDog from "../../assets/images/market-place/shadow1.svg";
import gift from "../../assets/images/gift.gif";
import close from "../../assets/images/wallet/close.png";
import bassotto2 from "../../assets/images/market-place/dog-img/bassotto-2.png";
import { useGetNftQuery } from "../walletApi/walletApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { connectMetamask } from "../../redux/feature/connectWalletSlice";

const MyStable = () => {
  const navigate = useNavigate();
  const { address } = useSelector(connectMetamask);
  const { data: getNft, isLoading, isError } = useGetNftQuery();
  let content;
  try {
    const getData = getNft.data;
    if (isLoading) {
      content = (
        <div class="f20 text-yellow fw-400  text-uppercase dpuff">
          Dogs is Loading
        </div>
      );
    } else {
      content = (
        <>
          {getData.map((item) => (
            <div className="col-lg-4 col-sm-6 col-12 mb-5" key={item._id}>
              <div class="card bg-dark text-white ">
                <img
                  src={`http://localhost:3981/${item.nftImage}`}
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{item.nftName}</h5>
                  <p className="text-muted p-0">Gender : {item.gender}</p>
                  <div className="p-0 m-0">
                    <UncontrolledDropdown className="btn-group  mx-3 mrkt_plc_drpdwn mrkt_plc_drpdwn1 mb-2 border-gradient">
                      <DropdownToggle caret color="">
                        Make Offer
                      </DropdownToggle>
                      <DropdownMenu>
                        <li
                          role="menuitem"
                          class="cur-pointer"
                          onClick={() => navigate(`/specification/${item._id}`)}
                        >
                          <a class="dropdown-item mrkt_drp_bor">
                            Specification
                          </a>
                        </li>
                        <li role="menuitem" class="cur-pointer">
                          <a class="dropdown-item mrkt_drp_bor">Transfer</a>
                        </li>
                        <li role="menuitem" class="cur-pointer">
                          <a class="dropdown-item mrkt_drp_bor">Sell Now</a>
                        </li>
                        <li role="menuitem" class="cur-pointer">
                          <a class="dropdown-item mrkt_drp_bor">Auction Now</a>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  } catch (err) {
    console.error(err.message);
  }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [activeTab, setActiveTab] = useState("1");
  const toggle1 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [modal1, setModal1] = useState(false);
  const toggle2 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle3 = () => setModal2(!modal2);

  const [modal3, setModal3] = useState(false);
  const toggle4 = () => setModal3(!modal3);

  const [modal4, setModal4] = useState(false);
  const toggle5 = () => setModal4(!modal4);

  const [modal5, setModal5] = useState(false);
  const toggle6 = () => setModal5(!modal5);

  return (
    <>
      <div class="MystbleSec">
        <div class="container">
          <div class="MyStblBnnr mb-5">
            <div class="MStblPrflSec mb-4 pb-2">
              <div class="MystblUsr mb-2 mb-sm-0">
                <div class="MystblUsrImg">
                  <img
                    src="/static/assets/images/pages/my-stbl-user.png"
                    class="img-fluid mr-3"
                  />
                </div>
                <div class="MystblUsrNme">
                  <p>My Stable</p>
                  <h4>
                    <span className="font-weight-light">Address</span>{" "}
                    {address.substring(0, 9)}
                    <span>
                      <img
                        src="/static/assets/images/pages/my-stbl-cpy-icon.svg"
                        class="ml-2"
                      />
                    </span>
                  </h4>
                </div>
              </div>
              <div class="SttngCnt">
                <a href="#">
                  <img
                    src="/static/assets/images/pages/setting-icon.svg"
                    class="mr-2"
                  />
                  Settings
                </a>
              </div>
            </div>
            <div class="TtwSec">
              <div class="TtwCnt text-center">
                <p>Thoroughbreds</p>
                <h4>0</h4>
              </div>
              <div class="TtwCnt text-center">
                <p>Total Career</p>
                <h4>-/-/-</h4>
              </div>
              <div class="TtwCnt text-center">
                <p>Win Rate</p>
                <h4>--%</h4>
              </div>
            </div>
          </div>
          <div class="StblInYbl">
            <div class="PlyPgTitl  mb-5 ">
              <h4>In stable</h4>
            </div>
            <div class="FiltrSec mb-5">
              <div class="FltrSrch mb-3">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div class="FltrButns mb-3">
                <div class="mr-4">
                  <button
                    class="btn text-white f16 btn-bg bg-transparent kids Btn138-40"
                    type="button"
                    routerlink="/connect-wallet"
                  >
                    Filter{" "}
                    <img
                      src="/static/assets/images/pages/fltr-icon.svg"
                      class="ml-2"
                    />
                  </button>
                </div>
                <div class="CusSlect">
                  <select class="form-control custom-select">
                    <option>Sort by</option>
                    <option>Sort by</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="PlyPgHdd stbl-tab dpuff">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle1("1");
                    }}
                  >
                    NFT Box
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle1("2");
                    }}
                  >
                    Dogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle1("3");
                    }}
                  >
                    Injured Dogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle1("4");
                    }}
                  >
                    Puppies Born
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div class="row mt-3">
                    <div class="col-lg-3 col-sm-6 col-12 mb-5">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="gft-stbl-cont-align ">
                            <div class="stbl-tab-img text-center">
                              <img
                                src="/static/assets/images/market-place/dog-img/gift-img.png"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="stbl-tab-cnt">
                              <h3 class="mb-0 lg-37 mt-2">#253</h3>
                            </div>
                          </div>
                        </div>
                        <div class="content-details">
                          <ul class="list-unstyled cur-pointer">
                            <li onClick={toggle2}>Open Now</li>
                            <li onClick={toggle3}>Transfer</li>
                            <li onClick={toggle4}>Sell Now</li>
                            <li onClick={toggle5}>Auction Now</li>
                            <li>Cancel Order</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-5">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="gft-stbl-cont-align ">
                            <div class="stbl-tab-img text-center">
                              <img
                                src="/static/assets/images/market-place/dog-img/gift-img.png"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="stbl-tab-cnt">
                              <h3 class="mb-0 lg-37 mt-2">#253</h3>
                            </div>
                          </div>
                        </div>
                        <div class="content-details">
                          <ul class="list-unstyled cur-pointer">
                            <li onClick={toggle2}>Open Now</li>
                            <li onClick={toggle3}>Transfer</li>
                            <li onClick={toggle4}>Sell Now</li>
                            <li onClick={toggle5}>Auction Now</li>
                            <li>Cancel Order</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-5">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="gft-stbl-cont-align ">
                            <div class="stbl-tab-img text-center">
                              <img
                                src="/static/assets/images/market-place/dog-img/gift-img.png"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="stbl-tab-cnt">
                              <h3 class="mb-0 lg-37 mt-2">#253</h3>
                            </div>
                          </div>
                        </div>
                        <div class="content-details">
                          <ul class="list-unstyled cur-pointer">
                            <li>Open Now</li>
                            <li>Transfer</li>
                            <li>Sell Now</li>
                            <li>Auction Now</li>
                            <li>Cancel Order</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div class="row mt-3">
                    {content}

                    {/* <div class="col-lg-3 col-sm-6 col-12 mb-5">
                                 <div class="content">
                                       <div class="content-overlay"></div>
                                       <div class="gft-stbl-cont-align ">
                                          <div class="gft-stbl-cont-align ">

                                             <div class="stbl-tab-img text-center">
                                                   <img src="/static/assets/images/market-place/dog-img/amstaff-4.png" alt="" class="img-fluid" />
                                             </div>
                                             <div class="stbl-tab-cnt">
                                                   <h3 class="mb-0 lg-37 mt-2">
                                                      #253
                                                   </h3>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="content-details">
                                          <ul class="list-unstyled cur-pointer">
                                             <li>Specification</li>
                                             <li>Transfer</li>
                                             <li>Sell Now</li>
                                             <li>Auction Now</li>
                                          </ul>
                                       </div>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-sm-6 col-12 mb-5">
                                 <div class="content">
                                       <div class="content-overlay"></div>
                                       <div class="gft-stbl-cont-align ">
                                          <div class="gft-stbl-cont-align ">

                                             <div class="stbl-tab-img text-center">
                                                   <img src="/static/assets/images/market-place/dog-img/amstaff-4.png" alt="" class="img-fluid" />
                                             </div>
                                             <div class="stbl-tab-cnt">
                                                   <h3 class="mb-0 lg-37 mt-2">
                                                      #253
                                                   </h3>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="content-details">
                                          <ul class="list-unstyled cur-pointer">
                                             <li>Specification</li>
                                             <li>Transfer</li>
                                             <li>Sell Now</li>
                                             <li>Auction Now</li>
                                          </ul>
                                       </div>
                                 </div>
                              </div> */}
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div class="row mt-3">
                    <div class="col-lg-3 col-sm-6 col-12 mb-5">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="gft-stbl-cont-align ">
                            <div class="stbl-tab-img text-center">
                              <img
                                src="/static/assets/images/market-place/dog-img/tatra-3.png"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="stbl-tab-cnt">
                              <h3 class="mb-0 lg-37 mt-2">#253</h3>
                            </div>
                          </div>
                        </div>
                        <div class="content-details">
                          <ul class="list-unstyled cur-pointer">
                            <li>Specification</li>
                            <li>Transfer</li>
                            <li>Sell Now</li>
                            <li>Auction Now</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-5">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="gft-stbl-cont-align ">
                            <div class="stbl-tab-img text-center">
                              <img
                                src="/static/assets/images/market-place/dog-img/tatra-3.png"
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="stbl-tab-cnt">
                              <h3 class="mb-0 lg-37 mt-2">#253</h3>
                            </div>
                          </div>
                        </div>
                        <div class="content-details">
                          <ul class="list-unstyled cur-pointer">
                            <li>Specification</li>
                            <li>Transfer</li>
                            <li>Sell Now</li>
                            <li>Auction Now</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div class="row mt-3">
                    <div class="col-lg-3 col-sm-6 col-12 mb-md-4 mb-3">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="stbl-tab-img text-center">
                            <img src={shadowDog} class="img-fluid" />
                          </div>
                          <div class="stbl-tab-cnt">
                            <h3 class="mb-0  lg-37"></h3>
                          </div>
                        </div>
                        <div class="content-details nd_hover_show cur-pointer">
                          <div class="mb-3">
                            <h2> </h2>
                          </div>
                          <ul class="list-unstyled mb-3">
                            <div class="tym-bg">
                              <span
                                class="f_18 f_w_500 text-center"
                                onClick={toggle6}
                              >
                                Set Dog Name
                              </span>
                            </div>
                          </ul>
                          <div class="mb-3">
                            <h2></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-md-4 mb-3">
                      <div class="content">
                        <div class="content-overlay"></div>
                        <div class="gft-stbl-cont-align ">
                          <div class="stbl-tab-img text-center">
                            <img src={shadowDog} class="img-fluid" />
                          </div>
                          <div class="stbl-tab-cnt">
                            <h3 class="mb-0  lg-37"></h3>
                          </div>
                        </div>
                        <div class="content-details nd_hover_show cur-pointer">
                          <div class="mb-3">
                            <h2> </h2>
                          </div>
                          <ul class="list-unstyled mb-3">
                            <div class="tym-bg">
                              <span class="f_18 f_w_500 text-center">
                                Set Dog Name
                              </span>
                            </div>
                          </ul>
                          <div class="mb-3">
                            <h2></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      <Modal
        centered={true}
        isOpen={modal}
        toggle={toggle}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle}
          className="justify-content-center  border-0 pt-5 text-center"
        >
          <h4
            id="dialog-static-name"
            class="modal-title text-white pull-left kids text-uppercase"
          >
            Specifications
          </h4>
        </ModalHeader>
        <ModalBody>
          <div class="MyStbMdlCnt">
            <div class="SpcfyCnt">
              <p>
                Age : <span>Young</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Gender : <span>Female</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Blood Line : <span>Buterin</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Feeding : <span>Hunger</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Health : <span>Well</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Physical Condition : <span>Restful</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Intelligence : <span>0.00</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Strength : <span>0.00</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Speed : <span>5 kmph</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Agility : <span>0.00</span>
              </p>
            </div>
            <div class="SpcfyCnt">
              <p>
                Discipline : <span>Disciplined dog</span>
              </p>
            </div>
          </div>
        </ModalBody>
        <div class="position-relative" onClick={toggle}>
          <img
            src="/static/assets/images/wallet/close.svg"
            class="img-fluid close-bg"
          />
        </div>
      </Modal>

      <Modal
        centered={true}
        isOpen={modal1}
        toggle={toggle2}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle}
          className="justify-content-center  border-0 pt-5 text-center"
        ></ModalHeader>
        <ModalBody className="dpuff">
          <div class="MystryMdlSec">
            <div class="MystryBox">
              <img
                src={gift}
                id="mystBoxGif"
                class="img-fluid d-block mx-auto"
              />
            </div>
            <div class=" w-100">
              <div class="MystryDogImg">
                <div class="mrkt-dg-img">
                  <div class="rookie-dg-cnt">
                    <h3 class="mb-3">Dog12345</h3>
                    <div
                      role="button"
                      class="btn f15 fw-500 mh-auto dpuff btn-bg"
                    >
                      COLLECT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        centered={true}
        isOpen={modal2}
        toggle={toggle3}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle}
          className="justify-content-center  border-0 pt-5 text-center"
        >
          <h4
            id="dialog-static-name"
            class="modal-title text-yellow pull-left dpuff text-uppercase"
          >
            Dogs Transfer
          </h4>
        </ModalHeader>
        <ModalBody>
          <form>
            <div class="SttngFrm mb-5 GrdInptFrm">
              <label class="LblFrm">To address</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter address"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <button class="btn f15 fw-500 dpuff btn-bg" type="button">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
        <div class="position-relative text-center">
          <img src={close} class="img-fluid close-bg" />
        </div>
      </Modal>

      <Modal
        centered={true}
        isOpen={modal3}
        toggle={toggle4}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle4}
          className="justify-content-center  border-0 pt-5 text-center"
        >
          <h4
            id="dialog-static-name"
            class="modal-title text-yellow pull-left dpuff text-uppercase"
          >
            Fixed sell
          </h4>
        </ModalHeader>
        <ModalBody>
          <form>
            <div class="SttngFrm mb-5 GrdInptFrm">
              <label class="LblFrm">Currency</label>
              <br />
              <select class="dropdown form-control text-left">
                <option
                  class="dropdown-item"
                  disabled
                  selected
                  value="undefined"
                >
                  --- Select ---
                </option>
                <option value="BNB">BNB</option>
                <option value="DOGGY">DOGGY Token</option>
                <option value="BUSD">BUSD Token</option>
              </select>

              <br />

              <label class="LblFrm">Amount</label>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="0.000" />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <button class="btn f15 fw-500 dpuff btn-bg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
        <div class="position-relative text-center">
          <img src={close} class="img-fluid close-bg" onClick={toggle4} />
        </div>
      </Modal>

      <Modal
        centered={true}
        isOpen={modal4}
        toggle={toggle5}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle5}
          className="justify-content-center  border-0 pt-5 text-center"
        >
          <h4
            id="dialog-static-name"
            class="modal-title text-yellow pull-left dpuff text-uppercase"
          >
            Auction Now
          </h4>
        </ModalHeader>
        <ModalBody>
          <form>
            <div class="SttngFrm mb-5 GrdInptFrm">
              <label class="LblFrm">Amount</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Amount"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="amount"
                />
              </div>
            </div>

            <label class="text-white">Currency</label>
            <select class="dropdown form-control input-group-text text-left">
              <option class="dropdown-item " selected value="undefined">
                --- Select ---
              </option>
              <option value="BNB">BNB</option>
              <option value="DOGGY">DOGGY Token</option>
              <option value="BUSD">BUSD Token</option>
            </select>
            <br />
            <div class="SttngFrm mb-5 GrdInptFrm">
              <label class="LblFrm">Date</label>
              <div class="input-group mb-3">
                <input
                  type="datetime-local"
                  class="form-control date"
                  placeholder="To Date"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="day"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <button class="btn f15 fw-500 dpuff btn-bg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
        <div class="position-relative text-center">
          <img src={close} class="img-fluid close-bg" onClick={toggle5} />
        </div>
      </Modal>

      <Modal
        centered={true}
        isOpen={modal5}
        toggle={toggle6}
        className={"email-bg1"}
        contentClassName="email-bg"
        modalClassName="modal-md"
      >
        <ModalHeader
          toggle={toggle6}
          className="justify-content-center  border-0 pt-5 text-center"
        >
          <h4
            id="dialog-static-name"
            class="modal-title text-white pull-left  text-uppercase text-yellow"
          >
            New Dog Name
          </h4>
        </ModalHeader>
        <ModalBody>
          <div class="MyStbMdlCnt">
            <div class="text-center mr-3">
              <img class="img-fluid " src={bassotto2} />
            </div>
            <form>
              <div class="SttngFrm mb-5 GrdInptFrm">
                <label class="LblFrm">Dog Name</label>
                <div class="input-group input_nd_dule mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Dog Name"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="">
                      {" "}
                      # 455
                    </span>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4 choose_option">
                <button class="btn f15 fw-500 dpuff btn-bg">Submit</button>
              </div>
            </form>
          </div>
        </ModalBody>
        <div class="position-relative text-center">
          <img src={close} class="img-fluid close-bg" onClick={toggle6} />
        </div>
      </Modal>
    </>
  );
};
export default MyStable;
