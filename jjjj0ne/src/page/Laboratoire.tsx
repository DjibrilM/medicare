import React from 'react'
import TitrePage from '../components/TitrePage'
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   

const Laboratoire = () => {
  return (
    <div className="bg-blue-gray-100">
        <TitrePage/>
        <div>Laboratoire</div>
        <div className=" p-10">
        <div className=" bg-orange-100 p-10 rounded-3xl">
            <Card color="transparent" shadow={false} className="w-1/2 p-4 mx-auto bg-blue-gray-50">
                
            <form className="mt-8 mb-2 max-w-screen-lg sm:w-96 w-1/2 p-4 mx-auto text-center">
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h4" color="blue-gray" className=" flex gap-8">
                   <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin variant="static" label="Nom et Post nom:" placeholder="nom" />
                        <Input crossOrigin variant="standard" label="Sexe" />
                        <Input crossOrigin variant="outlined" label="Numero fiche:" />
                   </div>
                   <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin variant="static" label="Renseignement Clinique:" placeholder="Renseignement Clinique" />
                        <Input crossOrigin variant="standard" label="Adresse" />
                        <Input crossOrigin variant="outlined" label="Age:" />
                   </div>
                </Typography>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        I.HEMATOLOGE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="vitesse de sedimentation:" />
                        <Input crossOrigin color="purple" label="Hemogramme:" />
                        <Input crossOrigin color="indigo" label="GS et RH:" />
                        <Input crossOrigin color="teal" label="TS et TC:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        II.PARASTOLOGIE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Goute fraiche:" />
                        <Input crossOrigin color="purple" label="Goute epaisse:" />
                        <Input crossOrigin color="indigo" label="Selles Directes:" />
                        <Input crossOrigin color="teal" label="Frottis Vaginal: " />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        III.UROLOGIE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Sediment urinaire:" />
                        <Input crossOrigin color="purple" label="Test de grassesse:" />
                        <Input crossOrigin color="indigo" label="Leucocytes:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        IV.IMMUNO SEROLGI
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Widal:" />
                        <Input crossOrigin color="purple" label="WDRL:" />
                        <Input crossOrigin color="indigo" label="H.Pylori:" />
                        <Input crossOrigin color="blue" label="SRV:" />
                        <Input crossOrigin color="purple" label="Hbs:" />
                        <Input crossOrigin color="indigo" label="CRP:" />
                        <Input crossOrigin color="blue" label="FR:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        V.BACTERIOLOGIE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Spermogramme simple:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-orange-400" >
                        VI.BIOCHIMIE
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="-mb-3" >
                        BIOCHIMIE URINAIRE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Albuminurie:" />
                        <Input crossOrigin color="purple" label="Proteinurie:" />
                        <Input crossOrigin color="indigo" label="Glycosurie:" />
                        <Input crossOrigin color="blue" label="Bilrubines:" />
                        <Input crossOrigin color="purple" label="Nitrate:" />
                        <Input crossOrigin color="indigo" label="Corps cetonique:" />
                        <Input crossOrigin color="blue" label="PH:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3" >
                        BIOCHIMIE BILAN RENAL
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Glycemie{60-12mg/dl}:" />
                        <Input crossOrigin color="purple" label="UREE{15-45mg/dl}:" />
                        <Input crossOrigin color="indigo" label="Creatinine{0,6-1,4mg/dl}:" />
                        <Input crossOrigin color="blue" label="Proteinetotale{6,6-8,3g/dl}:" />
                        <Input crossOrigin color="purple" label="Albumine{3,5-5g/dl}:" />
                        <Input crossOrigin color="indigo" label="Acide Urique{3,5-7,7mg/dl}:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3" >
                        BIOCHIMIE URINAIRE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Albuminurie:" />
                        <Input crossOrigin color="purple" label="Proteinurie:" />
                        <Input crossOrigin color="indigo" label="Glycosurie:" />
                        <Input crossOrigin color="blue" label="Bilrubines:" />
                        <Input crossOrigin color="purple" label="Nitrate:" />
                        <Input crossOrigin color="indigo" label="Corps cetonique:" />
                        <Input crossOrigin color="blue" label="PH:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3" >
                        BIOCHIMIE URINAIRE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Albuminurie:" />
                        <Input crossOrigin color="purple" label="Proteinurie:" />
                        <Input crossOrigin color="indigo" label="Glycosurie:" />
                        <Input crossOrigin color="blue" label="Bilrubines:" />
                        <Input crossOrigin color="purple" label="Nitrate:" />
                        <Input crossOrigin color="indigo" label="Corps cetonique:" />
                        <Input crossOrigin color="blue" label="PH:" />
                    </div>
                    <Typography variant="h6" color="blue-gray" className="-mb-3" >
                        BIOCHIMIE URINAIRE
                    </Typography>
                    <div className="flex w-72 flex-col gap-6">
                        <Input crossOrigin color="blue" label="Albuminurie:" />
                        <Input crossOrigin color="purple" label="Proteinurie:" />
                        <Input crossOrigin color="indigo" label="Glycosurie:" />
                        <Input crossOrigin color="blue" label="Bilrubines:" />
                        <Input crossOrigin color="purple" label="Nitrate:" />
                        <Input crossOrigin color="indigo" label="Corps cetonique:" />
                        <Input crossOrigin color="blue" label="PH:" />
                    </div>

                </div>
                <Button className="mt-6" fullWidth>
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
            </Card>
        </div>
        </div>
    </div>
  )
}

export default Laboratoire