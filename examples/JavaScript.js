import React, {Component} from 'react'

const DeathStar = ({children}) =>
  <main>
    <section className="airstrip">
      <ul className="ships">
        <li className="ship"></li>
        <li className="ship"></li>
        <li className="ship"></li>
        <li className="ship"></li>
        <li className="ship"></li>
      </ul>
    </section>
    {children}
  </main>

class Jedi extends Component {
  static $droids = [
    'R2-D2',
    'C-3PO'
  ]

  constructor(name) {
    super(name)

    this.name = name
  }

  askKenobi() {
    if (this.isBlindFolded()) {
      return this.useTheForceLuke()
    }

    this.searchFeelings()
  }

  render() {
    return (
      <div className="battlefield">
        <button>Avoid the dark side</button>

        <DeathStar>
          <button>Use the force {this.props.name}</button>
        </DeathStar>
      </div>
    )
  }
}

export default Jedi
