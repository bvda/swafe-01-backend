import { Request, Response } from 'express'
import { clients } from '../clients'

export const list = function(req: Request, res: Response) {
  return res.json(clients)
}