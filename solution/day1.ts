export function part1(input: string): number {
  const nums = parseNumbers(input);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (nums[i] + nums[j] === 2020) {
        return nums[i] * nums[j];
      }
    }
  }

  throw new Error("Could not find a solution");
}

export function part2(input: string): number {
  const nums = parseNumbers(input);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      for (let k = 0; k < nums.length; k++) {
        if (i === k || j === k) continue;

        if (nums[i] + nums[j] + nums[k] === 2020) {
          return nums[i] * nums[j] * nums[k];
        }
      }
    }
  }

  throw new Error("Could not find a solution");
}

function parseNumbers(input: string): number[] {
  return input.split("\n").map((n) => parseInt(n));
}
