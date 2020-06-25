import React from 'react';
// import PropTypes from 'prop-types';
import { CarouselList } from './CarouselList/CarouselList';

export class Carousel extends React.Component {
  state = {
    ...this.props,
    currentSlide: 0,
  };

  render() {
    return (
      <div className="Carousel">
        <CarouselList
          images={this.state.images}
          currentSlide={this.state.currentSlide}
          frameSize={this.state.frameSize}
          itemWidth={this.state.itemWidth}
          animationDuration={this.state.animationDuration}
        />
      </div>
    );
  }
}

// Carousel.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
