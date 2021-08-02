/**
 * This object contains single Champion Mastery information for player and champion combination.
 */
export interface ChampionMasteryV4ChampionMasteryDTO {
    /**
     * Is chest granted for this champion or not in current season.
     */
    chestGranted?: boolean
    /**
     * Champion level for specified player and champion combination.
     */
    championLevel?: number // int32
    /**
     * Total number of champion points for this player and champion combination - they are used to determine championLevel.
     */
    championPoints?: number // int32
    /**
     * Champion ID for this entry.
     */
    championId?: number // int64
    /**
     * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
     */
    championPointsUntilNextLevel?: number // int64
    /**
     * Last time this champion was played by this player - in Unix milliseconds time format.
     */
    lastPlayTime?: number // int64
    /**
     * The token earned for this champion to levelup.
     */
    tokensEarned?: number // int32
    /**
     * Number of points earned since current level has been achieved.
     */
    championPointsSinceLastLevel?: number // int64
    /**
     * Summoner ID for this entry. (Encrypted)
     */
    summonerId?: string
}
export interface ChampionV3ChampionInfo {
    freeChampionIdsForNewPlayers?: number /* int32 */[]
    freeChampionIds?: number /* int32 */[]
    maxNewPlayerLevel?: number // int32
}
export interface Error {
    status?: {
        status_code?: number
        message?: string
    }
}
export interface LeagueExpV4LeagueEntryDTO {
    queueType?: string
    summonerName?: string
    hotStreak?: boolean
    miniSeries?: LeagueExpV4MiniSeriesDTO
    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins?: number // int32
    veteran?: boolean
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses?: number // int32
    rank?: string
    leagueId?: string
    inactive?: boolean
    freshBlood?: boolean
    tier?: string
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId?: string
    leaguePoints?: number // int32
}
export interface LeagueExpV4MiniSeriesDTO {
    progress?: string
    losses?: number // int32
    target?: number // int32
    wins?: number // int32
}
export interface LeagueV4LeagueEntryDTO {
    queueType?: string
    summonerName?: string
    hotStreak?: boolean
    miniSeries?: LeagueV4MiniSeriesDTO
    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins?: number // int32
    veteran?: boolean
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses?: number // int32
    rank?: string
    leagueId?: string
    inactive?: boolean
    freshBlood?: boolean
    tier?: string
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId?: string
    leaguePoints?: number // int32
}
export interface LeagueV4LeagueItemDTO {
    summonerName?: string
    hotStreak?: boolean
    miniSeries?: LeagueV4MiniSeriesDTO
    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins?: number // int32
    veteran?: boolean
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses?: number // int32
    freshBlood?: boolean
    inactive?: boolean
    rank?: string
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId?: string
    leaguePoints?: number // int32
}
export interface LeagueV4LeagueListDTO {
    leagueId?: string
    tier?: string
    entries?: LeagueV4LeagueItemDTO[]
    queue?: string
    name?: string
}
export interface LeagueV4MiniSeriesDTO {
    progress?: string
    losses?: number // int32
    target?: number // int32
    wins?: number // int32
}
export interface LolStatusV4PlatformDataDTO {
    id?: string
    name?: string
    locales?: string[]
    maintenances?: LolStatusV4StatusDTO[]
    incidents?: LolStatusV4StatusDTO[]
}
export interface LolStatusV4StatusDTO {
    id?: number
    maintenance_status?: "scheduled" | "in_progress" | "complete"
    incident_severity?: "info" | "warning" | "critical"
    titles?: LolStatusV4ContentDTO
    updates?: LolStatusV4UpdateDTO
    created_at?: string
    archive_at?: string
    updated_at?: string
    platforms?: string[]
}
export interface LolStatusV4ContentDTO {
    locale?: string
    content?: string
}
export interface LolStatusV4UpdateDTO {
    id?: number
    author?: string
    publish?: boolean
    publish_locations?: string[]
    translations?: LolStatusV4ContentDTO[]
    created_at?: string
    updated_at?: string
}
export interface MatchV4MasteryDTO {
    masteryId?: number // int32
    rank?: number // int32
}
export interface MatchV4MatchDTO {
    /**
     * Please refer to the Game Constants documentation.
     */
    seasonId?: number // int32
    /**
     * Please refer to the Game Constants documentation.
     */
    queueId?: number // int32
    gameId?: number // int64
    /**
     * Participant identity information.
     */
    participantIdentities?: MatchV4ParticipantIdentityDTO[]
    /**
     * The major.minor version typically indicates the patch the match was played on.
     */
    gameVersion?: string
    /**
     * Platform where the match was played.
     */
    platformId?: string
    /**
     * Please refer to the Game Constants documentation.
     */
    gameMode?: string
    /**
     * Please refer to the Game Constants documentation.
     */
    mapId?: number // int32
    /**
     * Please refer to the Game Constants documentation.
     */
    gameType?: string
    /**
     * Team information.
     */
    teams?: MatchV4TeamStatsDTO[]
    /**
     * Participant information.
     */
    participants?: MatchV4ParticipantDTO[]
    /**
     * Match duration in seconds.
     */
    gameDuration?: number // int64
    /**
     * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.
     */
    gameCreation?: number // int64
}
export interface MatchV4MatchEventDTO {
    eventType?: string
    towerType?: string
    teamId?: number // int32
    ascendedType?: string
    killerId?: number // int32
    levelUpType?: string
    pointCaptured?: string
    assistingParticipantIds?: number /* int32 */[]
    wardType?: string
    monsterType?: string
    /**
     * (Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL,  ELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO,  SKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)
     */
    type?:
        | 'CHAMPION_KILL'
        | 'WARD_PLACED'
        | 'WARD_KILL'
        | 'BUILDING_KILL'
        | 'ELITE_MONSTER_KILL'
        | 'ITEM_PURCHASED'
        | 'ITEM_SOLD'
        | 'ITEM_DESTROYED'
        | 'ITEM_UNDO'
        | 'SKILL_LEVEL_UP'
        | 'ASCENDED_EVENT'
        | 'CAPTURE_POINT'
        | 'PORO_KING_SUMMON'
    skillSlot?: number // int32
    victimId?: number // int32
    timestamp?: number // int64
    afterId?: number // int32
    monsterSubType?: string
    laneType?: string
    itemId?: number // int32
    participantId?: number // int32
    buildingType?: string
    creatorId?: number // int32
    position?: MatchV4MatchPositionDTO
    beforeId?: number // int32
}
export interface MatchV4MatchFrameDTO {
    timestamp?: number // int64
    participantFrames?: {
        [name: string]: MatchV4MatchParticipantFrameDTO
    }
    events?: MatchV4MatchEventDTO[]
}
export interface MatchV4MatchParticipantFrameDTO {
    totalGold?: number // int32
    teamScore?: number // int32
    participantId?: number // int32
    level?: number // int32
    currentGold?: number // int32
    minionsKilled?: number // int32
    dominionScore?: number // int32
    position?: MatchV4MatchPositionDTO
    xp?: number // int32
    jungleMinionsKilled?: number // int32
}
export interface MatchV4MatchPositionDTO {
    y?: number // int32
    x?: number // int32
}
export interface MatchV4MatchReferenceDTO {
    lane?: string
    gameId?: number // int64
    champion?: number // int32
    platformId?: string
    season?: number // int32
    queue?: number // int32
    role?: string
    timestamp?: number // int64
}
export interface MatchV4MatchTimelineDTO {
    frames?: MatchV4MatchFrameDTO[]
    frameInterval?: number // int64
}
export interface MatchV4MatchlistDTO {
    matches?: MatchV4MatchReferenceDTO[]
    totalGames?: number // int32
    startIndex?: number // int32
    endIndex?: number // int32
}
export interface MatchV4ParticipantDTO {
    /**
     * Participant statistics.
     */
    stats?: MatchV4ParticipantStatsDTO
    participantId?: number // int32
    /**
     * List of legacy Rune information. Not included for matches played with Runes Reforged.
     */
    runes?: MatchV4RuneDTO[]
    /**
     * Participant timeline data.
     */
    timeline?: MatchV4ParticipantTimelineDTO
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId?: number // int32
    /**
     * Second Summoner Spell id.
     */
    spell2Id?: number // int32
    /**
     * List of legacy Mastery information. Not included for matches played with Runes Reforged.
     */
    masteries?: MatchV4MasteryDTO[]
    /**
     * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null. Used to display border in game loading screen. Please refer to the Ranked Info documentation.
     *              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
     */
    highestAchievedSeasonTier?: 'CHALLENGER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'UNRANKED'
    /**
     * First Summoner Spell id.
     */
    spell1Id?: number // int32
    championId?: number // int32
}
export interface MatchV4ParticipantIdentityDTO {
    /**
     * Player information.
     */
    player?: MatchV4PlayerDTO
    participantId?: number // int32
}
export interface MatchV4ParticipantStatsDTO {
    firstBloodAssist?: boolean
    visionScore?: number // int64
    magicDamageDealtToChampions?: number // int64
    damageDealtToObjectives?: number // int64
    totalTimeCrowdControlDealt?: number // int32
    longestTimeSpentLiving?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var3?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var2?: number // int32
    tripleKills?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var3?: number // int32
    nodeNeutralizeAssist?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var2?: number // int32
    playerScore9?: number // int32
    playerScore8?: number // int32
    kills?: number // int32
    playerScore1?: number // int32
    playerScore0?: number // int32
    playerScore3?: number // int32
    playerScore2?: number // int32
    playerScore5?: number // int32
    playerScore4?: number // int32
    playerScore7?: number // int32
    playerScore6?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var3?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var2?: number // int32
    totalScoreRank?: number // int32
    neutralMinionsKilled?: number // int32
    damageDealtToTurrets?: number // int64
    physicalDamageDealtToChampions?: number // int64
    nodeCapture?: number // int32
    largestMultiKill?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var3?: number // int32
    totalUnitsHealed?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var3?: number // int32
    wardsKilled?: number // int32
    largestCriticalStrike?: number // int32
    largestKillingSpree?: number // int32
    quadraKills?: number // int32
    teamObjective?: number // int32
    magicDamageDealt?: number // int64
    item2?: number // int32
    item3?: number // int32
    item0?: number // int32
    neutralMinionsKilledTeamJungle?: number // int32
    item6?: number // int32
    item4?: number // int32
    item5?: number // int32
    /**
     * Primary path rune.
     */
    perk1?: number // int32
    /**
     * Primary path keystone rune.
     */
    perk0?: number // int32
    /**
     * Primary path rune.
     */
    perk3?: number // int32
    /**
     * Primary path rune.
     */
    perk2?: number // int32
    /**
     * Secondary path rune.
     */
    perk5?: number // int32
    /**
     * Secondary path rune.
     */
    perk4?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var1?: number // int32
    damageSelfMitigated?: number // int64
    magicalDamageTaken?: number // int64
    firstInhibitorKill?: boolean
    trueDamageTaken?: number // int64
    nodeNeutralize?: number // int32
    assists?: number // int32
    combatPlayerScore?: number // int32
    /**
     * Primary rune path
     */
    perkPrimaryStyle?: number // int32
    goldSpent?: number // int32
    trueDamageDealt?: number // int64
    participantId?: number // int32
    totalDamageTaken?: number // int64
    physicalDamageDealt?: number // int64
    sightWardsBoughtInGame?: number // int32
    totalDamageDealtToChampions?: number // int64
    physicalDamageTaken?: number // int64
    totalPlayerScore?: number // int32
    win?: boolean
    objectivePlayerScore?: number // int32
    totalDamageDealt?: number // int64
    item1?: number // int32
    neutralMinionsKilledEnemyJungle?: number // int32
    deaths?: number // int32
    wardsPlaced?: number // int32
    /**
     * Secondary rune path
     */
    perkSubStyle?: number // int32
    turretKills?: number // int32
    firstBloodKill?: boolean
    trueDamageDealtToChampions?: number // int64
    goldEarned?: number // int32
    killingSprees?: number // int32
    unrealKills?: number // int32
    altarsCaptured?: number // int32
    firstTowerAssist?: boolean
    firstTowerKill?: boolean
    champLevel?: number // int32
    doubleKills?: number // int32
    nodeCaptureAssist?: number // int32
    inhibitorKills?: number // int32
    firstInhibitorAssist?: boolean
    /**
     * Post game rune stats.
     */
    perk0Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk0Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk0Var3?: number // int32
    visionWardsBoughtInGame?: number // int32
    altarsNeutralized?: number // int32
    pentaKills?: number // int32
    totalHeal?: number // int64
    totalMinionsKilled?: number // int32
    timeCCingOthers?: number // int64
}
export interface MatchV4ParticipantTimelineDTO {
    /**
     * Participant's calculated lane. MID and BOT are legacy values.
     *              (Legal values:  MID,  MIDDLE,  TOP,  JUNGLE,  BOT,  BOTTOM)
     */
    lane?: 'MID' | 'MIDDLE' | 'TOP' | 'JUNGLE' | 'BOT' | 'BOTTOM'
    participantId?: number // int32
    /**
     * Creep score difference versus the calculated lane opponent(s) for a specified period.
     */
    csDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Gold for a specified period.
     */
    goldPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Experience difference versus the calculated lane opponent(s) for a specified period.
     */
    xpDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Creeps for a specified period.
     */
    creepsPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Experience change for a specified period.
     */
    xpPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Participant's calculated role.
     *              (Legal values:  DUO,  NONE,  SOLO,  DUO_CARRY,  DUO_SUPPORT)
     */
    role?: 'DUO' | 'NONE' | 'SOLO' | 'DUO_CARRY' | 'DUO_SUPPORT'
    /**
     * Damage taken difference versus the calculated lane opponent(s) for a specified period.
     */
    damageTakenDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Damage taken for a specified period.
     */
    damageTakenPerMinDeltas?: {
        [name: string]: number // double
    }
}
export interface MatchV4PlayerDTO {
    currentPlatformId?: string
    summonerName?: string
    matchHistoryUri?: string
    /**
     * Original platformId.
     */
    platformId?: string
    /**
     * Player's current accountId (Encrypted)
     */
    currentAccountId?: string
    profileIcon?: number // int32
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId?: string
    /**
     * Player's original accountId (Encrypted)
     */
    accountId?: string
}
export interface MatchV4RuneDTO {
    runeId?: number // int32
    rank?: number // int32
}
export interface MatchV4TeamBansDTO {
    /**
     * Turn during which the champion was banned.
     */
    pickTurn?: number // int32
    /**
     * Banned championId.
     */
    championId?: number // int32
}
export interface MatchV4TeamStatsDTO {
    /**
     * Flag indicating whether or not the team scored the first Dragon kill.
     */
    firstDragon?: boolean
    /**
     * Flag indicating whether or not the team destroyed the first inhibitor.
     */
    firstInhibitor?: boolean
    /**
     * If match queueId has a draft, contains banned champion data, otherwise empty.
     */
    bans?: MatchV4TeamBansDTO[]
    /**
     * Number of times the team killed Baron.
     */
    baronKills?: number // int32
    /**
     * Flag indicating whether or not the team scored the first Rift Herald kill.
     */
    firstRiftHerald?: boolean
    /**
     * Flag indicating whether or not the team scored the first Baron kill.
     */
    firstBaron?: boolean
    /**
     * Number of times the team killed Rift Herald.
     */
    riftHeraldKills?: number // int32
    /**
     * Flag indicating whether or not the team scored the first blood.
     */
    firstBlood?: boolean
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId?: number // int32
    /**
     * Flag indicating whether or not the team destroyed the first tower.
     */
    firstTower?: boolean
    /**
     * Number of times the team killed Vilemaw.
     */
    vilemawKills?: number // int32
    /**
     * Number of inhibitors the team destroyed.
     */
    inhibitorKills?: number // int32
    /**
     * Number of towers the team destroyed.
     */
    towerKills?: number // int32
    /**
     * For Dominion matches, specifies the points the team had at game end.
     */
    dominionVictoryScore?: number // int32
    /**
     * String indicating whether or not the team won. There are only two values visibile in public match history.
     *              (Legal values:  Fail,  Win)
     */
    win?: 'Fail' | 'Win'
    /**
     * Number of times the team killed Dragon.
     */
    dragonKills?: number // int32
}
export interface MatchV5MatchDTO {
    metadata?: MatchV5MetadataDTO
    info?: MatchV5MatchInfoDTO
}
export interface MatchV5MetadataDTO {
    dataVersion?: string
    matchId?: string
    participants?: string[]
}
export interface MatchV5MatchInfoDTO {
    gameCreation?: number
    gameDuration?: number
    gameId?: number
    gameMode?: string
    gameName?: string
    gameStartTimestamp?: number
    gameType?: string
    gameVersion?: string
    mapId?: number
    participants?: MatchV5ParticipantDTO[]
    platformId?: string
    queueId?: number
    teams?: MatchV5TeamsDTO[]
    tournamentCode?: string
}
export interface MatchV5TeamsDTO {
    bans?: MatchV5TeamsBansDTO[]
    objectives?: MatchV5ObjectivesDTO
    teamId?: number
    win?: boolean
}
export interface MatchV5ObjectivesDTO {
    baron?: MatchV5ObjectiveDetailsDTO
    champion?: MatchV5ObjectiveDetailsDTO
    dragon?: MatchV5ObjectiveDetailsDTO
    inhibitor?: MatchV5ObjectiveDetailsDTO
    riftHerald?: MatchV5ObjectiveDetailsDTO
    tower?: MatchV5ObjectiveDetailsDTO
}
export interface MatchV5ObjectiveDetailsDTO {
    first?: boolean
    kills?: number
}
export interface MatchV5TeamsBansDTO {
    championId?: number
    pickturn?: number
}
export interface MatchV5ParticipantDTO {
    assists?: number
    baronKills?: number
    bountyLevel?: number
    champExperience?: number
    champLevel?: number
    championId?: number
    championName?: string
    championTransform?: number
    consumablesPurchased?: number
    damageDealtToBuildings?: number
    damageDealtToObjectives?: number
    damageDealtToTurrets?: number
    damageSelfMitigated?: number
    deaths?: number
    detectorWardsPlaced?: number
    doubleKills?: number
    dragonKills?: number
    firstBloodAssist?: boolean
    firstBloodKill?: boolean
    firstTowerAssist?: boolean
    firstTowerKill?: boolean
    gameEndedInEarlySurrender?: boolean
    gameEndedInSurrender?: boolean
    goldEarned?: number
    goldSpent?: number
    individualPosition?: string
    inhibitorKills?: number
    inhibitorTakedowns?: number
    inhibitorsLost?: number
    item0?: number
    item1?: number
    item2?: number
    item3?: number
    item4?: number
    item5?: number
    item6?: number
    itemsPurchased?: number
    killingSprees?: number
    kills?: number
    lane?: string
    largestCriticalStrike?: number
    largestKillingSpree?: number
    largestMultiKill?: number
    longestTimeSpentLiving?: number
    magicDamageDealt?: number
    magicDamageDealtToChampions?: number
    magicDamageTaken?: number
    neutralMinionsKilled?: number
    nexusKills?: number
    nexusTakedowns?: number
    nexusLost?: number
    objectivesStolen?: number
    objectivesStolenAssists?: number
    participantId?: number
    pentaKills?: number
    perks?: MatchV5PerksDTO
    physicalDamageDealt?: number
    physicalDamageDealtToChampions?: number
    physicalDamageTaken?: number
    profileIcon?: number
    puuid?: string
    quadraKills?: number
    riotIdName?: string
    riotIdTagline?: string
    role?: string
    sightWardsBoughtInGame?: number
    spell1Casts?: number
    spell2Casts?: number
    spell3Casts?: number
    spell4Casts?: number
    summoner1Casts?: number
    summoner1Id?: number
    summoner2Casts?: number
    summoner2Id?: number
    summonerId?: string
    summonerLevel?: number
    summonerName?: string
    teamEarlySurrendered?: true
    teamId?: number
    teamPosition?: string
    timeCCingOthers?: number
    timePlayed?: number
    totalDamageDealt?: number
    totalDamageDealtToChampions?: number
    totalDamageShieldedOnTeammates?: number
    totalDamageTaken?: number
    totalHeal?: number
    totalHealsOnTeammates?: number
    totalMinionsKilled?: number
    totalTimeCCDealt?: number
    totalTimeSpentDead?: number
    totalUnitsHealed?: number
    tripleKills?: number
    trueDamageDealt?: number
    trueDamageDealtToChampions?: number
    trueDamageTaken?: number
    turretKills?: number
    turretTakedowns?: number
    turretsLost?: number
    unrealKills?: number
    visionScore?: number
    visionWardsBoughtInGame?: number
    wardsKilled?: number
    wardsPlaced?: number
    win?: true
}
export interface MatchV5PerksDTO {
    statperks?: MatchV5StatPerksDTO
    styles?: MatchV5PerkStylesDTO[]
}
export interface MatchV5PerkStylesDTO {
    description?: string
    selections?: MatchV5PerkStylesSelectionsDTO[]
    style?: number
}
export interface MatchV5PerkStylesSelectionsDTO {
    perk?: number
    var1?: number
    var2?: number
    var3?: number
}
export interface MatchV5StatPerksDTO {
    defense?: number
    flex?: number
    offense?: number
}
export interface MatchV5MatchTimelineDTO {
    metadata?: MatchV5MetadataDTO
    info?: MatchV5TimelineInfoDTO
}
export interface MatchV5TimelineInfoDTO {
    frameInterval?: number
    frames?: MatchV5TimelineFramesDTO[]
    gameId?: number
}
export interface MatchV5TimelineFramesDTO {
    events?: MatchV5TimelineEventsDTO[]
    participantFrames?: { [name: string]: MatchV4MatchParticipantFrameDTO }
    timestamp?: number
    participants?: MatchV5TimelinePartipantDTO[]
}
export interface MatchV5TimelinePartipantDTO {
    participantId?: number
    puuid?: string
}
export interface MatchV5TimelineParticipantFramesDTO {
    championStats?: MatchV5TimelineChampionStatsDTO
    currentGold?: number
    damageStats?: MatchV5TimelineDamageStatsDTO
    goldPerSecond?: number
    jungleMinionsKilled?: number
    level?: number
    minionsKilled?: number
    participantId?: number
    position?: MatchV5TimelinePositionDTO
    timeEnemySpentControlled?: number
    totalGold?: number
    xp?: number
}
export interface MatchV5TimelineDamageStatsDTO {
    magicDamageDone?: number
    magicDamageDoneToChampions?: number
    magicDamageTaken?: number
    physicalDamageDone?: number
    physicalDamageDoneToChampions?: number
    physicalDamageTaken?: number
    totalDamageDone?: number
    totalDamageZDonetoChampions?: number
    totalDamageTaken?: number
    trueDamageDone?: number
    trueDamageDoneToChampions?: number
    trueDamageTaken?: number
}
export interface MatchV5TimelineChampionStatsDTO {
    abilityHaste?: number
    abilityPower?: number
    armor?: number
    armorPen?: number
    armorPenPercent?: number
    attackDamage?: number
    attackSpeed?: number
    bonusArmorPenPercent?: number
    bonusMagicPenPercent?: number
    ccReduction?: number
    cooldownReduction?: number
    health?: number
    healthMax?: number
    healthRegen?: number
    lifesteal?: number
    magicPen?: number
    magicPenPercent?: number
    magicResist?: number
    movementSpeed?: number
    omnivamp?: number
    physicalVamp?: number
    power?: number
    powerMax?: number
    powerRegen?: number
    spellVamp?: number
}
export interface MatchV5TimelineEventsDTO {
    realTimestamp?: number
    timestamp?: number
    type?: string
    itemId?: number
    participantId?: number
    levelUpType?: string
    skillSlot?: number
    creatorId?: number
    wardType?: string
    level?: number
    assistingParticipantIds?: number[]
    bounty?: number
    killStreakLength?: number
    killerId?: number
    position?: MatchV5TimelinePositionDTO
    victimDamageDealt?: MatchV5TimelineVictimDamageDTO[]
    victimDamageReceived?: MatchV5TimelineVictimDamageDTO[]
    victimId?: number
    killType?: string
    laneType?: string
    teamId?: number
    multiKillLength?: number
    killerTeamId?: number
    monsterType?: string
    monsterSubType?: string
    buildingType?: string
    towerType?: string
    afterId?: number
    beforeId?: number
    goldGain?: number
    gameId?: number
    winningTeam?: number
    transformType?: string
    name?: string
}
export interface MatchV5TimelineVictimDamageDTO {
    basic?: boolean
    magicDamage?: number
    name?: string
    participantId?: number
    physicalDamage?: number
    spellName?: string
    spellSlot?: number
    trueDamage?: number
    type?: string
}
export interface MatchV5TimelinePositionDTO {
    x?: number
    y?: number
}
export interface SpectatorV4BannedChampion {
    /**
     * The turn during which the champion was banned
     */
    pickTurn?: number // int32
    /**
     * The ID of the banned champion
     */
    championId?: number // int64
    /**
     * The ID of the team that banned the champion
     */
    teamId?: number // int64
}
export interface SpectatorV4CurrentGameInfo {
    /**
     * The ID of the game
     */
    gameId?: number // int64
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime?: number // int64
    /**
     * The ID of the platform on which the game is being played
     */
    platformId?: string
    /**
     * The game mode
     */
    gameMode?: string
    /**
     * The ID of the map
     */
    mapId?: number // int64
    /**
     * The game type
     */
    gameType?: string
    /**
     * Banned champion information
     */
    bannedChampions?: SpectatorV4BannedChampion[]
    /**
     * The observer information
     */
    observers?: SpectatorV4Observer
    /**
     * The participant information
     */
    participants?: SpectatorV4CurrentGameParticipant[]
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength?: number // int64
    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId?: number // int64
}
export interface SpectatorV4CurrentGameParticipant {
    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId?: number // int64
    /**
     * The ID of the champion played by this participant
     */
    championId?: number // int64
    /**
     * The summoner name of this participant
     */
    summonerName?: string
    /**
     * List of Game Customizations
     */
    gameCustomizationObjects?: SpectatorV4GameCustomizationObject[]
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot?: boolean
    /**
     * Perks/Runes Reforged Information
     */
    perks?: SpectatorV4Perks
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id?: number // int64
    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId?: number // int64
    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id?: number // int64
    /**
     * The encrypted summoner ID of this participant
     */
    summonerId?: string
}
export interface SpectatorV4FeaturedGameInfo {
    /**
     * The ID of the game
     */
    gameId?: number // int64
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime?: number // int64
    /**
     * The ID of the platform on which the game is being played
     */
    platformId?: string
    /**
     * The game mode
     *              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
     */
    gameMode?: 'CLASSIC' | 'ODIN' | 'ARAM' | 'TUTORIAL' | 'ONEFORALL' | 'ASCENSION' | 'FIRSTBLOOD' | 'KINGPORO'
    /**
     * The ID of the map
     */
    mapId?: number // int64
    /**
     * The game type
     *              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
     */
    gameType?: 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME'
    /**
     * Banned champion information
     */
    bannedChampions?: SpectatorV4BannedChampion[]
    /**
     * The observer information
     */
    observers?: SpectatorV4Observer
    /**
     * The participant information
     */
    participants?: SpectatorV4Participant[]
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength?: number // int64
    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId?: number // int64
}
export interface SpectatorV4FeaturedGames {
    /**
     * The suggested interval to wait before requesting FeaturedGames again
     */
    clientRefreshInterval?: number // int64
    /**
     * The list of featured games
     */
    gameList?: SpectatorV4FeaturedGameInfo[]
}
export interface SpectatorV4GameCustomizationObject {
    /**
     * Category identifier for Game Customization
     */
    category?: string
    /**
     * Game Customization content
     */
    content?: string
}
export interface SpectatorV4Observer {
    /**
     * Key used to decrypt the spectator grid game data for playback
     */
    encryptionKey?: string
}
export interface SpectatorV4Participant {
    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId?: number // int64
    /**
     * The ID of the champion played by this participant
     */
    championId?: number // int64
    /**
     * The summoner name of this participant
     */
    summonerName?: string
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot?: boolean
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id?: number // int64
    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId?: number // int64
    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id?: number // int64
}
export interface SpectatorV4Perks {
    /**
     * Primary runes path
     */
    perkStyle?: number // int64
    /**
     * IDs of the perks/runes assigned.
     */
    perkIds?: number /* int64 */[]
    /**
     * Secondary runes path
     */
    perkSubStyle?: number // int64
}
/**
 * represents a summoner
 */
export interface SummonerV4SummonerDTO {
    /**
     * ID of the summoner icon associated with the summoner.
     */
    profileIconId?: number // int32
    /**
     * Summoner name.
     */
    name?: string
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    puuid?: string
    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel?: number // int64
    /**
     * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
     */
    revisionDate?: number // int64
    /**
     * Encrypted summoner ID. Max length 63 characters.
     */
    id?: string
    /**
     * Encrypted account ID. Max length 56 characters.
     */
    accountId?: string
}
export interface TournamentStubV4LobbyEventDTO {
    /**
     * The type of event that was triggered
     */
    eventType?: string
    /**
     * The summonerId that triggered the event (Encrypted)
     */
    summonerId?: string
    /**
     * Timestamp from the event
     */
    timestamp?: string
}
export interface TournamentStubV4LobbyEventDTOWrapper {
    eventList?: TournamentStubV4LobbyEventDTO[]
}
export interface TournamentStubV4ProviderRegistrationParameters {
    /**
     * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
     */
    url: string
    /**
     * The region in which the provider will be running tournaments.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
}
export interface TournamentStubV4TournamentCodeParameters {
    /**
     * The spectator type of the game.
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
    /**
     * The team size of the game. Valid values are 1-5.
     */
    teamSize: number // int32
    /**
     * The pick type of the game.
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * The map type of the game.
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
    /**
     * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
     */
    metadata?: string
}
export interface TournamentStubV4TournamentRegistrationParameters {
    /**
     * The provider ID to specify the regional registered provider data to associate this tournament.
     */
    providerId: number // int32
    /**
     * The optional name of the tournament.
     */
    name?: string
}
export interface TournamentV4LobbyEventDTO {
    /**
     * Timestamp from the event
     */
    timestamp?: string
    /**
     * The summonerId that triggered the event (Encrypted)
     */
    summonerId?: string
    /**
     * The type of event that was triggered
     */
    eventType?: string
}
export interface TournamentV4LobbyEventDTOWrapper {
    eventList?: TournamentV4LobbyEventDTO[]
}
export interface TournamentV4ProviderRegistrationParameters {
    /**
     * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
     */
    url: string
    /**
     * The region in which the provider will be running tournaments.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
}
export interface TournamentV4TournamentCodeDTO {
    /**
     * The game map for the tournament code game
     */
    map?: string
    /**
     * The tournament code.
     */
    code?: string
    /**
     * The spectator mode for the tournament code game.
     */
    spectators?: string
    /**
     * The tournament code's region.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region?: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
    /**
     * The provider's ID.
     */
    providerId?: number // int32
    /**
     * The team size for the tournament code game.
     */
    teamSize?: number // int32
    /**
     * The summonerIds of the participants (Encrypted)
     */
    participants?: string[]
    /**
     * The pick mode for tournament code game.
     */
    pickType?: string
    /**
     * The tournament's ID.
     */
    tournamentId?: number // int32
    /**
     * The lobby name for the tournament code game.
     */
    lobbyName?: string
    /**
     * The password for the tournament code game.
     */
    password?: string
    /**
     * The tournament code's ID.
     */
    id?: number // int32
    /**
     * The metadata for tournament code.
     */
    metaData?: string
}
export interface TournamentV4TournamentCodeParameters {
    /**
     * The spectator type of the game.
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
    /**
     * The team size of the game. Valid values are 1-5.
     */
    teamSize: number // int32
    /**
     * The pick type of the game.
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * The map type of the game.
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
    /**
     * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
     */
    metadata?: string
}
export interface TournamentV4TournamentCodeUpdateParameters {
    /**
     * The spectator type
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
    /**
     * The pick type
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * The map type
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
}
export interface TournamentV4TournamentRegistrationParameters {
    /**
     * The provider ID to specify the regional registered provider data to associate this tournament.
     */
    providerId: number // int32
    /**
     * The optional name of the tournament.
     */
    name?: string
}
