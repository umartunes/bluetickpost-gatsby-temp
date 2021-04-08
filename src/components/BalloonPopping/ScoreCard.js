import React, { forwardRef } from 'react'

const ScoreCard = forwardRef((props, ref) => {
    let { game, rank } = props
    return <div class={`card ${rank <= 3 ? "bg-warning font-weight-bold" : "bg-light" } mb-1`} ref={ref}>
        <div class="card-header d-flex justify-content-between">

            <span>{rank}. {game.playerName}</span>
            <span>{game.score}</span>
        </div>
    </div>
});

export default ScoreCard