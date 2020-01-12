import React from 'react';
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import picture from '../../assets/pictures/my-picture-s.jpg'

const Home = () => {

  return (
    <header className="home">
      <div className="home__header">
        <h1 data-aos="fade-right" data-aos-duration="1400" className="home__header-h1">Hello,</h1>
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" className="home__header-h2">A bit about me:</h2>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">
          <NavigationItem class="home__header-link" route="/cv">CV</NavigationItem>
          <NavigationItem class="home__header-link" route="/projects">Projects</NavigationItem>
        </div>
      </div>
      <div className="home__picture">
        <img className="home__picture-img" src={picture} alt="My_image" />
      </div>
    </header>
  );
}

export default Home;