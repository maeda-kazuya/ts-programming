const solve = (input: string) => {
  // スペース区切りの文字列を数値の配列に変換
  const arr = input.split(' ').map(Number);

  // 各項を足し合わせて合計を求める
  const result = arr.reduce((acc, cur) => {
    return acc + cur;
  })

  console.log(result);
}

solve(require("fs").readFileSync("/dev/stdin", "utf8"));

