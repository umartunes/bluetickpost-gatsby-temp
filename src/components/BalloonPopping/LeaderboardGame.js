import React from 'react'
import Leaderboard from './Leaderboard'

const LeaderboardGame = () => {

    return (
        <div className="project-start-area bg-color py-5">
            <div className="container">

                {/* <div className="text-center">
                    <h4 className="text-white">create your own game</h4>
                    <h2 className="text-white">Coding is easy like this</h2>
                </div> */}

                <div className="row mt-5 balloon-popping-iframes">
                    <div className="col-12 col-md-8">
                        <h4 className="text-white text-center">Build this game with: HTML201</h4>
                        <iframe title="" src="https://balloon-popping-stem.web.app"></iframe>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className="text-white text-center">Leaderboard 🏆</h4>
                        <Leaderboard />
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h4 className="text-white">Coding is fun</h4>
                    <h2 className="text-white">Start Today!</h2>
                </div>

            </div>
        </div>
    )
}

export default LeaderboardGame