const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="../public/images/2022StMarysTower.jpg" alt="St Mary's Hospital Milw, WI. Historical Tower" />
              </div>
              Photo By Natalie Leonard
          </main>
      </Def>
    )
  }

module.exports = error404

//404 img src not working alt shows up not image. 4.2.2022