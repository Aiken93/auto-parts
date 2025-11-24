import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const brands = await prisma.brand.findMany();
    return Response.json(brands);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const brand = await prisma.brand.create({
      data: {
        name: data.name,
      },
    });

    return Response.json(brand);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
