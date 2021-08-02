import { expect, should, assert } from 'chai'

import TestUtils from '../../../TestUtils'
const { kaynInstance, defaultConfig } = TestUtils

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance
import MatchlistEndpointV5 from '../../../../lib/Endpoints/MatchEndpoint/MatchlistEndpointV5'
import mocks from '../../../mocks'

describe('MatchlistEndpointV5', function () {
    this.timeout(0)

    beforeEach(function () {
        this.Matchlist = new MatchlistEndpointV5(defaultConfig)
    })

    describe('.by.puuid', function () {
        it('should have the correct payload #1', function () {
            const { payload } = this.Matchlist.by.puuid('abcdefg')
            expect(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: 'matches/by-puuid/abcdefg/ids',
                query: [],
                region: '',
                isTournament: true,
                version: 5,
                apiURLPrefix: 'https://%s.api.riotgames.com',
            })
        })
    })
})
