function gameObject(){
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": 
            {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez" : {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 11,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismark Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendon Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

// let gameObj = gameObject()
// for (let key in gameObj){
//     console.log("key: ", key, "value: ", gameObj[key])
// }

const game = gameObject()
const players = {...game.away.players, ...game.home.players}

function numPointsScored(name){
    for (const person in players){
        if (person === name){
            return players[person].points
        }
    }
}

function shoeSize(name){
    for (const person in players){
        if (person === name){
            return players[person].shoe
        }
    }
}

function teamColors(nameOfTeam){
    for (const team in game){
        if (game[team].teamName === nameOfTeam ){
            return game[team].colors
        }
    }
}

function teamNames(){
    return [game.away.teamName, game.home.teamName]
}

function playerNumbers(nameOfTeam){
    let team = {}
    if (nameOfTeam === game.away.teamName){
        team = game.away.players
    } else team = game.home.players

    const num = []
    for (const person in team){
        num.push(team[person].number)
    }
    return num

}

function playerStats(name){
    return players[name]
}

function mostPerson(objective){
    let mostPerson = Object.keys(players)[0]
    for (const player in players){
        if (players[player][objective] > players[mostPerson][objective]){
            mostPerson = player
        }
    }
    return mostPerson
}

function bigShoeRebounds(){
    return players[mostPerson("shoe")].rebounds
}

function mostPointsScored(){
    return mostPerson("points")
}

function winningTeam(){
    const home = game.home.players
    const away = game.away.players
    let homePoints = 0
    let awayPoints = 0

    for (const player in home){
        homePoints += home[player].points
    }
    for (const player in away){
        awayPoints += away[player].points
    }

    if (homePoints > awayPoints){
        return game.home.teamName
    } else return game.away.teamName
}

function playerWithLongestName(){
    let longName = ""
    for (const person in players){
        if (person.length > longName.length){
            longName = person
        }
    }
    return longName
}

function doesLongNameStealATon(){
    let longNameSteal = players[playerWithLongestName()].steals
    for (const player in players){
        if (players[player].steals > longNameSteal){
            return false
        }
    }
    return true
}