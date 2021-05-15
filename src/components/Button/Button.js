import React from "react";
import PropTypes from "prop-types";


const Button = (props) => {
  const {
    size,
    variant,
    inverted = false,
    disabled = false,
    iconUrl,
    width = "w-auto",
    value = "",
    onClick,
  } = props;

  let textStyle = `text-xs`; // small
  let sizeStyle = `h-8 px-4 py-2`; // has a default x padding

  switch (size) {
    case "medium":
      textStyle = `text-base`;
      sizeStyle = `h-12 px-6 py-4`;
      break;
    case "large":
      textStyle = `text-base`;
      sizeStyle = `h-14 px-6 py-6`;
      break;
    default:
      null;
  }

  if (width) {
    sizeStyle += ` ${width}`;
  }

  if (inverted) {
    textStyle += ` text-white bg-black`;
  }

  let borderStyle = `rounded-md border border-black`; //outlined
  if (variant == "filled") {
    borderStyle = `rounded-md border-0 bg-wasabi-400`;
  }

  let isIconButton =
    typeof iconUrl === "string" && iconUrl != "" ? true : false;
  let isWithValue =
    typeof value === "string" && value.length > 0 ? true : false;

  let alignStyle = !isWithValue
    ? `flex items-center justify-center`
    : `flex items-center justify-between`;
  let btnStyles = `inline-flex ${textStyle} ${sizeStyle} ${borderStyle} ${alignStyle}`;
  let iconStyle = "w-6 h-6 mr-2 inline-block"; // style of icon inside

  if (disabled) {
    btnStyles += ` bg-grey-300`;
  }

  return (
    <button className={`${btnStyles}`} disabled={disabled} onClick={onClick}>
      <div className="flex items-center">
        {isIconButton && <img src={iconUrl} alt="" className={iconStyle} />}
        <span>{props.children}</span>
      </div>
      {isWithValue && <span className="ml-4">{value}</span>}
    </button>
  );
};;;

export default Button;

// button props check
Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["small", "medium", "large"]),
    PropTypes.string,
  ]),
  width: (props, propName, compName) => {
    if (
      typeof props["width"] === "string" &&
      String(props["width"]).length > 0 &&
      !/^w-.*/.test(props["width"])
    ) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          compName +
          "`. Validation failed."
      );
    }
    return null;
  },
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["outlined", "filled"]),
    PropTypes.string,
  ]),
  iconUrl: (props, propName, compName) => {
    if (
      typeof props["iconUrl"] === "string" &&
      String(props["iconUrl"]).length > 0
    ) {
      if (!/\.(?:ico|gif|png|jpg|jpeg|svg)$/i.test(props["iconUrl"])) {
        return new Error(
          "Invalid prop `" +
            propName +
            "` supplied to" +
            " `" +
            compName +
            "`. Validation failed."
        );
      }
    }
    return null;
  },
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
