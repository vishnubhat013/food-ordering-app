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

export async function createMenuitem(Itemname: string, image: string, Description: string, Baseprice: string) {
  await prisma.menuitems.create({
      data: {
          Itemname: Itemname,
          image: image,
          description: Description,
          baseprice: Baseprice
      }
  });
}