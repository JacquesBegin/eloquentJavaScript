// Compute the phi cofficient from correlation table data


// This will produce a number between -1 and 1
// Numbers closer to 0 will have no/less correlation,
// numbers closer to 1 will have more correlation
// for being found together, numbers closer to -1 will
// have more correlation for not being found together.
phiCoff = ([n00, n01, n10, n11]) => {
  return ((n11 * n00) - (n10 * n01)) /
          Math.sqrt((n10 + n11) * (n00 + n01) * 
          (n01 + n11) * (n00 + n10))
}

let arr = [76, 9, 4, 1];

console.log(phiCoff(arr));