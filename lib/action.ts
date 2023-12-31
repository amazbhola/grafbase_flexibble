import { GraphQLClient } from "graphql-request";
import { getUserQuery, createUserMutation } from '../graphql/index';

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL||'' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction?process.env.NEXT_PUBLIC_GRAFBASE_API_KEY||'' : 'letmein';
const serverUrl = isProduction?process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';
const client = new GraphQLClient(apiUrl)

const makeGraphQlRequest = async (query:string, variables:any={}) => {
    try {
        //client request ....
        return await client.request(query, variables)

    } catch (error) {
        throw error;
    }
}

export const getUser =(email:string)=>{
   return makeGraphQlRequest(getUserQuery,{email}) 
}

export const createUser = (name:string, email:string, avatarUrl:string)=>{
    const variables = {
        input:{
            name,email,avatarUrl
        }
    }
    return makeGraphQlRequest(createUserMutation,variables)
}