import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  connectMetamask,
  setConnected,
  setAddress,
  setBalance,
  setCurrentUserId,
} from "../../redux/feature/connectWalletSlice";
// import { toast } from "react-toastify";
import Web3 from "web3";

import { useJwtAddressMutation } from "./walletApi";

const ConnectWallet = () => {
  // React Redux
  const dispatch = useDispatch();
  const { address, balance } = useSelector(connectMetamask);
  // console.log(add);
  // Routing Pages Function Variable
  const [jwtAddress] = useJwtAddressMutation();
  const navigate = useNavigate();

  const web3Instance = new Web3(window.ethereum);
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account from MetaMask
        const accounts = await web3Instance.eth.getAccounts();
        // changing redux state
        dispatch(setConnected(true));
        const walletAddress = accounts[0];
        dispatch(setAddress(walletAddress));
        // get Response From Jwt
        const getToken = await jwtAddress({ address: accounts[0] });

        if (getToken.data) {
          const localStorageID = getToken.data.accessToken;
          const ownerId = getToken.data.id;
          dispatch(setCurrentUserId(ownerId));
          localStorage.setItem("token", JSON.stringify(localStorageID));
        }

        // Get the account balance
        const balance = await web3Instance.eth.getBalance(accounts[0]);
        console.log(balance);
        const walletBalance = web3Instance.utils.fromWei(balance, "ether");
        console.log(walletBalance);
        dispatch(setBalance(walletBalance));

        // Get the network ID
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x13881",
            },
          ],
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Install MetaMask");
    }
  };
  const loggedIn = JSON.parse(localStorage.getItem("token"));

  if (loggedIn) {
    if (window.ethereum.isConnected() === false) {
      connectMetaMask();
    }
  }
  return (
    <>
      <div className="connect-bg p-xl-5 p-3">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-12">
              <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-6 col-xl-6">
                  <div className="orange-filter  text-center p-xl-5 p-3 mb-5">
                    <img
                      src="/static/assets/images/wallet/connect-1.svg"
                      className="mb-3"
                    />
                    <label className="text-white d-block sen-bold f18 fw-400">
                      Metamask
                    </label>
                    <label className="text-grey sen-reg  d-block f16 fw-400">
                      Browser Extension
                    </label>
                  </div>
                </div>
                {/* <div className="col-sm-12 col-lg-6 col-md-6 col-xl-6">
                           <div className="green-filter text-center p-xl-5 p-3 mb-5">
                              <img src="/static/assets/images/wallet/connect-2.svg" className="mb-3" />
                                 <label className="text-white d-block sen-bold f18 fw-400">BNB Extension</label>
                                 <label className="text-grey sen-reg  d-block f16  fw-400">Browser Extension</label>
                           </div>
                        </div> */}
              </div>
            </div>

            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-12">
              <div className=" d-flex align-items-center position-relative">
                <button
                  className=" btn  f16 text-linear sen-bold letter fw-400 sen"
                  type="button"
                  onClick={connectMetaMask}
                >
                  <span>
                    {address === ""
                      ? `Connect Wallet`
                      : `Connected..${address.substring(
                          0,
                          5
                        )}..${address.substring(39, 42)}`}
                  </span>
                </button>

                <img
                  src="/static/assets/images/wallet/arrow-1.svg"
                  className="position-arrow"
                />
              </div>
              <p className="btn f16 text-linear sen-bold letter fw-400 sen">
                Balance:{balance}
              </p>

              <h2 className="f40 text-white  fw-400 kids lh-70">
                Start Playing <br />{" "}
                <span className="f60 text-white mt-4 fw-400 kids">
                  Osiz ville{" "}
                </span>{" "}
              </h2>
              <p className="text-grey sen-reg  d-block f18  fw-400">
                Select an option to login or connect your wallet to the game.
              </p>
              <label className="text-white d-block sen-reg mt-4 f18 fw-400">
                What is Metamask?
              </label>
              <p className="text-grey sen-reg  d-block f16 mt-4  lh-30 fw-400">
                A crypto-wallet that sits securely in your web browser. If you
                would like to set up your own Metamask wallet, please follow the
                following instructions. This wallet will allow you to enjoy the
                full Osiz ville experience.
              </p>
              <div>
                <button
                  className=" btn  f16 text-linear sen-bold letter fw-400 sen"
                  type="button"
                >
                  Disconnect Metamask
                </button>
              </div>
              <div className="mt-5">
                <a
                  onClick={() => navigate("/")}
                  className="f16 text-white mt-4 fw-400 sen-reg"
                >
                  <img
                    src="/static/assets/images/wallet/arrow-w.svg"
                    className="mr-2"
                  />
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectWallet;
