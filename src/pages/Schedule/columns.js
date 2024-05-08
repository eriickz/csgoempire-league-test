const columns = [
  { 
    name: "Date/Time",
    key: "matchDate",
    autoHide: true,
    containerClasses: "w-[55px] [text-align-last:end]",
  },
  { 
    name: "Stadium",
    key: "stadium",
    autoHide: true 
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
    textClasses: "w-6"
  },
  { 
    name: "Away Team",
    key: "awayTeam",
    type: "team",
    flagPosition: "first"
  },
]

export default columns;
