/// <reference path='fourslash.ts' />

////type Disc =
////    | { kind: "hddvd" }
////    | { kind: "bluray" }
////
////function foo(x: Disc[]) {
////}
////
////foo([
////    { kind: "bluray", },
////    { kind: [|"hdpvd"|], }
////]);
////

verify.rangeAfterCodeFix('"hddvd"');
