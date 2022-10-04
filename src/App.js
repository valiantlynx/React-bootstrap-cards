import React, { useState, useEffect } from "react";

// Bootstrap components
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import "./bootstrap.min.css";

// Masonry layout
import Masonry from "react-masonry-component";

// My component cards
import Media from "./components/Media";
import Avatar from "./components/Avatar";
import AvatarHistory from "./components/AvatarHistory";
import ImgFake from "./components/ImgFake";
import Relative from "./components/Relative";
import Text from "./components/Text";
import Image from "./components/Image";

// Card styles
import "./sass/card.scss";

// Icons
import Icon from "@mdi/react";
import {
  mdiPencilOutline,
  mdiChevronLeft,
  mdiMapMarkerCircle,
  mdiHeartOutline,
  mdiCameraIris,
  mdiDotsVertical,
  mdiBookmarkOutline,
  mdiThumbUpOutline,
  mdiThumbDownOutline,
  mdiStarOutline,
  mdiLicense,
  mdiVectorRadius,
  mdiPinterest,
  mdiInstagram,
  mdiTwitter,
  mdiFacebook,
  mdiPhoneOutline,
  mdiChatOutline
} from "@mdi/js";

// Footer
import Footer from "./template/Footer";
import CardGradient from "./components/CardGradient";
import Date from "./components/Date";

const ImgFakeStyles = {
  backgroundImage: "url(img/img-1.png)",
  backgroundSize: "cover",
  maxWidth: "100%",
  height: "35rem",
  position: "relative"
};

//
// App

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggle = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <div className="App">
      <Container fluid="lg">
        <div className="header-example mb-5 d-flex justify-content-between align-items-center">
          <div className="me-auto">
            <Text tag="h3" className="weight-700 mt-5">
              Funny layout card using bootstrap
            </Text>
            <Text>
              An idea of ​​how to use bootstrap cards with a friendlier design.
            </Text>
          </div>
          <div className="addonz-form-inline">
            <label className="addonz-switch">
              <input className="addonz-switch-input dark" type="checkbox" />
              <span className="addonz-switch-inner" onClick={toggle}>
                {isDarkTheme ? "Dark" : "Light"}
              </span>
            </label>
          </div>
        </div>

        <Masonry className="row">
          <Col sm={12} md={6} lg={4}>
            <Card className="text-dark mb-4">
              <Image
                className="card-img"
                src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              ></Image>
              <Card.ImgOverlay className="card-overlay-purple d-flex flex-column justify-content-between align-items-start p-5">
                <div className="h1 mb-2">
                  <a className="text-white text-decoration-none" href="/#">
                    Web Design Trends
                  </a>
                </div>
                <span className="text-white">16 January 2017</span>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Relative>
                <Image
                  className="card-img-top"
                  src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Image>
                <Card.ImgOverlay>
                  <Badge bg="primary">STADISTIC</Badge>
                </Card.ImgOverlay>
              </Relative>
              <Card.Body>
                <Text tag="h4" className="card-heading">
                  News
                </Text>
                <Text tag="h6" color="muted">
                  16 January 2017
                </Text>
                <Text className="mt-4">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur excepteur
                  magna irure ex officia ea sunt in incididunt.
                </Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Media
                  className="align-items-center"
                  name="Bessie Cooper"
                  subtitle="Web designer"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/60.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Media
                  className="align-items-center"
                  name="Tom"
                  subtitle="Photography editor"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/82.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
                <a href="/#">
                  <Icon
                    path={mdiDotsVertical}
                    title="Dots"
                    color="#555"
                    size={1.2}
                  />
                </a>
              </Card.Header>
              <div className="d-flex gap-1 mb-1">
                <div className="d-flex">
                  <a href="/#">
                    <Image src="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                  </a>
                </div>
                <div className="d-flex">
                  <a href="/#">
                    <Image src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                  </a>
                </div>
              </div>
              <div className="d-flex gap-1">
                <div className="d-flex">
                  <a href="/#">
                    <Image src="https://images.pexels.com/photos/106144/rubber-duck-bath-duck-toys-costume-106144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                  </a>
                </div>
                <div className="d-flex">
                  <a href="/#">
                    <Image src="https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                  </a>
                </div>
                <div className="d-flex">
                  <a href="/#">
                    <Image src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                  </a>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <Icon path={mdiCameraIris} title="Map" size={1.2} />
                  <Text tag="b" className="h5 ms-2 mb-0">
                    23
                  </Text>
                </div>
                <Button variant="dark" size="sm">
                  Visit
                </Button>
              </div>
              <Card.Body>
                <Text tag="h6" className="card-title weight-400">
                  Photographic rolls
                </Text>
                <Text tag="h2" className="card-title weight-700">
                  Salou, Tarragona
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat...
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Relative>
                <Image
                  className="card-img-top"
                  src="https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Image>
                <Card.ImgOverlay>
                  <Badge bg="primary" className="me-2">
                    FASHION
                  </Badge>
                  <Badge bg="success">TRENDS</Badge>
                </Card.ImgOverlay>
                <div className="card-overlay-caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-auto">
                      <Text
                        tag="h4"
                        className="card-title text-white weight-400"
                      >
                        Card overlay caption
                      </Text>
                      <Text
                        tag="h6"
                        className="card-subtitle text-white weight-400"
                      >
                        Alternative caption
                      </Text>
                    </div>
                    <a href="/#">
                      <Icon
                        path={mdiDotsVertical}
                        title="Dots"
                        color="white"
                        size={1.2}
                      />
                    </a>
                  </div>
                </div>
              </Relative>
              <Card.Body>
                <Text tag="h4" className="card-heading">
                  Fashion today
                </Text>
                <Text tag="h6" color="muted">
                  16 January 2017
                </Text>
                <Text className="mt-4">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur excepteur
                  magna irure ex officia ea sunt in incididunt.
                </Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Media
                  className="align-items-center"
                  name="Sharon Martinez"
                  subtitle="Photography"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/9.jpg"
                    size="60"
                    className="me-3"
                  ></Avatar>
                </Media>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Relative>
                <Image
                  className="card-img-top"
                  src="https://images.pexels.com/photos/1424981/pexels-photo-1424981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ></Image>
                <Card.ImgOverlay>
                  <Date
                    day="22"
                    month="sep"
                    year="2021"
                    variant="danger"
                    text="white"
                  ></Date>
                </Card.ImgOverlay>
              </Relative>
              <Card.Body>
                <Text tag="h4" className="card-heading">
                  News
                </Text>
                <Text className="mt-4">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur excepteur
                  magna irure ex officia ea sunt in incididunt.
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="bg-indigo text-white text-center mb-4">
              <blockquote className="blockquote mb-0 card-body">
                <Text className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </Text>
                <footer className="blockquote-footer">
                  <Text tag="small" color="white">
                    Someone famous in
                    <Text tag="cite" title="Source Title">
                      Source Title
                    </Text>
                  </Text>
                </footer>
              </blockquote>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Text tag="h4" className="card-heading">
                  New history
                </Text>
                <Text tag="h6" color="muted">
                  Published on october 16, 2021
                </Text>
              </Card.Body>
              <Relative>
                <Image src="https://images.pexels.com/photos/6470/black-and-white-creative-desk-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
                <Card.ImgOverlay>
                  <Badge bg="primary">FASHION</Badge>
                </Card.ImgOverlay>
                <Text className="mt-4 ps-4 pe-4">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur.
                </Text>
              </Relative>
              <Card.Footer className="card-footer">
                <Media
                  className="align-items-center"
                  name="Darrell Steward"
                  subtitle="Web designer"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/35.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header className="card-header d-flex justify-content-between align-items-center">
                <Text tag="h5" className="weight-500">
                  Header text
                </Text>
                <a className="btn-link" href="/#">
                  <Icon
                    path={mdiDotsVertical}
                    color="black"
                    title="dots"
                    size={1.2}
                  />
                </a>
              </Card.Header>
              <Card.Body>
                <Media
                  className="align-items-center mb-4"
                  name="Ralph Edwards"
                  subtitle="Dog Trainer"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/91.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
                <Text tag="h5" className="card-title">
                  News
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                  <Badge bg="dark" className="me-2">
                    TRAINER
                  </Badge>
                  <Badge bg="dark">ANIMALS</Badge>
                </div>
                <Text tag="span" color="muted">
                  September 11
                </Text>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 bg-dark">
              <Card.Body>
                <div class="p-5">
                  <div class="mb-5">
                    <Text
                      tag="h1"
                      className="weight-900 text-gradient-danger font-size-50 mb-4"
                    >
                      Best photo package
                    </Text>
                    <button class="btn-pill btn-gradient-danger">
                      donwload
                    </button>
                  </div>
                  <span className="me-4 d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbUpOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      147
                    </Text>
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbDownOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      12
                    </Text>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="text-center mb-4">
              <Card.Header>
                <Media
                  className="flex-column align-items-center"
                  name="Gladys Fernandez"
                  subtitle="Marketing Coordinator"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/18.jpg"
                    className="avatar-doble-border mb-3"
                    size="80"
                  ></Avatar>
                </Media>
              </Card.Header>
              <Card.Footer className="--card-footer">
                <a className="--card-footer-inner d-block" href="/#">
                  Follow
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Media
                  className="align-items-center"
                  name="Emma Johnson"
                  subtitle="Software Tester"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/75.jpg"
                    size="80"
                    className="me-3"
                  ></Avatar>
                </Media>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 text-center">
              <Card.Body>
                <Media
                  className="mb-5 flex-column align-items-center"
                  name="Philip Gomez"
                  subtitle="Programer"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/77.jpg"
                    size="80"
                    className="mb-3"
                  ></Avatar>
                </Media>
                <div className="d-flex justify-content-around align-items-center">
                  <a href="/#" className="card-link text-uppercase">
                    Accept
                  </a>
                  <a href="/#" className="card-link text-uppercase text-dark">
                    Denied
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Relative>
                <Image
                  className="card-img-top"
                  src="https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Image>
                <div className="card-overlay-caption">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-auto">
                      <Text
                        tag="h6"
                        className="card-subtitle text-white weight-400 mb-2"
                      >
                        Artist
                      </Text>
                      <Text
                        tag="h4"
                        className="card-title text-white weight-400"
                      >
                        Cameron Williamson
                      </Text>
                    </div>
                  </div>
                </div>
              </Relative>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span className="me-2">
                    <Icon
                      path={mdiHeartOutline}
                      title="User Profile"
                      size={1.2}
                    />
                  </span>
                  <Text tag="span" className="weight-500 font-size-20">
                    123K
                  </Text>
                </div>
                <Button variant="primary">Buy now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4" style={{ minHeight: "10rem" }}>
              <div style={ImgFakeStyles}>
                <Card.ImgOverlay>
                  <div className="pt-5 pb-5 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <Text
                        tag="h5"
                        className="card-title weight-900 font-size-30"
                        color="dark"
                      >
                        Buy Now
                      </Text>
                      <Text
                        tag="h5"
                        className="card-title weight-700 font-size-24"
                        color="dark"
                      >
                        €135
                      </Text>
                    </div>
                    <button className="button-rounded button-rounded-lg">
                      <Icon
                        path={mdiHeartOutline}
                        title="User Profile"
                        size={1.2}
                      />
                    </button>
                  </div>
                </Card.ImgOverlay>
              </div>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="text-center mb-4 has-cup">
              <div className="--card-cup bg-primary"></div>
              <Card.Body>
                <Media
                  className="mb-5 flex-column align-items-center"
                  name="Wade Warren Phillips"
                  subtitle="Nursing Assistant"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/55.jpg"
                    size="120"
                    className="mt-n5 avatar-border border-white mb-3"
                  ></Avatar>
                </Media>
                <Text className="mt-4 mb-3">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proiden
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Relative>
                <Image
                  className="card-img-top card-img-bottom"
                  src="https://images.pexels.com/photos/3584283/pexels-photo-3584283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                ></Image>
                <Card.ImgOverlay>
                  <div class="card-overlay-caption">
                    <div class="d-flex justify-content-between align-items-center">
                      <Text
                        tag="span"
                        className="bg-success weight-500 py-2 px-3 rounded-pill"
                        color="white"
                      >
                        EXCLUSIVE
                      </Text>
                      <div className="bg-light py-2 px-3 rounded-pill d-inline-flex align-items-center">
                        <Icon
                          path={mdiStarOutline}
                          title="User Profile"
                          size={1.2}
                        />
                        <Text
                          tag="span"
                          className="ms-1 weight-500 font-size-20"
                        >
                          8.5
                        </Text>
                      </div>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Relative>
              <Card.Body>
                <Text tag="h3" className="weight-700 mb-4">
                  Cromwell International Hotel
                </Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Text tag="span" className="weight-900 font-size-26">
                    €365.99
                  </Text>
                  <button className="button-rounded button-rounded-md">
                    <Icon
                      path={mdiHeartOutline}
                      title="User Profile"
                      size={1.2}
                    />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="text-center mb-4 has-cup">
              <div className="--card-cup gradient-primary"></div>
              <Card.Body>
                <Media
                  className="mb-4 flex-column align-items-center"
                  name="Selena Mcconoor"
                  subtitle="Teacher"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/36.jpg"
                    size="120"
                    className="mt-n5 avatar-border border-white mb-3"
                  ></Avatar>
                </Media>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="button-rounded">
                    <Icon path={mdiPinterest} title="User Profile" size={1.1} />
                  </button>
                  <button className="button-rounded">
                    <Icon path={mdiInstagram} title="User Profile" size={1.1} />
                  </button>
                  <button className="button-rounded">
                    <Icon path={mdiFacebook} title="User Profile" size={1.1} />
                  </button>
                  <button className="button-rounded">
                    <Icon path={mdiTwitter} title="User Profile" size={1.1} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header className="bg-warning">
                <img
                  src="./img/img-2.png"
                  className="img-fluid"
                  style={{ marginTop: "-65px", marginBottom: "-50px" }}
                  alt="img School"
                />
              </Card.Header>
              <Card.Body className="text-center">
                <Text tag="h2" className="weight-900 mt-3">
                  English School{" "}
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet Loremroin sodales lorem ut dions ec
                  tetur adip iscing elit.
                </Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="button-rounded button-rounded-md">
                    <Icon path={mdiLicense} title="User Profile" size={1.2} />
                  </button>
                  <Button variant="dark" className="weight-500">
                    ENTER NOW
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 card-shadow">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="card-media align-items-center">
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/34.jpg"
                    size="80"
                    className="me-3"
                  ></Avatar>
                  <div className="media-body">
                    <Text tag="h4" className="mb-1">
                      <a className="card-media-link text-dark" href="/#">
                        Greg
                      </a>
                    </Text>
                  </div>
                </div>
                <button className="button-rounded button-rounded-md">
                  <Icon path={mdiCameraIris} title="User Profile" size={1.2} />
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header>
                <Text tag="h3" className="weight-700 mb-3">
                  Vector pack
                </Text>
                <Text className="mb-0">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Header>
              <Image src="https://images.pexels.com/photos/9669040/pexels-photo-9669040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
              <div className="bg-light p-4 d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <Icon
                    path={mdiVectorRadius}
                    title="User Profile"
                    size={1.2}
                  />
                  <Text tag="b" className="h5 ms-2 mb-0">
                    18K
                  </Text>
                </div>
                <Button variant="dark">BUY NOW</Button>
              </div>
              <Card.Body>
                <Text
                  tag="del"
                  className="card-title weight-700 font-size-22 me-3"
                  color="danger"
                >
                  €18.90
                </Text>
                <Text
                  tag="span"
                  className="card-title weight-700 font-size-28"
                  color="primary"
                >
                  €10
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div className="mr-auto">
                    <Text tag="h4" className="card-heading">
                      Reminder
                    </Text>
                    <Text tag="h6" color="muted">
                      Created on May 21, 2020
                    </Text>
                  </div>
                  <Icon
                    path={mdiPencilOutline}
                    title="User Profile"
                    size={1.2}
                  />
                </div>
              </Card.Body>
              <Text className="mt-4 ps-4 pe-4">
                Minim dolor in amet nulla laboris enim dolore consequat proident
                fugiat culpa eiusmod proident sed excepteur.
              </Text>
              <Card.Footer className="card-footer">
                <Media
                  className="align-items-center"
                  name="Cameron"
                  subtitle="Chef"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/5.jpg"
                    size="50"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Media
                  className="align-items-center mb-4"
                  name="Monica Armas"
                  subtitle="Dog Trainer"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/88.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
                <Text tag="h2" className="card-title weight-900">
                  Web Design templates Selection
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <button className="button-rounded">
                  <Icon path={mdiChevronLeft} title="Arrow left" size={1.6} />
                </button>
                <Text tag="span" className="h5 weight-500">
                  Details
                </Text>
                <Icon path={mdiBookmarkOutline} title="Bookmark" size={1.2} />
              </Card.Header>
              <Image src="https://images.pexels.com/photos/2262628/pexels-photo-2262628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
              <div className="bg-light p-4 d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <Icon path={mdiMapMarkerCircle} title="Map" size={1.2} />
                  <Text tag="b" className="h5 ms-2 mb-0">
                    18Km
                  </Text>
                </div>
                <Button variant="success" size="sm">
                  buy now
                </Button>
              </div>
              <Card.Body>
                <Text tag="h2" className="card-title weight-700">
                  Havana, Cuba
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <ImgFake
                className="card-img"
                width="100%"
                height="450px"
              ></ImgFake>
              <Card.ImgOverlay className="card-overlay-black">
                <Card.Header>
                  <Text tag="span" color="white">
                    3 April 2021
                  </Text>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-between align-items-center mb-4">
                    <Media
                      className="align-items-center"
                      name="Jonas"
                      subtitle="UX/UI Designer"
                      linkColor="white"
                    >
                      <AvatarHistory
                        href="/#"
                        avatar="https://randomuser.me/api/portraits/men/77.jpg"
                        size="100"
                        className="me-3"
                      ></AvatarHistory>
                    </Media>
                    <span>
                      <Icon
                        path={mdiDotsVertical}
                        title="dots"
                        color="white"
                        size={1.2}
                      />
                    </span>
                  </div>
                  <Text tag="h2" className="text-gradient-warning weight-900">
                    Web Design templates Selection
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <span className="me-4 d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbUpOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      23
                    </Text>
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbDownOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      0
                    </Text>
                  </span>
                </Card.Footer>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Image
                className="card-img-top"
                src="https://images.pexels.com/photos/3988076/pexels-photo-3988076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              ></Image>
              <Card.Body>
                <Text tag="h2" className="card-title weight-700">
                  Jonas
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
              <Card.Footer className="pt-0">
                <a href="/#" className="text-decoration-none weight-500">
                  READ MORE
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Row>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="warning" className="mb-4">
                  <Text tag="h2" className="weight-900">
                    History
                  </Text>
                </CardGradient>
              </Col>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="danger" className="mb-4">
                  <Text tag="h2" className="weight-900" color="white">
                    Biology
                  </Text>
                </CardGradient>
              </Col>
            </Row>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Row>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="primary" className="mb-4">
                  <Text tag="h2" className="weight-900" color="white">
                    Sciences
                  </Text>
                </CardGradient>
              </Col>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="success" className="mb-4">
                  <Text tag="h2" className="weight-900">
                    Physical
                  </Text>
                </CardGradient>
              </Col>
            </Row>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Media
                  className="align-items-center mb-4"
                  name="Esther Howard"
                  subtitle="Nurse"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/69.jpg"
                    size="60"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                </Media>
                <Text tag="h2" className="card-title weight-900">
                  Web Design templates Selection
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Row>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="danger" className="mb-4">
                  <Text tag="h2" className="weight-900" color="white">
                    Literature
                  </Text>
                </CardGradient>
              </Col>
              <Col sm={6} md={12} lg={6}>
                <CardGradient gradient="info" className="mb-4">
                  <Text tag="h2" className="weight-900" color="white">
                    Arts
                  </Text>
                </CardGradient>
              </Col>
            </Row>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Media
                  className="mb-3 flex-column align-items-center"
                  name="Alessandro"
                  subtitle="Nursing Assistant"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/90.jpg"
                    size="100"
                    className="mt-n5 avatar-border border-white mb-3"
                  ></Avatar>
                </Media>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod.
                </Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="card-media align-items-center">
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/50.jpg"
                    size="65"
                    className="me-3 avatar-doble-border"
                  ></Avatar>
                  <div className="media-body">
                    <Text tag="h4" className="mb-1">
                      <a className="card-media-link text-dark" href="/#">
                        July
                      </a>
                    </Text>
                  </div>
                </div>
                <div className="ms-auto">
                  <button className="button-rounded button-rounded-sm">
                    <Icon
                      path={mdiPhoneOutline}
                      title="User Profile"
                      size={1}
                    />
                  </button>
                  <button className="button-rounded button-rounded-sm ms-2">
                    <Icon path={mdiChatOutline} title="User Profile" size={1} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Row className="g-0">
                <Col md={4}>
                  <Image
                    className="card-img-left"
                    bg="https://images.pexels.com/photos/163423/basketball-professional-action-player-163423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    height="300px"
                  ></Image>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Text tag="h4" className="card-heading">
                      News
                    </Text>
                    <Text tag="h6" color="muted">
                      October 23
                    </Text>
                    <Text className="mt-4 mb-5">
                      Minim dolor in amet nulla laboris enim dolore consequat.
                    </Text>
                    <Media className="align-items-center" name="David ortiz">
                      <Avatar
                        url="https://randomuser.me/api/portraits/men/25.jpg"
                        size="50"
                        className="me-3"
                      ></Avatar>
                    </Media>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 overflow-hidden card-shadow shadow-lg">
              <Media
                className="align-items-center media-stacked"
                name="Julia Robert"
                subtitle="Social assistant"
              >
                <Avatar
                  url="https://randomuser.me/api/portraits/women/44.jpg"
                  size="110"
                  className="me-3"
                ></Avatar>
              </Media>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4 overflow-hidden card-shadow shadow-lg">
              <Media
                className="align-items-center media-stacked flex-row-reverse text-end"
                name="Fermin vargas"
                subtitle="Construction manager"
              >
                <Avatar
                  url="https://randomuser.me/api/portraits/men/3.jpg"
                  size="110"
                  className="ms-3"
                ></Avatar>
              </Media>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="text-center mb-4 has-cup">
              <Image
                className="card-img-top"
                src="https://unsplash.com/photos/yo01Z-9HQAw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8bWVkaWNhbCUyMGNhcmV8fDB8fHx8MTY0MDEwMjE2NA&force=true&w=640"
              ></Image>
              <Card.Body>
                <Media
                  className="mb-4 flex-column align-items-center"
                  name="Iris Churman"
                  subtitle="Doctor"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/women/40.jpg"
                    size="150"
                    className="mt-n5 avatar-border border-white mb-3"
                  ></Avatar>
                </Media>
                <div className="d-flex justify-content-center align-items-center">
                  <Button variant="dark">FOLLOW ME</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4" style={{ backgroundColor: "#000000" }}>
              <Card.Body>
                <div class="p-4">
                  <div class="text-center">
                    <Media
                      className="mb-4 flex-column align-items-center"
                      linkColor="white"
                      name="Natalia Brown"
                      subtitle="Telephone operator"
                    >
                      <AvatarHistory
                        href="/#"
                        avatar="https://randomuser.me/api/portraits/women/47.jpg"
                        size="100"
                        className="mb-3"
                      ></AvatarHistory>
                    </Media>
                    <Text
                      tag="h1"
                      className="weight-900 text-gradient-success font-size-50 mb-4"
                    >
                      New card designs
                    </Text>
                    <Text color="white" className="font-size-22">
                      Minim dolor in amet nulla laboris enim dolore.
                    </Text>
                    <button class="btn-pill btn-gradient-success text-white">
                      View Profile
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Media
                  className="align-items-center"
                  name="Yanick Flik"
                  subtitle="May 20 2021"
                >
                  <Avatar
                    url="https://randomuser.me/api/portraits/men/84.jpg"
                    size="60"
                    className="me-3"
                  ></Avatar>
                </Media>
                <a href="/#">
                  <Icon
                    path={mdiDotsVertical}
                    title="Dots"
                    color="#555"
                    size={1.2}
                  />
                </a>
              </Card.Header>
              <Card.Body>
                <Text tag="h3" className="card-title weight-700">
                  Carpenter
                </Text>
                <Text>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat...
                </Text>
              </Card.Body>
              <Image src="https://images.pexels.com/photos/3680454/pexels-photo-3680454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Image>
              <div className="gradient-success p-4 d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <Text tag="b" className="h2 mb-0 weight-900" color="dark">
                    New
                  </Text>
                </div>
                <Button variant="light" size="sm" className="weight-500">
                  Promotion
                </Button>
              </div>
              <Card.Body>
                <button className="button-rounded me-2">
                  <Icon path={mdiInstagram} title="User Profile" size={1.1} />
                </button>
                <button className="button-rounded me-2">
                  <Icon path={mdiFacebook} title="User Profile" size={1.1} />
                </button>
                <button className="button-rounded">
                  <Icon path={mdiTwitter} title="User Profile" size={1.1} />
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="mb-4" style={{ backgroundColor: "#000000" }}>
              <Card.Body>
                <div class="p-5">
                  <div class="mb-5">
                    <Text
                      tag="h1"
                      className="weight-900 text-gradient-primary font-size-50 mb-4"
                    >
                      The best plugin pack
                    </Text>
                    <Text color="secondary" className="font-size-22">
                      Minim dolor in amet nulla laboris enim dolore.
                    </Text>
                    <button class="btn-pill btn-gradient-primary text-white">
                      upgrade
                    </button>
                  </div>
                  <span className="me-4 d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbUpOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      33k
                    </Text>
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <Icon
                      path={mdiThumbDownOutline}
                      title="thumb"
                      color="white"
                      size={1.2}
                    />
                    <Text
                      tag="span"
                      color="white"
                      className="ms-2 font-size-22"
                    >
                      2
                    </Text>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Masonry>

        <Footer />
      </Container>
    </div>
  );
};

export default App;
