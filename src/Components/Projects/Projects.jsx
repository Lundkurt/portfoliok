import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import {project} from "../../Api/api"

console.log(project);

function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <Container className="d-flex flex-col gap-2">
      {project.map((post) => {
        return (
        <Card key={post.title} className='d-flex flex-row gap-2'>
          <Card.Img className="project-image" variant="left" src={post.src}/>
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
          <div className="d-flex flex-col justify-content-end buttons">
          {post?.sitelink && (<Button href={post.sitelink}>
              Site
            </Button>)}
            {post?.gitlink && (<Button href={post.gitlink}>
              Github
            </Button>)}
            {post?.discord && (<Button href={post.discord}>
              Discord
            </Button>)}
          </div>
          
        </Card>);
      })}
      
      </Container>
    </div>
  )
}

export default Projects
