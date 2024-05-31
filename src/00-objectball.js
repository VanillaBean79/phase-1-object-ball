function gameObject(){
    return{
        home:{
                teamName:"Brooklyn Nets",
                    colors:["Black", "White"],
                    players:{
                    "Alan Anderson":{number:"0",shoe:"16",points:"22",rebounds:"12",
                        assists:"12",steals:"3",blocks:"1",slamdunks:"1",},
                   
                    "Reggie Evans":{number:"30",shoe:"14",points:"12",rebounds:"12",
                        assists:"12",steals:"12",blocks:"12",slamdunks:"7",},
                   
                    "Brook Lopez":{number:"11",shoe:"17",points:"17",rebounds:"19",
                        assists:"10",steals:"3",blocks:"1",slamdunks:"15",},
                   
                    "Mason Plumlee":{number:"1",shoe:"19",points:"26",rebounds:"12",
                        assists:"6",steals:"3",blocks:"8",slamdunks:"5",},
                    
                    "Jason Terry":{number:"31",shoe:"15",points:"19",rebounds:"2",
                        assists:"2",steals:"4",blocks:"11",slamdunks:"1",},
                    }
            },
             away:{
               teamName:"Charlotte Hornets",
                   colors:["Turquoise", "Purple"],
                   players:{
                   "Jeff Adrien":{number:"4",shoe:"18",points:"10",rebounds:"1",
                       assists:"1",steals:"2",blocks:"7",slamdunks:"2",},
                   
                   "Bismak Biyombo":{number:"0",shoe:"16",points:"12",rebounds:"4",
                       assists:"7",steals:"7",blocks:"15",slamdunks:"10",},
                   
                   "DeSagna Diop":{number:"2",shoe:"14",points:"24",rebounds:"12",
                       assists:"12",steals:"4",blocks:"5",slamdunks:"5",},
                  
                   "Ben Gordon":{number:"8",shoe:"15",points:"33",rebounds:"3",
                       assists:"2",steals:"1",blocks:"1",slamdunks:"0",},
                   
                   "Brendan Haywood":{number:"33",shoe:"15",points:"6",rebounds:"12",
                       assists:"12",steals:"22",blocks:"5",slamdunks:"12",},
                   }
                                    }
        
    }
}

   function numPointsScored(playerName){
    let home = gameObject().home.players
    let away = gameObject().away.players
    let players = {...home,...away}
    return(players[playerName].points)
    
   }


   function shoeSize(playerName){
    let home = gameObject().home.players
    let away = gameObject().away.players
    let players = {...home,...away}
    return(players[playerName].shoe)
   }


   function teamColors(team){
    for(let key in gameObject()){
        let teamName = (gameObject()[key].teamName)
        if(team === teamName){
            console.log(gameObject()[key].colors)
        }
    }

   }


   function teamNames(){
//     const game = gameObject()
// const arr = [] 

// for ( let key in game){
//     arr.push (gameObject()[key].teamName)
// }
// return arr 
    console.log(gameObject()["home"].teamName)
    console.log(gameObject()["away"].teamName)
    return [gameObject()["home"].teamName,gameObject()["away"].teamName ]
    //     console.log(gameObject()[key].teamName)
   
}

function playerNumbers(team){
   for(let key in gameObject()){
    let teamName = (gameObject()[key].teamName)
    if(team === teamName){

    let players = gameObject()[key].players
console.log(players)
        for(let key2 in players){
           console.log(players[key2].number) 
        }
    }
   }

        
}



// playerNumbers("Charlotte Hornets")



function playerStats(player){
    console.log(player)
    for (let key in gameObject()){
        let playersStat = (gameObject()[key].players[player])
        console.log(playersStat)
        if( playersStat !== undefined){
        return playersStat
        }
        }
        }
    

    
function bigShoeRebounds(masonPlumlee){
// console.log(masonPlumlee)
for (let key in gameObject()){
    let players = (gameObject()[key].players)
    for (let player in players){
        // console.log(player)
        if (player === masonPlumlee){
            let shoe = players[masonPlumlee].rebounds
        
            return shoe
        }
    }
    if(masonPlumlee === (gameObject()[key].players)){}
//     console.log(gameObject()[key].players)
//     console.log(masonPlumlee)
}
}

// bigShoeRebounds("Mason Plumlee")

function mostPointsScored(benGordon){
// console.log(benGordon)
for (let key in gameObject()){
    let players = (gameObject()[key].players)
    for (let player in players){
        // console.log(player)
        if (player === benGordon){
            let points = players[benGordon].points

            return points
        }
    }
}
}

function winningTeam(brooklynNets){
    // console.log(gameObject()["home"].teamName)
    return gameObject()["home"].teamName

}


function playerWithLongestName(){
const longestName = {name:"", letter:0}
for (let key in gameObject()){
    let players = (gameObject()[key].players)
    for (let player in players){
    //  console.log(player.length)
        if (player.length > longestName.letter){
            longestName.name = player
            longestName.letter = player.length

            
        }
    }
}
return longestName
}


function doesLongNameStealATon(){
    let nameLength = 0
    let steals = 0
   for (let key in gameObject()){
    let players = (gameObject()[key].players)
    console.log(players)
    for (let player in players){
        if ( player.length > nameLength){
            console.log(player)
            nameLength = player.length 
            steals = players[player].steals
            console.log(nameLength)
            console.log(steals)
        }
    }
   }
}