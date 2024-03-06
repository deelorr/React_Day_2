import { useState } from 'react'

const NameChange = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  })

  const changeName = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Christian"
      }
    })
  }

  return (
    <div>
      <h1>Player: {game.player.name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default NameChange