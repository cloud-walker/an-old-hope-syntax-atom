import React, {Component} from 'react'

/**
 * DeathStar component
 *
 * @param {Object} children
 */
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
  /**
   * These aren't the droids you're looking for.
   *
   * @type {Array}
   */
  static $droids = [
    'R2-D2',
    'C-3PO'
  ]

  constructor(name) {
    super(name)

    this.name = name
  }

  /**
   * Ask Ben for advice.
   *
   * @return {String}
   */
  askKenobi() {
    if (this.isBlindFolded()) {
      return this.useTheForceLuke()
    }

    this.searchFeelings()
  }

  /**
   * Rendering battlefield.
   *
   * @return {Object}
   */
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
