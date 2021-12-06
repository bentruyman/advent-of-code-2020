import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { part1, part2 } from "../solution/day1.ts";

const input = `1721
979
366
299
675
1456`;

Deno.test({
  name: "Day 1 - Part 1",
  fn() {
    assertEquals(part1(input), 514579);
  },
});

Deno.test({
  name: "Day 1 - Part 2",
  fn() {
    assertEquals(part2(input), 241861950);
  },
});
