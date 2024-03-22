

export async function POST(req){
    const {name} = await req.json();
    const CategoryDoc = await Category.create({name});
    return Response.json(CategoryDoc);
}