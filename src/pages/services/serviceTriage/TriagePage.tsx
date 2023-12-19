
import Avatar1 from '../../../images/deo/avtar.jpg';
import Avatar2 from '../../../images/deo/avatar2.png';
import CartePacient from '../../../components/cartePacient/CartePatient';
import HeroSection from '../../../components/heroSection/HeroSection';
import PhotoTri from '../../../images/deo/clipart.png';
import ListDuJour from '../../../components/listDuJour/ListDuJour';

const TriagePage  = () => {
  return (
    <div>
      <div className="p-4">
        <HeroSection
          name="triage"
          images={PhotoTri}
          nameService="consultation"
        />
        <ListDuJour name="deo" Sexe="M" Fiche={345} Category="in" Age={12} />

        

        <div className="p-8">
          <h1 className="uppercase text-primary-500 text-[24px] font-bold text-center">
            envoyer les résultats
          </h1>
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b bg-primary-500 border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-center text-white">
                Contact Doctor
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nom et Postnom
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Fiche Number
                  </label>
                  <input
                    type="number"
                    placeholder="Put fiche number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Poids
                  </label>
                  <input
                    type="number"
                    placeholder="poids"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    TA
                  </label>
                  <input
                    type="number"
                    placeholder="Put TA"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    PU
                  </label>
                  <input
                    type="number"
                    placeholder="Put PU"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Température
                  </label>
                  <input
                    type="number"
                    placeholder="Put Température"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    SATUROMAITRE
                  </label>
                  <input
                    type="number"
                    placeholder="Put saturomaitre"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Doctors
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">select docteur</option>
                      <option value="">DR NEEMA MBUZUKONGIRA Prince</option>
                      <option value="">DR NDAYAZI BYEMERO</option>
                      <option value="">DR FRANCOIS MUSHESHA</option>
                      <option value="">DR PLACIDE SERUBUNGO</option>
                      <option value="">DR GHYSLAIN NDAKOLA</option>
                      <option value="">MUGABE HASHAKA Emery</option>
                      <option value="">ANDRE MUGISA </option>
                      <option value="">IRAKIZA BAHATI Fidele</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Plaintes
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <CartePacient />
      </div>
    </div>
  );
}

export default TriagePage