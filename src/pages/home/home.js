import React from 'react';
import { Header, OurServices, AboutUs, GoogleMaps, Contact } from 'Components';
import Carousel from 'nuka-carousel';

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <div className='slider'>
          <Carousel>
            <article>
              <div>
                <h1>NG Engenharia Ambiental 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </article>
            <article>
              <div>
                <h1>NG Engenharia Ambiental 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </article>
          </Carousel>
        </div>
        <AboutUs />
        <OurServices />
        <GoogleMaps />
        <Contact />
      </div>
    );
  }
}
