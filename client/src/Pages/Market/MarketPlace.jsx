import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useGetNftQuery } from "../walletApi/walletApi";
let content;

const MarketPlace = () => {
  const { data: getNft, isLoading, error, isSuccess } = useGetNftQuery();
  try {
    const getData = getNft.data;
    if (isLoading) {
      content = (
        <div class="f20 text-yellow fw-400  text-uppercase dpuff">
          Market place is Loading
        </div>
      );
    } else if (isSuccess) {
      content = (
        <>
          {getData.map((item) => (
            <div class="col-sm-12 col-lg-4 col-xl-4 col-md-6">
              <div class="mrkt-dg-img cur-pointer">
                <div class="rookie-dg-img text-center">
                  <img
                    className="img-fluid"
                    src={`http://localhost:3981/${item.nftImage}`}
                    alt=""
                  />
                </div>
                <div class="rookie-dg-cnt">
                  <h3 class="mb-0">#1328</h3>
                  <h2 class="mb-0">
                    0.0001<span>MATIC</span>
                  </h2>
                  <div class="tym-bg">
                    <span class="f_18 f_w_500 text-center">09:12</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      content = <p className="text-white text-center">{error.message}</p>;
    }
  } catch (err) {
    console.error(err.message);
  }
  return (
    <>
      <section>
        <div class="container">
          <div class="f20 text-yellow fw-400  text-uppercase dpuff">
            Marketplace
          </div>

          <div class="dpuff">
            <div class="row align-items-center">
              <div class="col-lg-4  mt-3">
                <div class="fc_search ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by Dog Name"
                  />
                  <a>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9345 10.958C11.2051 10.6893 11.6388 10.6893 11.9093 10.958L13.6976 12.4015H13.7287C14.0904 12.7672 14.0904 13.3601 13.7287 13.7257C13.3669 14.0914 12.7803 14.0914 12.4185 13.7257L10.9345 12.0249L10.8782 11.9614C10.7733 11.8286 10.7153 11.6631 10.7153 11.4915C10.7153 11.2913 10.7942 11.0993 10.9345 10.958ZM6.00435 0C7.5968 0 9.12403 0.639405 10.2501 1.77755C11.3761 2.9157 12.0087 4.45936 12.0087 6.06895C12.0087 9.42074 9.32046 12.1379 6.00435 12.1379C2.68824 12.1379 0 9.42074 0 6.06895C0 2.71716 2.68824 0 6.00435 0Z"
                        fill="#757575"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="col-lg-8  mt-3 text-right">
                <div class="mrkt_btn dpuff">
                  <UncontrolledDropdown className="btn-group  mx-3 mrkt_plc_drpdwn mrkt_plc_drpdwn1 mb-2 border-gradient">
                    <DropdownToggle caret color="">
                      All
                    </DropdownToggle>
                    <DropdownMenu>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">All</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">Mystery Box</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">Dogs</a>
                      </li>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown className="btn-group  mx-3 mrkt_plc_drpdwn mrkt_plc_drpdwn1 mb-2 border-gradient">
                    <DropdownToggle caret color="">
                      Filter By
                    </DropdownToggle>
                    <DropdownMenu>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">All</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">Auction</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">Fixed</a>
                      </li>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown className="btn-group  mx-3 mrkt_plc_drpdwn mrkt_plc_drpdwn1 mb-2 border-gradient">
                    <DropdownToggle caret color="">
                      Sort By
                    </DropdownToggle>
                    <DropdownMenu>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">All</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">BUSD</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">BNB</a>
                      </li>
                      <li role="menuitem" class="cur-pointer">
                        <a class="dropdown-item mrkt_drp_bor">DOGGY</a>
                      </li>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>

            <div class="row align-items-center py-lg-5 py-3 dpuff">
              {content}
              {/* <div class="col-sm-12 col-lg-4 col-xl-3 col-md-6">
                        <div class="mrkt-dg-img cur-pointer">
                           <div class="rookie-dg-img text-center">
                              <img src="/static/assets/images/market-place/dog-img/alano-1.png" alt="" />
                           </div>
                           <div class="rookie-dg-cnt">
                              <h3 class="mb-0">
                                 #1328
                              </h3>
                              <h2 class="mb-0">0.0001<span>BUSD</span></h2>
                              <div class="tym-bg">
                                 <span class="f_18 f_w_500 text-center">09:12</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-sm-12 col-lg-4 col-xl-3 col-md-6">
                        <div class="mrkt-dg-img cur-pointer">
                           <div class="rookie-dg-img text-center">
                              <img src="/static/assets/images/market-place/dog-img/gift-img.png" alt="" />
                           </div>
                           <div class="rookie-dg-cnt">
                              <h3 class="mb-0">
                                 #1328
                              </h3>
                              <h2 class="mb-0">0.0001<span>BUSD</span></h2>
                              <div class="tym-bg">
                                 <span class="f_18 f_w_500 text-center">09:12</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-sm-12 col-lg-4 col-xl-3 col-md-6">
                        <div class="mrkt-dg-img cur-pointer">
                           <div class="rookie-dg-img text-center">
                              <img src="/static/assets/images/market-place/dog-img/gift-img.png" alt="" />
                           </div>
                           <div class="rookie-dg-cnt">
                              <h3 class="mb-0">
                                 #1328
                              </h3>
                              <h2 class="mb-0">0.0001<span>BUSD</span></h2>
                              <div class="tym-bg">
                                 <span class="f_18 f_w_500 text-center">09:12</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-12 col-lg-4 col-xl-3 col-md-6">
                        <div class="mrkt-dg-img cur-pointer">
                           <div class="rookie-dg-img text-center">
                              <img src="/static/assets/images/market-place/dog-img/gift-img.png" alt="" />
                           </div>
                           <div class="rookie-dg-cnt">
                              <h3 class="mb-0">
                                 #1328
                              </h3>
                              <h2 class="mb-0">0.0001<span>BUSD</span></h2>
                              <div class="tym-bg">
                                 <span class="f_18 f_w_500 text-center">09:12</span>
                              </div>
                           </div>
                        </div>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MarketPlace;
