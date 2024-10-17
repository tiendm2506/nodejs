import newsRouter from "./news.js";
import siteRouter from './site.js'

export default function (app) {
  app.use("/news", newsRouter);
  app.use('/', siteRouter)
}
