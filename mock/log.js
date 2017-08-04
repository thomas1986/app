const faker = require('faker')
faker.locale = 'zh_CN'

function list(fn, n) {
    var ret = [];
    for (i = 0; i < 10; i++) {
        ret.push(fn());
    }
    return ret;
}

module.exports = {
    api: '/v1/app/logs',
    response: function(req, res) {
        res.json({
            "pageSize": 10,
            "pageTotal": 12,
            "data": list(() => ({
                _id: faker.random.uuid(),
                "__v": 0,
                "server_time": "2017-04-25T03:33:49.538Z",
                "client_time": "2017-03-28T09:14:52.124Z",
                "v": "9",
                "info": {
                    "info": faker.random.objectElement
                },
                "user_name": faker.random.words(),
                "user_id": faker.random.number(),
                "user_type": 1,
                "longitude": 31.11111,
                "latitude": 98.11111,
                "ip": faker.internet.ip(),
                "platform": 1,
                "network_type": 1,
                "model": "iphone7",
                "os": "ios7",
                "level": 1
            }), 10),
            "pageIndex": parseInt(req.query.pageIndex)
        })
    }
}
