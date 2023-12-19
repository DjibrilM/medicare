import HeroSection from "../../../components/heroSection/HeroSection"
import PharmacyPhoto from "../../../images/deo/pharmacy.png"
import ListDuJour from "../../../components/listDuJour/ListDuJour"
import TableThree from "../../../components/TableThree"

const PharmacyOnePage = () => {
  return (
    <div>
      
      <HeroSection
        name="pharmary people"
        images={PharmacyPhoto}
        nameService="pharmaciy" />
      <ListDuJour
        name="darlene"
        Sexe="M"
        Fiche={345}
        Category="in"
        Age={12} />
        <div>
        <h1 className="uppercase text-[24px] p-8 font-bold text-center text-primary-400 ">
          Invoice
        </h1>
        </div>
        
      <TableThree />
      </div>

  )
}

export default PharmacyOnePage