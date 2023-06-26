import {PrismaClient as MongoClient} from "../../prisma/generated/mongo_client"
import {PrismaClient as PostgresClient} from "../../prisma/generated/postgres_client"


export const mongoClient = new MongoClient()
export const postgresClient = new PostgresClient()
