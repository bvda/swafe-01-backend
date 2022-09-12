import { Request, Response } from 'express'
import { clients } from '../clients'

export const list = function(req: Request, res: Response) {
  return res.json(clients)
}

export const faultyList = function(req: Request, res: Response) {
  if(Math.random() > 0.5) {
    res.status(500)
    res.send({
        status_code: 500,
        message: 'An error has occured'
      })
  } else {
    res.json({ clients })
  }
}