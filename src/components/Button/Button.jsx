import "../../assets/stylesheets/Button.scss";

import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    className,
    onClickHandler,
    ButtonIcon,
    buttonImage,
    buttonImageAltText,
    buttonText,
    buttonOuter,
    buttonOuterClassName,
    buttonRef,
    disabled,
    confirmText,
    href,
    text,
    title,
    label,
    buttonIconPosition = "left",
  } = props;

  const buttonClass = `btn${className ? ` ${className}` : ""}${
    buttonText ? "" : " btn--svg-only"
  }`;

  const onButtonClick = (e) => {
    if (!confirmText) {
      onClickHandler(e);
      return;
    }

    confirmAlert({
      message: confirmText,
      buttons: [
        {
          label: "Yes",
          onClick: () => onClickHandler(e),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const onKeyDown = (e) => {
    e.stopPropagation();
  };

  const button = href ? (
    <Link
      ref={buttonRef}
      className={buttonClass}
      disabled={disabled}
      aria-label={label}
      title={title}
      to={href}
      onClick={buttonOuter ? null : onButtonClick}
      onKeyDown={onKeyDown}
    >
      {buttonImage ? <img src={buttonImage} alt={buttonImageAltText} /> : null}
      {ButtonIcon && buttonIconPosition === "left" ? <ButtonIcon /> : null}
      {text ? <span>{text}</span> : null}
      {ButtonIcon && buttonIconPosition === "right" ? <ButtonIcon /> : null}
    </Link>
  ) : (
    <button
      ref={buttonRef}
      className={buttonClass}
      disabled={disabled}
      aria-label={label}
      title={title}
      text={text}
      onClick={buttonOuter ? null : onButtonClick}
      onKeyDown={onKeyDown}
    >
      {buttonImage ? <img src={buttonImage} alt={buttonImageAltText} /> : null}
      {ButtonIcon && buttonIconPosition === "left" ? <ButtonIcon /> : null}
      {buttonText ? <span>{buttonText}</span> : null}
      {ButtonIcon && buttonIconPosition === "right" ? <ButtonIcon /> : null}
    </button>
  );

  if (buttonOuter) {
    return (
      <div
        className={`btn-outer${
          buttonOuterClassName ? ` ${buttonOuterClassName}` : ""
        }`}
        onClick={onButtonClick}
      >
        {button}
      </div>
    );
  }

  return button;
};

export default Button;
