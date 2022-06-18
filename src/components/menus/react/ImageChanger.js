import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";

export default class ImageChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };

    setInterval(() => {
      this.changeImage();
    }, 3000);
  }

  changeImage() {
    this.setState({
      imageIndex: getIndex(images, this.state.imageIndex),
    });
  }

  render() {
    const image = images[this.state.imageIndex];
    return <img src={image.src} width="auto" height="500" />;
  }
}

const getIndex = (images, index) => {
  if (index === images.length - 1) {
    return 0;
  }

  return index + 1;
};

const images = [
  {
    src: "https://images.pexels.com/photos/3669288/pexels-photo-3669288.jpeg?cs=srgb&dl=pexels-karolina-3669288.jpg&fm=jpg",
  },
  {
    src: "https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg?cs=srgb&dl=pexels-josh-hild-12405196.jpg&fm=jpg",
  },
  {
    src: "https://images.pexels.com/photos/4095483/pexels-photo-4095483.jpeg?cs=srgb&dl=pexels-gaurav-ranjitkar-4095483.jpg&fm=jpg",
  },
  {
    src: "https://images.pexels.com/photos/92081/pexels-photo-92081.jpeg?cs=srgb&dl=pexels-markus-spiske-92081.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/1058949/pexels-photo-1058949.jpeg?cs=srgb&dl=pexels-nappy-1058949.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/673018/pexels-photo-673018.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-673018.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?cs=srgb&dl=pexels-nappy-1058958.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/263950/pexels-photo-263950.jpeg?cs=srgb&dl=pexels-pixabay-263950.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?cs=srgb&dl=pexels-pixabay-267104.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/698333/pexels-photo-698333.jpeg?cs=srgb&dl=pexels-michal-pech-698333.jpg&fm=jpg"
  }
];
