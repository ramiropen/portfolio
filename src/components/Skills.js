// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Container, Row, Col } from 'react-bootstrap';

// export const Skills = () => {
//     const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//     };
//     return (
//         <section className="skill" id='skills'>
//             <Container>
//                 <Row>
//                     <Col>
//                         <div className='skill-bx'>
//                             <h2>Skills</h2>
//                             <p>LOREM IPSUM CARE OTHER HAS NATURE FOR SURE<br></br>More Lorem IPSUM FINALLY SPACE CONTAINER MUST LAST</p>
//                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                                 <div>
//                                     <img src={} alt='Image' />
//                                     <h5>First Project</h5>
//                                 </div>
//                                 <div>
//                                     <img src={} alt='Image' />
//                                     <h5>Second Project</h5>
//                                 </div>
//                                 <div>
//                                     <img src={} alt='Image' />
//                                     <h5>Third Project</h5>
//                                 </div>
//                                 <div>
//                                     <img src={} alt='Image' />
//                                     <h5>Fourth Project</h5>
//                                 </div>
//                             </Carousel>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//             <img className='background-image-left' src={colorSharp} alt='Image' />
//         </section>
//     )
// }