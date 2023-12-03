const MarketPlaceDetails = () => {
   return (
      <>

         <section>
            <div class="container">
               <div class="mb-2">
                  <a href="" class="text-white bck_btn">
                     <span>
                        <img class="" src="/static/assets/images/market-place/back-arrow.svg" alt="" />
                     </span> Go Back</a>
               </div>


               <div class="row">
                  <div class="col-lg-6">
                     <div class="myst_box">
                        <img src="/static/assets/images/gift.gif" alt="" />
                     </div>
                  </div>
                  <div class="col-lg-6 ">
                     <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div class="myst_txt">
                           <h2 class="text-white">NBFLETCHER</h2>
                           <h3>$29.3<span> BNB </span> </h3>
                        </div>
                        <div class="">
                           <button class="btn  f15 fw-500 dpuff btn-bg " type="button">Buy Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}
export default MarketPlaceDetails;