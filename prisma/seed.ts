import {Prisma} from "@prisma/client";
import prisma from "../src/db/prismaClient"
import {hashPassword} from "../src/utils/bcrypt";

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Alice',
        email: 'alice@prisma.io',
        password: "12345678"
    },
    {
        name: 'Nilu',
        email: 'nilu@prisma.io',
        password: "12345678"
    },
    {
        name: 'Mahmoud',
        email: 'mahmoud@prisma.io',
        password: "12345678"
    },
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of userData) {
        const user = await prisma.user.create({
            data: {
                name: u.name,
                email: u.email,
                password: await hashPassword(u.password)
            }
        })
        console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
