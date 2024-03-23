'use server';




import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



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

export async function updateCategory(id: string, name: string){
  return await prisma.categories.update({
      where: {
          id: id
      },
      data: {
          name: name
      }
  })
}