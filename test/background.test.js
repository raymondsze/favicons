const favicons = require("../src");
const { logo_png } = require("./util");

test("should allow configuring background color on selected platforms", async () => {
  expect.assertions(1);

  const result = await favicons(logo_png, {
    icons: {
      android: { background: true },
      appleIcon: { background: true },
      appleStartup: { background: true },
      coast: { background: true },
      firefox: { background: true },
      windows: { background: true },
      yandex: { background: true },
    },
  });

  await expect(result).toMatchFaviconsSnapshot();
});
