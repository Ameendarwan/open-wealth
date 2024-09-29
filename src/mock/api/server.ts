/* eslint-disable import/prefer-default-export */
import { setupServer } from 'msw/node'
import { handlers } from './handler'

export const server = setupServer(...handlers)
