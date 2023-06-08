exports.isLoggedIn = (req,res,next) => {

    // passport 는 요청에 isAuthenticated 메서드를 추가한다.
    if ( req.isAuthenticated()) {
        //로그인상태라면
        next();
    } else {
        res.status(403).send('로그인필요');
    }
}

exports.isNotLoggedIn = (req,res,next) => {
    if ( !req.isAuthenticated()) {
        //로그인안된상태라면
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.')
        res.redirect(`/?error=${message}`);
    }
}