function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var getPlaylistSnippet = function() {
    var _ref = _async_to_generator(function(playlistId, API_Key) {
        var videos, response, data, items, error, videoDataPromises, videoDataResults;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    videos = [];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=".concat(playlistId, "&maxResults=50&key=").concat(API_Key))
                    ];
                case 2:
                    response = _state.sent();
                    return [
                        4,
                        response.json()
                    ];
                case 3:
                    data = _state.sent();
                    items = data.items;
                    videos = items.map(function(item) {
                        return {
                            videoId: item.contentDetails.videoId,
                            videoPublishedAt: item.contentDetails.videoPublishedAt
                        };
                    });
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    console.log(error);
                    return [
                        2,
                        []
                    ];
                case 5:
                    videoDataPromises = videos.map(function() {
                        var _ref = _async_to_generator(function(video) {
                            var videoID, response, data, items, videodata, error;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        videoID = video.videoId;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            4,
                                            ,
                                            5
                                        ]);
                                        return [
                                            4,
                                            fetch("https://www.googleapis.com/youtube/v3/videos?part=statistics&id=".concat(videoID, "&key=").concat(API_Key))
                                        ];
                                    case 2:
                                        response = _state.sent();
                                        return [
                                            4,
                                            response.json()
                                        ];
                                    case 3:
                                        data = _state.sent();
                                        items = data.items;
                                        videodata = items[0];
                                        return [
                                            2,
                                            videodata
                                        ];
                                    case 4:
                                        error = _state.sent();
                                        console.log(error);
                                        return [
                                            2,
                                            null
                                        ];
                                    case 5:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(video) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return [
                        4,
                        Promise.all(videoDataPromises)
                    ];
                case 6:
                    videoDataResults = _state.sent();
                    return [
                        2,
                        videoDataResults.filter(function(data) {
                            return data !== null;
                        })
                    ];
            }
        });
    });
    return function getPlaylistSnippet(playlistId, API_Key) {
        return _ref.apply(this, arguments);
    };
}();
export default getPlaylistSnippet;
