import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native'

const refWidth = 390
const refHeight = 844
const TABLET_MIN_WIDTH = 768

const getWindowDimensions = () => Dimensions.get('window')

export const isTab = (): boolean => getWindowDimensions().width >= TABLET_MIN_WIDTH

const getRawScale = () => {
  const { width, height } = getWindowDimensions()
  return Math.min(width / refWidth, height / refHeight)
}

const clampScale = (scale: number) => Math.min(Math.max(scale, 0.85), 1.25)

const getScale = () => clampScale(getRawScale())

const moderateScale = (size: number, factor = 0.5): number => {
  const scale = getScale()
  return size + (scale - 1) * size * factor
}

export const scaleWidth = (value: number): number => Math.round(moderateScale(value))
export const scaleHeight = (value: number): number => Math.round(moderateScale(value))
export const scaleFont = (size: number): number => {
  const scaled = moderateScale(size)
  return Math.max(12, Math.round(scaled / PixelRatio.getFontScale()))
}

export const wp = (percent: number): number => {
  const { width } = getWindowDimensions()
  return Math.round((percent / 100) * width)
}
export const hp = (percent: number): number => {
  const { height } = getWindowDimensions()
  return Math.round((percent / 100) * height)
}

export const getContentWidth = (): number => {
  const { width } = getWindowDimensions()
  if (isTab()) {
    return Math.min(width * 0.6, 700)
  }
  return width * 0.92
}

export const useScale = () => {
  const { width, height } = useWindowDimensions()
  const scale = clampScale(Math.min(width / refWidth, height / refHeight))
  const tab = width >= TABLET_MIN_WIDTH

  return {
    isTab: tab,
    scaleWidth: (v: number) => Math.round(v + (scale - 1) * v * 0.5),
    scaleHeight: (v: number) => Math.round(v + (scale - 1) * v * 0.5),
    scaleFont: (size: number) =>
      Math.max(12, Math.round((size + (scale - 1) * size * 0.5) / PixelRatio.getFontScale())),
    wp: (percent: number) => Math.round((percent / 100) * width),
    hp: (percent: number) => Math.round((percent / 100) * height),
    contentWidth: tab ? Math.min(width * 0.6, 700) : width * 0.92,
  }
}