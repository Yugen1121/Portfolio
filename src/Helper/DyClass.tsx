import { ClassValue, clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export function DyClass(...items: ClassValue[]){
    return twMerge(clsx(items));
}