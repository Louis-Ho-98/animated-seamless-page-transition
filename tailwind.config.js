module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        room: "url('/src/assets/images/room.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      bgGray: "#f3f3f3",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      black: "#231F20",
      gray1:"#333333",
      gray3: "#828282",
      gray4:  "#bdbdbd",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
