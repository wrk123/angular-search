import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
 
  transform(inputArray: any, searchText?: any): any {
    
    if(!inputArray)
      return  null ; 
    
    if(!searchText)
      return inputArray;

      searchText = searchText.toLowerCase();
    
    return inputArray.filter(function(data: any){
        return JSON.stringify(data).toLowerCase().includes(searchText);
    });  

  }
 
}
