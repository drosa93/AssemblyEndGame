import React from 'react'

export default function WinOrLose(props) {

  return (
    <>
    {props.gameIsLost && 
        <>
        <h3>TRY AGAIN! the right word was</h3>
        <h2> {props.currentWord.toUpperCase()}</h2>
      </>
      }
    {props.gameIsWon &&
        <>
        <h2>YOU DID THAT SHIT!</h2>
        </>
    }
    </>
  )
}
