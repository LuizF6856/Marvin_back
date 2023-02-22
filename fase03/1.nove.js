function nove(n) {
  var n1 = n.toString();
  var n2 = n1.substring(n1.length - 1, n1.length);

  if (n2 === "9") {
    return true;
  } else {
    return false;
  }
}

console.log(nove(9));

// Expected output: true

console.log(nove(8));

// Expected output: false

console.log(nove(1214142539));

// Expected output: true

console.log(nove(121414253));

// Expected output: false
