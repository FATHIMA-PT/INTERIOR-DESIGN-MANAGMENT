import React from "react";
import { Button, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="align-items-center justify-content-center ">
        <h2 className="text-primary fw-bolder text-center mt-5">
          HOME DESIGN{" "}
        </h2>
        
          <div className="  container   justify-content-around mt-5 ">
            <div className="row" >
              <div className="col-4">
                <Card className="" style={{height:'575px'}}>
                  <Card.Img
                    variant="top"
                    className="img img-fluid p-3"
                    style={{ height: "265px" }}
                    src="https://cdn.decoist.com/wp-content/uploads/2014/09/Shaping-a-unique-conversation-hub-in-the-corner.jpg"
                  />
                  <Card.Body style={{textAlign:"justify"}} >
                    <Card.Title className="text-center">
                      Visiting Room
                    </Card.Title>
                    <Card.Text>
                      The key to creating a fabulous guest room that your
                      friends and family won't want to leave is to treat it as
                      if you were going to stay in it yourself. Give it all the
                      comforts of home: the best mattress, a deep cozy duvet,
                      the tactile throws and plenty of plush towels.
                    </Card.Text>
                    <Button  className="btn btn-outline-warning text-light">More</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4">
                <Card  className="">
                  <Card.Img 
                    variant="top"
                    className="img img-fluid p-3"
                    style={{ height: "265px" }}
                    src="https://th.bing.com/th/id/OIP.-TzXcXg39pZBacUy_ELANQHaHb?rs=1&pid=ImgDetMain"
                  />
                  <Card.Body className="" style={{textAlign:"justify"}}>
                    <Card.Title className="text-center">Dining Room</Card.Title>
                    <Card.Text>
                      It is often believed that a family that eats together,
                      stays together, thereby making the dining room one of the
                      most indispensable areas in a house! Whether you are
                      looking for a compact dining unit or a spacious one,
                      here's your daily dose of dining room interior design
                      inspiration to start your home interior journey today.
                    </Card.Text>
                    <Button  className="btn btn-outline-warning text-light">More</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4">
                <Card  className=""  style={{height:'575px'}}>
                  <Card.Img
                    variant="top"
                    className="img img-fluid p-3"
                    style={{ height: "265px" }}
                    src="https://i.pinimg.com/originals/c5/66/98/c56698df58986b40f226558f65c380dd.jpg"
                  />
                  <Card.Body style={{textAlign:"justify"}}>
                    <Card.Title className=" text-center">Kitchen</Card.Title>
                    <Card.Text>
                      The modern home kitchen design in India is more seamless
                      and smooth. You see more in-built appliances, the cabinets
                      have profile handles or are push-to-touch. You see
                      lighting divided into ambient and task lights, typically
                      under cabinet lighting, while the materials used for
                      cabinet finishes.
                    </Card.Text>
                    <Button  className="btn btn-outline-warning text-light">More</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
           
          </div>

        </div>
     
    </>
  );
}

export default Home;