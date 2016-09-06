const User = require('server/models')['user'];

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

      if (err.name === 'MongoError' && err.code === 11000) {
        if( (err.message).includes('index: username') ) {
          msgResponse = { succes: false, message: 'User already exist!' };
        }
        else if ( (err.message).includes('index: email') ) {
          msgResponse = { succes: false, message: 'Mail already exist!' };
        }
        else {
          msgResponse = { succes: false, message: 'Some duplicated data!' };
        }
        console.log(msgResponse)
        return res.status(500).send(msgResponse);
      }

      // Some other error
      return res.status(500).send(err);
    })

}

module.exports = addNewUser