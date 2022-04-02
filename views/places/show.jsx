const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className ="inactive">
            No Comments Yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4">
                    <h2 className="rant">{c.rant ? 'Rant!  ' : 'Rave!   '}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    {rating}
                    <br />
                </div>
            )
        })
    }
//   console.log('data here', data.place.pic)
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
                  <hr />
                  <div className="col-sm-6">    
                  <h2>Comments</h2> 
                    {comments} 
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