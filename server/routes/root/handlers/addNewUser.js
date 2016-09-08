const User = require('server/models')['user'];
const debug = require('debug')('routes:users:addNewUser');

const ERR_SOMETHING_DUPLICATED = 0;
const ERR_USER_DUPLICATED = 1;
const ERR_MAIL_DUPLICATED = 2;

function addNewUser(req, res) {

  const user = new User( req.body.user );

  user.save()
    .then( ( result ) => {
      console.log(result);
      console.log('User saved successfully');
      res.json({ success: true });
    })
    .catch((err) => {

      console.log(err)

      const success = false;
      let code = ERR_SOMETHING_DUPLICATED;

      if (err.name === 'MongoError' && err.code === 11000) {
        if( (err.message).includes('index: username') ) {
          code = ERR_USER_DUPLICATED;
        }
        else if ( (err.message).includes('index: email') ) {
          code = ERR_MAIL_DUPLICATED;
        }

        return res.status(500).send( { success, code });
      }

      // Some other error
      return res.status(500).send(err);
    })

}

module.exports = addNewUser