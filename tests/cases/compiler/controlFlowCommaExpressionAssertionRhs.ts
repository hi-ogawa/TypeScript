declare function assertIsNumber(x: any): asserts x is number;

declare const x1: any;
declare const x2: any;

assertIsNumber(x1), assertIsNumber(x2);

x1;
x2;
