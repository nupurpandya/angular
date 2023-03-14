import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any,filterValue:string) {
   if(value.length===0 || filterValue===''){
    return value;
   }
   const users=[];
   for(const user of value){
    if(user['name'].toLowerCase()===filterValue || user['technology'].toLowerCase()===filterValue || user['age'].toString().toLowerCase()===filterValue){
      users.push(user);
    }
   }
   return users;
 
  }

}
