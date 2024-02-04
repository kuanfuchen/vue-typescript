import { BehaviorSubject, Subject } from 'rxjs';
const _transferMeg$ = new BehaviorSubject({});
const transferMegFinishMeg$ = (info:any) =>{
  _transferMeg$.next(info);
} 
export const data = {
  transferMegFinishMeg$,
  transferMeg$: _transferMeg$.asObservable(),
}