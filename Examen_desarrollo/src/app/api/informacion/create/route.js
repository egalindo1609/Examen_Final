import prisma from '@/lib/prisma';

export async function POST(req) {
  const data = await req.json();
  const nuevaInformacion = await prisma.informacionCliente.create({
    data: {
      tipoInformacion: data.tipoInformacion,
      usuarioCreador: data.usuarioCreador,
      estadoInformacion: data.estadoInformacion,
      clienteId: data.clienteId,
    },
  });

  return new Response(JSON.stringify(nuevaInformacion), { status: 201 });
}
