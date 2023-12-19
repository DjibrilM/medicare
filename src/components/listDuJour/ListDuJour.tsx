import Avatar1 from '../../images/deo/avtar.jpg';
import Avatar2 from '../../images/deo/avatar2.png';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 

 
const TABLE_HEAD = ["N","Nom","Sexe","Age", "Adress", "Status", "Date", ""];
 
const TABLE_ROWS = [
  {
    img: Avatar1,
    name: "John Michael",
    numeroFiche:"123",
    sexe:"M",
    age:"32",
    quertier:"mugunga",
    avenue:"deoga N12",
    category: "interne",
    services: "triage",
    status: true,
    date: "23/04/18",
    NJour:"1",
    time:"12:45",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    numeroFiche:"123",
    sexe:"M",
    age:"32",
    quertier:"mugunga",
    avenue:"deoga N12",
    category: "interne",
    services: "triage",
    status: true,
    date: "23/04/18",
    NJour:"2",
    time:"12:45",
  },
  {
    img: Avatar2,
    name: "Laurent Perrier",
    numeroFiche:"123",
    sexe:"M",
    age:"32",
    quertier:"mugunga",
    avenue:"deoga N12",
    category: "interne",
    services: "triage",
    status: true,
    date: "23/04/18",
    NJour:"3",
    time:"12:45",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    numeroFiche:"123",
    sexe:"M",
    age:"32",
    quertier:"mugunga",
    avenue:"deoga N12",
    category: "interne",
    services: "triage",
    status: true,
    date: "23/04/18",
    NJour:"4",
    time:"12:45",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    numeroFiche:"123",
    sexe:"M",
    age:"32",
    quertier:"mugunga",
    avenue:"deoga N12",
    category: "interne",
    services: "triage",
    status: false,
    date: "23/04/18",
    NJour:"5",
    time:"12:45",
  },
];


const ListDuJour = () => {
  return (
    <div>
      <div>
              <h1 className="uppercase text-center font-bold text-primary-400 p-8 text-[24px]">
                  LISTE DES PATIENTS DU JOUR
              </h1>
          </div>
          <div>
              <Card className="h-full w-full dark:bg-blue-gray-500">
                  <CardHeader floated={false} shadow={false} className="rounded-none dark:bg-blue-gray-500">
                      <div className="mb-8 flex items-center justify-between gap-8">
                          <div>
                              <Typography variant="h5" color="blue-gray">
                                  LISTE DES PATIENTS DU JOUR
                              </Typography>
                              <Typography color="gray" className="mt-1 font-normal">
                                  See information about all patients
                              </Typography>
                          </div>
                          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                              <Button variant="outlined" size="sm">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                      />
                                  </svg>
                              </Button>
                              <Button
                                  className="flex bg-primary-500 items-center gap-3"
                                  size="sm"
                              >
                                <a href="/From/reception/patient">
                                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                                  patient
                                </a>  
                              </Button>
                          </div>
                      </div>
                      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                          
                          <div className="w-full md:w-72">
                              <Input
                                  label="Search"
                                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                              />
                          </div>
                      </div>
                  </CardHeader>
                  <CardBody className="overflow-scroll px-0">
                      <table className="mt-4 w-full min-w-max table-auto text-left">
                          <thead>
                              <tr>
                                  {TABLE_HEAD.map((head) => (
                                      <th
                                          key={head}
                                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                      >
                                          <Typography
                                              variant="small"
                                              color="blue-gray"
                                              className="font-normal leading-none opacity-70"
                                          >
                                              {head}
                                          </Typography>
                                      </th>
                                  ))}
                              </tr>
                          </thead>
                          <tbody>
                              {TABLE_ROWS.map(
                                  (
                                      {
                                          img,
                                          name,
                                          numeroFiche,
                                          age,
                                          sexe,
                                          quertier,
                                          avenue,
                                          NJour,
                                          time,
                                          status,
                                          date,
                                      },
                                      index,
                                  ) => {
                                      const isLast = index === TABLE_ROWS.length - 1;
                                      const classes = isLast
                                          ? 'p-4'
                                          : 'p-4 border-b border-blue-gray-50';

                                      return (
                                          <tr key={name}>
                                               <td className={classes}>
                                                  <Typography
                                                      variant="small"
                                                      color="blue-gray"
                                                      className="font-normal"
                                                  >
                                                      {NJour}
                                                  </Typography>
                                              </td>
                                              <td className={classes}>
                                                  <div className="flex items-center gap-3">
                                                      <Avatar src={img} alt={name} size="sm" />
                                                      <div className="flex flex-col">
                                                          <Typography
                                                              variant="small"
                                                              color="blue-gray"
                                                              className="font-normal"
                                                          >
                                                              {name}
                                                          </Typography>
                                                          <Typography
                                                              variant="small"
                                                              color="blue-gray"
                                                              className="font-normal opacity-70"
                                                          >
                                                              {numeroFiche}
                                                          </Typography>
                                                      </div>
                                                  </div>
                                              </td>
                                              
                                              <td className={classes}>
                                                  <div className="flex flex-col">
                                                      <Typography
                                                          variant="small"
                                                          color="blue-gray"
                                                          className="font-normal"
                                                      >
                                                          {sexe}
                                                      </Typography>
                                                      
                                                  </div>
                                              </td>
                                              <td className={classes}>
                                                  <Typography
                                                      variant="small"
                                                      color="blue-gray"
                                                      className="font-normal"
                                                  >
                                                      {age}
                                                  </Typography>
                                              </td>
                                              <td className={classes}>
                                                  <div className="flex flex-col">
                                                      <Typography
                                                          variant="small"
                                                          color="blue-gray"
                                                          className="font-normal"
                                                      >
                                                          {quertier}
                                                      </Typography>
                                                      <Typography
                                                          variant="small"
                                                          color="blue-gray"
                                                          className="font-normal opacity-70"
                                                      >
                                                          {avenue}
                                                      </Typography>
                                                  </div>
                                              </td>
                                              <td className={classes}>
                                                  <div className="w-max">
                                                      <Chip
                                                          variant="ghost"
                                                          size="sm"
                                                          value={status ? 'normal' : 'vulnerable' }
                                                          color={status ? 'green' : 'blue-gray'}
                                                      />
                                                  </div>
                                              </td>
                                              <td className={classes}>
                                                  <Typography
                                                      variant="small"
                                                      color="blue-gray"
                                                      className="font-normal"
                                                  >
                                                      {date}
                                                  </Typography>
                                                  <Typography
                                                          variant="small"
                                                          color="blue-gray"
                                                          className="font-normal opacity-70"
                                                      >
                                                          {time}
                                                      </Typography>
                                              </td>
                                              <td className={classes}>
                                                  <Tooltip content="termine">
                                                      <IconButton variant="text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                      </IconButton>
                                                  </Tooltip>
                                              </td>
                                          </tr>
                                      );
                                  },
                              )}
                          </tbody>
                      </table>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                      <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                      >
                          Page 1 of 10
                      </Typography>
                      <div className="flex gap-2">
                          <Button variant="outlined" size="sm">
                              Previous
                          </Button>
                          <Button variant="outlined" size="sm">
                              Next
                          </Button>
                      </div>
                  </CardFooter>
              </Card>
          </div>
    </div>
  )
}

export default ListDuJour