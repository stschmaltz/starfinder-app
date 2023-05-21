const fullCharacters = `
    _id  
    userId
    baseDetails {
      name
      level
      class
      size
      alignment
      deity
      speed
      initiative
      languages
      homeWorld
      race
    }
    healthStats {
      maxHp
      currentHp
      maxStamina
      currentStamina
      maxResolve
      currentResolve
    }
    abilityScores {
      str
      dex
      con
      int
      wis
      cha
    }
    abilityScoreModifiers {
      strMod
      dexMod
      conMod
      intMod
      wisMod
      chaMod
    }
    armorClassDetails {
      eacBonus
      kacBonus
      eacMisc
      kacMisc
    }
    savingThrowsDetails {
      fortitudeBaseSave
      fortitudeMisc
      reflexBaseSave
      reflexMisc
      willBaseSave
      willMisc
    }
    attackBonusDetails {
      baseAttackBonus
      meleeMisc
      rangedMisc
      thrownMisc
    }
    weapons {
      name
      level
      ammoUsage
      hit
      damage
      critical
      range
      type
      special
      damageBonusStat
    }
    abilities {
      name
      type
      description
    }
    skills {
      name
      abilityScoreModifiersObject
      ranks
      miscBonus
      classBonus
      isProficient
    } 
  `;

export { fullCharacters };
