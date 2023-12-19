
import HeroSection from '../../../components/heroSection/HeroSection'
import ComPhoto from '../../../images/deo/comptable.png'
import ListDuJour from '../../../components/listDuJour/ListDuJour'
import TableThree from '../../../components/TableThree'

const ComptableOne = () => {
  return (
    <div className="p-4">
        <HeroSection
          nameService=':comptabily'
          name='comptable'
          images={ComPhoto}
        />
        <ListDuJour
        name="darlene"
        Sexe="M"
        Fiche={345}
        Category="in"
        Age={12}
        />
        <div>
          <h1 className="uppercase text-[24px] p-8 font-bold text-center text-primary-400 ">
            Invoice
          </h1>
        </div>
        <TableThree />

    </div>
  )
}

export default ComptableOne