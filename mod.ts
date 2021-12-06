import * as day1 from "./solution/day1.ts";

type SolutionPart = (input: string) => number;
type Solution = {
  part1: SolutionPart;
  part2: SolutionPart;
};

async function exec(day: number): Promise<void> {
  const solution = solutions[day - 1];

  if (solution === undefined)
    throw new Error(`No solution found for day: ${day}`);

  const input = await readInput(day);
  console.log(`Day ${day}:`, solution.part1(input), solution.part2(input));
}

async function readInput(day: number): Promise<string> {
  const decoder = new TextDecoder();
  const data = await Deno.readFile(`./data/day${day}.txt`);

  return decoder.decode(data).trimEnd();
}

const day = parseInt(Deno.args[0]);
const solutions: Solution[] = [day1];

if (isNaN(day)) {
  for (let index = 1; index <= solutions.length; index++) {
    await exec(index);
  }
} else {
  await exec(day);
}
