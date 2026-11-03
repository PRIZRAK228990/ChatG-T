// MYCELIUM v3 — rare byproducts from breaking Spore-infested terrain.
// The normal block drop (dirt, stone, netherrack, etc.) is untouched and remains guaranteed.
// Only a tiny bonus chance grants an infected crust fragment.
// Probabilities are initial balance values, intentionally low because these blocks are abundant.

if (Platform.isLoaded('spore')) {
  var INFESTED_TERRAIN_BONUS = [
    // Common surface material: roughly 1 fragment per 333 blocks on average.
    { id: 'spore:infested_dirt', chance: 0.0030 },
    { id: 'spore:infested_sand', chance: 0.0030 },
    { id: 'spore:infested_red_sand', chance: 0.0030 },
    { id: 'spore:infested_gravel', chance: 0.0030 },
    { id: 'spore:infested_clay', chance: 0.0030 },

    // Stone-like terrain: slightly better, but still rare.
    { id: 'spore:infested_stone', chance: 0.0040 },
    { id: 'spore:infested_deepslate', chance: 0.0040 },
    { id: 'spore:infested_cobblestone', chance: 0.0040 },
    { id: 'spore:infested_cobbled_deepslate', chance: 0.0040 },

    // Dimension-specific terrain.
    { id: 'spore:infested_netherrack', chance: 0.0050 },
    { id: 'spore:infested_soul_sand', chance: 0.0050 },
    { id: 'spore:infested_end_stone', chance: 0.0060 },

    // Laboratory blocks are less common to encounter and have a marginally better rate.
    { id: 'spore:infested_laboratory_block', chance: 0.0080 },
    { id: 'spore:infested_laboratory_block1', chance: 0.0080 },
    { id: 'spore:infested_laboratory_block2', chance: 0.0080 },
    { id: 'spore:infested_laboratory_block3', chance: 0.0080 }
  ];

  INFESTED_TERRAIN_BONUS.forEach(entry => {
    BlockEvents.broken(entry.id, event => {
      if (Math.random() < entry.chance) {
        event.player.give('kubejs:infected_crust_fragment');
      }
    });
  });
}
