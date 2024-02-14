import { Client, Account , Databases} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c5e4ceb97b7edc606f');

export const account = new Account(client);
export { ID } from 'appwrite';

//Database
export const database = new Databases(client , "65c5e61c65259c535580")