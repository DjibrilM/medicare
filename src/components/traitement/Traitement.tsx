// import React from 'react'

const Traitement = () => {
  return (
    <div><h1>Traitement</h1>

     {/** ordonnance */}
     <div>
      <h2 className=" text-center text-primary-400 p-4 text-[24px]">
        Ordonnance
      </h2>
     </div>
     <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Ordonnance
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Numero fiche
                  </label>
                  <input
                    type="numbe"
                    placeholder="Enter fiche numbe"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-9">
          {/* <!-- ordonnace Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Pharmacy
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Ambilan
                </label>
                <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>
              
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Interne à l'hôpital
                </label>
                <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>

              
            </div>
          </div>
          </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Send
                </button>
              </div>
            </form>
          </div>

    </div>
  )
}

export default Traitement