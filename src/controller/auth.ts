import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'

const suchSecret = "soC0mplex1tyV3rySecuri7y.Wow!"

export const login = function(req: Request, res: Response)  {
  const token = jwt.sign({ 
    id: '',
    user: '',
    role: 'fancy_pants',
  }, suchSecret, { expiresIn: '1m'})
  res.json({ token })
}

export const verifyToken = function(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (authorization == null) { 
    res.sendStatus(401)
  }
  
  const auth_parts = authorization?.split(' ') ?? []
  if(auth_parts && auth_parts.length > 2) {
    try {
      const decoded: any = jwt.verify(auth_parts[1], suchSecret)
      if(decoded['role'] === 'fancy_pants') {
        next()
      } else {
        res.status(403)
        res.json({
          message: 'not permitted'
        })
      }
    } catch(err: any) {
      res.status(401)
      res.json({
        message: err.message
      })
    }

  }
}