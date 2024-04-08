const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient();

const main = async () => {
    try {

        await db.category.createMany({
            data: [
                { name: "Famous people" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Games" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientists" },
            ]
        })

    } catch (err) {
        console.error("Error seeding default categories", err)
    } finally {
        await db.$disconnect();
    }
}

main();