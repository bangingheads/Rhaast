import { expect, should, assert } from 'chai'

import TestUtils from '../../../TestUtils'
const { kaynInstance, defaultConfig } = TestUtils

const { kayn, REGIONS, METHOD_TYPES } = kaynInstance
import MatchEndpointV5 from '../../../../lib/Endpoints/MatchEndpoint/MatchEndpointV5'
import mocks from '../../../mocks'

describe('MatchEndpointV5', function () {
    this.timeout(0)

    beforeEach(function () {
        this.Match = new MatchEndpointV5(defaultConfig)
    })

    describe('.get', function () {
        it('should have the correct payload #1', function () {
            const { id } = mocks.matchV5
            const { payload } = this.Match.get(id)
            expect(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: `matches/${id}`,
                query: [],
                region: '',
                isTournament: true,
                version: 5,
                apiURLPrefix: 'https://%s.api.riotgames.com',
            })
        })
    })

    describe('.timeline', function () {
        it('should have the correct payload #1', function () {
            const { id } = mocks.matchV5
            const { payload } = this.Match.timeline(id)
            expect(payload).to.deep.equal({
                method: 'GET',
                serviceName: 'match',
                endpoint: `matches/${id}/timeline`,
                query: [],
                region: '',
                isTournament: true,
                version: 5,
                apiURLPrefix: 'https://%s.api.riotgames.com',
            })
        })
    })
})
