// 路由管理

const config = require('../config')
const controller = require('../controller')
const authIsVerified = require('../utils/auth')
const Router = require('koa-router')

const router = new Router({
	prefix: config.APP.ROOT_PATH
})


// Api
router
		.get('/', (ctx, next) => {
			ctx.response.body = config.INFO
		})

		.all('/auth', controller.auth.user) // 用户信息
		.post('/login', controller.auth.login) // 登录

		.all('/option', controller.option) // 网站信息

		.get('/qiniu', controller.qiniu) // 七牛 upToken

		.all('/hero', controller.heros.list) // 英雄榜
		.all('/hero/:id', controller.heros.item)

		.all('/tag', controller.tag.list) // 标签
		.all('/tag/:id', controller.tag.item)

		.all('/hotReview', controller.hotReview.list) // 网易云热评
		.all('/hotReview/:id', controller.hotReview.item)

		.all('/article', controller.article.list) // 文章
		.all('/article/:id', controller.article.item)

		.all('/comment', controller.comments.list)
		.all('/comment/:id', controller.comments.item)

		.post('/like', controller.like) // 喜欢文章 评论


// // music
// app.get('/music/pic/:pic_id', controller.music.pic);
// app.get('/music/lrc/:song_id', controller.music.lrc);
// app.get('/music/url/:song_id', controller.music.url);
// app.get('/music/song/:song_id', controller.music.song);
// app.get('/music/list/:play_list_id', controller.music.list);


// // 评论
// app.all('/comment', controller.comment.list);
// app.all('/comment/:comment_id', controller.comment.item);


module.exports = router;
