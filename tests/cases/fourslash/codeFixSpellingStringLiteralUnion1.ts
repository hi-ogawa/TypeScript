/// <reference path='fourslash.ts' />

////type T1 = "string" | "number" | "boolean";
////const t1: T1 = [|"strong"|];

verify.rangeAfterCodeFix('"string"');
