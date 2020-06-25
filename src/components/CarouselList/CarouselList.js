import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselList.module.css';
import { Button } from '../Button/Button';
import { Slide } from '../Slide/Slide';

export class CarouselList extends React.PureComponent {
  state = {
    translateX: 0,
    translateCord: this.props.images
      .map((el, index) => {
        const itemWidth = -this.props.itemWidth;
        const start = itemWidth * (this.props.images.length / 2 - 1);

        return start + index * this.props.itemWidth;
      }),
  }

  translateValue = (this.props.itemWidth * this.props.frameSize);

  translateStart = (-1 * this.props.itemWidth
    * ((this.props.images.length / 2)));

  // getTranslate = this.props.images
  //   .map((el, index) => this.translateStart + index * this.props.itemWidth);

  showNext = () => {
    this.setState((prevState) => {
      const movedSlides = prevState.translateCord.splice(0, this.props.frameSize);

      prevState.translateCord.push(...movedSlides);
      const temp = prevState.translateCord;
      // console.log(this.state.translateCord, '---', temp);

      return {
        // translateX: (prevState.translateX + this.translateValue),
        translateX: prevState.translateX + 1,
        translateCord: temp,
      };
    });
  };

  showPrev = () => {
    this.setState((prevState) => {
      const endElement = prevState.translateCord.length - this.props.frameSize;
      const movedSlides = prevState.translateCord.splice(0, endElement);

      prevState.translateCord.push(...movedSlides);
      const temp = prevState.translateCord;

      return {
        // translateX: (prevState.translateX - this.translateValue),
        translateX: prevState.translateX + 1,
        translateCord: temp,
      };
    });
  };

  render() {
    return (
      <div
        className={styles.carouselWrapper}
        style={{
          width: this.translateValue,
        }}
      >
        <ul
          className={styles.CarouselList}
          style={{
            height: this.props.itemWidth,
          }}
        >
          {this.props.images.map((img, index) => (
            <Slide
              image={img}
              key={img}
              animationDuration={this.props.animationDuration}
              translateCord={this.state.translateCord[index]}
            />
          ))}
        </ul>

        <Button clickAction={this.showPrev} action="Prev" />
        <Button clickAction={this.showNext} action="Next" />
      </div>
    );
  }
}

CarouselList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemWidth: PropTypes.number.isRequired,
  frameSize: PropTypes.number.isRequired,
  animationDuration: PropTypes.number.isRequired,
};
