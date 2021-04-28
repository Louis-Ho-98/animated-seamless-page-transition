const pageVariantsContextsMaker = (currentPage, directTo, position) => {
  // animation for bring a new page either from the top (postion==="top") or from the bottom (postion==="bottom")
  if (position === "top") {
    return {
      [currentPage]: {
        initial: {
          y: 0,
        },
        in: {
          y: 0,
        },
        out: {
          y: "100vh",
        },
      },
      [directTo]: {
        initial: {
          y: "-100vh",
        },
        in: {
          y: 0,
        },
        out: {
          y: 0,
        },
      },
    };
  } else if (position === "bottom") {
    return {
      [currentPage]: {
        initial: {
          y: 0,
        },
        in: {
          y: 0,
        },
        out: {
          y: "-100vh",
        },
      },
      [directTo]: {
        initial: {
          y: "100vh",
        },
        in: {
          y: 0,
        },
        out: {
          y: 0,
        },
      },
    };
  }
};

export default pageVariantsContextsMaker;
