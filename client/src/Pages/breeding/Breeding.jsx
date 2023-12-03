import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useGetAllDogsQuery } from "./breedingApi";
import { useNavigate } from "react-router-dom";

const Breeding = () => {
  const [rowShow, setRowShow] = useState(false);
  const { isLoading, data: farmData, error, isSuccess } = useGetAllDogsQuery();
  const navigate = useNavigate();
  const handleBreedRoute = (id) => {
    setRowShow(!rowShow);
    navigate(`/breeding/${id}`);
  };
  let content;
  if (isLoading) {
    content = <p>Data Loading</p>;
  } else if (isSuccess) {
    content = (
      <>
        {farmData.data?.map((item) => (
          <tr
            onClick={() => handleBreedRoute(item._id)}
            aria-controls="collapseBasic"
            key={item._id}
          >
            <td>
              <div class="d-flex ">
                <div class=" ">
                  <img
                    src="/static/assets/images/pages/tbl-dog.png "
                    class=" TblDogImg"
                  />
                </div>
                <div class=" ">
                  <div class="EvntNme ">{item.nftName}</div>
                  <div class=" ">Z254 • Pacer • {item.age}</div>
                </div>
              </div>
            </td>
            <td>Dream Stable</td>
            <td>
              <div class="tblDtTxtfff ">6d 23h 40m</div>
            </td>
            <td>
              <span class="PlyBnbTxt ">{item.breedfee}</span> MATIC
            </td>
          </tr>
        ))}
      </>
    );
  } else {
    content = <>{error}</>;
  }
  return (
    <>
      <Header />

      <div class="MystbleSec pt-xl-5 pt-3 py-5">
        <div class="container mt-xl-5">
          <div class="MyStblBnnr StudFrmBg mb-5">
            <div class="row">
              <div class="col-lg-7 mx-auto">
                <div class="BrdHdd text-center">
                  <h4>Stud Farm</h4>
                  <p>
                    This is the stud farm, where you can look for the perfect
                    match for your filly or mare. Below you will see all of the
                    colts and stallions currently in the stud farm and ready to
                    breed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="StblInYbl">
            <div class="FiltrSec mb-5">
              <div class="d-flex flex-wrap align-items-center SerchCnt mb-3">
                <div class=" FltrSrch d-flex mr-3 ">
                  <input
                    type="text "
                    class="form-control "
                    placeholder="Search "
                  />
                </div>
                <span>5430 of 5430 racedogs</span>
              </div>
              <div class="FltrButns mb-3 ">
                <div class="mr-4 ">
                  <button
                    class="btn text-white f16 btn-bg bg-transparent kids Btn138-40 "
                    type="button "
                    routerlink="/connect-wallet "
                  >
                    Filter
                    <img
                      src="/static/assets/images/pages/fltr-icon.svg "
                      class="ml-2 "
                    />
                  </button>
                </div>
                <div class="CusSlect ">
                  <select class="form-control custom-select ">
                    <option>Sort by</option>
                    <option>Sort by</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="Notify BrdBottm pb-4">
              <div class="row">
                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="NtifyChkSec">
                        <div class="NtifyChkHdd mb-4">
                          <h4>Bloodline</h4>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Nakamoto
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Szabo
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Finney
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Buterin
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="NtifyChkSec">
                        <div class="NtifyChkHdd mb-4">
                          <h4>Gender</h4>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Colt
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Stallion
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="NtifyChkSec">
                        <div class="NtifyChkHdd mb-4">
                          <h4>Breads</h4>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Genesis
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Legendary
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Exclusive
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Elite
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Cross
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Pacer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="NtifyChkSec">
                        <div class="NtifyChkHdd mb-4">
                          <h4>Color Group</h4>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Special
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Classic
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Earth
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Wild
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Moon
                          </label>
                        </div>
                        <div class="checkbox FrmChkBx mb-1">
                          <label>
                            <input
                              type="checkbox"
                              data-ng-model="example.check"
                            />
                            <span class="box"></span>
                            Fiery
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="">
                    <div class="NtifyChkHdd mb-4">
                      <h4>Generation</h4>
                    </div>
                    <div data-role="main" class="ui-content">
                      <form method="post" action="">
                        <div class="MinMaxInptSec mb-4">
                          <input
                            type="text"
                            value="1"
                            class="form-control mr-2 mb-2"
                          />
                          <input
                            type="text"
                            value="265"
                            class="form-control  mb-2"
                          />
                        </div>
                        <div data-role="rangeslider range-slider-block">
                          <input
                            type="range"
                            name="price-min"
                            id="price-min"
                            value="200"
                            min="0"
                            max="1000"
                            class="range-slider__range"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="PlyTbl table-responsive BrdingTbl ">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col ">Stallion</th>
                    <th scope="col ">Stable</th>
                    <th scope="col ">Time Left</th>
                    <th scope="col ">Stud Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="BreadStd ">
                    <td colspan="4 ">
                      <div class="SlctRarSec ">
                        <div class="SlctRar ">
                          <h4>
                            <span>
                              <img
                                src="/static/assets/images/pages/dog-shadow.png "
                                class="mr-5"
                              />
                            </span>
                            Add a Racedog to Stud Farm
                          </h4>
                        </div>
                        <div class=" ">
                          <button class="btn BtnNords BtnPrmry Btn195-45 BtnF16-400 ">
                            Select Raredog
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {content}
                  {/* <tr
                    id="collapseBasic"
                    class={`toggle-play collapse ${rowShow ? "show in" : ""}`}
                  ></tr> */}

                  {/* <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex ">
                        <div class=" ">
                          <img
                            src="/static/assets/images/pages/tbl-dog.png "
                            class=" TblDogImg "
                          />
                        </div>
                        <div class=" ">
                          <div class="EvntNme ">Sugar in the Shadows </div>
                          <div class=" ">Z254 • Pacer • Buterin</div>
                        </div>
                      </div>
                    </td>
                    <td>Dream Stable</td>
                    <td>
                      <div class="tblDtTxtfff ">6d 23h 40m</div>
                    </td>
                    <td>
                      <span class="PlyBnbTxt ">$29.3</span> BNB
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Breeding;
