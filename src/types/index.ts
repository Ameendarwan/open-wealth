import { FC, PropsWithChildren } from 'react'

/**
 * Adding the children prop to React 18 FC type
 */
export type FCC<P = {}> = FC<PropsWithChildren<P>>
