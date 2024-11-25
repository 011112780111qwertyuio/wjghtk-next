@import '../../_styles/options/variables.scss';
.section-minute-deals {
  a {
    text-decoration: none;
  }

  margin-top: 30px;
  border: 1px solid rgb(232, 230, 230);
  border-radius: 15px;
  padding: 30px;
  padding-top: 25px;
  padding-bottom: 10px;
  min-height: 450px;
  height: 450px;
  overflow-y: scroll;

  .title-add {
    color: $colorBlack;
    font-size: $sizeLargText;
    font-weight: bold;

  }

  .flex-add {
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(159, 156, 156);
    padding-bottom: 25px;

    &:last-child {
      border-bottom: none;

    }

    .avtar {
      width: 100px;
      min-width: 100px;
      height: 70px;
      border-radius: 10px;
      overflow: hidden;

      &:hover {
        cursor: pointer;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .flex-cont {
      .icons {
        color: orange;

        svg {
          margin-left: 5px;
        }
      }

      padding-right:10px;

      p {
        margin-top: 10px;
      }

      .mytile {
        color: $colorBlack;
        font-size: $sizeMainText;
        font-weight: bold;
        line-height: 24px;

        &:hover {
          cursor: pointer;
        }
      }

      .sub-tile {
        color: $colorSubBlack;
        font-size: $sizeSmallText;

        label {
          font-weight: bold;
          color: $colorPrimary;
          font-size: $sizeSmallText;
          margin-right: 4px;
        }

        .of {
          color: $colorSubBlack;
          font-size: $sizeSmallText;
          margin-right: 3px;
          text-decoration: line-through;
          font-weight: 300;
        }
      }
    }


  }

  .container {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    width: 100%;

    .box {
      width: 100%;
    }

    .skeleton {
      padding: 15px;
      width: 100%;
      background: #fff;
      margin-bottom: 20px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
    }

    .skeleton .square {
      height: 80px;
      border-radius: 5px;
      background: rgba(130, 130, 130, 0.2);
      background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
      background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
      background-size: 800px 100px;
      animation: wave-squares 2s infinite ease-out;
    }

    .skeleton .line {
      height: 12px;
      margin-bottom: 6px;
      border-radius: 2px;
      background: rgba(130, 130, 130, 0.2);
      background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
      background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
      background-size: 800px 100px;
      animation: wave-lines 2s infinite ease-out;
    }

    .skeleton-left {
      flex: 2;
      padding-left: 15px;
    }

    .flex1 {
      flex: 1;
    }

    .flex2 {
      flex: 2;
    }

    .skeleton .line:last-child {
      margin-bottom: 0;
    }

    .h8 {
      height: 8px !important;
    }



    .h17 {
      height: 17px !important;
    }

    .h25 {
      height: 25px !important;
    }

    .w40 {
      width: 40% !important;
    }

    .w50 {
      width: 50% !important
    }

    .w75 {
      width: 75% !important
    }

    .m10 {
      margin-bottom: 10px !important;
    }

    .circle {
      border-radius: 50% !important;
      height: 80px !important;
      width: 80px;
    }


  }




}
@media(min-width:3px) and (max-width:299px) {
  .section-minute-deals {
    zoom: 0.8;
  }
}
@media(min-width:300px) and (max-width:358px) {
  .section-minute-deals {
    zoom: 0.9;
  }
}
@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
