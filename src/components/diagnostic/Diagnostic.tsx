

const Diagnostic = () => {
  return (
    <div className='p-4'>
      {/* <!-- diagnostic Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b bg-primary border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text- text-white">
            DIAGNOSTIC
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
                type="number"
                placeholder="Enter numero fiche"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Diagnostic
              </label>
              <textarea
                rows={8}
                placeholder="Type your message"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
              </textarea>
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              send
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Diagnostic