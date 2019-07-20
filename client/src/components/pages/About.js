import React from 'react'

export default function About() {
    return (
        <div className="container">
            {/*pb-2 adds padding on the bottom; mt-4 adds margin on the top; mb-2 adds margin on the bottom*/}
            <h2 className="pb-2 mt-4 mb-2 border-bottom">Who made this?</h2>
            <p className="text-right">tldr; Richie Goulazian, 2019 CRN graduate</p>
            <p>This was a fun excuse to teach myself the basics of building a web application. I knew that I needed a tangible goal 
                for a first project so this seemed like a good way to achieve that while also providing something for my highschool. 
                If you are interested in <b>how</b> I made this, take a look at <a className="badge badge-secondary" href="#how-made">How was this made?</a>
            </p>
            <h2 className="pb-2 mt-4 mb-2 border-bottom" id="how-made">How was this made?</h2>
            <p className="text-right">tldr; Made using modern JavaScript frameworks like ReactJS</p>
            <p>
                This web application has a <a className="badge badge-info" href="https://reactjs.org/">ReactJS</a> front-end, meaning that everything you see
                and interact with is being handled by this framework.
                The back-end is being handled by the <a className="badge badge-info" href="https://expressjs.com/">ExpressJS</a> framework. In this context, a back-end refers to 
                things like the saving and loading of data, and the Google login system.
            </p>
            <p>
                Here is a full list of the tools used to build this web-app:
            </p>
            <dl>
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>Bootstrap</li>
                <li>MySQL</li>
            </dl>
        </div>
    )
}
