import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "user"
})
export class UserPipe implements PipeTransform {
  arr: string = " ";
  transform(value: string): string {
    //arr:string="";

    for(let i=0;i<value.length;i++)
  {
    if(i==0) this.arr+=value[i].toUpperCase();
    else if(value[i]==" ") 
      {
        this.arr+=value[i+1].toUpperCase();
        i++;
        }
    else this.arr+=value[i];
    }
console.log(this.arr);
    return this.arr;
  }
}
