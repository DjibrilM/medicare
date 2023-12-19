
import HeroSection from '../../../components/heroSection/HeroSection'
import ListDuJour from '../../../components/listDuJour/ListDuJour'
import DoctorAvatar1 from '../../../images/deo/avatarDoctor1.png';

const DoctorOperation = () => {
  return (
    <div>
        <div className="p-4">
        <HeroSection
          name="chirurgie"
          images={DoctorAvatar1}
          nameService="chirurgie"
        />
        <ListDuJour name="deo" Sexe="M" Fiche={345} Category="in" Age={12} />
        </div>
    </div>
  )
}

export default DoctorOperation