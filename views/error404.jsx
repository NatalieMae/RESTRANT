const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="./images/2021EasterPurpleChick.jpg" width={500} height={600} alt="St Mary's Hospital Milw, WI. Historical Tower" />
              </div>
              Photo By Natalie Leonard
          </main>
      </Def>
    )
  }

module.exports = error404