export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const dominio = ".milink.shop";
    if (url.hostname.endsWith(dominio)) {
      const sub = url.hostname.slice(0, -dominio.length);
      if (sub && sub !== "www") {
        url.pathname = "/" + sub + url.pathname;
      }
    }
    return env.ASSETS.fetch(new Request(url, request));
  }
};
