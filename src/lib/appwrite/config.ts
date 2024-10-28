import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
url: import.meta.env.VITE_APPWRITE_URL,
databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
} 
// there was no error to the import at numer one 55:49
// he had to creat instances whiles i did not or 
// it seems to but i will export them anyways

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url) // Your API Endpoint

// this references the account from appwrite which allows me to 
// use the auth feature in appwrite

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
