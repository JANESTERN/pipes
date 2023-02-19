import { PipeTransform,Pipe } from "@angular/core";

@
Pipe({
    name:'shorten'
})



export class shorten implements PipeTransform{
    transform(value: string, limit:number):string{
        if(value.length>limit){
            return value.substring(0,limit) + "..."    
        }
        return value     
    }

}