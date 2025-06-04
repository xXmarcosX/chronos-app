export function getNextCycle(currentCycle: number){
  return currentCycle === 0 ? currentCycle = 1 : currentCycle += 1
}