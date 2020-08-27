var express = require('express');
var router = express.Router();
var Users = require('../../models/articles');

router.get('/', function(req, res, next) {

  Articles.find({},function(err, articles){
    if(err){
     return res.json({'success':false, 'error': err});
    }

    return res.json({'success':true, 'articles': articles});
  });

});

router.get('/:articleId', function(req,res){
  
  var articleId = req.params.articleId;

  Articles.findOne({'_id':articleId}, function(err, article){
    if(err){
      return res.json({'success':false, 'error': err});
    }

    return res.json({'success':true, 'article': article});
  });

});

router.post('/', function(req, res) {
  Articles.create(new Articles({
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }), function(err, user){
    
    if(err){
      return res.json({success: false, user: req.body, error: err});
    }

    return res.json({success: true, article: article});
    
  });
});

router.put('/', function(req, res){

  Articles.findOne({'_id': req.body._id}, function(err, article){

   if(err) {
     return res.json({success: false, error: err});
   }

   if(article) {

    let data = req.body;

    if(data.username){
      user.username = data.username;
    };

    if(data.email){
    user.email = data.email;
    };

    if(data.first_name){
    user.first_name = data.first_name;
    };

    if(data.last_name){
    user.last_name = data.last_name;
    };

    article.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, article:user});
      }
    });

   }

  });

});

router.delete('/:articleId', function(req,res){

  var articleId = req.params.articleId;

  Articles.remove({'_id':articleId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});

module.exports = router;