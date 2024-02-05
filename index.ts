import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //prisma queries

  //Create User
  /* const user = await prisma.user.create({
      data: {
        name: "Sarah kipkoech",
            email: "sarah1722@gmail.com",
            articles: {
                create: {
                    body: "This is her first Article",
                    title: "Sarah's first article"
            }
        }
      },
    });
    console.log(user); */

  // get all users
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  //console.log(users);

  //Create an Article and associate it with users
  /* const article = await prisma.article.create({
      data: {
        title: "My Second  Sarah's Prisma Article",
        body: "This is my second article. By Sarah Kipkoech",
        author: {
          connect: {
            id: 4,
          },
        },
      },
    }); */

  /* users.forEach((user) => {
    console.log(`User: ${user.name}, Email: ${user.email}`);
    user.articles.forEach((article) => {
      console.log(`Title: ${article.title}, Body: ${article.body}`);
    });

    console.log("\n");
  }); */
    
    //Update
    /* const user = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "Silvia Kisuki"
        }
    })
    console.log(user);
     */
    //Remove an Article
    const article = await prisma.article.delete({
        where: {
            id: 2
        }
    })
    console.log(article);

    const articles = await prisma.article.findMany()
    console.log(articles);
    
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
