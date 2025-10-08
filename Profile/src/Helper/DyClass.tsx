import { clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export function DyClass(...items){
    return twMerge(clsx(items));
}