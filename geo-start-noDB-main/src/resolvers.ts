
import gju from 'geojson-utils' 

const {gameArea, players} =require("./gameData");
 interface Player{
  name : string,
  point : Point
}
interface Point {
  type : string,
  coordinates: [Coordinate]
}
interface Coordinates {
  coordinates: [[[number]]]
}
interface Coordinate {
  latitude: number
  longitude:number
} 

interface User {
  distance: number,
  to: string
}
 
export const resolvers = {
  Query: {
    gameArea: ()=>{
      return gameArea;
    },
    isUserInArea: (_:any,{longitude,latitude}:{latitude:number,longitude:number})=> {
      const point = {type:"Point",coordinates:[longitude,latitude]}
      const isInside = gju.pointInPolygon(point,gameArea)
      let result: any = {};
      result.status = isInside;
      result.msg = isInside ? "Point was inside the GameArea" : "Point was NOT inside the GameArea";
      return result
    },
    //changed return type
    findNearbyPlayers(_:any,{longitude,latitude,distance}:{latitude:number,longitude:number,distance:number}):Player[]{
     //do it
     let playerIn=[];
     const point = {type:"Point",coordinates:[longitude,latitude]}
     for (let index = 0; index < players.length; index++) {
      const element = players[index];
      //console.log(element.properties.name);
      //console.log(userName);
      if (gju.geometryWithinRadius(element.geometry,point,distance)) {
        playerIn.push(element.properties);
      }
      
     
    }
    return playerIn;
    },
    //works
    distanceToUser(_:any,{longitude,latitude,userName}:{latitude:number,longitude:number,userName:string}):User{
      let player;
      for (let index = 0; index < players.length; index++) {
        const element = players[index];
        if (element.properties.name==userName) {
          player=element;
        }
      }
      let User: any = {};
     
      let distance1 = gju.pointDistance({ type: "Point", coordinates: [longitude,latitude] }, player.geometry)
      User.to = userName + " at "+ player.geometry.coordinates.toString();;
      console.log(User.to);
      User.distance = distance1;
      console.log(player);
      return User;
    }

   


  },
};
