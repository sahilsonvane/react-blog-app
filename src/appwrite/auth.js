import conf from '../conf/conf';
import {ID, Client, Account} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){

        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return this.login({email,password}) 
            }else{
                return userAccount;
            }
        } catch (error){
            throw error;
        }


    }

    async login({email,password}){
        try {
            const userLogin = await this.account.createEmailPasswordSession(email,password);
            return userLogin;
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service getUser Error: " + error);
            
        }
       
        return null
    }

   async updatePassword({password,oldPassword}){
    try {
        return await this.account.updatePassword(
            password,
            oldPassword,
        )
    } catch (error) {
        console.log("Update Password error: ", error);
        
    }
   }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService