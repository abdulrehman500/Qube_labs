import React , { useState }  from "react";

import car1 from "../assets/ast/car1.png";
import car2 from "../assets/ast/car2.png";
import car3 from "../assets/ast/car3.png";
import car4 from "../assets/ast/car4.png";
import car5 from "../assets/ast/car5.png";
import car6 from "../assets/ast/car6.png";
import car7 from "../assets/ast/car7.png";
import car8 from "../assets/ast/car8.png";
import Boxbg from "../assets/Qubelabs-box.png";
import { anim, ScrollReveal } from "../container/ScrollReveal";

export default function Staking() {
  const [ViewCards, setViewCards] = useState(false);




  return (
    <section id="staking" className="mt-24 overflow-x-clip">
      <div className="container-xxl relative">
       <img
          className="features-transition absolute  -left-4 -top-4 custom-left  w-96 transform"
          src={Boxbg}
          alt=""
        />

        <div className="pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm px-4 pb-4 pt-16 md:p-16">
            <div className="text-center">
              <ScrollReveal config={anim.animate5}>
                <h5 className="text-5xl font-bold text-primary">Stake with us</h5>
              </ScrollReveal>
              <ScrollReveal config={anim.animate6}>
                <p className="text-primary-dark font-medium mt-6 mb-12">
                  Earn passive income in crypto by delegating your idle tokens. We contribute to
                  secure the following blockchains.
                </p>
              </ScrollReveal>
            </div>

            <div className="row no-gutters -ml-1 -mr-1">
              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car1} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car2} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car3} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car4} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>
                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car5} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car6} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car7} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car8} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>
              {/* ------------------------------------------View-More---- */}
              { ViewCards ? 
      ( <>

        <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
          <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
            <div className="row no-gutters justify-center">
              <div className="col w-14 flex items-center bg-white rounded-lg">
                <img alt="..." src={car5} />
              </div>
              <div className="col px-2">
                <div>Fantom (FTM)</div>
                <div className="font-bold text-3xl">15.00%</div>
              </div>
            </div>

            <button className="btn is-primary w-full mt-2">Stake</button>
          </div>
        </div>
  

      
        <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
          <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
            <div className="row no-gutters justify-center">
              <div className="col w-14 flex items-center bg-white rounded-lg">
                <img alt="..." src={car6} />
              </div>
              <div className="col px-2">
                <div>Fantom (FTM)</div>
                <div className="font-bold text-3xl">15.00%</div>
              </div>
            </div>

            <button className="btn is-primary w-full mt-2">Stake</button>
          </div>
        </div>
    


        <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
          <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
            <div className="row no-gutters justify-center">
              <div className="col w-14 flex items-center bg-white rounded-lg">
                <img alt="..." src={car7} />
              </div>
              <div className="col px-2">
                <div>Fantom (FTM)</div>
                <div className="font-bold text-3xl">15.00%</div>
              </div>
            </div>

            <button className="btn is-primary w-full mt-2">Stake</button>
          </div>
        </div>
     

     
        <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
          <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
            <div className="row no-gutters justify-center">
              <div className="col w-14 flex items-center bg-white rounded-lg">
                <img alt="..." src={car8} />
              </div>
              <div className="col px-2">
                <div>Fantom (FTM)</div>
                <div className="font-bold text-3xl">15.00%</div>
              </div>
            </div>

            <button className="btn is-primary w-full mt-2">Stake</button>
          </div>
        </div>

      </>
      )
              : ""}
              {/* ------------------------------------------View-More---- */}
             
            </div>
            { ViewCards ? 
      ""
              : (
                <ScrollReveal config={anim.animate11}>
                  <div className="mt-4 text-center" onClick={() => setViewCards(true)} >
                    <div className="btn is-primary is-expanded">View More</div>
                  </div>
                </ScrollReveal>
                )}
          </div>
        </div>
      </div>
    </section>
  );
}
