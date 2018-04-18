/**
 * Created by si8822fb on 4/17/2018.
 */
module.exports = {
    twitterAuth:{
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
    }
}