// import React from 'react'

const RegistreHospi = () => {
    return (
        <div className=" sm:grid-cols-2 p-8">
            <div className="flex flex-col gap-9">
                {/* <!-- pation registre hospi form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b bg-primary-500 border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-center text-[24px] text-white">
                            registre hospitalisation form
                        </h3>
                    </div>
                    <form action="#">
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Postnom
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        sexe
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="sexe"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Age
                                    </label>
                                    <input
                                        type="numbe"
                                        placeholder="age"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX:poids
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="poids"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX:taille
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="taille"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX:temperature
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="T"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX: FR
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="FR"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX: FC
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="FC"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        SIGNES VITAUX:TA
                                    </label>
                                    <input
                                        type="numbre"
                                        placeholder="TA"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Quarter
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="quartier"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Avenue
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="avenue"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        numero Fiche
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="fiche numbre"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Heur Adimission
                                </label>
                                <input
                                    type="time"
                                    placeholder="avenue"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Date Admission
                                </label>
                                <input
                                    type="date"
                                    placeholder="date"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Statut
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Normal</option>
                                        <option value="">NHC</option>
                                        <option value="">Agent</option>
                                        <option value="">MT</option>
                                        <option value="">vulnerable</option>
                                        <option value="">Abonné</option>
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

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Services
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Normal</option>
                                        <option value="">NHC</option>
                                        <option value="">Agent</option>
                                        <option value="">MT</option>
                                        <option value="">vulnerable</option>
                                        <option value="">Abonné</option>
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
                                        I.PLAINTES
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    II.HISTORIQUE DE LA MALADIE
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    III.ANTECEDENTS
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    IV.
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Diagnostic
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                >
                                </textarea>
                            </div>


                            <div className="flex flex-col gap-5.5 p-6.5">
                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Attach Photo profil
                                    </label>
                                    <input
                                        type="file"
                                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default RegistreHospi