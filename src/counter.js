// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

export function setupCounter(element) {
  let x = 0;

  function plusplus(b) {
    x = b
    element.innerHTML = 'count is ' + x
  }

  element.onclick = function () {
    plusplus(x + 1)
  }

  plusplus()
}