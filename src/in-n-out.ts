const main = (input: string) => {
  console.log(input)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
