import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const Project = (props) => {

  const [index, setIndex] = React.useState(0)

  const technologies = props.technologies.map((technology, index) => <li className="projects__project__describe-technologies-tech" key={index}>{technology}</li>)

  return (
    <div className="projects__project">
      <div className="projects__project__imgs" data-aos="fade-right" data-aos-offset="200" data-aos-duration="900">
        <Gallery index={index} onRequestChange={i => setIndex(i)}>
          {props.images.map(image => <GalleryImage key={image} src={image} objectFit="cover" />)}
        </Gallery>
      </div>
      <div className="projects__project__describe" data-aos="fade-left" data-aos-offset="200" data-aos-duration="900">
        <h3 className="projects__project__describe-subtitle" >{props.title}</h3>
        <p className="projects__project__describe-text">{props.describe}</p>
        <ul className="projects__project__describe-technologies">
          {technologies}
        </ul>
        <a className="projects__project__describe-link" href={props.link}>Github Repository</a>
      </div>
    </div>
  );
}

export default Project;