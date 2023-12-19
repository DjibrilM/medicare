import HeroSection from "../../../components/heroSection/HeroSection"
import LaboPhoto from "../../../images/deo/laboratory.png"
import ListDuJour from "../../../components/listDuJour/ListDuJour"
import Labo from "../../../components/laboraroire/Labo"

const Laboratoire = () => {
  return (
    <div className="p-4">
        <HeroSection nameService="laboratory" name="laboratoire" images={LaboPhoto} />
        <ListDuJour
        name="deo"
        Sexe="M"
        Fiche={345}
        Category="in"
        Age={12}
        />
        <div className=" pt-8 text-center">
            <h1 className="uppercase font-extrabold leading-8  text-[28px] text-primary-500">
               liste de test
            </h1>
        </div>
        <div>
        <div className="flex flex-col pt-4 gap-9">
          {/* <!-- labo Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke bg-primary-500 py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-mediu text-center text-white">
                 Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nom et Postnom
                  </label>
                  <input
                    type="name"
                    placeholder="Enter name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Numero du fiche
                  </label>
                  <input
                    type="number"
                    placeholder="Enter number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mt-5 mb-5.5 flex items-center justify-between">
                  <label htmlFor="formCheckbox" className="flex cursor-pointer">
                    <div className="relative pt-0.5">
                      <input
                        type="checkbox"
                        id="formCheckbox"
                        className="taskCheckbox sr-only"
                      />
                      <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                        <span className="text-white opacity-0">
                          <svg
                            className="fill-current"
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p>valide</p>
                  </label>

                  
                </div>
                <div className="flex pt-4 gap-2">
                <Labo
                head="I.HEMATOLOGIE"
                nameFoor="Vitessede sedimentation"
                nameOne="Hemogramme"
                nameTree="GS & RH"
                nameTwo=" TS & TC"
                />
                <Labo
                head="II.PARASITOLOGIE"
                nameFoor="Goute fraiche"
                nameOne="Selles directes"
                nameTree="Goute epaisse"
                nameTwo="frottis Vaginal"
                />
                <Labo
                head="III.UROLOGIE"
                nameFoor="vide"
                nameOne="tes de grossesse"
                nameTree="leucocytes"
                nameTwo="Sediment urinaire"
                />
            </div>
            <div className="flex pt-4 gap-2">
                <Labo
                head="IV.I.IMMUNO SEROLOGIE"
                nameFoor="Widal"
                nameOne="VDRL"
                nameTree="SRV"
                nameTwo="H.Pylori"
                />
                <Labo
                head="IV.II.IMMUNO SEROLOGIE"
                nameFoor="Hbs"
                nameOne="Hcs"
                nameTree="CRP"
                nameTwo="FR"
                />
                <Labo
                head="V.BACTERIOLOGIE"
                nameFoor="vide"
                nameOne="Spermogramme simple"
                nameTree="vide"
                nameTwo="vide"
                />
            </div>
            <div className="pt-4">
              <h4 className=" text-center text-primary-400 text-[24px]">VI.BIOCHIMIE</h4>
            </div>
            
            <div className="flex pt-4 gap-2">
                <Labo
                head="I.I.BOI.URINAIRE"
                nameFoor="Albuminurie"
                nameOne="proteinurie"
                nameTree="Glycosurie"
                nameTwo="bilirubines"
                />
                <Labo
                head="I.II.BOI.URINAIRE"
                nameFoor="vide"
                nameOne="Nitrate"
                nameTree="Corps cetonique"
                nameTwo="PH"
                />
                <Labo
                head="II.I.BILAN RENAL"
                nameFoor="GLYCEMIE(60-12mg/dl)"
                nameOne="CREATININE(0,6-1,5mg/dl))"
                nameTree="PROTEINETOTALE(6,6-8,3mg/dl)"
                nameTwo="UREE(15-45mg/dl)"
                />
            </div>
            <div className="flex pt-4 gap-2">
                <Labo
                head="II.II.BILAN RENAL"
                nameFoor="ACIDEURIQUE(3,5-77mg/dl)"
                nameOne="BILIRUBINE TOTAL(1-12mg/dl)"
                nameTwo="GGT(H:<=40U/L;F:<=32U/L)"
                nameTree="BILIRUBINE.DIRECTE(<0,25mg/dl)"
                />
                <Labo
                head="II.III.BILAN RENAL"
                nameFoor="SGOT(31-38UI/L)"
                nameOne="SGPT932-40UI/L)"
                nameTree="PHOSPHATASES.ALC(98-279U/L)"
                nameTwo="vide"
                />
                <Labo
                head="II.I.IONOGRAMME"
                nameFoor="SODIUM(135-155mmol/l)"
                nameOne="POTASSSIUM(3,6-5,5mmol/l)"
                nameTree="CALCIUM(8.105mg/dl)"
                nameTwo="CHORE(95-108mmol/l)"
                />
            </div>
            <div className="flex pt-4 gap-2">
            <Labo
                head="II.II.IONOGRAMME"
                nameFoor="vide"
                nameOne="MAGNESIUM(1.9-2.5mg/dl)"
                nameTree="vide"
                nameTwo="PHOSPHORE(2.5-5mg/dl)"
                /><Labo
                head="AUTRES"
                nameFoor="VIDE"
                nameOne="TROPONINI{TNT}(<001ng/l)"
                nameTree="AMYLASE(<90U/l"
                nameTwo="LIPASE(<=38U/L)"
                /><Labo
                head="VIDE"
                nameFoor="vide"
                nameOne="vide"
                nameTree="vide"
                nameTwo="vide"
                />
            </div>

            <div className="pt-4 pb-4">
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Sign In
                </button>
              </div>
            </form>
          </div>
          </div>
            
        </div>
    </div>
  )
}

export default Laboratoire