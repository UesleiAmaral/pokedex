export const colors = {

  normal: {
    primaryColor: "#6D6D4E",
    secondaryColor: "#C6C6A7",
    borderColor: "#6D6D4E"
  },

  fire: {
    primaryColor: "#F08030",
    secondaryColor: "#F5AC78",
    borderColor: "#9C531F"
  },

  fighting: {
    primaryColor: "#C03028",
    secondaryColor: "#D67873",
    borderColor: "#7D1F1A"
  },

  water: {
    primaryColor: "#6890F0",
    secondaryColor: "#9DB7F5",
    borderColor:"#445E9C"
  },

  flying: {
    primaryColor: "#A890F0",
    secondaryColor: "#C6B7F5",
    borderColor:"#6D5E9C"
  },

  grass: {
    primaryColor: "#78C850",
    secondaryColor: "#A7DB8D",
    borderColor:"#4E8234"
  },

  poison: {
    primaryColor: "#A040A0",
    secondaryColor: "#C183C1",
    borderColor:"#682A68"
  },

  electric: {
    primaryColor: "#F8D030",
    secondaryColor: "#FAE078",
    borderColor:"#A1871F"
  },

  ground: {
    primaryColor: "#E0C068",
    secondaryColor: "#EBD69D",
    borderColor:"#927D44"
  },

  psychic: {
    primaryColor: "#F85888",
    secondaryColor: "#FA92B2",
    borderColor:"#A13959"
  },

  rock: {
    primaryColor: "#B8A038",
    secondaryColor: "#D1C17D",
    borderColor:"#786824"
  },

  ice: {
    primaryColor: "#98D8D8",
    secondaryColor: "#BCE6E6",
    borderColor:"#638D8D"
  },

  bug: {
    primaryColor: "#A8B820",
    secondaryColor: "#C6D16E",
    borderColor:"#6D7815"
  },

  dragon: {
    primaryColor: "#7038F8",
    secondaryColor: "#A27DFA",
    borderColor:"#4924A1"
  },

  ghost: {
    primaryColor: "#705898",
    secondaryColor: "#A292BC",
    borderColor:"#493963"
  },

  dark: {
    primaryColor: "#705848",
    secondaryColor: "#A29288",
    borderColor:"#49392F"
  },

  steel: {
    primaryColor: "#B8B8D0",
    secondaryColor: "#D1D1E0",
    borderColor:"#787887"
  },

  fairy: {
    primaryColor: "#EE99AC",
    secondaryColor: "#F4BDC9",
    borderColor:"#9B6470"
  },

  undisclosed: {
    primaryColor: "#6BA292",
    secondaryColor: "#9DC1B7",
    borderColor:"#44685E"
  },


}

export const testType = (type) => {

  const types = type.toLowerCase();

  if (types == "normal") {
    return colors.normal;

  }
  else if (types == "fire") {
    return colors.fire;

  }
  else if (types == "fighting") {
    return colors.fighting;

  }
  else if (types == "water") {
    return colors.water;

  }
  else if (types == "flying") {
    return colors.flying;

  }
  else if (types == "grass") {
    return colors.grass;

  }
  else if (types == "poison") {
    return colors.poison;

  }
  else if (types == "electric") {
    return colors.electric;

  }
  else if (types == "ground") {
    return colors.ground;

  }
  else if (types == "psychic") {
    return colors.psychic;

  }
  else if (types == "rock") {
    return colors.rock;

  }
  else if (types == "ice") {
    return colors.ice;

  }
  else if (types == "bug") {
    return colors.bug;

  }
  else if (types == "dragon") {
    return colors.dragon;

  }
  else if (types == "ghost") {
    return colors.ghost;

  }
  else if (types == "dark") {
    return colors.dark;

  }
  else if (types == "steel") {
    return colors.steel;

  }
  else if (types == "fairy") {
    return colors.fairy;

  }

}
