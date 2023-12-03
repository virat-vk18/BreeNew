import React from "react";
import { useGetStudDogsQuery } from "./breedingApi";
import { useSelector } from "react-redux";
import { connectMetamask } from "../../redux/feature/connectWalletSlice";
import { useNavigate, useParams } from "react-router-dom";

const BreedingDiv = () => {
  const { id: dogId } = useParams();
  const navigate = useNavigate();
  const {
    isSuccess,
    isLoading,
    data: getData,
    error,
  } = useGetStudDogsQuery({ id: dogId });
  console.log(getData);
  const { address } = useSelector(connectMetamask);

  let content;
  if (isLoading) {
    content = <h1 className=" text-white">Data is Loading</h1>;
  } else if (isSuccess) {
    content = (
      <td colspan="4" class="hiddenRow px-0 my-5">
        <div id="demo3" class="accordian-body collapsed">
          <div class="EvntNxtBg mb-3">
            <div class="text-right mb-2">
              <i class="fa fa-times" onClick={() => navigate("/breeding")}></i>
            </div>
            <div class="EvnNxtHddSec mb-3">
              <div class="EvnNxtHd">
                <h4>{getData.nftName} </h4>
              </div>
              <div class="BrdHdAccnt pr-5 text-right">
                <p>05:40 Aug 9</p>
                <div>
                  {address === null ? (
                    <p className="text-muted">Please Connect Metamask</p>
                  ) : (
                    `${address.substring(0, 12)}..${address.substring(39, 42)}`
                  )}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="BrdDogImg">
                      <img
                        src={`http://localhost:3981/${getData.nftImage}`}
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="BrdDogDtls mb-4">
                      <p>GEN</p>
                      <h4>
                        Z204 <span>{getData.age}</span>
                      </h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>COAT</p>
                      <h4>Cotton Candy</h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>WIN %</p>
                      <h4>5</h4>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="BrdDogDtls mb-4">
                      <p>BLOODLINE</p>
                      <h4>Buterin</h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>AGILITY`</p>
                      <h4>{getData.agility}</h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>OFFSPRING</p>
                      <h4>
                        0<span class="ml-2">3 of 3 left</span>
                      </h4>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="BrdDogDtls mb-4">
                      <p>GENDER</p>
                      <h4>Colt</h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>CAREER</p>
                      <h4>1/0/0</h4>
                    </div>
                    <div class="BrdDogDtls mb-4">
                      <p>BREEDING DECAY</p>
                      <h4>
                        Level 0<span class="ml-2">4 of 4 left</span>
                        <img
                          src="/static/assets/images/pages/tbl-prc-icon.svg"
                          class="ml-2"
                        />
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="SlctMtBg">
                  <div class="SlctMtHdd mb-2">
                    <div class="SlctMtSec">
                      <p>OWNER STABLE</p>
                      <h4>Z268 LAB!</h4>
                    </div>
                    <div class="SlctMtSec TmLftSec">
                      <p>TIME LEFT</p>
                      <h4>2d 20h 11m</h4>
                    </div>
                  </div>
                  <div class="SlctMtSec  d-flex mb-3">
                    <div class="TmLftSec mr-3">
                      <h4>STUD FEE</h4>
                    </div>
                    <div class="SlctMtSec StudFee d-flex">
                      <h4 class="mr-2">{getData.breedfee}</h4>
                      <p>MATIC</p>
                    </div>
                  </div>
                  <div class="Btns d-flex mt-2 flex-wrap">
                    <button class="btn Btn BtnGrdnt BtnPrmry Btn170-50 kids BtnF16-400 ">
                      select mate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    );
  } else {
    content = <p className="text-white">{error.message}</p>;
  }
  return (
    <>
      <div className="mt-5">{isSuccess && content}</div>
    </>
  );
};

export default BreedingDiv;
