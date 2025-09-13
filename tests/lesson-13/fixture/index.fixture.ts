import { mergeTests } from "@playwright/test";
import { testExtend as t1 } from "./fixture01-example";
import { testExtend as t2 } from "./fixture02-example";

export const test = mergeTests(t1, t2);