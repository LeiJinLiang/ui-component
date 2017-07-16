/**
 * Created by leijin on 2017/7/16.
 */
module.exports = {
    path : 'board',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../Board/contaniers/BoardCon'))
        })
    }
}