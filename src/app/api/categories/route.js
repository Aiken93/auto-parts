import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET /api/categories — получить все категории
export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return Response.json(categories);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

// POST /api/categories — создать категорию
export async function POST(req) {
  try {
    const data = await req.json();

    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    });

    return Response.json(category);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
