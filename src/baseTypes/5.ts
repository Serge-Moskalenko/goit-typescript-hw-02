/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type unionTyype= string|number;

let union:unionTyype;

type literalType = 'enable' | 'disable';

let literal:literalType;