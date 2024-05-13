/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 *       ADDITIONALLY, MAKE SURE THAT ALL LIBRARIES USED IN THIS FILE FILE ARE COMPATIBLE WITH PURE JAVASCRIPT
 * 
 */

import axios from "axios"
import dayjs from "dayjs";

class LeagueService {    
  #matches = []

  /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
  setMatches(matches) {
    this.#matches = matches.map(match => ({ 
      ...match, 
      matchDate: dayjs(match.matchDate).format("D.M.YYYY hh:mm") 
    }))
  }

  /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
  getMatches() {
    return this.#matches
  }

  calculatePoints(homeTeamScore, awayTeamScore) {
    if (homeTeamScore === awayTeamScore) {
      return 1
    }

    if (homeTeamScore > awayTeamScore) {
      return 3
    }

    return 0
  }

  /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
  getLeaderboard() {
    const leaderboard = []

    for (const match of this.#matches) {
      const foundHomeTeamBoardIdx = leaderboard.findIndex(teamBoard => match.homeTeam === teamBoard.teamName)
      const foundAwayTeamBoardIdx = leaderboard.findIndex(teamBoard => match.awayTeam === teamBoard.teamName)

      if (foundHomeTeamBoardIdx === -1) {
        leaderboard.push({
          teamName: match.homeTeam,
          matchesPlayed: match.matchPlayed ? 1 : 0,
          goalsFor: match.homeTeamScore,
          goalsAgainst: match.awayTeamScore,
          goalsDifference: match.homeTeamScore - match.awayTeamScore,
          points: match.matchPlayed ? this.calculatePoints(match.homeTeamScore, match.awayTeamScore) : 0
        })
      } else {
        const newPoints = this.calculatePoints(match.homeTeamScore, match.awayTeamScore)

        leaderboard[foundHomeTeamBoardIdx].matchesPlayed = match.matchPlayed ? leaderboard[foundHomeTeamBoardIdx].matchesPlayed + 1 : leaderboard[foundHomeTeamBoardIdx].matchesPlayed
        leaderboard[foundHomeTeamBoardIdx].goalsFor = leaderboard[foundHomeTeamBoardIdx].goalsFor + match.homeTeamScore
        leaderboard[foundHomeTeamBoardIdx].goalsAgainst = leaderboard[foundHomeTeamBoardIdx].goalsAgainst + match.awayTeamScore
        leaderboard[foundHomeTeamBoardIdx].goalsDifference = leaderboard[foundHomeTeamBoardIdx].goalsFor - leaderboard[foundHomeTeamBoardIdx].goalsAgainst
        leaderboard[foundHomeTeamBoardIdx].points = match.matchPlayed ? leaderboard[foundHomeTeamBoardIdx].points + newPoints : leaderboard[foundHomeTeamBoardIdx].points
      }

      if (foundAwayTeamBoardIdx === -1) {
        leaderboard.push({
          teamName: match.awayTeam,
          matchesPlayed: match.matchPlayed ? 1 : 0,
          goalsFor: match.awayTeamScore,
          goalsAgainst: match.homeTeamScore,
          goalsDifference: match.awayTeamScore - match.homeTeamScore,
          points: match.matchPlayed ? this.calculatePoints(match.awayTeamScore, match.homeTeamScore) : 0
        })
      } else {
        const newPoints = this.calculatePoints(match.awayTeamScore, match.homeTeamScore)

        leaderboard[foundAwayTeamBoardIdx].matchesPlayed = match.matchPlayed ? leaderboard[foundAwayTeamBoardIdx].matchesPlayed + 1 : leaderboard[foundAwayTeamBoardIdx].matchesPlayed
        leaderboard[foundAwayTeamBoardIdx].goalsFor = leaderboard[foundAwayTeamBoardIdx].goalsFor + match.awayTeamScore
        leaderboard[foundAwayTeamBoardIdx].goalsAgainst = leaderboard[foundAwayTeamBoardIdx].goalsAgainst + match.homeTeamScore
        leaderboard[foundAwayTeamBoardIdx].goalsDifference = leaderboard[foundAwayTeamBoardIdx].goalsFor - leaderboard[foundAwayTeamBoardIdx].goalsAgainst
        leaderboard[foundAwayTeamBoardIdx].points = match.matchPlayed ? leaderboard[foundAwayTeamBoardIdx].points + newPoints : leaderboard[foundAwayTeamBoardIdx].points
      }
    } 

    leaderboard.sort((boardA, boardB) => boardB.points - boardA.points)

    return leaderboard
  }

  /**
     * Asynchronic function to fetch the data from the server and set the matches.
     */
  async fetchData() {
    const { data } = await axios.get("/getAllMatches")

    this.setMatches(data.matches); 
  }    
}

export default LeagueService;
