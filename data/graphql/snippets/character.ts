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
      expEarned
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
      url
    }
    skills {
      name
      abilityScoreModifiersObject
      ranks
      miscBonus
      isProficient
    } 
    languages
    carry {
      currentCarry
      maxCarry
      credits
    }
    resources {
      name
      url
      description
    }
    notes
    equipment {
      name
      url
      description
    }
  `;

export { fullCharacters };
