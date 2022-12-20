import { db } from 'src/lib/db'

export const parks = () => {
  return db.park.findMany()
}

export const park = ({ id }) => {
  return db.park.findUnique({
    where: { id },
  })
}

export const createPark = ({ input }) => {
  return db.park.create({
    data: input,
  })
}

export const updatePark = ({ id, input }) => {
  return db.park.update({
    data: input,
    where: { id },
  })
}

export const deletePark = ({ id }) => {
  return db.park.delete({
    where: { id },
  })
}

export const Park = {
  owner: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).owner()
  },
  governor: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).governor()
  },
  Run: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Run()
  },
  Checkpoint: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Checkpoint()
  },
  Path: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Path()
  },
}

export const countParks = async () => {
  const eoe = await db.park.count()
  // console.log(eoe._count.id)
  return eoe
}
