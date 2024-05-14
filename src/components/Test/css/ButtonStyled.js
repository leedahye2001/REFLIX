import styled from "styled-components";

const Btn = styled.button`
  min-width: 140px;
  height: 55px;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #303030;
  color: white;
  cursor: pointer;
  padding: 0 15px;

  &.btn-sm {
    font-size: 18px;
    font-weight: 500;
  }
  &.btn-md {
    min-width: 180px;
    height: 70px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: 400;
  }
  &.btn-lg {
    min-width: 200px;
    height: 75px;
    border-radius: 20px;
    font-size: 30px;
    font-weight: 500;
  }

  &.btn-red {
    background-color: #ff4b4b;
  }
  &.btn-white {
    background-color: #fff;
    color: #303030;
  }
`;

// .btn-outline {
//   border: 3px solid white;

//   &-red {
//     border-color: $selected-color;
//   }
//   &-green {
//     border-color: $green-color;
//   }
// }

export { Btn };
