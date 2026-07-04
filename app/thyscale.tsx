import { Dimensions, PixelRatio } from 'react-native'

const refWidth = 390
const refHeight = 844

const getWindowDimensions = () => Dimensions.get('window')

export const isTab = () => getWindowDimensions().width >= 768

const getScaleX = () => {
  const scale = getWindowDimensions().width / refWidth
  return isTab() ? Math.min(scale, 1.5) : scale
}

const getScaleY = () => {
  const scale = getWindowDimensions().height / refHeight
  return isTab() ? Math.min(scale, 1.5) : scale
}

const getBaseScale = () => Math.min(getScaleX(), getScaleY())

export const scaleWidth = (widthValue: number, factor = 0.5): number => {
  const scaled = widthValue * getScaleX()
  const moderateScaled = widthValue + (scaled - widthValue) * factor
  return Math.round(moderateScaled)
}

export const scaleHeight = (heightValue: number, factor = 0.5): number => {
  const scaled = heightValue * getScaleY()
  const moderateScaled = heightValue + (scaled - heightValue) * factor
  return Math.round(moderateScaled)
}

export const scaleFont = (size: number, factor = 0.4): number => {
  const baseScale = getBaseScale()
  const scaledSize = size + (size * baseScale - size) * factor
  const adjustedSize = scaledSize / PixelRatio.getFontScale()

  return Math.max(12, Math.round(adjustedSize))
}