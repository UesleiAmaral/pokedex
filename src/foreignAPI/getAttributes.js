import { testType } from "./color.js"

export const attributes = {

  getAbilities(data) {
    const ability = [];

    data.forEach(element => {
      ability.push(element.ability.name);
    });
    return ability;

  },

  getTypes(data) {
    const types = [];

    data.forEach(element => {
      const colorsType = testType(element.type.name);
      types.push(
        {
          name: element.type.name,
          colors: colorsType
        });
    });
    return types;

  },

  getStats(data) {
    const stats = [];

    data.map((element) => {
      stats.push({
        name: element.stat.name,
        base_stat: element.base_stat

      });
    });
    return stats;

  }

};