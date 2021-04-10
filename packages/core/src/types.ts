import { CSS } from './stitches.config'

export type EssentialsHTMLProps = {
  className?: string
  id?: string
}

export type FondasiComponentProps<P extends any> = {
  css?: CSS
} & EssentialsHTMLProps & P
