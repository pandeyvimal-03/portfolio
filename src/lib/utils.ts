import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Field {
  isRequired: boolean;
  value: any;
}

interface Data {
  [key: string]: Field;
}

export function isValidate(data : Data){
    let error : { [key: string]: string } = {}
    let status = true
    for(let key in data){
        if(data[key].isRequired && (data[key].value == null || data[key].value == undefined || data[key].value == '')){
            error[key] = `${key} is required`;
            status = false
        }
        else if(key == 'email'){
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(data[key].value)){
                error[key] = `enter a valid email`
                status = false
            }
        }
    }

    return {status , error}
}