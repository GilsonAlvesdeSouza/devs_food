const Format = () => {
  return {
    currency: (value) => {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  };
};

export default Format;
