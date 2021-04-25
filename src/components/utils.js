const pageVariantsContextsMaker = (currentPage, directTo, position) => {
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
