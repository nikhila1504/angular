import { Injectable } from '@angular/core';
import { Observable,Observer} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NumberseriesService {

  constructor() { }
  generateSeries(lb:number,ub:number) : Observable<number>{
    let ob=new Observable<number>(( _obr :Observer<number>)=>{
      if(lb>ub)
      {
        _obr.error("invalid bounds");
        return;
      }
      let n=lb;
      let handler=setInterval(()=>{
        _obr.next(n);
        n++;
        if(n>ub){
          clearInterval(handler);
          _obr.complete();
        }
      },1000)
    });


    return ob;
  }
}
