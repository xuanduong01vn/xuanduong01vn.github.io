import passport from "passport";
import localStratery from "passport-local";
import Model from "../models/model.js";
import jwtStratery from "passport-jwt";


// passport.use(
//     new LocalStratery((username, password, done) => {
//     User.findOne({ username }, (err, user) => {
//     if (err) return done(err);
//     if (!user) return done(null, false);
//     user.comparePassword(password, done);
//     });
//     })
//     );
//     const cookiesExtractor = (req) => {
//     let token = null;
//     if (req && req.cookies) {
//     token = req.cookies["access_token"];
//     }
//     return token;
//     };
//     passport.use(
//     new JwtStratery(
//     {
//     jwtFromRequest: cookiesExtractor,
//     secretOrKey: "QuocLiem",
//     },
//     (payload, done) => {
//     User.findById({ _id: payload.sub }, (err, user) => {
//     if (err) return done(err, false);
//     if (user) return done(null, user);
//     else return done(null, false);
//     });
//     }
//     )
//     );


const LocalStratery = localStratery.Strategy;
const JwtStratery = jwtStratery.Strategy;

passport.use(
    new LocalStratery((email, password,done)=>{
        Model.User.findOne({email},(err,user)=>{
            if(err) return  done(err);
            if(!user) return done(null,false);
            user.comparePassword(password,done);
        })
    })
);


const cookiesExtractor = (req)=>{
    let token =null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
};

passport.use(
    new JwtStratery({
        jwtFromRequest: cookiesExtractor,
        secretOrKey: "xuanduong",
    },
    (payload,done)=>{
        Model.User.findById({_id: payload.sub},(err,user)=>{
            if(err) return  done(err, false);
            if(user) return done(null, user);
            else return done(null, false);
        })
    })
)

