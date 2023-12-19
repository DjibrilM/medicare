import React from 'react'
import CartePatient from '../cartePacient/CartePatient'

import ReceptionCard from '../profilCarde/ReceptionCard'
import { CiMedicalCase } from "react-icons/ci";
import { CiMedicalCross } from "react-icons/ci";
import { LuBed } from "react-icons/lu";


const profilPacient = () => {
  return (
    <div className="flex p-4 pt-8 gap-4">
      <div className=" w-125">
        <div className="p-8 pb-12">
          <h1 className="uppercase font-bold text-primary-500 text-[24px]">
            Patient Portfolio
          </h1>
        </div>

        <div className=" bg-primary-200 p-4 rounded-2xl">
          <h2 className=" text-orange-500 font-extrabold text-[16px]">
            historique du malade
          </h2>
          <div className="flex gap-8">
            <p>age:32</p>
            <p>sex:M</p>
            <p>adresse:mugunga </p>
            <div className=" mx-24 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap  gap-5 pt-5">
          <ReceptionCard
            background="linear-gradient(to top right, #F87171 1%, #CF1512 100%)"
            Icon={<CiMedicalCase />}
            label="PLAINTES"
            count={40}
          />

          <ReceptionCard
            background="linear-gradient(to top right, #4ADE80 1%, #16a34a 100%)"
            Icon={<CiMedicalCross />}
            label="ANTECEDENTS"
            count={5}
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap  gap-5 pt-5">
          <ReceptionCard
            background="linear-gradient(to top right, #A78BFA 1%, #7c3aed 100%)"
            Icon={<LuBed />}
            label="HOSPITALISATION"
            count={13}
          />
        </div>

        <div className="pt-8">
          <div className=" rounded-2xl border border-stroke bg-orange-300 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-white uppercase">
                  examemen physique
                </h4>
                <span className="text-sm font-medium">Etat general</span>
              </div>

              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                Température:27
                <svg
                  className="fill-meta-3"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-primary-500 p-12 rounded-3xl">
        <div className="">
          <CartePatient
            name="van paluku"
            fiche={1223}
            poids={30}
            taille={1.5}
          />
          <div className="flex md:flex-nowrap flex-wrap w-65 pt-5">
            <ReceptionCard
              background="linear-gradient(to top right, #A78BFA 1%, #7c3aed 100%)"
              Icon={
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
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              }
              label="CASE"
              count={1}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default profilPacient