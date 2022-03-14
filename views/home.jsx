const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                  <img src="./images/redvelvetcupcake.jpg" width={450} height={500} alt="Red Velvet Cupcake" />
                </div>
                Photo by <a href="https://unsplash.com/@luisanazl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">luisana zerpa</a> on <a href="https://unsplash.com/s/photos/desserts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home