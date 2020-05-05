var express=require('express');
const { body,sanitizeBody } = require('express-validator');
var Routes=express.Router();
var postCommentController=require('../controller/posts_comments.controller');
/*Add Post */
Routes.post('/add_post',
[body('title').notEmpty().withMessage('Title can not be empty').isLength({ min: 10 }).withMessage('must be at least 10 chars long').trim(),
body('post_content').notEmpty().withMessage('Post Content can not be empty').isLength({ min: 50 }).withMessage('Post must be at least 50 chars long').trim()
],postCommentController.post_blog);

/*Add Comment */
Routes.post('/add_comment',[body('comment_content').notEmpty().withMessage('Comment can not be empty').isLength({ min: 2 }).withMessage('Comment must be at least 2 chars long').trim(),
body('uid').notEmpty().withMessage('User id can not be empty').trim(),
body('post_id').notEmpty().withMessage('Post id can not be empty').trim()
],postCommentController.add_comment);
/*Posts List */
Routes.get('/all_posts',postCommentController.allPosts);
/*SIngle Post */
Routes.get('/post_detail/:title/:post_id',postCommentController.fetchSinglePost);
/*Update post */
Routes.post('/post_update',postCommentController.update_post);
/*Delete Post */
Routes.post('/post_delete',postCommentController.delete_post);
/*Update Comment */
Routes.post('/update_comment',[body('comment_content').notEmpty().withMessage('Comment can not be empty').isLength({ min: 2 }).withMessage('Comment must be at least 2 chars long').trim(),
body('uid').notEmpty().withMessage('User id can not be empty').trim(),
body('post_id').notEmpty().withMessage('Post id can not be empty').trim()
],postCommentController.update_comment);
/*Delete Comment */
Routes.post('/delete_comment',postCommentController.delete_comment);
/*Post List Short*/
Routes.get('/post_listing_short',postCommentController.allPostsListing);
/*Latest Posts List */
Routes.get('/latest_posts',postCommentController.latestPosts);
module.exports=Routes;
