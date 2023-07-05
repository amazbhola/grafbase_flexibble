import { createUser } from "./../lib/action";
export const getUserQuery =`
query GetUser($email:string!){
    user(by:{email:$email}){
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedinUrl
    }
}
`

export const createUserMutation = `
    mutarion createUser($input:CreateUserInput!){
        userCreate(input:$input){
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                id
            }
        }
    }
`