import { Dimensions, PixelRatio } from 'react-native'

const refWidth = 390
const refHeight = 844

const getWindowDimensions = () => Dimensions.get('window')

const getScaleX = () => getWindowDimensions().width / refWidth
const getScaleY = () => getWindowDimensions().height / refHeight

// Average scale — useful for fonts so they scale proportionally
const getAverageScale = () => (getScaleX() + getScaleY()) / 2

export const isTab = () => getWindowDimensions().width >= 768

export const scaleWidth = (widthValue: number): number => {
  const scaled = widthValue * getScaleX()
  return Math.round(scaled)
}

export const scaleHeight = (heightValue: number): number => {
  const scaled = heightValue * getScaleY()
  return Math.round(scaled)
}

export const scaleFont = (size: number): number => {
  const scaledSize = size * getAverageScale()
  const adjustedSize = scaledSize / PixelRatio.getFontScale()

  return Math.max(12, Math.round(adjustedSize))
}
