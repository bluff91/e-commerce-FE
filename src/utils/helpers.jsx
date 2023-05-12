export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100)
}

export const getUniqueValues = (parameter, array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    console.log('parameter is:', parameter)
    console.log('plm:', array[i].parameter)
    newArray.push(array[i].parameter)
  }

  const mySet = new Set(['all', ...newArray])
  console.log(mySet)
}
