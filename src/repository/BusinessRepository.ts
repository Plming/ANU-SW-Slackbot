import { MongoClient } from "mongodb";

import { Business } from "../entity/Business";

const client = new MongoClient(process.env.CUSTOMCONNSTR_ANU_SW_BOT);
const database = client.db('AnuSw');
const businesses = database.collection<Business>('business');

export async function findBusiness(id: number): Promise<Business | null> {
    const found = await businesses.findOne({ _id: id });
    return found;
}

export async function insertBusiness(business: Business): Promise<void> {
    await businesses.insertOne(business);
}