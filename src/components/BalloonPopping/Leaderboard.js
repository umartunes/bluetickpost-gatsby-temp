import React, { useState, useEffect } from 'react'
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
        { playerId: '10', playerName: "Loading...", score: 0 },
        { playerId: '11', playerName: "Loading...", score: 0 },
    ])

    const [sortedGameData, setSortedGameData] = useState([])

    // SortData
    useEffect(() => {

        // Creates a copy without object references
        let gameDataCopy = JSON.parse(JSON.stringify(gameData))
        gameDataCopy.sort((a, b) => (a.score > b.score) ? -1 : 1)

        let topTen = gameDataCopy.slice(0, 12)

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
        <div className="Leaderboard">
            <FlipMove easing="cubic-bezier(0.13, 1.15, 0.8, 1.5)" duration={200} staggerDurationBy={175}>
                {sortedGameData.map((game, i) => {
                    let rank = i + 1;
                    return <ScoreCard key={game.gameId} game={game} rank={rank} />
                })}
            </FlipMove>
        </div>
    )
}

export default Leaderboard