// MYCELIUM — selective Blood Magic infusion stage
// Uses Blood Magic's native `bloodmagic:altar` datapack recipe serializer via event.custom().
// Costs are initial balance values and should be playtested.
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('bloodmagic')) {
    console.error('[Mycelium] Blood Magic is not loaded; hematic recipes were skipped.');
    return;
  }

  // Living Core -> Hematic Living Core. Used by selected advanced Spore weapons/armor.
  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 5000,
    consumptionRate: 20,
    drainRate: 10,
    input: { item: 'spore:living_core' },
    output: { item: 'kubejs:hematic_living_core' },
    upgradeLevel: 2
  }).id('kubejs:spore_blood/hematic_living_core');

  // Amalgamated Heart -> Hematic Amalgamated Heart. Used by Mistmaker/Terroriser.
  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 10000,
    consumptionRate: 20,
    drainRate: 20,
    input: { item: 'spore:amalgamated_heart' },
    output: { item: 'kubejs:hematic_amalgamated_heart' },
    upgradeLevel: 3
  }).id('kubejs:spore_blood/hematic_amalgamated_heart');

  // Mixed reagent infusion: vascular reagent. Used for living tissue interfaces.
  event.custom({
    type: 'bloodmagic:altar', altarSyphon: 7000, consumptionRate: 20, drainRate: 15,
    input: { item: 'kubejs:vascular_bioreagent' },
    output: { item: 'kubejs:hematic_vascular_bioreagent' }, upgradeLevel: 2
  }).id('kubejs:spore_blood/hematic_vascular_bioreagent');

  // Neural reagent infusion: higher altar tier and greater Life Essence cost.
  event.custom({
    type: 'bloodmagic:altar', altarSyphon: 12000, consumptionRate: 25, drainRate: 20,
    input: { item: 'kubejs:neuroactive_bioreagent' },
    output: { item: 'kubejs:hematic_neuroactive_bioreagent' }, upgradeLevel: 3
  }).id('kubejs:spore_blood/hematic_neuroactive_bioreagent');
});
