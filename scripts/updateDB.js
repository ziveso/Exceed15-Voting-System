const firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyBSNMzIG9Ve4ZMzgQrl1mq07zwe2YMGAgk',
  authDomain: 'exceed15-7791a.firebaseapp.com',
  databaseURL: 'https://exceed15-7791a.firebaseio.com',
  projectId: 'exceed15-7791a',
  storageBucket: 'exceed15-7791a.appspot.com',
  messagingSenderId: '881122743610'
})

const filepath = process.argv[2]
const data = require(`../${filepath}`)
const keys = Object.keys(data)

keys.forEach(key => {
  firebase.database().ref().child(key).set(data[key])
    .then(() => {
      console.log('Finished')
      process.exit()
    })
    .catch(err => {
      console.log(err)
      process.exit()
    })
})
