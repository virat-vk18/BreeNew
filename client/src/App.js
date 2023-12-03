import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/custom.scss";

import Home from "./Pages/home/Home";
import { Await, Route, Routes } from "react-router-dom";
import ConnectWallet from "./Pages/walletApi/ConnectWallet";
import Faq from "./Pages/faq/Faq";
import PrivacyPolicy from "./Pages/privacypolicy/PrivacyPolicy";
import TermsCondition from "./Pages/terms&conditions/TermsCondition";
import Breeding from "./Pages/breeding/Breeding";
import BreedingDog from "./Pages/breeding/BreedingDog";
import DogDetails from "./Pages/dogDetails/DogDetails";
import MarketLayout from "./Pages/Market/MarketLayout";
import MarketPlace from "./Pages/Market/MarketPlace";
import MarketPlaceDetails from "./Pages/Market/MarketPlaceDetails";
import MarketPlaceDetails2 from "./Pages/Market/MarketPlaceDetails2";
import CreateNft from "./Pages/createNft/CreateNft";
import MyStable from "./Pages/Market/MyStable";
import Specification from "./Pages/specification/Specification";
import { ToastContainer } from "react-toastify";
import SellNft from "./Pages/createNft/SellNft";
import StudFarmNft from "./Pages/createNft/StudFarmNft";
import { useDispatch } from "react-redux";
import {
  setConnected,
  setAddress,
  setBalance,
} from "./redux/feature/connectWalletSlice";
import Web3 from "web3";
import { useJwtAddressMutation } from "./Pages/walletApi/walletApi";
import BreedingDiv from "./Pages/breeding/BreedingDiv";
import { useEffect, useState } from "react";
import PrivateRouter from "./Pages/privateRouter/PrivateRouter";

function App() {
  const dispatch = useDispatch();
  const [currentAccount, setCurrentAccount] = useState("");

  const [jwtAddress] = useJwtAddressMutation();
  const web3Instance = new Web3(window.ethereum);

  const loggedIn = JSON.parse(localStorage.getItem("token"));
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
          localStorage.setItem("token", JSON.stringify(localStorageID));
        }

        // Get the account balance
        const balance = await web3Instance.eth.getBalance(accounts[0]);
        const walletBalance = web3Instance.utils.fromWei(balance, "ether");
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
        const checkIfAccountChanged = async () => {
          try {
            const { ethereum } = window;
            await window.ethereum.on("accountsChanged", (accounts) => {
              console.log("Account changed to:", accounts[0]);
              setCurrentAccount(accounts[0]);
              dispatch(setAddress(currentAccount));
            });
          } catch (error) {
            console.log(error);
          }
          checkIfAccountChanged();
        };
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Install MetaMask");
    }
  };

  if (loggedIn) {
    if (window.ethereum.isConnected() === false) {
      connectMetaMask();
    }
  }
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Connect Wallet */}
        <Route path="/connect-wallet" element={<ConnectWallet />} />

        {/* Create NFT */}
        <Route path='/sellcreation' element={<PrivateRouter />}>
        <Route path="/sellcreation" element={<SellNft />} />
        </Route>
        <Route path='/studcreation' element={<PrivateRouter />}>
        <Route path="/studcreation" element={<StudFarmNft />} />
        </Route>

        {/* FAQ Page */}
        <Route path="/faq" element={<Faq />} />

        {/* Privacy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Terms Page */}
        <Route path="/terms" element={<TermsCondition />} />

        {/* Breeding Pages */}
        <Route path='/breeding' element={<PrivateRouter />}>
        <Route path="/breeding" element={<Breeding />} />
        </Route>
         <Route path='/breeding/:id' element={<PrivateRouter />}>
        <Route path="/breeding/:id" element={<Breeding />} />
        </Route>
          <Route path='/breeding-dog' element={<PrivateRouter />}>
        <Route path="/breeding-dog" element={<Breeding />} />
        </Route>
        <Route path='/dog-details' element={<PrivateRouter />}>
        <Route path="/dog-details" element={<DogDetails />} />
        </Route>

        {/* Buy , Sell  & Marketplace page */}
        <Route path="/" element={<MarketLayout />}>
          <Route path='/market-place' element={<PrivateRouter />}>
            <Route path="/market-place" element={<MarketPlace />} />
          </Route>
          <Route path='/market-place-details' element={<PrivateRouter />}>
          <Route
            path="/market-place-details"
            element={<MarketPlaceDetails />}
            />
          </Route>
            <Route path='/market-place-details-sell' element={<PrivateRouter />}>
          <Route
            path="/market-place-details-sell"
            element={<MarketPlaceDetails2 />}
            />
          </Route>
          <Route path='/my-stable' element={<PrivateRouter />}>
            <Route path="/my-stable" element={<MyStable />} />
          </Route>
          <Route path='/specification/:id' element={<PrivateRouter />}>
            <Route path="/specification/:id" element={<Specification />} />
            </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
