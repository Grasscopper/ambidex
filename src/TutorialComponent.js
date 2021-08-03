import React from 'react'

const TutorialComponent = (props) => {
  return (
    <section className="hero is-small is-primary" onClick={props.handleTutorial}>
      <div className="hero-body">

        <p className="title">
          Tutorial
        </p>
        <p className="subtitle">
          How to Play the Ambidex Game
        </p>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          What is the goal of the Ambidex Game?
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            9 persons are trapped in an unknown, isolated location.
            The mastermind, known as Zero, kidnapped them and is forcing them to play the Ambidex Game.
            They each have a bracelet chained onto their left wrist.
            Each BRACELET displays a points value that starts at 3.
            Zero explains the rules of the game to the prisoners:
            </p>
            <strong>
            To win and escape, you must reach 9 points on your BRACELET.
            </strong>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          How do I earn points?
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            To earn points, teams of players must enter the AB Room.
            Your team will play against a randomly assigned team.
            The opponent of a team is always displayed with a red character card.
            Each team has 2 choices, ALLY or BETRAY, that will determine who gains and loses points.
            </p>
            <p>
            If you and the opposing team both ALLY, you both gain +2 points.
            </p>
            <p>
            If a team chooses to BETRAY, and the opponent chooses to ALLY,
            then the traitor gains +3 points and the opponent loses -2 points.
            </p>
            <p>
            If both teams choose to BETRAY, then 0 points are awarded to each team.
            </p>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          How are teams assigned?
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            Teams of 2, known as PAIRs, and teams of 1, known as SOLOs,
            will be randomly assigned at the start of each day.
            With 9 players, that means there are 3 PAIRs and 3 SOLOs for a total of 6 teams.
            The player will have 5 potential teams to go up against in the AB Room.
            </p>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          How do I know if I should trust someone?
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            Each person has a Trust stat which is a number value on their character card.
            The number represents the percentage chance that the opposing team will choose to ALLY.
            Before you enter the AB Room, you can spend time with up to 2 players to build their Trust.
            Trust is also represented by the number of hearts on their character card.
            </p>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          What are the consequences of my decision?
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            If both teams ALLY, Trust is built.
            Your partner, if any, and the opposing team will Trust
            you more by 20 points (+1 Hearts).
            </p>
            <p>
            However, if you BETRAY your opponent,
            they will never trust you again and will almost always choose to BETRAY you (90% chance to Betray).
            </p>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          Notes
          </h1>

          <div className="content" style={{ color: "white" }}>
            <p>
            In a PAIR, the chance of a team choosing to ALLY
            is the average value of both teams ( (Trust + Trust) / 2 ).
            </p>
            <p>
            You have full control of your choice in the AB Room
            and you can see the chance your opponent will trust you.

            For the other two games being played, amongst the 4 other teams,
            the chance of them choosing to ALLY is always 50%.
            </p>
          </div>
        </section>

      </div>
    </section>
  )
}



export default TutorialComponent

// 9 persons are trapped in an unknown, isolated location. The mastermind known as Zero has kidnapped these people and is forcing them to play the Ambidex Game.
//
// They awaken with a bracelet chained onto their left wrist. Each BRACELET displays their point value. Each player starts with 3 points on their BRACELET. To escape, Zero tells them that they must reach 9 points on their BRACELET.
//
// Teams of 2, known as PAIRs, and teams of 1, known as SOLOs, will be randomly assigned each day (a day is a round of the Ambidex Game). With 9 players, that means there are 3 PAIRs and 3 SOLOs for a total of 6 teams. The player will have 5 potential teams to go up against in the AB Room.
//
// To earn points, players must enter the AB Room. Your team will play against a randomly assigned team. The opponent of a team is always with a red character card. Each team has 2 choices, ALLY or BETRAY, that will determine who gains and loses points.
// If you and the opposing team both ALLY, you both gain 2 points.
// If a team chooses to BETRAY, and the opponent chooses to ALLY, then you gain +3 points and they lose 2 points.
// If both teams choose to BETRAY, then 0 points are awarded to each team.
//
// Each person has a Trust stat which is a number value on their character card. The number represents the percentage chance that the opposing team will choose to ALLY. Before the decision of allying or betraying, you can spend time with up to 2 players to build their Trust. Trust is also represented by the number of hearts.
//
// If both teams ALLY, Trust is built. Your partner, if any, and the opposing team will both Trust you more by 20 points (+1 Hearts). However, if you BETRAY your opponent, they will never trust you again and will almost always choose to BETRAY you (90% chance to Betray).
//
// Notes:
// In a PAIR, the chance of a team choosing to ALLY is the average value of both teams ( (Trust + Trust) / 2 ).
// You have full control of your choice in the AB Room and you can see the chance your opponent will trust you. For the other two games being played amongst the 4 other teams, the chance of them choosing to ALLY is always 50%.
