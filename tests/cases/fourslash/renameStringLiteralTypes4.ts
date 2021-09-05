/// <reference path='fourslash.ts' />

////interface A {
////  [|k1|]: any;
////}
////
////const k: keyof A = "[|k1|]";

verify.rangesWithSameTextAreRenameLocations("k1");
