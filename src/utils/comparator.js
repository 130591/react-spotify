

export function comparator(array) {
  return array.filter((item, index,arr) => {
    const c = arr.map(item => item.id);
    return  index === c.indexOf(item.id)
  })
}