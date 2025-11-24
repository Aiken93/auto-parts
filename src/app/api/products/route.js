import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET /api/products — получить список товаров
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        brand: true,
        model: true,
        category: true,
        images: true
      }
    });

    return Response.json(products);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

// POST /api/products — создать товар
export async function POST(req) {
  try {
    const data = await req.json();

    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,

        brandId: data.brandId,
        modelId: data.modelId,
        categoryId: data.categoryId,

        images: {
          create: data.images?.map((url) => ({ url })) || []
        }
      },
      include: {
        images: true
      }
    });

    return Response.json(product);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
