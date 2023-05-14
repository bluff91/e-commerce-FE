export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100)
}

export const getUniqueValues = (array, categoryTerm) => {
  let newArray = []
  newArray = array.map((item) => item[categoryTerm])
  if (categoryTerm === 'colors') {
    newArray = newArray.flat()
  }
  return ['all', ...new Set(newArray)]
}
