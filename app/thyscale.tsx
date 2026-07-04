import { Dimensions } from 'react-native'

const { width, height, fontScale } = Dimensions.get('window')
const refWiidth= 800 
const refHeiight= 1280 
const scaleFacWidth = width/refWiidth
const scaleFacHeight = height/refHeiight
const scaleFactor = Math.min(scaleFacWidth, scaleFacHeight)
export const isTab=width>=768


export const scaleHeight = (heightValue: number): number => {
  if(isTab) return heightValue
  return Math.round(heightValue * scaleFactor)
}


export const scaleWidth = (widthValue: number): number => {
  if(isTab) return widthValue
  return Math.round(widthValue * scaleFactor)
}


export const scaleFont = (size: number): number => {
  if(isTab){
    return size
  }  
  const clamFontSize=Math.min(width/refWiidth, height/refHeiight)
    return Math.round((clamFontSize*size)/fontScale)
}
