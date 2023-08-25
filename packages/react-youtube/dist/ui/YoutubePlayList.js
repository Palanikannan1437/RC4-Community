function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React from "react";
function YoutubePlaylist(param) {
    var PlayListData = param.PlayListData, count = param.count, sort = param.sort, title = param.title, styleOverrides = param.styleOverrides;
    var _styleOverrides, _styleOverrides1, _styleOverrides2, _styleOverrides3, _styleOverrides4, _styleOverrides5, _styleOverrides6;
    var defaultStyles = {
        main: "container mx-auto p-8",
        title: "text-3xl mb-6 text-center text-white",
        VideoList: "grid grid-cols-1 gap-6",
        VideoListItem: "border border-gray-300 rounded-lg overflow-hidden",
        VideoContainer: "relative overflow-hidden"
    };
    var _styleOverrides_main, _styleOverrides_VideoListItem, _styleOverrides_title, _styleOverrides_VideoList, _styleOverrides_VideoContainer, _styleOverrides_VideoWidth, _styleOverrides_VideoHeight;
    var styles = {
        main: "".concat(defaultStyles.main, " ").concat((_styleOverrides_main = (_styleOverrides = styleOverrides) === null || _styleOverrides === void 0 ? void 0 : _styleOverrides.main) !== null && _styleOverrides_main !== void 0 ? _styleOverrides_main : ""),
        VideoListItem: "".concat(defaultStyles.VideoListItem, " ").concat((_styleOverrides_VideoListItem = (_styleOverrides1 = styleOverrides) === null || _styleOverrides1 === void 0 ? void 0 : _styleOverrides1.VideoListItem) !== null && _styleOverrides_VideoListItem !== void 0 ? _styleOverrides_VideoListItem : ""),
        title: "".concat(defaultStyles.title, " ").concat((_styleOverrides_title = (_styleOverrides2 = styleOverrides) === null || _styleOverrides2 === void 0 ? void 0 : _styleOverrides2.title) !== null && _styleOverrides_title !== void 0 ? _styleOverrides_title : ""),
        VideoList: "".concat(defaultStyles.VideoList, " ").concat((_styleOverrides_VideoList = (_styleOverrides3 = styleOverrides) === null || _styleOverrides3 === void 0 ? void 0 : _styleOverrides3.VideoList) !== null && _styleOverrides_VideoList !== void 0 ? _styleOverrides_VideoList : ""),
        VideoContainer: "".concat(defaultStyles.VideoContainer, " ").concat((_styleOverrides_VideoContainer = (_styleOverrides4 = styleOverrides) === null || _styleOverrides4 === void 0 ? void 0 : _styleOverrides4.VideoContainer) !== null && _styleOverrides_VideoContainer !== void 0 ? _styleOverrides_VideoContainer : ""),
        VideoWidth: "".concat((_styleOverrides_VideoWidth = (_styleOverrides5 = styleOverrides) === null || _styleOverrides5 === void 0 ? void 0 : _styleOverrides5.VideoWidth) !== null && _styleOverrides_VideoWidth !== void 0 ? _styleOverrides_VideoWidth : "500px"),
        VideoHeight: " ".concat((_styleOverrides_VideoHeight = (_styleOverrides6 = styleOverrides) === null || _styleOverrides6 === void 0 ? void 0 : _styleOverrides6.VideoHeight) !== null && _styleOverrides_VideoHeight !== void 0 ? _styleOverrides_VideoHeight : "300px")
    };
    var displayedVideos = PlayListData;
    if (sort) {
        displayedVideos = _to_consumable_array(PlayListData).sort(function(a, b) {
            var aValue = parseInt(a.statistics.viewCount, 10);
            var bValue = parseInt(b.statistics.viewCount, 10);
            return bValue - aValue;
        });
    }
    if (count && count < displayedVideos.length) {
        displayedVideos = displayedVideos.slice(0, count);
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: styles.main
    }, /*#__PURE__*/ React.createElement("h1", {
        className: styles.title
    }, title), /*#__PURE__*/ React.createElement("div", {
        className: styles.VideoList
    }, displayedVideos.map(function(video) {
        return /*#__PURE__*/ React.createElement("div", {
            key: video.id,
            className: styles.VideoListItem
        }, /*#__PURE__*/ React.createElement("div", {
            className: styles.VideoContainer
        }, /*#__PURE__*/ React.createElement("iframe", {
            width: styles.VideoWidth,
            height: styles.VideoHeight,
            src: "https://www.youtube.com/embed/".concat(video.id),
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        })));
    })));
}
export default YoutubePlaylist;
