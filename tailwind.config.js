module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "room": "url('/src/assets/images/room.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
