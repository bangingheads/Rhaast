import MatchSuperclass from './MatchSuperclass'
import Request from 'RequestClient/Request'
import METHOD_NAMES from 'Enums/method-names'

class MatchlistEndpointV5 extends MatchSuperclass {
    constructor(config, limiter) {
        super()

        this.config = config

        this.by = {
            puuid: this.puuid.bind(this),
        }

        this.limiter = limiter
    }

    /**
     * Get matchlist for games played on given PUUID and platform ID and filtered using given filter parameters, if any.
     *
     * Implements GET `/lol/match/v5/matches/by-puuid/{puuid}`.
     *
     * @param {string} puuid - The PUUID of the summoner.
     */
    puuid(puuid) {
        return new Request(
            this.config,
            this.serviceName,
            `matches/by-puuid/${puuid}/ids`,
            METHOD_NAMES.MATCH.GET_MATCHLIST_V5,
            'GET',
            this.limiter,
            null,
            true,
            5,
        )
    }
}

export default MatchlistEndpointV5
