/// <reference path='fourslash.ts' />

////type Disc =
////    | { kind: "hddvd" }
////    | { kind: "bluray" }
////
////const ds: Disc[] = [
////    { kind: "bluray", },
////    { kind: [|"hdpvd"|], }
////];

verify.rangeAfterCodeFix('"hddvd"');
