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
import { nanoid } from "nanoid";

axios.defaults.baseURL = "http://localhost:3001/api/v1"

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
      id: nanoid(),
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
  getLeaderboard() {}

  /**
     * Asynchronic function to fetch the data from the server and set the matches.
     */
  async fetchData() {
    const response = await axios.get("/getAccessToken")
    const { data } = await axios.get("/getAllMatches", {
      headers: {
        Authorization: `Bearer ${response.data.access_token}` 
      }
    })

    this.setMatches(data.matches); 
  }    
}

export default LeagueService;
