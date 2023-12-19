
import AvatarPhoto from '../../images/deo/avatar2.png'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const CartePatient = (props: { name: string ; fiche: number ; poids: number ; taille: number; }) => {
  return (
    <div>
        <Card className="mt-6 w-65">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
        src={AvatarPhoto}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Nom:{props.name}
        </Typography>
        <Typography>
          Numero Fiche:{props.fiche}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex gap-6 ">
          <div className="bg-primary-500 p-4 rounded-2xl" >
            <svg width="25" height="35" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.6875 4.66666H8.3125C7.36767 4.66666 6.46153 5.03541 5.79343 5.69179C5.12533 6.34817 4.75 7.23841 4.75 8.16666V47.8333C4.75 48.7616 5.12533 49.6518 5.79343 50.3082C6.46153 50.9646 7.36767 51.3333 8.3125 51.3333H48.6875C49.6323 51.3333 50.5385 50.9646 51.2066 50.3082C51.8747 49.6518 52.25 48.7616 52.25 47.8333V8.16666C52.25 7.23841 51.8747 6.34817 51.2066 5.69179C50.5385 5.03541 49.6323 4.66666 48.6875 4.66666Z" stroke="#F8F8F8" stroke-width="4" stroke-linejoin="round"/>
                <path d="M14.25 22.2297C18.1984 17.563 22.9484 15.2297 28.5 15.2297C34.0516 15.2297 38.8016 17.563 42.75 22.2297" stroke="#F8F8F8" stroke-width="4" stroke-linecap="round"/>
                <path d="M28.5 36.1667C29.4448 36.1667 30.351 35.7979 31.0191 35.1415C31.6872 34.4852 32.0625 33.5949 32.0625 32.6667C32.0625 31.7384 31.6872 30.8482 31.0191 30.1918C30.351 29.5354 29.4448 29.1667 28.5 29.1667C27.5552 29.1667 26.649 29.5354 25.9809 30.1918C25.3128 30.8482 24.9375 31.7384 24.9375 32.6667C24.9375 33.5949 25.3128 34.4852 25.9809 35.1415C26.649 35.7979 27.5552 36.1667 28.5 36.1667Z" fill="#F8F8F8"/>
                <path d="M22.5625 24.5L28.5095 32.6667" stroke="#F8F8F8" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <p className="text-center text-orange-600">{props.poids}</p>
          </div>
          <div className="bg-primary-500 p-4 rounded-2xl" >
            <svg width="25" height="35" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5 51.3333V4.66666M28.5 51.3333L19 42M28.5 51.3333L38 42M28.5 4.66666L19 14M28.5 4.66666L38 14" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-center text-orange-600">{props.taille}</p>
          </div>
          <div className="bg-primary-500 p-4 rounded-2xl" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-12 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

          </div>
        </div>  
      </CardFooter>
    </Card>
    </div>
  )
}

export default CartePatient