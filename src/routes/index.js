import newRouter from './news.js'
import siteRouter from './site.js'


function route(app) {

    app.use('/news', newRouter)
    app.use('/', siteRouter)

    // app.get("/", (req, res) => {
    //     res.render("home");
    // });

    // app.get("/news", (req, res) => {
    //     res.render("news");
    // });


    // app.get("/search", (req, res) => {
    //     res.render("search");
    // });

    // app.post("/search", (req, res) => {
    //     res.send("");
    // });
}
export default route;
