// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

export function setupCounter(El) {
  var x = 0

  function a(b) {
    x = b
    El.innerHTML = 'count is ' + x
  }

  El.onclick = function () {
    a(x + 1)
  }

  a()
}