const React = require('react')
const Def = require('../default')

function show (data) {
  console.log('data here', data.place.pic)
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                  <h1>{data.place.name}</h1>
                      <img src={data.place.pic} alt={data.place.name}/>
                  <h3>
                      Located in {data.place.city}, {data.place.state}
                  </h3>
                  </div>
                  <div className="col-sm-6">    

                  <h2>
                      Description
                  </h2>
                  <h3>
                      {data.place.showEstablished()}
                  </h3>
                  <h4>
                      Serving {data.place.cuisines}
                  </h4>
              </div>
                   <a href="https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Slashio Photography</a> on <a href="https://unsplash.com/s/photos/coffee-and-a-cookie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>     
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
              </form> 
                    <li><a href='/places'>Go Back to Places</a></li>
            </div>
          </main>
        </Def>
    )
}

module.exports = show