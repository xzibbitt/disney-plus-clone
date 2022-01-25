import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://1.bp.blogspot.com/-TMW7qo0QUVU/YaZNmLA2a6I/AAAAAAABXBc/FsxAEy7XNcEXVWVjCs2qRb4oC2EaKOJAACLcBGAsYHQ/w512-h640/el-libro-de-boba-fett-poster.jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.pinimg.com/736x/ca/3e/fb/ca3efbdb2ffa9919cda3d271faa29264.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://1.bp.blogspot.com/-rnkgYu25Lss/XIitEgNSlHI/AAAAAAAAnMQ/HXqeQq1d668SzkA5AorfMP1fC-AMcoMpgCLcBGAs/s640/photo_2019-03-13_15-08-42.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://trailerlist.net/wp-content/uploads/2020/12/Loki-Poster-2021.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://1.bp.blogspot.com/-TMW7qo0QUVU/YaZNmLA2a6I/AAAAAAABXBc/FsxAEy7XNcEXVWVjCs2qRb4oC2EaKOJAACLcBGAsYHQ/w512-h640/el-libro-de-boba-fett-poster.jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.pinimg.com/736x/ca/3e/fb/ca3efbdb2ffa9919cda3d271faa29264.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://1.bp.blogspot.com/-rnkgYu25Lss/XIitEgNSlHI/AAAAAAAAnMQ/HXqeQq1d668SzkA5AorfMP1fC-AMcoMpgCLcBGAs/s640/photo_2019-03-13_15-08-42.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://trailerlist.net/wp-content/uploads/2020/12/Loki-Poster-2021.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
