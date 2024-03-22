'use server';

export async function createCategory(name: string){
    await prisma.categories.create({
        data: {
            name: name
        }
    })
}

export async function getCategories(){
    return await prisma.categories.findMany();

}


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*/export async function getUserId(name: string) {
  const userId = await prisma.categories.findUnique({
    where: {
      name: name
    },
    select: {
      id: true
    }
  });

  return userId?.id;
}
/*/


