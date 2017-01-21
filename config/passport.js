var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var User = require('../model/model');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  //- passport auth
  passport.use(new GoogleStrategy({
      clientID:     goog.GOOGLE_CLIENT_ID,
      clientSecret: goog.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
      passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      process.nextTick(function () {
        User.findOne({ id: profile.id }, function (err, user) {
          if (err)
	    			return done(err);
          if (user)
	    			return done(null, user);
          else {
            var newUser = new User();
            newUser.id = profile.id;
            newUser.token = accessToken;
            newUser.username = profile.displayName;
            newUser.email = profile.emails[0].value;
            
            newUser.save(function (err) {
	    				if (err)
	    					throw err;
	    				return done(null, newUser);
	    			});
            console.log(profile);
          }
        });
      });
    }
  ));
}




