import { Rocket } from "@mui/icons-material";
import { Interface } from "readline";

export interface Employee
{
    id?: String;
    fullName: string;
    ts: string;
    city: string;
    street: string;
    houseNumber:number;
    bornDate: string; 
    mobilePhone:string;
    phone:string;
    detailsCoronaVirus:DetailsCoronaVirusModel;

  }
  export interface DetailsCoronaVirusModel
{
  vaccinationDateA    :string;
  vaccinationDateB	  :string;
  vaccinationDateC    :string;
  vaccinationDateD    :string;
  manufacturerVaccineA:string;
  manufacturerVaccineB:string;
  manufacturerVaccineC:string;
  manufacturerVaccineD:string;
  positiveResultDate	:string;
  recoveryDate        :string;


 }




 