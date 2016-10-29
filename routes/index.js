module.exports = function(app){
  app.get('/testAjax', require("./testAjax").get);
  app.post('/testAjax', require("./testAjax").post);

  app.get('/chat', function(req, res, next){
    res.render('chat');
  })

  app.get('/reactEssential', function(req, res, next){
     res.render("reactEssential"), { value: "This is my value" };
  });
  app.get('/', require("./frontPage").get);
}
