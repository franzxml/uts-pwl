import prisma from "../config/prisma.js";

export const getAll = () => prisma.mahasiswa.findMany();

export const getById = (id) =>
  prisma.mahasiswa.findUnique({ where: { id: Number(id) } });

export const create = (data) =>
  prisma.mahasiswa.create({
    data: {
      nim: data.nim,
      nama: data.nama,
      jurusan: data.jurusan,
      angkatan: Number(data.angkatan),
    },
  });

export const update = (id, data) =>
  prisma.mahasiswa.update({
    where: { id: Number(id) },
    data: {
      nim: data.nim,
      nama: data.nama,
      jurusan: data.jurusan,
      angkatan: Number(data.angkatan),
    },
  });

export const remove = (id) =>
  prisma.mahasiswa.delete({ where: { id: Number(id) } });
