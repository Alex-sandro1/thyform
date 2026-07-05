import { Dimensions } from 'react-native'

const getWindow = () => Dimensions.get('window')

const refWidth = 800
const refHeight = 1280

const getScaleFactor = () => {
    const { width, height } = getWindow()
    const scaleFacWidth = width / refWidth
    const scaleFacHeight = height / refHeight
    return Math.min(scaleFacWidth, scaleFacHeight)
}

export const isTab = (): boolean => getWindow().width >= 768

export const scaleWidth = (widthValue: number): number => {
    if (isTab()) return widthValue
    return Math.round(widthValue * getScaleFactor())
}

export const scaleHeight = (heightValue: number): number => {
    if (isTab()) return heightValue
    return Math.round(heightValue * getScaleFactor())
}

export const scaleFont = (size: number): number => {
    const { fontScale } = getWindow()
    if (isTab()) return size
    const scaleFactor = getScaleFactor()
    return Math.round((scaleFactor * size) / fontScale)
}