import React from 'react'


const Iframes = () => {
    return (
        <div className="project-start-area  bg-color py-5">
            <div className="container">

                <div className="text-center">
                    <h4 className="text-white">create your own game</h4>
                    <h2 className="text-white">Coding is easy like this</h2>
                </div>

                <div className="row mt-5 balloon-popping-iframes">
                    <div className="col-12 col-md-8">
                        <h4 className="text-white text-center">Game</h4>
                        <iframe style={{ width: '100%', height: '560px' }} title="" src="https://balloon-popping-stem.web.app"></iframe>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className="text-white text-center">Leaderboard</h4>
                        <iframe style={{ width: '100%', height: '560px' }} title="" src="https://balloon-popping-stem.web.app/leaderboard_fullpage.html"></iframe>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h4 className="text-white">Build this game with</h4>
                    <h2 className="text-white">HTML #201</h2>
                </div>

            </div>
        </div>
    )
}

export default Iframes