import React, {useState} from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import {project} from "../../Api/api"
import ImageModal from '../Common/Modal';

console.log(project);

function Projects() {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <div className='projects'>
      <h1>My projects</h1>
      <Container className="d-flex flex-column gap-2 justify-content-center">
      {project.map((post) => {
        return (
        <Card key={post.title} className='d-flex flex-column flex-md-row gap-2'>
          <Card.Img className="project-image" variant="left" src={post.src} onClick={() => handleImageClick(post.src)}/>
          <div>
            <Card.Title className="project-title">{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <div>
              <Card.Text>Stack</Card.Text>
              <ul>
              {post.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
              </ul>
            </div>
          </div>
          <div className="d-flex flex-row flex-md-column gap-2 buttons justify-content-md-end">
          {post?.sitelink && (<Button className="cta site" href={post.sitelink}>
              Site
            </Button>)}
            {post?.gitlink && (<Button className="cta git" href={post.gitlink}>
              Github
            </Button>)}
            {post?.discord && (<Button className="cta dis" href={post.discord}>
              Discord
            </Button>)}
          </div>
          
        </Card>);
      })}
       <ImageModal show={!!selectedImage} onHide={() => setSelectedImage('')} src={selectedImage} />
      </Container>
    </div>
  )
}

export default Projects
