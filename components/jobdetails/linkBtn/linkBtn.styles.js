import { StyleSheet } from "react-native";

import { FONT,COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginBottom:SIZES.xSmallsmall
  },
  btn:{
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xxLarge,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    // marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  btnText: {
    // fontFamily: "DMBold",
    fontSize: SIZES.small,
    fontWeight: "bold",
    color: COLORS.lightWhite,
  },
});

export default styles;
