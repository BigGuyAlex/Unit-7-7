document.getElementById('button').addEventListener('click', multiply)
let answer = 0

function multiply () {
  const numberone = parseInt(document.getElementById('numberone').value)
  const numbertwo = parseInt(document.getElementById('numbertwo').value)
  for (let i = 0; i < numberone; i++) {
    answer += numbertwo
  }
  document.getElementById('answer').innerHTML = answer
}