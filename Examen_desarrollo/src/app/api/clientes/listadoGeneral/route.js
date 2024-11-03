import prisma from '@/lib/prisma';

export async function GET() {
  const clientes = await prisma.cliente.findMany({
    include: { informacion: true },
    orderBy: [{ createdAt: 'asc' }, { apellidos: 'asc' }],
  });

  return new Response(JSON.stringify(clientes), { status: 200 });
}
