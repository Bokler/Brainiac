import { spawnHarvester } from './creep-manager/spawn-harvester'

// Main loop
function main(): void {
 spawnHarvester('Spawn1', 2)
}

export const loop = main();



