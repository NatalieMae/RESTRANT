const React = require('react')
const Def = require('../default')

function show (data) {
  console.log('data here', data.place.pic)
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
          </main>
          <img src='../images/BakeryCounter.jpg' alt={data.place.name}/>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form> 
            <li><a href='/places'>Go Back to Places</a></li>
        </Def>
    )
}

module.exports = show