import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticateToken = (req,res,next) => {
    const token = req.cookies.jwt;

    if(token == null){
      return res.status(401).json({
          message:"Not logged in.",
      });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err,payload)=>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = payload;
        next();
    });
   
};

export const verifyAccessLevel = (req, res, next)=>{
    if(req.user.id != req.params.id){
        return res.status(403).json({
            message:"Can't access user.",
        })
      }
      next();
};

