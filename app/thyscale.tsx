import { Dimensions, PixelRatio } from 'react-native'

const refWidth = 390
const refHeight = 844

const getWindowDimensions = () => Dimensions.get('window')
const getScaleFactor = () => {
  const { width, height } = getWindowDimensions()
  return Math.min(width / refWidth, height / refHeight)
}

export const isTab = () => getWindowDimensions().width >= 768

export const scaleHeight = (heightValue: number): number => {
  if (isTab()) return heightValue
  return Math.round(heightValue * getScaleFactor())
}

export const scaleWidth = (widthValue: number): number => {
  if (isTab()) return widthValue
  return Math.round(widthValue * getScaleFactor())
}

export const scaleFont = (size: number): number => {
  if (isTab()) return size

  const scaledSize = size * getScaleFactor()
  const adjustedSize = scaledSize / PixelRatio.getFontScale()

  return Math.max(12, Math.round(adjustedSize))
}
