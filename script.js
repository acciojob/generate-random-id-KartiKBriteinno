function makeid(l) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
console.log(makeid(5)); // Output: A random string of length 5
console.log(makeid(10)); // 


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
