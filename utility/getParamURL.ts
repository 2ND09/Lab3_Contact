export default (url: string) => {
  const paramString = url.includes("?") ? url.split("?")[1].split("&") : url;
  const params: { [key: string]: string } = {};

  if (Array.isArray(paramString)) {
    paramString.forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
  }

  return params;
};
