/*
 * This program is about the tower of hanoi.
 *
 * @author  Seti Ngabo
 * @version 1.0
 * @since   2022-12-02
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of BinarySearch
 *
 * @param {number} number of disks
 * @param {number} first peg
 * @param {number} last peg
 */
function hanoi(diskNum: number, peg1: number, peg2: number) {
  const pegNum: number = 6
  // base case
  if (diskNum === 1) {
    console.log('Move disk 1 from peg ' + peg1 + ' to peg ' + peg2)
  } else {
    hanoi(diskNum - 1, peg1, pegNum - peg1 - peg2)
    console.log(
      'Move disk ' + diskNum + ' from peg ' + peg1 + ' to peg ' + peg2
    )
    hanoi(diskNum - 1, pegNum - peg1 - peg2, peg2)
  }
}

const peg1 = 1
const peg2 = 3

const userInput = prompt('How many disks would you like in your tower(1->): ')
try {
  const diskNum = parseInt(userInput)
  if (diskNum > 0) {
    hanoi(diskNum, peg1, peg2)
  } else {
    console.log('\nPlease enter a positive integer')
  }
} catch (e) {
  console.log('\nThis is not an integer')
}

console.log('\nDone.')
