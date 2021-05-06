import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import IPosition from '../interfaces/IPosition'
const typeDefs = `#graphql
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        role: String
    }
    
    type location{
      
            type:String
            coordinates:[Float]
        
    }

    type Position{
        lastUpdated:String
        email:String
        name:String
        location:location

    }
    
    """
    Queries available for Friends
    """
     type Query {
        """
        Returns all details for all Friends
        (Should probably require 'admin' rights if your are using authentication)
        """
        getAllFriends : [Friend]!
        """
        Only required if you ALSO wan't to try a version where the result is fetched from the existing endpoint
        """
        getAllFriendsProxy: [Friend]!
        """
        GetFriend
        """
        getFriend(input:String):Friend
        
    }
    input FriendInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    input FriendEditInput {
        firstName: String
        lastName: String
        password: String
        email: String!
    }
    input PositionInput{
        email:String!
        longitude:Float!
        latitude:Float!

    }
    
    input PositionDistanceInput{
        email:String!
        longitude:Float!
        latitude:Float!
        distance:Float!
    }
    type Mutation {
        """
        Allows anyone (non authenticated users) to create a new friend
        """
        createFriend(input: FriendInput): Friend
        """
        Edit method
        """
       
        editFriend(input:FriendEditInput):Friend
        
        """
        Delete Method
        """
        deleteFriend(input:String):Boolean

        """
        Add a position to an existing friend
        """
        addPosition(input:PositionInput):Boolean
        """
        find all existing friends in area
        """

        findNearbyFriends(input:PositionDistanceInput):[Position]
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };