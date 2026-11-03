// MYCELIUM: Spore × Biomancy × Blood Magic
// Minecraft 1.20.1 Forge / KubeJS 6
// Эти предметы являются промежуточными компонентами интеграции.
StartupEvents.registry('item', event => {
  event.create('hematic_living_core').texture('kubejs:item/hematic_living_core').maxStackSize(16)
  event.create('hematic_amalgamated_heart').texture('kubejs:item/hematic_amalgamated_heart').maxStackSize(16)
  event.create('spore_preform_assassin_recipe_surgery_a').texture('kubejs:item/spore_preform_assassin_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_assassin_recipe_surgery_b').texture('kubejs:item/spore_preform_assassin_recipe_surgery_b').maxStackSize(16)
  event.create('spore_preform_bileblaster_recipe_surgery_a').texture('kubejs:item/spore_preform_bileblaster_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_bileblaster_recipe_surgery_b').texture('kubejs:item/spore_preform_bileblaster_recipe_surgery_b').maxStackSize(16)
  event.create('spore_preform_combat_pickaxe_recipe_surgery_a').texture('kubejs:item/spore_preform_combat_pickaxe_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_flesh_chestplate_recipe_surgery_a').texture('kubejs:item/spore_preform_flesh_chestplate_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_fungal_burger_a').texture('kubejs:item/spore_preform_fungal_burger_a').maxStackSize(16)
  event.create('spore_preform_greatsword_recipe_surgery_a').texture('kubejs:item/spore_preform_greatsword_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_mistmaker_recipe_surgery_a').texture('kubejs:item/spore_preform_mistmaker_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_mistmaker_recipe_surgery_b').texture('kubejs:item/spore_preform_mistmaker_recipe_surgery_b').maxStackSize(16)
  event.create('spore_preform_rapier_recipe_surgery_a').texture('kubejs:item/spore_preform_rapier_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_terroriser_recipe_surgery_a').texture('kubejs:item/spore_preform_terroriser_recipe_surgery_a').maxStackSize(16)
  event.create('spore_preform_terroriser_recipe_surgery_b').texture('kubejs:item/spore_preform_terroriser_recipe_surgery_b').maxStackSize(16)
})


// ---------------------------------------------------------------------------
// Дополнительные биозаготовки: Spore × Biomancy × Blood Magic
// Предметы регистрируются на старте; после изменения требуется полный перезапуск.
// ---------------------------------------------------------------------------
StartupEvents.registry('item', event => {
  event.create('raw_mycelial_pulp').displayName('Сырая мицелиальная пульпа').texture('kubejs:item/raw_mycelial_pulp').maxStackSize(64);
  event.create('infected_crust_fragment').displayName('Фрагмент заражённой корки').texture('kubejs:item/infected_crust_fragment').maxStackSize(64);
  event.create('tissue_concentrate').displayName('Концентрат биологических тканей').texture('kubejs:item/tissue_concentrate').maxStackSize(64);
  event.create('mycelial_biofilm').displayName('Мицелиальная биоплёнка').texture('kubejs:item/mycelial_biofilm').maxStackSize(64);
  event.create('vascular_bioreagent').displayName('Сосудистый биореагент').texture('kubejs:item/vascular_bioreagent').maxStackSize(64);
  event.create('neuroactive_bioreagent').displayName('Нейроактивный биореагент').texture('kubejs:item/neuroactive_bioreagent').maxStackSize(64);
  event.create('reinforced_biomass_laminate').displayName('Армированный биомассный ламинат').texture('kubejs:item/reinforced_biomass_laminate').maxStackSize(64);
  event.create('hematic_vascular_bioreagent').displayName('Кровенасыщенный сосудистый биореагент').texture('kubejs:item/hematic_vascular_bioreagent').maxStackSize(64);
  event.create('hematic_neuroactive_bioreagent').displayName('Кровенасыщенный нейроактивный биореагент').texture('kubejs:item/hematic_neuroactive_bioreagent').maxStackSize(64);
  event.create('mk2_tissue_matrix').displayName('Тканевая матрица Mk2').texture('kubejs:item/mk2_tissue_matrix').maxStackSize(64);
})

// Storage / processing block. KubeJS automatically registers its BlockItem.
StartupEvents.registry('block', event => {
  event.create('compacted_mycelial_biomass')
    .displayName('Уплотнённая мицелиальная биомасса')
    .soundType('wool')
    .hardness(2.2)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe');
});
