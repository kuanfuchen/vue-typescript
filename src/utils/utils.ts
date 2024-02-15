import { BehaviorSubject, Subject } from 'rxjs';
const _transferMeg$ = new BehaviorSubject({});
type User = {
  name:string,
  status:boolean,
  token:string
}
const userInfo:User = {
  name:'',
  status:false,
  token:''
}
const transferMegFinishMeg$ = (info:any) =>{
  userInfo.name = info.name;
  userInfo.status = info.status;
  userInfo.token = info.token;
  // _transferMeg$.next(info);
  // if(userInfo.status){
    _transferMeg$.next(userInfo);
  // }
  
} 
export const data = {
  transferMegFinishMeg$,
  transferMeg$: _transferMeg$.asObservable(),
}