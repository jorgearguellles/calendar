const getENVVariables = () => {
  import.meta.env;

  return {
    ...import.meta.env,
  };
};

export default getENVVariables;
