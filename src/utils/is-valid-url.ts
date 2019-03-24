export const isValidURL = (str) => {
  try {
    const instantiatedURL = new URL(str)
    return true
  } catch (error) {
    return false
  }
}
