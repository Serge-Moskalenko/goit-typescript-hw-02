/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
export enum  Days{
  Mon ,
  Tue ,
  Wed ,
  Thu ,
  Fri ,
  Sat ,
  Sun ,
};


export const isWeekend =(day:Days):boolean=> {
  if(Days.Sat | Days.Sun ) {
    return true
  } else return false
  
}