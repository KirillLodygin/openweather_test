export const aggregateByDay = (data: any[]) => {
  const aggregatedData: any[] = []

  for (let i = 0; i < data.length; i += 8) {
    const group = data.slice(i, i + 8)
    const averages: Record<string, number> = {}

    Object.keys(group[0]).forEach((key) => {
      if (typeof (group[0] as any)[key] === 'number') {
        averages[key] = Number((group.reduce((acc, obj) => acc + (obj as any)[key], 0) / group.length).toFixed(2))
      }
    })

    const newObj = {
      city: (group[0] as any).city,
      name: (group[0] as any).name.split(' ')[0],
      ...averages,
    }

    aggregatedData.push(newObj)
  }

  return aggregatedData
}
