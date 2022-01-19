const { JWT_SECRET } = require("../configs");
const passport = require("passport");

// --- Methods ---
// JWT
const JwtStrategy = require("passport-jwt").Strategy;
// 3 ways to login - Local, Google, Facebook
const LocalStrategy = require("passport-local").Strategy;
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const FacebookTokenStrategy = require("passport-facebook-token");

const { ExtractJwt } = require("passport-jwt");
