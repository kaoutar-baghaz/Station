import images from "./images";
import icons from "../utils/icons";
import { COLORS, SIZES, SHADOWS } from "./theme";

export { images, icons, COLORS, SIZES, SHADOWS, photos, FONTS };


const photos = [
    images.photo1,
    images.photo2,
    images.photo3,
    images.photo4,
    images.photo5,
    images.photo6,
  ]
  const FONTS = {
    largeTitle: {
      fontFamily: 'black',
      fontSize: SIZES.largeTitle,
      lineHeight: 55,
  },
    h1: {  fontSize: SIZES.h1, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h3: {  fontSize: SIZES.h3, lineHeight: 22 },
    h4: {  fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 20 },
  };
  export const imagesDataURL = [
    'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684797288~exp=1684797888~hmac=fc8a0e1a7304bd7c38bda9c1fa1dde5a5c3a324606187b7f554fcb2d71ed4588'
]
