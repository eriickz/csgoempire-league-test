const columns = [
  { 
    name: "Team Name",
    key: "teamName",
    type: "team",
    flagPosition: "first"
  },
  { 
    name: "MP",
    key: "matchesPlayed",
  },
  { 
    name: "GF",
    key: "goalsFor",
    cellClasses: "max-md2:hidden",
  },
  { 
    name: "GA",
    key: "goalsAgainst",
    cellClasses: "max-md2:hidden",
  },
  { 
    name: "GD",
    key: "goalsDifference",
    cellClasses: "max-lg2:hidden max-md2:table-cell",
  },
  { 
    name: "Points",
    key: "points",
    type: "points",
    containerClasses: "font-bold text-base text-header"
  },
]

export default columns;
