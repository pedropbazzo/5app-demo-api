import { config } from '../config'
import { ILogo } from '../models/logo.model'
import { isValidURL } from './is-valid-url'

const {
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
} = config.logoSizes

export const logoFromArray = (logos: ILogo[]) => {

  if (!Array.isArray(logos)) {
    return undefined
  }

  const logo = logos.find((l) => {

    if (!isValidURL(l.url)) {
      return false
    }

    const [width, height] = l.size.split('x')

    if (typeof width !== 'string' || typeof height !== 'string') {
      return false
    }

    const parsedWidth = parseInt(width, 10)
    const parsedHeight = parseInt(height, 10)

    if (typeof parsedWidth !== 'number' || typeof parsedHeight !== 'number') {
      return false
    }

    if (parsedWidth >= minWidth &&
      parsedWidth <= maxWidth &&
      parsedHeight >= minHeight &&
      parsedHeight <= maxHeight) {

      return true
    }
    return false

  })

  if (!!logo && logo.url) {
    return logo.url
  }
  return undefined

}
