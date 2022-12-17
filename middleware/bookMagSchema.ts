export const Schema = {
  type: "object",
  properties: {
    title: { type: "string" },
    isbn: { type: "number" },
    author: { type: "string" },
    publishedAt: { type: "string" },
  },
  required: ["title", "isbn", "author", "publishedAt"],
};

export default Schema;
