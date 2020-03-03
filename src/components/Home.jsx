import React from "react";
import styled from "styled-components";
import moment from "moment";

// Routing
import { Link } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';

// Styled components
const Cars = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 95%;
`;

// Base styles
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Column = styled(Row)`
  flex-direction: column;
`;

const Card = styled.div`
  box-sizing: border-box;
  background: #fff;
  border: 0;
  margin: 1%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  backface-visibility: hidden;
  width: 40rem;
  height: auto;
  transition: all 0.3s ease;

  @media (max-width: 700px) {
    width: 95%;
    height: auto;
    left: 2.5%;
  }

  &:hover {
    transition: all 0.3s ease;
    box-shadow: 0px 0px 20px hotpink;

    img {
      transition: all 0.4s ease;
      transform: scale(1.1);
    }
  }
`;

// Car picture, width of content:pic is 60/40
const CarPicWrapper = styled(Column)`
  max-width: 60%;
  height: auto;
  margin-left: 0;
  padding: 0;
  box-shadow: 0;
  overflow: hidden;
`;

const CarPic = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-right: 1px solid lightgray;
  transition: all 0.4s ease;
`;

// Card text content
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 2%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0.1em 0.1em 0.05em #9bcfe0;
  margin-bottom: 0.5%;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
`;

const Home = (props) => {
  console.log(props)
  return (
    <Cars>
      {props.cars?.map(car => (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <Card>
            <Row>
              {/* Car pic column */}
              <CarPicWrapper>
                <CarPic src={car.image} alt={`${car.year} ${car.name}`} />
              </CarPicWrapper>
              {/* Car info column */}
              <ContentColumn>
                {Number(car.year) === Number(moment().format("YYYY")) ? <div className='new'>New</div> : null}
                <Title>${car.price}</Title>
                <Subtitle>{`${car.year} ${car.name}`}</Subtitle>
              </ContentColumn>
            </Row>
          </Card>
        </Link>
      ))}
    </Cars>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.carImagesReducer.isFetching,
    error: state.carImagesReducer.error,
    cars: state.carImagesReducer.cars
  }
}

export default connect(mapStateToProps)(Home);
