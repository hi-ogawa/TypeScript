/// <reference path='fourslash.ts' />

////type T1 = "string" | "number" | "boolean";
////type T3 = T1 & ("string" | "boolean"); // "string" | "boolean"
////const t3: T3 = [|"strong"|];

verify.rangeAfterCodeFix('string');
