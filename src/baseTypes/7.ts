/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
export enum  Days{
  Mon = "false",
  Tue = "false",
  Wed = "false",
  Thu = "false",
  Fri = "false",
  Sat = "true",
  Sun = "true",
};
 
export const isWeekend=(day:Days):string=> day;