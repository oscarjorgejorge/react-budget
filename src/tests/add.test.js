const add = (a, b) => a + b;
const generateGretting = (name = "Anonymous") => `Hello ${name}`;

test("Should add two numbers", () => {
  const result = add(3, 5);

  expect(result).toBe(8);
});

test("Should print the name", () => {
  const result = generateGretting("oscar");
  expect(result).toBe("Hello oscar");
});

test("Should print no-name", () => {
  const result = generateGretting();
  expect(result).toBe("Hello Anonymous");
});
