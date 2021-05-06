"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var geojson_utils_1 = __importDefault(require("geojson-utils"));
var _a = require("./gameData"), gameArea = _a.gameArea, players = _a.players;
exports.resolvers = {
    Query: {
        gameArea: function () {
            return gameArea;
        },
        isUserInArea: function (_, _a) {
            var longitude = _a.longitude, latitude = _a.latitude;
            var point = { type: "Point", coordinates: [longitude, latitude] };
            var isInside = geojson_utils_1.default.pointInPolygon(point, gameArea);
            var result = {};
            result.status = isInside;
            result.msg = isInside ? "Point was inside the GameArea" : "Point was NOT inside the GameArea";
            return result;
        }
    },
};
//# sourceMappingURL=resolvers.js.map