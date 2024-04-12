'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserRole(userEmail: string){
  const user = await prisma.user.findFirst({
    where:{
      email: userEmail
    },
  });
  return user?.role;
}

export async function removeItemFromCart(id: string){
  await prisma.orders.delete({
    where:{
      id: id
    }
  });
}

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
export async function getMenuitem(){
  return await prisma.menuitems.findMany();

}

export async function addToCart(userId:string,image:string,ItemName:string,description:string,baseprice:string){
   await prisma.orders.create({
    data: {
      userId:userId,
      Itemname: ItemName,
      image:image,
      description:description,
      baseprice:baseprice
    }
  });
}

export async function getOrders(){
  return await prisma.orders.findMany();
}
/*/
export async function placedorders(image:string,ItemName:string,baseprice:string,userId:string){
  await prisma.placedorder.create({
   data: {
     userId:userId,
     Itemname: ItemName,
     image:image,
     baseprice:baseprice
   }
 });
}/*/

export  async function copyOrdersToPlacedOrders() {
    const orders = await prisma.orders.findMany();
    for (let order of orders) {
      await prisma.placedorder.create({
        data: {
          userId:order.userId,
     Itemname:order.Itemname,
     image:order.image,
     baseprice:order.baseprice
        }
      });
    }
  } 
  export async function deletecartOrders() {
      await prisma.orders.deleteMany();
    } 


  export async function placedOrderDisplay(){
     return await prisma.placedorder.findMany();
      
    }
