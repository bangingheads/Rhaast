import MatchSuperclass from './MatchSuperclass'
import Request from 'RequestClient/Request'
import METHOD_NAMES from 'Enums/method-names'

class MatchEndpointV5 extends MatchSuperclass {
    constructor(config, limiter) {
        super()

        this.config = config

        this.get = this.get.bind(this)
        this.timeline = this.timeline.bind(this)

        this.limiter = limiter
    }

    /**
     * Get match by match ID.
     *
     * Implements GET `/lol/match/v5/matches/{matchId}`.
     *
     * @param {string} matchID - The ID of the match.
     */
    get(matchID) {
        return new Request(
            this.config,
            this.serviceName,
            `matches/${matchID}`,
            METHOD_NAMES.MATCH.GET_MATCH_V5,
            'GET',
            this.limiter,
            null,
            true,
            5,
        )
    }

    /**
     * Get match timeline by match ID.
     *
     * Implements GET `/lol/match/v5/matches/{matchId}/timeline`.
     *
     * @param {string} matchID - The ID of the match.
     */
    timeline(matchID) {
        return new Request(
            this.config,
            this.serviceName,
            `matches/${matchID}/timeline`,
            METHOD_NAMES.MATCH.GET_MATCH_TIMELINE_V5,
            'GET',
            this.limiter,
            null,
            true,
            5,
        )
    }
}

export default MatchEndpointV5
