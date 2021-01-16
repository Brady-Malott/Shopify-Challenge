import React, { Fragment, Component } from 'react';
import { Nominee } from './Nominee';

export class Nominees extends Component {
  constructor(props) {
    super(props);
    this.nomineesFromLS =
      localStorage.getItem('nominees') === null
        ? []
        : JSON.parse(localStorage.getItem('nominees'));
  }

  componentDidMount() {
    this.props.addNomineesFromLS(this.nomineesFromLS);
  }

  render() {
    return (
      <Fragment>
        {this.props.nominees.length > 0 && (
          <div id='right-side'>
            <div className='panel' id='nominees-panel'>
              <h4 className='mb-10'>Your Nominees</h4>
              {this.props.nominees.map((nominee, index) => (
                <Nominee movie={nominee} key={index} index={index} />
              ))}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
