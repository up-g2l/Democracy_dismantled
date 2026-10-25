/*
  Sends visitors who arrive at the old workers.dev address (or www.janmat.net)
  to the same page on https://janmat.net with a permanent (301) redirect.
  Every other request is served from the site's static files as before.
*/
const HOME = "janmat.net";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith(".workers.dev") || url.hostname === "www." + HOME) {
      url.protocol = "https:";
      url.hostname = HOME;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
