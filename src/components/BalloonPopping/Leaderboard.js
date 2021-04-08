import React, { useState, useEffect, forwardRef } from 'react'
import { firestore } from '../../utils/firebase'
import FlipMove from 'react-flip-move';
import ScoreCard from './ScoreCard'

const Leaderboard = () => {

    const [gameData, setGameData] = useState([
        { playerId: '0', playerName: "Loading...", score: 0 },
        { playerId: '1', playerName: "Loading...", score: 0 },
        { playerId: '2', playerName: "Loading...", score: 0 },
        { playerId: '3', playerName: "Loading...", score: 0 },
        { playerId: '4', playerName: "Loading...", score: 0 },
        { playerId: '5', playerName: "Loading...", score: 0 },
        { playerId: '6', playerName: "Loading...", score: 0 },
        { playerId: '7', playerName: "Loading...", score: 0 },
        { playerId: '8', playerName: "Loading...", score: 0 },
        { playerId: '9', playerName: "Loading...", score: 0 },
    ])

    const [sortedGameData, setSortedGameData] = useState([])

    // SortData
    useEffect(() => {

        // Creates a copy without object references
        let gameDataCopy = JSON.parse(JSON.stringify(gameData))
        gameDataCopy.sort((a, b) => (a.score > b.score) ? -1 : 1)

        let topTen = gameDataCopy.slice(0, 10)

        setSortedGameData(topTen)

    }, [gameData])

    // FetchData
    useEffect(() => {

        firestore.collection("BalloonPopping").doc("Hackathon_April_2021")
            .onSnapshot((doc) => {

                if (doc.exists) {

                    let data = doc.data()

                    // console.log(data.gamePlayed)
                    let gamePlayed = data.gamePlayed
                    setGameData(gamePlayed)

                } else {
                    console.log("No game data available")
                }

            })

    }, [])

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
                        <h4 className="text-white text-center">Leaderboard 🏆</h4>

                        <FlipMove easing="cubic-bezier(0.13, 1.15, 0.8, 1.5)" duration={600} staggerDurationBy={260}>
                            {sortedGameData.map((game, i) => {
                                let rank = i + 1;
                                let uniqeKey = game.gameId || (game.playerId + game.playerName + game.score);

                                return <ScoreCard key={uniqeKey} game={game} rank={rank} />
                            })}
                        </FlipMove>
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

export default Leaderboard