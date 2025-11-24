import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET /api/models — получить все модели
export async function GET() {
  try {
    const models = await prisma.model.findMany({
      include: {
        brand: true,
      },
    });
    return Response.json(models);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

// POST /api/models — создать модель
export async function POST(req) {
  try {
    const data = await req.json();

    const model = await prisma.model.create({
      data: {
        name: data.name,
        brandId: data.brandId, // сюда передаем ID бренда
      },
    });

    return Response.json(model);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
