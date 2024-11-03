import prisma from '@/lib/prisma';

export async function POST(req) {
  const data = await req.json();
  const nuevoCliente = await prisma.cliente.create({
    data: {
      nombres: data.nombres,
      apellidos: data.apellidos,
      genero: data.genero,
      fechaNacimiento: new Date(data.fechaNacimiento),
      estado: data.estado,
    },
  });

  return new Response(JSON.stringify(nuevoCliente), { status: 201 });
}
