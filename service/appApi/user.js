const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()
router.get('/', async(ctx)=>{
    ctx.body = "这是用户操作首页"
})

router.post('/register', async(ctx)=>{
    
    const user = mongoose.model('User')
    let newUser = new user(ctx.request.body)

    await newUser.save().then(()=>{
        ctx.body={
            code: 200,
            message: '注册成功'
        }
    }).catch(error=>{
        ctx.body = {
            code: 500,
            message: error
        }
    })

})

router.post('/login', async(ctx)=>{
    let longinUser = ctx.request.body
    console.log(longinUser)
    let userName = longinUser.userName
    let password = longinUser.password

    // 引入User中的Model
    const User = mongoose.model('User')
    await User.findOne({userName: userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
            let newUser = new User()
            await newUser.comparePassword(password, result.password)
            .then(isMatch=>{
                ctx.body = {code: 200, message: isMatch}
            })
            .catch(error=>{
                console.log(error)
                ctx.body = {code: 500, message: error}
            })
        }else {
            ctx.body = {code: 200, message: '用户名不存在'}
        }
    })
    .catch(error=>{
        console.log(error)
        ctx.body = {code: 500, message: error}
    })
})

module.exports = router