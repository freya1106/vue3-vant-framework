export const initRem = () => {
  const baseSize = 1 / 375
  const innerWidth = window.innerWidth

  const fontSize = innerWidth * baseSize

  document.documentElement.style.fontSize = fontSize + 'px'
}

export const getAssetsImages = (fileName) => {
  return new URL(`/src/assets/images/${fileName}`, import.meta.url).href;
}