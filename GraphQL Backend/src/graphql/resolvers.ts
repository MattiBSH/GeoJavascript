import FriendFacade from '../facades/friendFacade';
import { IFriend } from '../interfaces/IFriend';
import { ApiError } from '../errors/errors';
import { Request } from "express";
import PositionFacade from "../facades/positionFacade"
import { IPoint } from "../interfaces/geoInterfaces"
import IPosition from '../interfaces/IPosition'


interface IPositionInput{
  email:string,
  longitude:number
  latitude:number
}
interface IPositionInputDistance{
  email:string,
  longitude:number
  latitude:number
  distance:number
}

let friendFacade: FriendFacade;
let positionFacade: PositionFacade;


export function setupFacade(db: any) {
  if (!friendFacade) {
    friendFacade = new FriendFacade(db)
  }
  if (!positionFacade) {
    positionFacade = new PositionFacade(db)
  }
}

// resolver map
export const resolvers = {
  Query: {

    getAllFriends: (root: any, _: any, context: any) => {
      return friendFacade.getAllFriends()

    },
      getFriend: async (root: any,{input}:{input:string}) => {
        return friendFacade.getFriendFromEmail(input)
      }
  },
  Mutation: {
    createFriend: async (_: object, { input }: { input: IFriend }) => {
      return friendFacade.addFriendV2(input)
    },
    editFriend: async (_: object, { input }: { input: IFriend },root: any, context: any) => {
        return friendFacade.editFriendV2(input.email,input);
      },
      deleteFriend: async (  email:  string ,root: any, context: any) => {
        return friendFacade.deleteFriend(email)
      },
      addPosition: async (_: object, {input}: {input:IPositionInput} ) => {
       try {
        if(positionFacade.addOrUpdatePosition(input.email,input.longitude,input.latitude)){
          return true
        } 
       } catch (error) {
         
       }
        
      },
      findNearbyFriends: async (_: object, {input}: {input:IPositionInputDistance} ) => {
        try {
           if(positionFacade.findNearbyFriends(input.email,input.longitude,input.latitude,input.distance)){
             return positionFacade.findNearbyFriends(input.email,input.longitude,input.latitude,input.distance);
           }else{
           } 
         } catch (error) {
         }
      }
  
}
};