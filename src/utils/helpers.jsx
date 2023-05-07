export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100)
}

export const getUniqueValues = () => {}
