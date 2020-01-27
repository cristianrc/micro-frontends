import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  render() {
    const { onHelloEvt } = this.props;
    return (
      <div className="exampleComponent">
        <img src="/images/react.png" alt="React Logo" className="logo" />
        <p>Web Component con React <strong className="has-text-primary">V2.5</strong></p>
        <button type="submit" className="button is-fullwidth is-primary" onClick={onHelloEvt}>Enviar Mensaje</button>
      </div>
    )
  }
}