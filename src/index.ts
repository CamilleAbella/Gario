/// @ts-check
/// <reference path="../node_modules/@types/p5/global.d.ts" />

import Party from "./Party"
// import Cursor from "./elements/Cursor"

document.addEventListener("contextmenu", (event) => event.preventDefault())

let party: Party

export function setup() {
  createCanvas(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  )
  frameRate(50)
  party = new Party()
}

export function draw() {
  party.frame()
  background(20)
  party.draw()
}

export function keyPressed() {
  party.keys[String(keyCode)] = true
  if (keyCode == 32) {
    party.player.initJump()
  }
}
export function keyReleased() {
  party.keys[String(keyCode)] = false
}

// function mousePressed() {
//   let target
//   if (mouseButton === LEFT) {
//     target = party.cursor.touch(
//       ...party.elements
//         .filter((element) => {
//           return !(element instanceof Cursor)
//         })
//         .map((element) => {
//           return element.polygons
//         })
//         .flat()
//     )
//   } else {
//     target = party.cursor.touch(
//       ...party.elements.filter((element) => {
//         return !(element instanceof Cursor)
//       })
//     )
//   }
//   if (target) {
//     target.debugMode = !target.debugMode
//   }
// }
