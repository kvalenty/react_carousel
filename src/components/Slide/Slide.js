import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.module.css';

export class Slide extends React.PureComponent {
  render() {
    return (
      <li
        key={this.props.image}
        className={styles.item}
        style={{
          transform: `translateX(${this.props.translateCord}px)`,
          transition: `transform ${this.props.animationDuration}ms`,
        }}
      >
        <img src={this.props.image} alt="desc" />
      </li>
    );
  }
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  translateCord: PropTypes.number.isRequired,
  animationDuration: PropTypes.number.isRequired,
};
