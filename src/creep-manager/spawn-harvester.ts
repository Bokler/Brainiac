export function spawnHarvester(spawnName, quantity, body, creepName) {
  try {
    if (getHarvestersAmount() <= quantity)
    Game.spawns[spawnName].spawnCreep(body || [WORK, CARRY, CARRY, MOVE, MOVE], creepName || null, {
      memory: {
        role: 'harvester',
        working: false
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export function getHarvestersAmount(): number {
  const harvesters = [];
  if (Game.creeps.length) {
    for (const creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'harvester') {
        harvesters.push(Game.creeps[creep]);
      }
    }
  }
  return harvesters.length;
}
