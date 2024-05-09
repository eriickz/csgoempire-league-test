const columns = [
  { 
    name: "Date/Time",
    key: "matchDate",
    cellClasses: "max-sm2:hidden",
    containerClasses: "w-[55px] [text-align-last:end]",
  },
  { 
    name: "Stadium",
    key: "stadium",
    cellClasses: "max-md2:hidden",
  },
  { 
    name: "Home Team",
    key: "homeTeam",
    type: "team",
    containerClasses: "justify-end",
    textClasses: "text-right",
    flagPosition: "last"
  },
  { 
    name: "",
    key: "score",
    type: "score",
    textClasses: "w-8"
  },
  { 
    name: "Away Team",
    key: "awayTeam",
    type: "team",
    flagPosition: "first"
  },
]

export default columns;
