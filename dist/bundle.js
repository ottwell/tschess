/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gamePiece */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return knight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return rook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return king; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pieceTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var gamePiece = /** @class */ (function () {
    function gamePiece(id, type, iswhite, isdead, location) {
        if (isdead === void 0) { isdead = false; }
        this.id = id;
        this.type = type;
        this.isWhite = iswhite;
        this.isDead = isdead;
        this.currentLocation = location;
        this.moveSet = getMoveSet(this);
        this.availableLocations = getInitialAvailableLocations(this);
        this.init();
    }
    gamePiece.prototype.init = function () {
        var boardTile = document.getElementById(this.currentLocation.toString());
        boardTile.innerHTML = getPieceIcon(this.isWhite, this.type);
        boardTile.classList.add("piece");
    };
    return gamePiece;
}());

var pawn = /** @class */ (function (_super) {
    __extends(pawn, _super);
    function pawn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFirstMove = true;
        return _this;
    }
    pawn.prototype.upgrade = function () {
    };
    return pawn;
}(gamePiece));

var knight = /** @class */ (function (_super) {
    __extends(knight, _super);
    function knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return knight;
}(gamePiece));

var rook = /** @class */ (function (_super) {
    __extends(rook, _super);
    function rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return rook;
}(gamePiece));

var tower = /** @class */ (function (_super) {
    __extends(tower, _super);
    function tower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canTowerSwitch = true;
        return _this;
    }
    return tower;
}(gamePiece));

var queen = /** @class */ (function (_super) {
    __extends(queen, _super);
    function queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return queen;
}(gamePiece));

var king = /** @class */ (function (_super) {
    __extends(king, _super);
    function king() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canTowerSwitch = true;
        _this.isInCheck = false;
        return _this;
    }
    return king;
}(gamePiece));

function getMoveSet(piece) {
    switch (piece.type) {
        case pieceTypes.pawn:
            if (piece.isWhite)
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([7, 8, 9, 16]);
            else
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-16, -9, -8, -7]);
        case pieceTypes.knight:
            return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-15, -17, -10, -6, 6, 10, 15, 17]);
        case pieceTypes.rook:
            return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-63, -56, -49, -54, -42, -45, -35, -36, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 36, 35, 45, 42, 54, 49, 56, 63]);
        case pieceTypes.tower:
            return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56]);
        case pieceTypes.queen:
            return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, -63, -56, -49, -54, -42, -45, -35, -36, -28, -27, -21, -18, -14, -9, 9, 14, 18, 21, 27, 28, 36, 35, 45, 42, 54, 49, 56, 63]);
        case pieceTypes.king:
            return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([-9, -8, -7, -1, 1, 7, 8, 9]);
    }
    return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([]);
}
function getInitialAvailableLocations(piece) {
    var x = piece.currentLocation;
    switch (piece.type) {
        case pieceTypes.pawn:
            if (piece.isWhite)
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([x + 8, x + 16]);
            else
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([x - 16, x - 8]);
        case pieceTypes.knight:
            if (piece.isWhite)
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([x + 15, x + 17]);
            else
                return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]([x - 15, x - 17]);
    }
    return new __WEBPACK_IMPORTED_MODULE_0__node_modules_linqts_new_dist_linq__["List"]();
}
var pieceTypes;
(function (pieceTypes) {
    pieceTypes[pieceTypes["pawn"] = 0] = "pawn";
    pieceTypes[pieceTypes["knight"] = 1] = "knight";
    pieceTypes[pieceTypes["rook"] = 2] = "rook";
    pieceTypes[pieceTypes["tower"] = 3] = "tower";
    pieceTypes[pieceTypes["queen"] = 4] = "queen";
    pieceTypes[pieceTypes["king"] = 5] = "king";
})(pieceTypes || (pieceTypes = {}));
function getPieceIcon(iswhite, type) {
    if (iswhite) {
        switch (type) {
            case pieceTypes.pawn:
                return "&#9817;";
            case pieceTypes.knight:
                return "&#9816;";
            case pieceTypes.rook:
                return "&#9815;";
            case pieceTypes.tower:
                return "&#9814;";
            case pieceTypes.queen:
                return "&#9813;";
            case pieceTypes.king:
                return "&#9812;";
        }
    }
    else {
        switch (type) {
            case pieceTypes.pawn:
                return "&#9823;";
            case pieceTypes.knight:
                return "&#9822;";
            case pieceTypes.rook:
                return "&#9821;";
            case pieceTypes.tower:
                return "&#9820;";
            case pieceTypes.queen:
                return "&#9819;";
            case pieceTypes.king:
                return "&#9818;";
        }
    }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * LinQ to TypeScript
 *
 * Documentation from LinQ .NET specification (https://msdn.microsoft.com/en-us/library/system.linq.enumerable.aspx)
 *
 * Created by Flavio Corpa (@kutyel)
 * Copyright © 2016 Flavio Corpa. All rights reserved.
 *
 */
var List = /** @class */ (function () {
    /**
     * Defaults the elements of the list
     */
    function List(elements) {
        if (elements === void 0) { elements = []; }
        this._elements = elements;
    }
    /**
     * Adds an object to the end of the List<T>.
     */
    List.prototype.Add = function (element) {
        this._elements.push(element);
    };
    /**
     * Adds the elements of the specified collection to the end of the List<T>.
     */
    List.prototype.AddRange = function (elements) {
        (_a = this._elements).push.apply(_a, elements);
        var _a;
    };
    /**
     * Applies an accumulator function over a sequence.
     */
    List.prototype.Aggregate = function (accumulator, initialValue) {
        return this._elements.reduce(accumulator, initialValue);
    };
    /**
     * Determines whether all elements of a sequence satisfy a condition.
     */
    List.prototype.All = function (predicate) {
        return this._elements.every(predicate);
    };
    List.prototype.Any = function (predicate) {
        return predicate
            ? this._elements.some(predicate)
            : this._elements.length > 0;
    };
    List.prototype.Average = function (transform) {
        return this.Sum(transform) / this.Count(transform);
    };
    /**
     * Casts the elements of a sequence to the specified type.
     */
    List.prototype.Cast = function () {
        return new List(this._elements);
    };
    /**
     * Concatenates two sequences.
     */
    List.prototype.Concat = function (list) {
        return new List(this._elements.concat(list.ToArray()));
    };
    /**
     * Determines whether an element is in the List<T>.
     */
    List.prototype.Contains = function (element) {
        return this._elements.some(function (x) { return x === element; });
    };
    List.prototype.Count = function (predicate) {
        return predicate ? this.Where(predicate).Count() : this._elements.length;
    };
    /**
     * Returns the elements of the specified sequence or the type parameter's default value
     * in a singleton collection if the sequence is empty.
     */
    List.prototype.DefaultIfEmpty = function (defaultValue) {
        return this.Count() ? this : new List([defaultValue]);
    };
    /**
     * Returns distinct elements from a sequence by using the default equality comparer to compare values.
     */
    List.prototype.Distinct = function () {
        return this.Where(function (value, index, iter) { return iter.indexOf(value) === index; });
    };
    /**
     * Returns distinct elements from a sequence according to specified key selector.
     */
    List.prototype.DistinctBy = function (keySelector) {
        var groups = this.GroupBy(keySelector, function (obj) { return obj; });
        var results = new List();
        for (var index in groups) {
            if (groups.hasOwnProperty(index)) {
                results.Add(groups[index][0]);
            }
        }
        return results;
    };
    /**
     * Returns the element at a specified index in a sequence.
     */
    List.prototype.ElementAt = function (index) {
        if (index < this.Count()) {
            return this._elements[index];
        }
        else {
            var MSG = 'ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.';
            throw new Error(MSG);
        }
    };
    /**
     * Returns the element at a specified index in a sequence or a default value if the index is out of range.
     */
    List.prototype.ElementAtOrDefault = function (index) {
        return this.ElementAt(index) || undefined;
    };
    /**
     * Produces the set difference of two sequences by using the default equality comparer to compare values.
     */
    List.prototype.Except = function (source) {
        return this.Where(function (x) { return !source.Contains(x); });
    };
    List.prototype.First = function (predicate) {
        if (this.Count()) {
            return predicate ? this.Where(predicate).First() : this._elements[0];
        }
        else {
            throw new Error('InvalidOperationException: The source sequence is empty.');
        }
    };
    List.prototype.FirstOrDefault = function (predicate) {
        return this.Count(predicate) ? this.First(predicate) : undefined;
    };
    /**
     * Performs the specified action on each element of the List<T>.
     */
    List.prototype.ForEach = function (action) {
        return this._elements.forEach(action);
    };
    /**
     * Groups the elements of a sequence according to a specified key selector function.
     */
    List.prototype.GroupBy = function (grouper, mapper) {
        return this.Aggregate(function (ac, v) { return (ac[grouper(v)]
            ? ac[grouper(v)].push(mapper(v))
            : (ac[grouper(v)] = [mapper(v)]),
            ac); }, {});
    };
    /**
     * Correlates the elements of two sequences based on equality of keys and groups the results.
     * The default equality comparer is used to compare keys.
     */
    List.prototype.GroupJoin = function (list, key1, key2, result) {
        return this.Select(function (x, y) {
            return result(x, list.Where(function (z) { return key1(x) === key2(z); }));
        });
    };
    /**
     * Returns the index of the first occurence of an element in the List.
     */
    List.prototype.IndexOf = function (element) {
        return this._elements.indexOf(element);
    };
    /**
     * Inserts an element into the List<T> at the specified index.
     */
    List.prototype.Insert = function (index, element) {
        if (index < 0 || index > this._elements.length) {
            throw new Error('Index is out of range.');
        }
        this._elements.splice(index, 0, element);
    };
    /**
     * Produces the set intersection of two sequences by using the default equality comparer to compare values.
     */
    List.prototype.Intersect = function (source) {
        return this.Where(function (x) { return source.Contains(x); });
    };
    /**
     * Correlates the elements of two sequences based on matching keys. The default equality comparer is used to compare keys.
     */
    List.prototype.Join = function (list, key1, key2, result) {
        return this.SelectMany(function (x) {
            return list.Where(function (y) { return key2(y) === key1(x); }).Select(function (z) { return result(x, z); });
        });
    };
    List.prototype.Last = function (predicate) {
        if (this.Count()) {
            return predicate
                ? this.Where(predicate).Last()
                : this._elements[this.Count() - 1];
        }
        else {
            throw Error('InvalidOperationException: The source sequence is empty.');
        }
    };
    List.prototype.LastOrDefault = function (predicate) {
        return this.Count(predicate) ? this.Last(predicate) : undefined;
    };
    /**
     * Returns the maximum value in a generic sequence.
     */
    List.prototype.Max = function () {
        return this.Aggregate(function (x, y) { return (x > y ? x : y); });
    };
    /**
     * Returns the minimum value in a generic sequence.
     */
    List.prototype.Min = function () {
        return this.Aggregate(function (x, y) { return (x < y ? x : y); });
    };
    /**
     * Filters the elements of a sequence based on a specified type.
     */
    List.prototype.OfType = function (type) {
        var typeName;
        switch (type) {
            case Number:
                typeName = typeof 0;
                break;
            case String:
                typeName = typeof '';
                break;
            case Boolean:
                typeName = typeof true;
                break;
            case Function:
                typeName = typeof function () { }; // tslint:disable-line no-empty
                break;
            default:
                typeName = null;
                break;
        }
        return typeName === null
            ? this.Where(function (x) { return x instanceof type; }).Cast()
            : this.Where(function (x) { return typeof x === typeName; }).Cast();
    };
    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     */
    List.prototype.OrderBy = function (keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComparerForKey(keySelector, false));
    };
    /**
     * Sorts the elements of a sequence in descending order according to a key.
     */
    List.prototype.OrderByDescending = function (keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComparerForKey(keySelector, true));
    };
    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     */
    List.prototype.ThenBy = function (keySelector) {
        return this.OrderBy(keySelector);
    };
    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
     */
    List.prototype.ThenByDescending = function (keySelector) {
        return this.OrderByDescending(keySelector);
    };
    /**
     * Removes the first occurrence of a specific object from the List<T>.
     */
    List.prototype.Remove = function (element) {
        return this.IndexOf(element) !== -1
            ? (this.RemoveAt(this.IndexOf(element)), true)
            : false;
    };
    /**
     * Removes all the elements that match the conditions defined by the specified predicate.
     */
    List.prototype.RemoveAll = function (predicate) {
        return this.Where(this._negate(predicate));
    };
    /**
     * Removes the element at the specified index of the List<T>.
     */
    List.prototype.RemoveAt = function (index) {
        this._elements.splice(index, 1);
    };
    /**
     * Reverses the order of the elements in the entire List<T>.
     */
    List.prototype.Reverse = function () {
        return new List(this._elements.reverse());
    };
    /**
     * Projects each element of a sequence into a new form.
     */
    List.prototype.Select = function (mapper) {
        return new List(this._elements.map(mapper));
    };
    /**
     * Projects each element of a sequence to a List<any> and flattens the resulting sequences into one sequence.
     */
    List.prototype.SelectMany = function (mapper) {
        var _this = this;
        return this.Aggregate(function (ac, v, i) { return (ac.AddRange(_this.Select(mapper)
            .ElementAt(i)
            .ToArray()),
            ac); }, new List());
    };
    /**
     * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
     */
    List.prototype.SequenceEqual = function (list) {
        return !!this._elements.reduce(function (x, y, z) { return (list._elements[z] === y ? x : undefined); });
    };
    /**
     * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
     */
    List.prototype.Single = function (predicate) {
        if (this.Count(predicate) !== 1) {
            throw new Error('The collection does not contain exactly one element.');
        }
        else {
            return this.First(predicate);
        }
    };
    /**
     * Returns the only element of a sequence, or a default value if the sequence is empty;
     * this method throws an exception if there is more than one element in the sequence.
     */
    List.prototype.SingleOrDefault = function (predicate) {
        return this.Count(predicate) ? this.Single(predicate) : undefined;
    };
    /**
     * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
     */
    List.prototype.Skip = function (amount) {
        return new List(this._elements.slice(Math.max(0, amount)));
    };
    /**
     * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
     */
    List.prototype.SkipWhile = function (predicate) {
        var _this = this;
        return this.Skip(this.Aggregate(function (ac, val) { return (predicate(_this.ElementAt(ac)) ? ++ac : ac); }, 0));
    };
    List.prototype.Sum = function (transform) {
        return transform
            ? this.Select(transform).Sum()
            : this.Aggregate(function (ac, v) { return (ac += +v); }, 0);
    };
    /**
     * Returns a specified number of contiguous elements from the start of a sequence.
     */
    List.prototype.Take = function (amount) {
        return new List(this._elements.slice(0, Math.max(0, amount)));
    };
    /**
     * Returns elements from a sequence as long as a specified condition is true.
     */
    List.prototype.TakeWhile = function (predicate) {
        var _this = this;
        return this.Take(this.Aggregate(function (ac, val) { return (predicate(_this.ElementAt(ac)) ? ++ac : ac); }, 0));
    };
    /**
     * Copies the elements of the List<T> to a new array.
     */
    List.prototype.ToArray = function () {
        return this._elements;
    };
    List.prototype.ToDictionary = function (key, value) {
        var _this = this;
        return this.Aggregate(function (o, v, i) { return ((o[_this.Select(key)
            .ElementAt(i)
            .toString()] = value ? _this.Select(value).ElementAt(i) : v),
            o); }, {});
    };
    /**
     * Creates a List<T> from an Enumerable.List<T>.
     */
    List.prototype.ToList = function () {
        return this;
    };
    /**
     * Creates a Lookup<TKey, TElement> from an IEnumerable<T> according to specified key selector and element selector functions.
     */
    List.prototype.ToLookup = function (keySelector, elementSelector) {
        return this.GroupBy(keySelector, elementSelector);
    };
    /**
     * Produces the set union of two sequences by using the default equality comparer.
     */
    List.prototype.Union = function (list) {
        return this.Concat(list).Distinct();
    };
    /**
     * Filters a sequence of values based on a predicate.
     */
    List.prototype.Where = function (predicate) {
        return new List(this._elements.filter(predicate));
    };
    /**
     * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
     */
    List.prototype.Zip = function (list, result) {
        var _this = this;
        return list.Count() < this.Count()
            ? list.Select(function (x, y) { return result(_this.ElementAt(y), x); })
            : this.Select(function (x, y) { return result(x, list.ElementAt(y)); });
    };
    /**
     * Creates a function that negates the result of the predicate
     */
    List.prototype._negate = function (predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    };
    return List;
}());
exports.List = List;
var ComparerHelper = /** @class */ (function () {
    function ComparerHelper() {
    }
    ComparerHelper.ComparerForKey = function (_keySelector, descending) {
        return function (a, b) {
            return ComparerHelper.Compare(a, b, _keySelector, descending);
        };
    };
    ComparerHelper.Compare = function (a, b, _keySelector, descending) {
        var sortKeyA = _keySelector(a);
        var sortKeyB = _keySelector(b);
        if (sortKeyA > sortKeyB) {
            if (!descending) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (sortKeyA < sortKeyB) {
            if (!descending) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            return 0;
        }
    };
    ComparerHelper.ComposeComparers = function (previousComparer, currentComparer) {
        return function (a, b) {
            var resultOfPreviousComparer = previousComparer(a, b);
            if (!resultOfPreviousComparer) {
                return currentComparer(a, b);
            }
            else {
                return resultOfPreviousComparer;
            }
        };
    };
    return ComparerHelper;
}());
/**
 * Represents a sorted sequence. The methods of this class are implemented by using deferred execution.
 * The immediate return value is an object that stores all the information that is required to perform the action.
 * The query represented by this method is not executed until the object is enumerated either by
 * calling its ToDictionary, ToLookup, ToList or ToArray methods
 */
var OrderedList = /** @class */ (function (_super) {
    __extends(OrderedList, _super);
    function OrderedList(elements, _comparer) {
        var _this = _super.call(this, elements) || this;
        _this._comparer = _comparer;
        _this._elements.sort(_this._comparer);
        return _this;
    }
    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     * @override
     */
    OrderedList.prototype.ThenBy = function (keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComposeComparers(this._comparer, ComparerHelper.ComparerForKey(keySelector, false)));
    };
    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
     * @override
     */
    OrderedList.prototype.ThenByDescending = function (keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComposeComparers(this._comparer, ComparerHelper.ComparerForKey(keySelector, true)));
    };
    return OrderedList;
}(List));
var Enumerable = /** @class */ (function () {
    function Enumerable() {
    }
    /**
     * Generates a sequence of integral numbers within a specified range.
     */
    Enumerable.Range = function (start, count) {
        var result = new List();
        while (count--) {
            result.Add(start++);
        }
        return result;
    };
    /**
     * Generates a sequence that contains one repeated value.
     */
    Enumerable.Repeat = function (element, count) {
        var result = new List();
        while (count--) {
            result.Add(element);
        }
        return result;
    };
    return Enumerable;
}());
exports.Enumerable = Enumerable;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rulesHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieces__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__);


var rulesHelper;
(function (rulesHelper) {
    //public 
    function checkAvailableMoves(piece, game) {
        var initialLegalMoves = checkBoundaries(piece);
        if (initialLegalMoves.Count() == 0)
            return initialLegalMoves;
        var legalKingProtectionMoves = exposingKing(piece, game, initialLegalMoves);
        if (legalKingProtectionMoves.Count() == 0)
            return legalKingProtectionMoves;
        var legalBoardMoves = checkBlocks(piece, legalKingProtectionMoves, game.currentPlayer);
        if (legalBoardMoves.Count() == 0)
            return legalBoardMoves;
        var legalBoardMoves2 = checkBlocks(piece, legalBoardMoves, game.nonCurrentPlayer, true);
        return legalBoardMoves2;
    }
    rulesHelper.checkAvailableMoves = checkAvailableMoves;
    function checkKingAvailableMoves(king, game) {
        var initialLegalMoves = checkBoundaries(king);
        if (initialLegalMoves.Count() == 0)
            return initialLegalMoves;
        var legalBoardMoves = checkBlocks(king, initialLegalMoves, game.currentPlayer);
        if (legalBoardMoves.Count() == 0)
            return legalBoardMoves;
        return checkKingOnlyMoves(legalBoardMoves, game.nonCurrentPlayer);
    }
    rulesHelper.checkKingAvailableMoves = checkKingAvailableMoves;
    function isAttack(tiles, targetTile) {
        if (targetTile.occupant === undefined)
            return false;
        return tiles.Contains(targetTile.id);
    }
    rulesHelper.isAttack = isAttack;
    function canPawnUpgrade(pawn) {
        if (pawn.currentLocation < 9 || pawn.currentLocation > 57)
            return true;
        return false;
    }
    rulesHelper.canPawnUpgrade = canPawnUpgrade;
    function getLocationsBetweenTwoPieces(line, from, to) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var bigNum = from > to ? from : to;
        var smallNum = from > to ? to : from;
        switch (line) {
            case 1:
                while (smallNum < bigNum) {
                    smallNum++;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -1:
                while (smallNum < bigNum) {
                    bigNum--;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 9:
                while (smallNum < bigNum) {
                    smallNum += 9;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -9:
                while (smallNum < bigNum) {
                    bigNum -= 9;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 8:
                while (smallNum < bigNum) {
                    smallNum += 8;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -8:
                while (smallNum < bigNum) {
                    bigNum -= 8;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 7:
                while (smallNum < bigNum) {
                    smallNum += 7;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -7:
                while (smallNum < bigNum) {
                    bigNum -= 7;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
        }
        return result;
    }
    rulesHelper.getLocationsBetweenTwoPieces = getLocationsBetweenTwoPieces;
    function getLine(assassin, target) {
        var diff = assassin.currentLocation - target.currentLocation;
        if (diff % 9 === 0) {
            if (diff > 0)
                return 9;
            else
                return -9;
        }
        if (diff % 8 === 0) {
            if (diff > 0)
                return 8;
            else
                return -8;
        }
        if (diff % 7 === 0) {
            if (diff > 0)
                return 7;
            else
                return -7;
        }
        if (diff > 0)
            return 1;
        else
            return -1;
    }
    rulesHelper.getLine = getLine;
    //#region king protection
    function exposingKing(piece, game, initialLegalMoves) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var target = game.currentPlayer.pieces.Where(function (x) { return x.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).FirstOrDefault();
        if (!isDirectLine(piece, target))
            return initialLegalMoves; //1.is there a direct line between the moving piece and its king
        var line = getLine(piece, target);
        var locationsToCheck1 = getLocationsBetweenTwoPieces(line, piece.currentLocation, target.currentLocation);
        if (blockersInLocations(locationsToCheck1, game))
            return initialLegalMoves; //2. are there other pieces between the moving piece and its king
        var assassin = potentialAssassin(line, piece.currentLocation, game); //3. is there an enemy piece in line that can kill the king
        if (!assassin)
            return initialLegalMoves;
        var locationsToCheck2 = getLocationsBetweenTwoPieces(line, piece.currentLocation, assassin.currentLocation);
        if (blockersInLocations(locationsToCheck2, game))
            return initialLegalMoves; //4. is the moving piece the only thing between the assassin and the king
        var totalLineMoves = locationsToCheck1.Concat(locationsToCheck2);
        var legalMoves = initialLegalMoves.Intersect(totalLineMoves);
        if (initialLegalMoves.Contains(assassin.currentLocation))
            legalMoves.Add(assassin.currentLocation);
        return legalMoves; //return only moves that are part of the piece moveset and are on the line
    }
    function blockersInLocations(locationsToCheck, game) {
        var AlliedLocations = game.currentPlayer.occupiedTiles.Select(function (x) { return x.id; });
        var enemyLocations = game.nonCurrentPlayer.occupiedTiles.Select(function (x) { return x.id; });
        if (AlliedLocations.Intersect(locationsToCheck).Count() > 0)
            return true;
        if (enemyLocations.Intersect(locationsToCheck).Count() > 0)
            return true;
        return false;
    }
    function isDirectLine(defender, target) {
        var diff = Math.abs(defender.currentLocation - target.currentLocation);
        if (diff % 9 === 0)
            return true;
        if (diff % 8 === 0)
            return true;
        if (diff % 7 === 0)
            return true;
        if (diff > 7)
            return false;
        if (sameRow(defender.currentLocation, target.currentLocation))
            return true;
        return false;
    }
    function sameRow(location1, location2) {
        var row1 = Math.floor(location1 / 8);
        var row2 = Math.floor(location2 / 8);
        if (location1 % 8 !== 0 && location2 % 8 !== 0) {
            if (row1 === row2)
                return true;
        }
        if (location1 % 8 === 0) {
            if (row1 - 1 === row2)
                return true;
        }
        if (location2 % 8 === 0) {
            if (row2 - 1 === row1)
                return true;
        }
        return false;
    }
    function getLocationsBetweenPieceAndBoundary(line, from) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var rightBoundary = from % 8 == 0 ? from : (Math.ceil(from / 8)) * 8;
        var leftBoundary = from % 8 == 1 ? from : (Math.floor(from / 8)) * 8 + 1;
        var limit;
        var index = from;
        switch (line) {
            case 1:
                limit = rightBoundary;
                while (index < limit) {
                    index++;
                    if (index < limit)
                        result.Add(index);
                }
                break;
            case -1:
                limit = leftBoundary;
                while (index > limit) {
                    index--;
                    if (index > limit)
                        result.Add(index);
                }
                break;
            case 9:
                while (index < 65 && index % 8 != 0) {
                    index += 9;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -9:
                while (index > 0 && index % 8 != 1) {
                    index -= 9;
                    if (index > 0)
                        result.Add(index);
                }
                break;
            case 8:
                while (index < 65) {
                    index += 8;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -8:
                while (index > 0) {
                    index -= 8;
                    if (index > 0)
                        result.Add(index);
                }
                break;
            case 7:
                while (index < 65 && index % 8 != 1) {
                    index += 7;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -7:
                while (index < 0 && index % 8 != 0) {
                    index -= 7;
                    if (index < 0)
                        result.Add(index);
                }
                break;
        }
        return result;
    }
    function potentialAssassin(line, from, game) {
        var locations = getLocationsBetweenPieceAndBoundary(line, from);
        if (locations.Count() == 0)
            return null;
        var assassin = game.nonCurrentPlayer.pieces.Where(function (x) { return locations.Contains(x.currentLocation); }).FirstOrDefault();
        if (!assassin)
            return null;
        if (assassin.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen)
            return assassin;
        if (assassin.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook) {
            if (line == 9 || line == -9 || line == 7 || line == -7)
                return assassin;
        }
        if (assassin.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower) {
            if (line == 8 || line == -8 || line == 1 || line == -1)
                return assassin;
        }
        return null;
    }
    //#endregion
    //#region boundaries
    function checkBoundaries(piece) {
        var rawMoves = piece.moveSet.ToArray().filter(function (move) {
            if (move + piece.currentLocation < 65 && move + piece.currentLocation > 0)
                return move;
        });
        switch (piece.type) {
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn:
                var _pawn_1 = piece;
                var locations = rawMoves.filter(function (move) {
                    if (_pawn_1.isFirstMove) {
                        return move;
                    }
                    else {
                        if (move !== 16 && move !== -16) {
                            return move;
                        }
                    }
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight:
                var locations = rawMoves.filter(function (move) {
                    if (piece.currentLocation % 8 === 1) {
                        if (move === -15 || move === -6 || move === 10 || move === 17)
                            return move;
                        else
                            return;
                    }
                    if (piece.currentLocation % 8 === 2) {
                        if (move !== 6 && move !== -10)
                            return move;
                        else
                            return;
                    }
                    if (piece.currentLocation % 8 === 7) {
                        if (move !== -6 && move !== 10)
                            return move;
                        else
                            return;
                    }
                    if (piece.currentLocation % 8 === 0) {
                        if (move === 6 || move === -10 || move === 15 || move === -17)
                            return move;
                        else
                            return;
                    }
                    return move;
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook:
                var locations = rawMoves.filter(function (move) {
                    if (piece.currentLocation % 8 === 0) {
                        if (move === -63 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === 7 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42 || move === 49)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move === -49 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54 || move === 63)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move === -35 || move === -28 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 27 || move === 36 || move === 45)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move === -28 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move === -36 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move === -36 || move === -27 || move === -45 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 28 || move === 35)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if (move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42)
                            return move;
                    }
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower:
                var locations = rawMoves.filter(function (move) {
                    if (piece.currentLocation % 8 === 0) {
                        if (move < 0 || move % 8 === 0)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move > 0 || move % 8 === 0)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move % 8 === 0 || (move > 0 && move < 7) || move === -1)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move % 8 === 0 || (move > 0 && move < 6) || move === -1 || move === -2)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move % 8 === 0 || (move > 0 && move < 5) || move === -1 || move === -2 || move === -3)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move % 8 === 0 || (move > 0 && move < 4) || move === -1 || move === -2 || move === -3 || move === -4)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move % 8 === 0 || (move > 0 && move < 3) || (move > -6 && move < 0))
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if (move % 8 === 0 || (move === 1) || (move > -7 && move < 0))
                            return move;
                    }
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen:
                var locations = rawMoves.filter(function (move) {
                    if (piece.currentLocation % 8 === 0) {
                        if ((move < 0 && move > -8) || move % 8 === 0 || move === -63 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === 7 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42 || move === 49)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if ((move > 0 && move < 8) || move % 8 === 0 || move === -49 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54 || move === 63)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move === -1 || (move > 0 && move < 7) || move % 8 === 0 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move === -1 || move === -2 || (move > 0 && move < 6) || move % 8 === 0 || move === -35 || move === -28 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 27 || move === 36 || move === 45)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move === -1 || move === -2 || move === -3 || (move > 0 && move < 5) || move % 8 === 0 || move === -28 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move === -1 || move === -2 || move === -3 || move === -4 || (move > 0 && move < 4) || move % 8 === 0 || move === -36 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 28)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move === -1 || move === -2 || move === -3 || move === -4 || move === -5 || (move > 0 && move < 3) || move % 8 === 0 || move === -36 || move === -27 || move === -45 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 28 || move === 35)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if ((move > -7 && move < 0) || move === 1 || move % 8 === 0 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42)
                            return move;
                    }
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king:
                var locations = rawMoves.filter(function (move) {
                    if (piece.currentLocation % 8 === 0) {
                        if (move !== 9 && move !== 1 && move !== -9)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move !== 7 && move !== -1 && move !== 7)
                            return move;
                    }
                    else
                        return move;
                }).map(function (move) {
                    return move + piece.currentLocation;
                });
                break;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"](locations);
    }
    //#endregion
    //#region blocks
    function checkBlocks(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var res = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        switch (piece.type) {
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn:
                res = checkBlockPawn(piece, locations, player, isOpponent);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight:
                res = checkBlockKnight(locations, player, isOpponent);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook:
                res = checkBlockRook(piece, locations, player, isOpponent);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower:
                res = checkBlockTower(piece, locations, player, isOpponent);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen:
                res = checkBlockQueen(piece, locations, player, isOpponent);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king:
                res = checkBlockKing(piece, locations, player);
                break;
        }
        return res;
    }
    function initialBlockCheck(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var occupied = player.occupiedTiles.Select(function (x) { return x.id; }).OrderBy(function (y) { return y; });
        if (player.id === "black")
            occupied = player.occupiedTiles.Select(function (x) { return x.id; }).OrderByDescending(function (y) { return y; });
        locations = locations.OrderByDescending(function (y) { return y; });
        if (piece.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower) {
            var plus8 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 8 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 8 : 0);
            if (plus8 > 64)
                plus8 = NaN;
            var minus8 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 8 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 8 : 0);
            if (minus8 < 0)
                minus8 = NaN;
            var rightSide = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && t - piece.currentLocation <= piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0; }).OrderBy(function (m) { return Math.abs(m - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 1 : 0);
            var leftSide = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && piece.currentLocation - t > piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0; }).OrderBy(function (m) { return Math.abs(m - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 1 : 0);
            return new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]([minus8, leftSide, rightSide, plus8]).Where(function (y) { return y !== undefined; }).Distinct();
        }
        else if (piece.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook) {
            var plus9 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 9 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 9 : 0);
            var minus9 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 9 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 9 : 0);
            var plus7 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 7 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 7 : 0);
            var minus7 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 7 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 7 : 0);
            return new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]([minus9, minus7, plus7, plus9]).Where(function (y) { return y !== undefined; }).Distinct();
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen) {
            var plus8 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 8 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 8 : 0);
            ;
            var minus8 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 8 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 8 : 0);
            var rightSide = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && t - piece.currentLocation <= piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0; }).OrderBy(function (m) { return Math.abs(m - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 1 : 0);
            var leftSide = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && piece.currentLocation - t > piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0; }).OrderBy(function (m) { return Math.abs(m - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 1 : 0);
            var plus9 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 9 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 9 : 0);
            var minus9 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 9 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 9 : 0);
            var plus7 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation > 0 && (t - piece.currentLocation) % 7 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() + (isOpponent ? 7 : 0);
            var minus7 = locations.Intersect(occupied).Where(function (t) { return t - piece.currentLocation < 0 && (t - piece.currentLocation) % 7 === 0; }).OrderBy(function (x) { return Math.abs(x - piece.currentLocation); }).FirstOrDefault() - (isOpponent ? 7 : 0);
            return new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]([minus9, minus7, plus7, plus9, minus8, leftSide, rightSide, plus8]).Where(function (y) { return y !== undefined; }).OrderBy(function (b) { return b; }).Distinct();
        }
    }
    function checkBlockPawn(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var pawn = piece;
        if (pawn.isWhite) {
            if (isOpponent) {
                var victim1 = player.occupiedTiles.Where(function (x) { return x.id === pawn.currentLocation + 7; }).FirstOrDefault();
                if (!victim1)
                    locations = locations.Except(locations.Where(function (x) { return x === pawn.currentLocation + 7; }));
                var victim2 = player.occupiedTiles.Where(function (x) { return x.id === pawn.currentLocation + 9; }).FirstOrDefault();
                if (!victim2)
                    locations = locations.Except(locations.Where(function (x) { return x === pawn.currentLocation + 9; }));
            }
            else
                locations = locations.Except(player.occupiedTiles.Select(function (z) { return z.id; }).Where(function (c) { return c < pawn.currentLocation; }).ToList());
        }
        else {
            if (isOpponent) {
                var victim1 = player.occupiedTiles.Where(function (x) { return x.id === pawn.currentLocation - 7; }).FirstOrDefault();
                if (!victim1)
                    locations = locations.Except(locations.Where(function (x) { return x === pawn.currentLocation - 7; }));
                var victim2 = player.occupiedTiles.Where(function (x) { return x.id === pawn.currentLocation - 9; }).FirstOrDefault();
                if (!victim2)
                    locations = locations.Except(locations.Where(function (x) { return x === pawn.currentLocation - 9; }));
            }
            else
                locations = locations.Except(player.occupiedTiles.Select(function (z) { return z.id; }).Where(function (c) { return c > pawn.currentLocation; }).ToList());
        }
        if (!pawn.isFirstMove) {
            if (isOpponent) {
                return locations.Except(player.occupiedTiles.Where(function (z) { return Math.abs(z.id - pawn.currentLocation) === 8; }).Select(function (t) { return t.id; }).ToList());
            }
            return locations.Except(player.occupiedTiles.Select(function (z) { return z.id; }).ToList());
        }
        else {
            if (locations.Contains(piece.currentLocation + 16) && !locations.Contains(piece.currentLocation + 8)) {
                locations.Remove(piece.currentLocation + 16);
            }
            else if (locations.Contains(piece.currentLocation - 16) && !locations.Contains(piece.currentLocation - 8)) {
                locations.Remove(piece.currentLocation - 16);
            }
            return locations;
        }
    }
    function checkBlockKnight(locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        if (isOpponent)
            return locations;
        return locations.Except(player.occupiedTiles.Select(function (z) { return z.id; }).ToList());
    }
    function checkBlockRook(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var behindBlocked = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var blocked = initialBlockCheck(piece, locations, player, isOpponent);
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach(function (num) {
            var diff = num - piece.currentLocation;
            var index = num;
            if (diff % 9 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 9;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 9;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (diff % 7 === 0) {
                if (diff > 0) {
                    while (index < 57) {
                        index += 7;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 7;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
        });
        return locations.Except(blocked).Except(behindBlocked);
    }
    function checkBlockTower(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var behindBlocked = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var blocked = initialBlockCheck(piece, locations, player, isOpponent);
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach(function (num) {
            var diff = num - piece.currentLocation;
            var index = num;
            if (Math.abs(diff) < 8) {
                if (diff > 0) {
                    while (index % 8 > 0) {
                        index += 1;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index % 8 > 1) {
                        index -= 1;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (diff % 8 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 8;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 8;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
        });
        return locations.Except(blocked).Except(behindBlocked);
    }
    function checkBlockQueen(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var behindBlocked = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var blocked = initialBlockCheck(piece, locations, player, isOpponent);
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach(function (num) {
            var diff = num - piece.currentLocation;
            var index = num;
            if (diff % 9 === 0) {
                if (diff > 0) {
                    while (index < 56) {
                        index += 9;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 9) {
                        index -= 9;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (diff % 7 === 0) {
                if (diff > 0) {
                    while (index < 56) {
                        index += 7;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 7;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (Math.abs(diff) < 8) {
                if (diff > 0) {
                    while (index % 8 > 0) {
                        index += 1;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index % 8 > 1) {
                        index -= 1;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (diff % 8 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 8;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 8;
                        if (locations.Where(function (x) { return x === index; }).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
        });
        return locations.Except(blocked).Except(behindBlocked);
    }
    function checkBlockKing(piece, locations, player, isOpponent) {
        if (isOpponent === void 0) { isOpponent = false; }
        var blocked = locations.Intersect(player.occupiedTiles.Select(function (x) { return x.id; }));
        return locations.Except(blocked);
    }
    function checkKingOnlyMoves(initialLocations, enemyPlayer) {
        var trash = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        initialLocations.ForEach(function (location) {
            enemyPlayer.pieces.ForEach(function (piece) {
                if (piece.availableLocations.Where(function (x) { return x == location; }).Count() == 1) {
                    trash.Add(location);
                    return;
                }
            });
        });
        return initialLocations.Except(trash);
    }
    //#endregion
})(rulesHelper || (rulesHelper = {}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return visualUI; });
var visualUI;
(function (visualUI) {
    visualUI.classNames = {
        destination: "highlight-destination",
        threat: "highlight-threat"
    };
    function highlightTile(id, className) {
        var tile = document.getElementById(id.toString());
        if (tile) {
            tile.classList.add(className);
            //tile.innerText = tile.id;
        }
    }
    visualUI.highlightTile = highlightTile;
    function removeAllHighlights() {
        var elements = document.querySelectorAll(".piece");
        if (elements) {
            [].forEach.call(elements, function (el) {
                if (el.classList.contains('white_square'))
                    el.className = 'piece white_square';
                else
                    el.className = 'piece black_square';
            });
        }
    }
    visualUI.removeAllHighlights = removeAllHighlights;
    function removeHighlight(className) {
        var elements = document.querySelectorAll(".piece");
        if (elements) {
            [].forEach.call(elements, function (el) {
                el.classList.remove(className);
            });
        }
    }
    visualUI.removeHighlight = removeHighlight;
    function move(from, to) {
        var pieceHtmlText = document.getElementById(from.toString()).innerText;
        document.getElementById(from.toString()).innerText = "";
        document.getElementById(to.toString()).innerText = pieceHtmlText;
    }
    visualUI.move = move;
})(visualUI || (visualUI = {}));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieces__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__);



var initializer;
(function (initializer) {
    function initPieces(id) {
        if (id == "white") {
            return new __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__["List"]([
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 9),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 10),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw3", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 11),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw4", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 12),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw5", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 13),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw6", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 14),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw7", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 15),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pw8", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, true, false, 16),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["b" /* knight */]("knw1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight, true, false, 2),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["b" /* knight */]("knw2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight, true, false, 7),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["g" /* tower */]("tw1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower, true, false, 1),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["g" /* tower */]("tw2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower, true, false, 8),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["f" /* rook */]("rw1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook, true, false, 3),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["f" /* rook */]("rw2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook, true, false, 6),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["e" /* queen */]("qw", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen, true, false, 4),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["a" /* king */]("kiw", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king, true, false, 5),
            ]);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__["List"]([
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 49),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 50),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb3", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 51),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb4", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 52),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb5", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 53),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb6", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 54),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb7", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 55),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["c" /* pawn */]("pb8", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn, false, false, 56),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["b" /* knight */]("knb1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight, false, false, 58),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["b" /* knight */]("knb2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight, false, false, 63),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["g" /* tower */]("tb1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower, false, false, 57),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["g" /* tower */]("tb2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower, false, false, 64),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["f" /* rook */]("rb1", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook, false, false, 59),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["f" /* rook */]("rb2", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].rook, false, false, 62),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["e" /* queen */]("qb", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].queen, false, false, 60),
                new __WEBPACK_IMPORTED_MODULE_0__pieces__["a" /* king */]("kib", __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king, false, false, 61),
            ]);
        }
    }
    initializer.initPieces = initPieces;
    function initOccupiedTiles(player) {
        if (player.id === "white") {
            return new __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__["List"]([
                { id: 1, occupant: player.pieces.Where(function (p) { return p.id === "tw1"; }).First() },
                { id: 2, occupant: player.pieces.Where(function (p) { return p.id === "knw1"; }).First() },
                { id: 3, occupant: player.pieces.Where(function (p) { return p.id === "rw1"; }).First() },
                { id: 4, occupant: player.pieces.Where(function (p) { return p.id === "qw"; }).First() },
                { id: 5, occupant: player.pieces.Where(function (p) { return p.id === "kiw"; }).First() },
                { id: 6, occupant: player.pieces.Where(function (p) { return p.id === "rw2"; }).First() },
                { id: 7, occupant: player.pieces.Where(function (p) { return p.id === "knw2"; }).First() },
                { id: 8, occupant: player.pieces.Where(function (p) { return p.id === "tw2"; }).First() },
                { id: 9, occupant: player.pieces.Where(function (p) { return p.id === "pw1"; }).First() },
                { id: 10, occupant: player.pieces.Where(function (p) { return p.id === "pw2"; }).First() },
                { id: 11, occupant: player.pieces.Where(function (p) { return p.id === "pw3"; }).First() },
                { id: 12, occupant: player.pieces.Where(function (p) { return p.id === "pw4"; }).First() },
                { id: 13, occupant: player.pieces.Where(function (p) { return p.id === "pw5"; }).First() },
                { id: 14, occupant: player.pieces.Where(function (p) { return p.id === "pw6"; }).First() },
                { id: 15, occupant: player.pieces.Where(function (p) { return p.id === "pw7"; }).First() },
                { id: 16, occupant: player.pieces.Where(function (p) { return p.id === "pw8"; }).First() }
            ]);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__["List"]([
                { id: 57, occupant: player.pieces.Where(function (p) { return p.id === "tb1"; }).First() },
                { id: 58, occupant: player.pieces.Where(function (p) { return p.id === "knb1"; }).First() },
                { id: 59, occupant: player.pieces.Where(function (p) { return p.id === "rb1"; }).First() },
                { id: 60, occupant: player.pieces.Where(function (p) { return p.id === "qb"; }).First() },
                { id: 61, occupant: player.pieces.Where(function (p) { return p.id === "kib"; }).First() },
                { id: 62, occupant: player.pieces.Where(function (p) { return p.id === "rb2"; }).First() },
                { id: 63, occupant: player.pieces.Where(function (p) { return p.id === "knb2"; }).First() },
                { id: 64, occupant: player.pieces.Where(function (p) { return p.id === "tb2"; }).First() },
                { id: 49, occupant: player.pieces.Where(function (p) { return p.id === "pb1"; }).First() },
                { id: 50, occupant: player.pieces.Where(function (p) { return p.id === "pb2"; }).First() },
                { id: 51, occupant: player.pieces.Where(function (p) { return p.id === "pb3"; }).First() },
                { id: 52, occupant: player.pieces.Where(function (p) { return p.id === "pb4"; }).First() },
                { id: 53, occupant: player.pieces.Where(function (p) { return p.id === "pb5"; }).First() },
                { id: 54, occupant: player.pieces.Where(function (p) { return p.id === "pb6"; }).First() },
                { id: 55, occupant: player.pieces.Where(function (p) { return p.id === "pb7"; }).First() },
                { id: 56, occupant: player.pieces.Where(function (p) { return p.id === "pb8"; }).First() }
            ]);
        }
    }
    initializer.initOccupiedTiles = initOccupiedTiles;
    function initPlayers() {
        return new __WEBPACK_IMPORTED_MODULE_2__node_modules_linqts_new_dist_linq__["List"]([
            new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* player */]("white"),
            new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* player */]("black"),
        ]);
    }
    initializer.initPlayers = initPlayers;
    function initTiles(game) {
        var _loop_1 = function () {
            var x = i;
            document.getElementById(i.toString()).addEventListener("click", function (e) {
                checkTile(e, x, game);
            });
        };
        for (var i = 1; i < 65; i++) {
            _loop_1();
        }
    }
    initializer.initTiles = initTiles;
    function checkTile(e, tileId, game) {
        var pickedPiece = game.currentPlayer.pieces.Where(function (x) { return x.currentLocation === tileId; }).FirstOrDefault();
        if (pickedPiece !== undefined) {
            game.currentPlayer.currentActivePiece = pickedPiece;
            game.pieceSelected(pickedPiece);
        }
        else {
            game.tileSelected(tileId);
        }
    }
    var occupiedTile = /** @class */ (function () {
        function occupiedTile(Id, piece) {
            this.id = Id;
            this.occupant = piece;
        }
        return occupiedTile;
    }());
    initializer.occupiedTile = occupiedTile;
})(initializer || (initializer = {}));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_style_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_style_css__);


window.onload = function () {
    var game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* game */]();
    game.init();
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieces__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_checkHelper__ = __webpack_require__(9);





var game = /** @class */ (function () {
    function game() {
    }
    game.prototype.init = function () {
        this.players = __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__["a" /* initializer */].initPlayers();
        this.nonCurrentPlayer = this.players.Where(function (x) { return x.id === "black"; }).FirstOrDefault();
        this.currentPlayer = this.players.Where(function (x) { return x.id === "white"; }).FirstOrDefault();
        __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__["a" /* initializer */].initTiles(this);
    };
    game.prototype.pieceSelected = function (piece) {
        __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].removeAllHighlights();
        piece.availableLocations.ForEach(function (tile) { __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].highlightTile(tile, __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].classNames["destination"]); });
    };
    game.prototype.tileSelected = function (tileId) {
        __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].removeHighlight(__WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].classNames["destination"]);
        if (this.currentPlayer.currentActivePiece) {
            if (this.currentPlayer.currentActivePiece.availableLocations.Contains(tileId)) {
                this.currentPlayer.move(this, tileId, this.initCheckList);
            }
        }
    };
    game.prototype.initCheckList = function (game) {
        __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].removeHighlight(__WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].classNames["threat"]);
        //1. check current player available moves
        game.currentPlayer.pieces.Where(function (x) { return x.type != __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).ForEach(function (element) {
            element.availableLocations = __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__["a" /* rulesHelper */].checkAvailableMoves(element, game);
        });
        //2. switch current player
        game.currentPlayer.currentActivePiece = undefined;
        var current = game.currentPlayer;
        var nonCurrent = game.nonCurrentPlayer;
        game.currentPlayer = nonCurrent;
        game.nonCurrentPlayer = current;
        //3. check check + check current king moves
        var king = game.currentPlayer.pieces.Where(function (x) { return x.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).FirstOrDefault();
        king.availableLocations = __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__["a" /* rulesHelper */].checkKingAvailableMoves(king, game);
        king = __WEBPACK_IMPORTED_MODULE_4__helpers_checkHelper__["a" /* checkHelper */].isUnderCheck(king, game.nonCurrentPlayer);
        if (king.isInCheck) {
            king.potentialAssassins.ToArray().forEach(function (piece) {
                __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].highlightTile(piece.currentLocation, __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].classNames["threat"]);
            });
            if (king.potentialAssassins.Count() > 1) {
                if (king.availableLocations.Count() === 0) {
                    __WEBPACK_IMPORTED_MODULE_4__helpers_checkHelper__["a" /* checkHelper */].announceWinner(game.nonCurrentPlayer);
                }
                else
                    game.currentPlayer.pieces.Where(function (y) { return y.type !== __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).ForEach(function (piece) { return piece.availableLocations.RemoveAll(function (x) { return x > 0; }); }); //only the king can move in this situation
            }
            else {
                var attacker_1 = king.potentialAssassins.FirstOrDefault();
                var attackerLocation = attacker_1.currentLocation;
                var attackerLine = __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__["a" /* rulesHelper */].getLine(attacker_1, king);
                var attackerPath_1 = __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__["a" /* rulesHelper */].getLocationsBetweenTwoPieces(attackerLine, attacker_1.currentLocation, king.currentLocation);
                game.currentPlayer.pieces.Where(function (x) { return x.type != __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).ForEach(function (element) {
                    element.availableLocations = __WEBPACK_IMPORTED_MODULE_4__helpers_checkHelper__["a" /* checkHelper */].checkAvailableMoves(element, attacker_1, attackerPath_1);
                });
                //check if check mate
                if (king.availableLocations.Count() === 0 && game.currentPlayer.pieces.Where(function (x) { return x.type != __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king && x.availableLocations.Count() === 0; }).Count() === 0) {
                    __WEBPACK_IMPORTED_MODULE_4__helpers_checkHelper__["a" /* checkHelper */].announceWinner(game.nonCurrentPlayer);
                }
            }
        }
        else {
            //4. check new current player moves for all pieces except the king
            game.currentPlayer.pieces.Where(function (x) { return x.type != __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king; }).ForEach(function (element) {
                element.availableLocations = __WEBPACK_IMPORTED_MODULE_1__helpers_movementRules__["a" /* rulesHelper */].checkAvailableMoves(element, game);
            });
        }
    };
    return game;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_movementRules__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_movementHelper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_linqts_new_dist_linq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_linqts_new_dist_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_linqts_new_dist_linq__);





var player = /** @class */ (function () {
    function player(id) {
        this.id = id;
        this.isCurrent = this.id == "white" ? true : false;
        this.name = this.id == "white" ? "Player 1" : "Player 2";
        this.isInCheck = false;
        this.pieces = __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__["a" /* initializer */].initPieces(this.id);
        this.occupiedTiles = __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__["a" /* initializer */].initOccupiedTiles(this);
        this.moves = new __WEBPACK_IMPORTED_MODULE_4__node_modules_linqts_new_dist_linq__["List"]();
    }
    player.prototype.move = function (game, target, callback) {
        var startPoint = game.currentPlayer.occupiedTiles.Where(function (x) { return x.id === game.currentPlayer.currentActivePiece.currentLocation; }).First();
        var destination = new __WEBPACK_IMPORTED_MODULE_3__helpers_initializer__["a" /* initializer */].occupiedTile(target, game.currentPlayer.currentActivePiece);
        startPoint.occupant = undefined;
        game.currentPlayer.currentActivePiece = __WEBPACK_IMPORTED_MODULE_1__helpers_movementHelper__["a" /* movementHelper */].handlePieceMove(game.currentPlayer.currentActivePiece, destination.id);
        var isAttack = __WEBPACK_IMPORTED_MODULE_0__helpers_movementRules__["a" /* rulesHelper */].isAttack(game.nonCurrentPlayer.occupiedTiles.Select(function (x) { return x.id; }), destination);
        var victim = undefined;
        if (isAttack) {
            victim = game.nonCurrentPlayer.pieces.Where(function (pi) { return pi.currentLocation === destination.id; }).First();
        }
        game = __WEBPACK_IMPORTED_MODULE_1__helpers_movementHelper__["a" /* movementHelper */].handlePlayersMove(game, startPoint, destination, isAttack, victim);
        __WEBPACK_IMPORTED_MODULE_2__helpers_visualUI__["a" /* visualUI */].move(startPoint.id, destination.id);
        callback(game);
    };
    return player;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movementHelper; });
/* unused harmony export move */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieces__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movementRules__ = __webpack_require__(2);


var movementHelper;
(function (movementHelper) {
    function handlePieceMove(piece, dest) {
        piece.currentLocation = dest;
        if (piece.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].pawn) {
            var _piece = piece;
            _piece.isFirstMove = false;
            _piece.canUpgrade = __WEBPACK_IMPORTED_MODULE_1__movementRules__["a" /* rulesHelper */].canPawnUpgrade(_piece);
            return _piece;
        }
        else if (piece.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].tower) {
            var _piece = piece;
            _piece.canTowerSwitch = false;
            return _piece;
        }
        else if (piece.type === __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].king) {
            var _piece = piece;
            _piece.canTowerSwitch = false;
            return _piece;
        }
        return piece;
    }
    movementHelper.handlePieceMove = handlePieceMove;
    function handlePlayersMove(game, startPoint, dest, isAttack, victim) {
        game.currentPlayer.occupiedTiles.Remove(startPoint);
        game.currentPlayer.occupiedTiles.Add(dest);
        game.currentPlayer.moves.Add(new move(startPoint.id, dest.id, game.currentPlayer.currentActivePiece, isAttack, victim));
        if (isAttack) {
            game.nonCurrentPlayer = handleAttack(game.nonCurrentPlayer, dest, victim);
        }
        return game;
    }
    movementHelper.handlePlayersMove = handlePlayersMove;
    function handleAttack(player, dest, victim) {
        victim.isDead = true;
        player.pieces.Remove(victim);
        player.occupiedTiles.Remove(player.occupiedTiles.Where(function (x) { return x.id === dest.id; }).FirstOrDefault());
        return player;
    }
})(movementHelper || (movementHelper = {}));
var move = /** @class */ (function () {
    function move(o, d, p, i, v) {
        this.origin = o;
        this.destination = d;
        this.movingPiece = p;
        this.isAttack = i;
        this.victim = v;
    }
    return move;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieces__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__);


var checkHelper;
(function (checkHelper) {
    function isUnderCheck(king, attackingPlayer) {
        var location = king.currentLocation;
        var potentialAssassins = attackingPlayer.pieces.Where(function (x) { return x.availableLocations.Where(function (y) { return y === location; }).Count() > 0; });
        if (potentialAssassins.Count() === 0) {
            king.isInCheck === false;
            king.potentialAssassins = null;
            return king;
        }
        king.isInCheck = true;
        king.potentialAssassins = potentialAssassins;
        return king;
    }
    checkHelper.isUnderCheck = isUnderCheck;
    function checkAvailableMoves(piece, attacker, attackerPath) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        var relevantLocations = new __WEBPACK_IMPORTED_MODULE_1__node_modules_linqts_new_dist_linq__["List"]();
        relevantLocations.Add(attacker.currentLocation);
        if (attacker.type !== __WEBPACK_IMPORTED_MODULE_0__pieces__["d" /* pieceTypes */].knight) {
            relevantLocations.AddRange(attackerPath.ToArray());
        }
        result = piece.availableLocations.Intersect(relevantLocations);
        return result;
    }
    checkHelper.checkAvailableMoves = checkAvailableMoves;
    function announceWinner(winner) {
        document.getElementById('winnerAnnouncment').innerText = winner.name + " wins!!!";
        document.getElementById('chessboard').classList.add('disabled-board');
    }
    checkHelper.announceWinner = announceWinner;
})(checkHelper || (checkHelper = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "#chessboard, .black_square, .white_square {\r\n\tdisplay:block;\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\n\r\n#chessboard {\r\n\twidth:640px;\r\n\theight:640px;\r\n\tborder:4px solid #FF0000;\r\n}\r\n\r\n.black_square, .white_square {\r\n\twidth:80px;\r\n\theight:80px;\r\n\tfloat:left;\r\n}\r\n\r\n.black_square {\r\n\tbackground-color: grey;\r\n}\r\n\r\n.white_square {\r\n\tbackground-color:#FFFFFF;\r\n}\r\n\r\n.highlight-destination {\r\n\tbackground-color: green;\r\n\topacity: 0.7;\r\n}\r\n\r\n.highlight-threat {\r\n\tbackground-color: red;\r\n\topacity: 0.7;\r\n}\r\n\r\n\r\n.piece{\r\n\tfont-size: 64px;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\n.winner-alert{\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n    left: 50%;\r\n    top: 0;\r\n}\r\n\r\n.disabled-borad {\r\n\topacity: 0.7;\r\n\tpointer-events: none;\r\n}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjFlOGIwOTQyNzU2ZjkwMWNhOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlucXRzX25ldy9kaXN0L2xpbnEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbW92ZW1lbnRSdWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy92aXN1YWxVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9tb3ZlbWVudEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jaGVja0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzP2JkODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFF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d0VBQUksQ0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsS0FBSyxVQUFVLENBQUMsSUFBSTtZQUNoQixNQUFNLENBQUMsSUFBSSx3RUFBSSxDQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JLLEtBQUssVUFBVSxDQUFDLEtBQUs7WUFDakIsTUFBTSxDQUFDLElBQUksd0VBQUksQ0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hKLEtBQUssVUFBVSxDQUFDLEtBQUs7WUFDakIsTUFBTSxDQUFDLElBQUksd0VBQUksQ0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNVEsS0FBSyxVQUFVLENBQUMsSUFBSTtZQUNo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S0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQzs0QkFDcE4sTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQ2xOLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUNsTixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQzs0QkFDbE4sTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQ2xOLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUNsTixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQzs0QkFDbE4sTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO29CQUNSLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDO1lBQ1YsS0FBSywyREFBVSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDckcsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO29CQUNSLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDO1lBQ1YsS0FBSywyREFBVSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQ2pRLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQ2hRLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUM3USxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQzVSLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQzNTLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUMzVCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBRSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7NEJBQzFVLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsSUFB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R0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2TixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4TixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2TixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4TixNQUFNLENBQUMsSUFBSSx3RUFBSSxDQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxTQUFTLEVBQWYsQ0FBZSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkcsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQywyREFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBdEUsQ0FBc0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQSxDQUFDO1lBQ3hOLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXRFLENBQXNFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hOLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWhJLENBQWdJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JSLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQS9ILENBQStILENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25SLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXRFLENBQXNFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZOLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXRFLENBQXNFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hOLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXRFLENBQXNFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZOLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQXRFLENBQXNFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hOLE1BQU0sQ0FBQyxJQUFJLHdFQUFJLENBQVMsQ0FBQyxNQUFNLEVB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Q0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ2pELElBQUkscURBQUksQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ2pELElBQUkscURBQUksQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ2pELElBQUksdURBQU0sQ0FBQyxNQUFNLEVBQUUsMkRBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3JELElBQUksdURBQU0sQ0FBQyxNQUFNLEVBQUUsMkRBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3JELElBQUksc0RBQUssQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2xELElBQUksc0RBQUssQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2xELElBQUkscURBQUksQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUkscURBQUksQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksc0RBQUssQ0FBQyxJQUFJLEVBQUUsMkRBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ2pELElBQUkscURBQUksQ0FBQyxLQUFLLEVBQUUsMkRBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFFbkQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksd0VBQUksQ0FBWTtnQkFDdkIsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSx1REFBTSxDQUFDLE1BQU0sRUFBRSwyREFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSx1REFBTSxDQUFDLE1BQU0sRUFBRSwyREFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxzREFBSyxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxzREFBSyxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxzREFBSyxDQUFDLElBQUksRUFBRSwyREFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxxREFBSSxDQUFDLEtBQUssRUFBRSwyREFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzthQUNyRCxDQUFDLENBQUM7UUFDUCxDQUFDO0lBRUwsQ0FBQztJQTNDZSxzQkFBVSxhQTJDekI7SUFFRCwyQkFBa0MsTUFBYztRQUM1QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksd0VBQUksQ0FBZTtnQkFDMUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDckUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQWIsQ0FBYSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNyRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDckUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNyRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDckUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7YUFDekUsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksd0VBQUksQ0FBZTtnQkFDMUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN2RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQWIsQ0FBYSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBZCxDQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVB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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxZThiMDk0Mjc1NmY5MDFjYTlkIiwiaW1wb3J0IHtcclxuICAgIExpc3RcclxufSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2xpbnF0c19uZXcvZGlzdC9saW5xXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZVBpZWNlIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBwaWVjZVR5cGVzO1xyXG4gICAgaXNXaGl0ZTogYm9vbGVhbjtcclxuICAgIGlzRGVhZDogYm9vbGVhbjtcclxuICAgIG1vdmVTZXQ6IExpc3QgPG51bWJlcj4gO1xyXG4gICAgY3VycmVudExvY2F0aW9uOiBudW1iZXI7XHJcbiAgICBhdmFpbGFibGVMb2NhdGlvbnM6IExpc3Q8bnVtYmVyPjtcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHR5cGU6IHBpZWNlVHlwZXMsIGlzd2hpdGU6IGJvb2xlYW4sIGlzZGVhZDogYm9vbGVhbiA9IGZhbHNlLCBsb2NhdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5pc1doaXRlID0gaXN3aGl0ZTtcclxuICAgICAgICB0aGlzLmlzRGVhZCA9IGlzZGVhZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMubW92ZVNldCA9IGdldE1vdmVTZXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVMb2NhdGlvbnMgPSBnZXRJbml0aWFsQXZhaWxhYmxlTG9jYXRpb25zKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBib2FyZFRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmN1cnJlbnRMb2NhdGlvbi50b1N0cmluZygpKTtcclxuICAgICAgICBib2FyZFRpbGUuaW5uZXJIVE1MID0gZ2V0UGllY2VJY29uKHRoaXMuaXNXaGl0ZSwgdGhpcy50eXBlKTtcclxuICAgICAgICBib2FyZFRpbGUuY2xhc3NMaXN0LmFkZChcInBpZWNlXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBhd24gZXh0ZW5kcyBnYW1lUGllY2Uge1xyXG4gICAgY2FuVXBncmFkZTogYm9vbGVhbjtcclxuICAgIGlzRmlyc3RNb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuICAgIHVwZ3JhZGUoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mga25pZ2h0IGV4dGVuZHMgZ2FtZVBpZWNlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyByb29rIGV4dGVuZHMgZ2FtZVBpZWNlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyB0b3dlciBleHRlbmRzIGdhbWVQaWVjZSB7XHJcbiAgICBjYW5Ub3dlclN3aXRjaDogYm9vbGVhbiA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBxdWVlbiBleHRlbmRzIGdhbWVQaWVjZSB7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBraW5nIGV4dGVuZHMgZ2FtZVBpZWNlIHtcclxuICAgIGNhblRvd2VyU3dpdGNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzSW5DaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcG90ZW50aWFsQXNzYXNzaW5zOiBMaXN0PGdhbWVQaWVjZT5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vdmVTZXQocGllY2U6IGdhbWVQaWVjZSk6IExpc3QgPCBudW1iZXIgPiB7XHJcbiAgICBzd2l0Y2ggKHBpZWNlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHBpZWNlVHlwZXMucGF3bjpcclxuICAgICAgICAgICAgaWYocGllY2UuaXNXaGl0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdCA8IG51bWJlciA+IChbNywgOCwgOSwgMTZdKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0IDxudW1iZXI+IChbLTE2LCAtOSwgLTgsIC03XSk7XHJcbiAgICAgICAgY2FzZSBwaWVjZVR5cGVzLmtuaWdodDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0IDwgbnVtYmVyID4gKFstMTUsIC0xNywgLTEwLCAtNiwgNiwgMTAsIDE1LCAxN10pO1xyXG4gICAgICAgIGNhc2UgcGllY2VUeXBlcy5yb29rOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3QgPCBudW1iZXIgPiAoWy02MywgLTU2LCAtNDksIC01NCwgLTQyLCAtNDUsIC0zNSwgLTM2LCAtMjgsIC0yNywgLTIxLCAtMTgsIC0xNCwgLTksIC03LCA3LCA5LCAxNCwgMTgsIDIxLCAyNywgMjgsIDM2LCAzNSwgNDUsIDQyLCA1NCwgNDksIDU2LCA2M10pO1xyXG4gICAgICAgIGNhc2UgcGllY2VUeXBlcy50b3dlcjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0IDwgbnVtYmVyID4gKFstNTYsIC00OCwgLTQwLCAtMzIsIC0yNCwgLTE2LCAtOCAsLTcsIC02LCAtNSwgLTQsIC0zLCAtMiwgLTEsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDE2LCAyNCwgMzIsIDQwLCA0OCwgNTZdKTtcclxuICAgICAgICBjYXNlIHBpZWNlVHlwZXMucXVlZW46XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdCA8IG51bWJlciA+IChbLTU2LCAtNDgsIC00MCwgLTMyLCAtMjQsIC0xNiwgLTgsIC03LCAtNiwgLTUsIC00LCAtMywgLTIsIC0xLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCAxNiwgMjQsIDMyLCA0MCwgNDgsIDU2LCAtNjMsIC01NiwgLTQ5LCAtNTQsIC00MiwgLTQ1LCAtMzUsIC0zNiwgLTI4LCAtMjcsIC0yMSwgLTE4LCAtMTQsIC05LCA5LCAxNCwgMTgsIDIxLCAyNywgMjgsIDM2LCAzNSwgNDUsIDQyLCA1NCwgNDksIDU2LCA2M10pO1xyXG4gICAgICAgIGNhc2UgcGllY2VUeXBlcy5raW5nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3QgPCBudW1iZXIgPiAoWy05LCAtOCwgLTcsIC0xLCAxLCA3LCA4LCA5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IExpc3QgPCBudW1iZXIgPiAoW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbml0aWFsQXZhaWxhYmxlTG9jYXRpb25zKHBpZWNlOiBnYW1lUGllY2UpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgdmFyIHggPSBwaWVjZS5jdXJyZW50TG9jYXRpb247XHJcbiAgICBzd2l0Y2ggKHBpZWNlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHBpZWNlVHlwZXMucGF3bjpcclxuICAgICAgICAgICAgaWYocGllY2UuaXNXaGl0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdDxudW1iZXI+KFt4ICsgOCwgeCArIDE2XSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdDxudW1iZXI+KFt4IC0gMTYsIHggLSA4XSk7XHJcbiAgICAgICAgY2FzZSBwaWVjZVR5cGVzLmtuaWdodDpcclxuICAgICAgICAgICAgaWYocGllY2UuaXNXaGl0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdDxudW1iZXI+KFt4ICsgMTUsIHggKyAxN10pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8bnVtYmVyPihbeCAtIDE1LCB4IC0gMTddKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgTGlzdDxudW1iZXI+ICgpO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBwaWVjZVR5cGVzIHtcclxuICAgIHBhd24sXHJcbiAgICBrbmlnaHQsXHJcbiAgICByb29rLFxyXG4gICAgdG93ZXIsXHJcbiAgICBxdWVlbixcclxuICAgIGtpbmdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGllY2VJY29uKGlzd2hpdGU6IGJvb2xlYW4sIHR5cGU6IHBpZWNlVHlwZXMpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlzd2hpdGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnBhd246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCImIzk4MTc7XCJcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLmtuaWdodDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiYjOTgxNjtcIlxyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMucm9vazpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiYjOTgxNTtcIlxyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMudG93ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCImIzk4MTQ7XCJcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnF1ZWVuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJiM5ODEzO1wiXHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5raW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJiM5ODEyO1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnBhd246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCImIzk4MjM7XCJcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLmtuaWdodDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiYjOTgyMjtcIlxyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMucm9vazpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiYjOTgyMTtcIlxyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMudG93ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCImIzk4MjA7XCJcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnF1ZWVuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJiM5ODE5O1wiXHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5raW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJiM5ODE4O1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BpZWNlcy50cyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuLyoqXHJcbiAqIExpblEgdG8gVHlwZVNjcmlwdFxyXG4gKlxyXG4gKiBEb2N1bWVudGF0aW9uIGZyb20gTGluUSAuTkVUIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvc3lzdGVtLmxpbnEuZW51bWVyYWJsZS5hc3B4KVxyXG4gKlxyXG4gKiBDcmVhdGVkIGJ5IEZsYXZpbyBDb3JwYSAoQGt1dHllbClcclxuICogQ29weXJpZ2h0IMKpIDIwMTYgRmxhdmlvIENvcnBhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKi9cclxudmFyIExpc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHRzIHRoZSBlbGVtZW50cyBvZiB0aGUgbGlzdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBMaXN0KGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzID09PSB2b2lkIDApIHsgZWxlbWVudHMgPSBbXTsgfVxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzID0gZWxlbWVudHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gb2JqZWN0IHRvIHRoZSBlbmQgb2YgdGhlIExpc3Q8VD4uXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLkFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGVsZW1lbnRzIG9mIHRoZSBzcGVjaWZpZWQgY29sbGVjdGlvbiB0byB0aGUgZW5kIG9mIHRoZSBMaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5BZGRSYW5nZSA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xyXG4gICAgICAgIChfYSA9IHRoaXMuX2VsZW1lbnRzKS5wdXNoLmFwcGx5KF9hLCBlbGVtZW50cyk7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbGllcyBhbiBhY2N1bXVsYXRvciBmdW5jdGlvbiBvdmVyIGEgc2VxdWVuY2UuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLkFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaW5pdGlhbFZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLnJlZHVjZShhY2N1bXVsYXRvciwgaW5pdGlhbFZhbHVlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciBhbGwgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBzYXRpc2Z5IGEgY29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5BbGwgPSBmdW5jdGlvbiAocHJlZGljYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmV2ZXJ5KHByZWRpY2F0ZSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdC5wcm90b3R5cGUuQW55ID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBwcmVkaWNhdGVcclxuICAgICAgICAgICAgPyB0aGlzLl9lbGVtZW50cy5zb21lKHByZWRpY2F0ZSlcclxuICAgICAgICAgICAgOiB0aGlzLl9lbGVtZW50cy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIExpc3QucHJvdG90eXBlLkF2ZXJhZ2UgPSBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuU3VtKHRyYW5zZm9ybSkgLyB0aGlzLkNvdW50KHRyYW5zZm9ybSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYXN0cyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSB0byB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLkNhc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXN0KHRoaXMuX2VsZW1lbnRzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5Db25jYXQgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdCh0aGlzLl9lbGVtZW50cy5jb25jYXQobGlzdC5Ub0FycmF5KCkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciBhbiBlbGVtZW50IGlzIGluIHRoZSBMaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5Db250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggPT09IGVsZW1lbnQ7IH0pO1xyXG4gICAgfTtcclxuICAgIExpc3QucHJvdG90eXBlLkNvdW50ID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUgPyB0aGlzLldoZXJlKHByZWRpY2F0ZSkuQ291bnQoKSA6IHRoaXMuX2VsZW1lbnRzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnRzIG9mIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2Ugb3IgdGhlIHR5cGUgcGFyYW1ldGVyJ3MgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICogaW4gYSBzaW5nbGV0b24gY29sbGVjdGlvbiBpZiB0aGUgc2VxdWVuY2UgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLkRlZmF1bHRJZkVtcHR5ID0gZnVuY3Rpb24gKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkNvdW50KCkgPyB0aGlzIDogbmV3IExpc3QoW2RlZmF1bHRWYWx1ZV0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBkaXN0aW5jdCBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIGRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgdG8gY29tcGFyZSB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLkRpc3RpbmN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLldoZXJlKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGl0ZXIpIHsgcmV0dXJuIGl0ZXIuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4OyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGFjY29yZGluZyB0byBzcGVjaWZpZWQga2V5IHNlbGVjdG9yLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5EaXN0aW5jdEJ5ID0gZnVuY3Rpb24gKGtleVNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuR3JvdXBCeShrZXlTZWxlY3RvciwgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqOyB9KTtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBMaXN0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gZ3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGlmIChncm91cHMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLkFkZChncm91cHNbaW5kZXhdWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuRWxlbWVudEF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5Db3VudCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgTVNHID0gJ0FyZ3VtZW50T3V0T2ZSYW5nZUV4Y2VwdGlvbjogaW5kZXggaXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gc291cmNlLic7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihNU0cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZSBvciBhIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGluZGV4IGlzIG91dCBvZiByYW5nZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuRWxlbWVudEF0T3JEZWZhdWx0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRWxlbWVudEF0KGluZGV4KSB8fCB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2Ugb2YgdHdvIHNlcXVlbmNlcyBieSB1c2luZyB0aGUgZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciB0byBjb21wYXJlIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuRXhjZXB0ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLldoZXJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAhc291cmNlLkNvbnRhaW5zKHgpOyB9KTtcclxuICAgIH07XHJcbiAgICBMaXN0LnByb3RvdHlwZS5GaXJzdCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5Db3VudCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUgPyB0aGlzLldoZXJlKHByZWRpY2F0ZSkuRmlyc3QoKSA6IHRoaXMuX2VsZW1lbnRzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uOiBUaGUgc291cmNlIHNlcXVlbmNlIGlzIGVtcHR5LicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXN0LnByb3RvdHlwZS5GaXJzdE9yRGVmYXVsdCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db3VudChwcmVkaWNhdGUpID8gdGhpcy5GaXJzdChwcmVkaWNhdGUpIDogdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybXMgdGhlIHNwZWNpZmllZCBhY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBMaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5Gb3JFYWNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5mb3JFYWNoKGFjdGlvbik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHcm91cHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgYWNjb3JkaW5nIHRvIGEgc3BlY2lmaWVkIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuR3JvdXBCeSA9IGZ1bmN0aW9uIChncm91cGVyLCBtYXBwZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BZ2dyZWdhdGUoZnVuY3Rpb24gKGFjLCB2KSB7IHJldHVybiAoYWNbZ3JvdXBlcih2KV1cclxuICAgICAgICAgICAgPyBhY1tncm91cGVyKHYpXS5wdXNoKG1hcHBlcih2KSlcclxuICAgICAgICAgICAgOiAoYWNbZ3JvdXBlcih2KV0gPSBbbWFwcGVyKHYpXSksXHJcbiAgICAgICAgICAgIGFjKTsgfSwge30pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBlcXVhbGl0eSBvZiBrZXlzIGFuZCBncm91cHMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyB1c2VkIHRvIGNvbXBhcmUga2V5cy5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuR3JvdXBKb2luID0gZnVuY3Rpb24gKGxpc3QsIGtleTEsIGtleTIsIHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlNlbGVjdChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0KHgsIGxpc3QuV2hlcmUoZnVuY3Rpb24gKHopIHsgcmV0dXJuIGtleTEoeCkgPT09IGtleTIoeik7IH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBvY2N1cmVuY2Ugb2YgYW4gZWxlbWVudCBpbiB0aGUgTGlzdC5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuSW5kZXhPZiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnRzIGFuIGVsZW1lbnQgaW50byB0aGUgTGlzdDxUPiBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5JbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5fZWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5kZXggaXMgb3V0IG9mIHJhbmdlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbGVtZW50cy5zcGxpY2UoaW5kZXgsIDAsIGVsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcyBieSB1c2luZyB0aGUgZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciB0byBjb21wYXJlIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuSW50ZXJzZWN0ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLldoZXJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiBzb3VyY2UuQ29udGFpbnMoeCk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBUaGUgZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyB1c2VkIHRvIGNvbXBhcmUga2V5cy5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuSm9pbiA9IGZ1bmN0aW9uIChsaXN0LCBrZXkxLCBrZXkyLCByZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5TZWxlY3RNYW55KGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0LldoZXJlKGZ1bmN0aW9uICh5KSB7IHJldHVybiBrZXkyKHkpID09PSBrZXkxKHgpOyB9KS5TZWxlY3QoZnVuY3Rpb24gKHopIHsgcmV0dXJuIHJlc3VsdCh4LCB6KTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdC5wcm90b3R5cGUuTGFzdCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5Db3VudCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGVcclxuICAgICAgICAgICAgICAgID8gdGhpcy5XaGVyZShwcmVkaWNhdGUpLkxhc3QoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9lbGVtZW50c1t0aGlzLkNvdW50KCkgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uOiBUaGUgc291cmNlIHNlcXVlbmNlIGlzIGVtcHR5LicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXN0LnByb3RvdHlwZS5MYXN0T3JEZWZhdWx0ID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkNvdW50KHByZWRpY2F0ZSkgPyB0aGlzLkxhc3QocHJlZGljYXRlKSA6IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBnZW5lcmljIHNlcXVlbmNlLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5NYXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQWdncmVnYXRlKGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiAoeCA+IHkgPyB4IDogeSk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiBhIGdlbmVyaWMgc2VxdWVuY2UuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLk1pbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5BZ2dyZWdhdGUoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuICh4IDwgeSA/IHggOiB5KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGJhc2VkIG9uIGEgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLk9mVHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHR5cGVOYW1lO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZW9mIDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVvZiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVvZiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRnVuY3Rpb246XHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVvZiBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tZW1wdHlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdHlwZU5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0eXBlTmFtZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICA/IHRoaXMuV2hlcmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiB0eXBlOyB9KS5DYXN0KClcclxuICAgICAgICAgICAgOiB0aGlzLldoZXJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gdHlwZU5hbWU7IH0pLkNhc3QoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGFzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gYSBrZXkuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLk9yZGVyQnkgPSBmdW5jdGlvbiAoa2V5U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9yZGVyZWRMaXN0KHRoaXMuX2VsZW1lbnRzLCBDb21wYXJlckhlbHBlci5Db21wYXJlckZvcktleShrZXlTZWxlY3RvciwgZmFsc2UpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGRlc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5PcmRlckJ5RGVzY2VuZGluZyA9IGZ1bmN0aW9uIChrZXlTZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgT3JkZXJlZExpc3QodGhpcy5fZWxlbWVudHMsIENvbXBhcmVySGVscGVyLkNvbXBhcmVyRm9yS2V5KGtleVNlbGVjdG9yLCB0cnVlKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBhIHN1YnNlcXVlbnQgb3JkZXJpbmcgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuVGhlbkJ5ID0gZnVuY3Rpb24gKGtleVNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT3JkZXJCeShrZXlTZWxlY3Rvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBhIHN1YnNlcXVlbnQgb3JkZXJpbmcgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgaW4gZGVzY2VuZGluZyBvcmRlciwgYWNjb3JkaW5nIHRvIGEga2V5LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5UaGVuQnlEZXNjZW5kaW5nID0gZnVuY3Rpb24gKGtleVNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT3JkZXJCeURlc2NlbmRpbmcoa2V5U2VsZWN0b3IpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIHNwZWNpZmljIG9iamVjdCBmcm9tIHRoZSBMaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5SZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkluZGV4T2YoZWxlbWVudCkgIT09IC0xXHJcbiAgICAgICAgICAgID8gKHRoaXMuUmVtb3ZlQXQodGhpcy5JbmRleE9mKGVsZW1lbnQpKSwgdHJ1ZSlcclxuICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBjb25kaXRpb25zIGRlZmluZWQgYnkgdGhlIHNwZWNpZmllZCBwcmVkaWNhdGUuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlJlbW92ZUFsbCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5XaGVyZSh0aGlzLl9uZWdhdGUocHJlZGljYXRlKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggb2YgdGhlIExpc3Q8VD4uXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldmVyc2VzIHRoZSBvcmRlciBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIGVudGlyZSBMaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5SZXZlcnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdCh0aGlzLl9lbGVtZW50cy5yZXZlcnNlKCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHJvamVjdHMgZWFjaCBlbGVtZW50IG9mIGEgc2VxdWVuY2UgaW50byBhIG5ldyBmb3JtLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5TZWxlY3QgPSBmdW5jdGlvbiAobWFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXN0KHRoaXMuX2VsZW1lbnRzLm1hcChtYXBwZXIpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIHRvIGEgTGlzdDxhbnk+IGFuZCBmbGF0dGVucyB0aGUgcmVzdWx0aW5nIHNlcXVlbmNlcyBpbnRvIG9uZSBzZXF1ZW5jZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuU2VsZWN0TWFueSA9IGZ1bmN0aW9uIChtYXBwZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFnZ3JlZ2F0ZShmdW5jdGlvbiAoYWMsIHYsIGkpIHsgcmV0dXJuIChhYy5BZGRSYW5nZShfdGhpcy5TZWxlY3QobWFwcGVyKVxyXG4gICAgICAgICAgICAuRWxlbWVudEF0KGkpXHJcbiAgICAgICAgICAgIC5Ub0FycmF5KCkpLFxyXG4gICAgICAgICAgICBhYyk7IH0sIG5ldyBMaXN0KCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHR3byBzZXF1ZW5jZXMgYXJlIGVxdWFsIGJ5IGNvbXBhcmluZyB0aGUgZWxlbWVudHMgYnkgdXNpbmcgdGhlIGRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgZm9yIHRoZWlyIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlNlcXVlbmNlRXF1YWwgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2VsZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoeCwgeSwgeikgeyByZXR1cm4gKGxpc3QuX2VsZW1lbnRzW3pdID09PSB5ID8geCA6IHVuZGVmaW5lZCk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgb25seSBlbGVtZW50IG9mIGEgc2VxdWVuY2UsIGFuZCB0aHJvd3MgYW4gZXhjZXB0aW9uIGlmIHRoZXJlIGlzIG5vdCBleGFjdGx5IG9uZSBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuU2luZ2xlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLkNvdW50KHByZWRpY2F0ZSkgIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29sbGVjdGlvbiBkb2VzIG5vdCBjb250YWluIGV4YWN0bHkgb25lIGVsZW1lbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5GaXJzdChwcmVkaWNhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG9ubHkgZWxlbWVudCBvZiBhIHNlcXVlbmNlLCBvciBhIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5O1xyXG4gICAgICogdGhpcyBtZXRob2QgdGhyb3dzIGFuIGV4Y2VwdGlvbiBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5TaW5nbGVPckRlZmF1bHQgPSBmdW5jdGlvbiAocHJlZGljYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ291bnQocHJlZGljYXRlKSA/IHRoaXMuU2luZ2xlKHByZWRpY2F0ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBCeXBhc3NlcyBhIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlNraXAgPSBmdW5jdGlvbiAoYW1vdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXN0KHRoaXMuX2VsZW1lbnRzLnNsaWNlKE1hdGgubWF4KDAsIGFtb3VudCkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEJ5cGFzc2VzIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlNraXBXaGlsZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLlNraXAodGhpcy5BZ2dyZWdhdGUoZnVuY3Rpb24gKGFjLCB2YWwpIHsgcmV0dXJuIChwcmVkaWNhdGUoX3RoaXMuRWxlbWVudEF0KGFjKSkgPyArK2FjIDogYWMpOyB9LCAwKSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdC5wcm90b3R5cGUuU3VtID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgPyB0aGlzLlNlbGVjdCh0cmFuc2Zvcm0pLlN1bSgpXHJcbiAgICAgICAgICAgIDogdGhpcy5BZ2dyZWdhdGUoZnVuY3Rpb24gKGFjLCB2KSB7IHJldHVybiAoYWMgKz0gK3YpOyB9LCAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbnRpZ3VvdXMgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgYSBzZXF1ZW5jZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuVGFrZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IExpc3QodGhpcy5fZWxlbWVudHMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW1vdW50KSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuVGFrZVdoaWxlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVGFrZSh0aGlzLkFnZ3JlZ2F0ZShmdW5jdGlvbiAoYWMsIHZhbCkgeyByZXR1cm4gKHByZWRpY2F0ZShfdGhpcy5FbGVtZW50QXQoYWMpKSA/ICsrYWMgOiBhYyk7IH0sIDApKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvcGllcyB0aGUgZWxlbWVudHMgb2YgdGhlIExpc3Q8VD4gdG8gYSBuZXcgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzO1xyXG4gICAgfTtcclxuICAgIExpc3QucHJvdG90eXBlLlRvRGljdGlvbmFyeSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5BZ2dyZWdhdGUoZnVuY3Rpb24gKG8sIHYsIGkpIHsgcmV0dXJuICgob1tfdGhpcy5TZWxlY3Qoa2V5KVxyXG4gICAgICAgICAgICAuRWxlbWVudEF0KGkpXHJcbiAgICAgICAgICAgIC50b1N0cmluZygpXSA9IHZhbHVlID8gX3RoaXMuU2VsZWN0KHZhbHVlKS5FbGVtZW50QXQoaSkgOiB2KSxcclxuICAgICAgICAgICAgbyk7IH0sIHt9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBMaXN0PFQ+IGZyb20gYW4gRW51bWVyYWJsZS5MaXN0PFQ+LlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5Ub0xpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTG9va3VwPFRLZXksIFRFbGVtZW50PiBmcm9tIGFuIElFbnVtZXJhYmxlPFQ+IGFjY29yZGluZyB0byBzcGVjaWZpZWQga2V5IHNlbGVjdG9yIGFuZCBlbGVtZW50IHNlbGVjdG9yIGZ1bmN0aW9ucy5cclxuICAgICAqL1xyXG4gICAgTGlzdC5wcm90b3R5cGUuVG9Mb29rdXAgPSBmdW5jdGlvbiAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkdyb3VwQnkoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9kdWNlcyB0aGUgc2V0IHVuaW9uIG9mIHR3byBzZXF1ZW5jZXMgYnkgdXNpbmcgdGhlIGRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLlVuaW9uID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Db25jYXQobGlzdCkuRGlzdGluY3QoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgYSBzZXF1ZW5jZSBvZiB2YWx1ZXMgYmFzZWQgb24gYSBwcmVkaWNhdGUuXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLldoZXJlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdCh0aGlzLl9lbGVtZW50cy5maWx0ZXIocHJlZGljYXRlKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGEgc3BlY2lmaWVkIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMsIHByb2R1Y2luZyBhIHNlcXVlbmNlIG9mIHRoZSByZXN1bHRzLlxyXG4gICAgICovXHJcbiAgICBMaXN0LnByb3RvdHlwZS5aaXAgPSBmdW5jdGlvbiAobGlzdCwgcmVzdWx0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbGlzdC5Db3VudCgpIDwgdGhpcy5Db3VudCgpXHJcbiAgICAgICAgICAgID8gbGlzdC5TZWxlY3QoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHJlc3VsdChfdGhpcy5FbGVtZW50QXQoeSksIHgpOyB9KVxyXG4gICAgICAgICAgICA6IHRoaXMuU2VsZWN0KGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiByZXN1bHQoeCwgbGlzdC5FbGVtZW50QXQoeSkpOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG5lZ2F0ZXMgdGhlIHJlc3VsdCBvZiB0aGUgcHJlZGljYXRlXHJcbiAgICAgKi9cclxuICAgIExpc3QucHJvdG90eXBlLl9uZWdhdGUgPSBmdW5jdGlvbiAocHJlZGljYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaXN0O1xyXG59KCkpO1xyXG5leHBvcnRzLkxpc3QgPSBMaXN0O1xyXG52YXIgQ29tcGFyZXJIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wYXJlckhlbHBlcigpIHtcclxuICAgIH1cclxuICAgIENvbXBhcmVySGVscGVyLkNvbXBhcmVyRm9yS2V5ID0gZnVuY3Rpb24gKF9rZXlTZWxlY3RvciwgZGVzY2VuZGluZykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29tcGFyZXJIZWxwZXIuQ29tcGFyZShhLCBiLCBfa2V5U2VsZWN0b3IsIGRlc2NlbmRpbmcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgQ29tcGFyZXJIZWxwZXIuQ29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBfa2V5U2VsZWN0b3IsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB2YXIgc29ydEtleUEgPSBfa2V5U2VsZWN0b3IoYSk7XHJcbiAgICAgICAgdmFyIHNvcnRLZXlCID0gX2tleVNlbGVjdG9yKGIpO1xyXG4gICAgICAgIGlmIChzb3J0S2V5QSA+IHNvcnRLZXlCKSB7XHJcbiAgICAgICAgICAgIGlmICghZGVzY2VuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc29ydEtleUEgPCBzb3J0S2V5Qikge1xyXG4gICAgICAgICAgICBpZiAoIWRlc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tcGFyZXJIZWxwZXIuQ29tcG9zZUNvbXBhcmVycyA9IGZ1bmN0aW9uIChwcmV2aW91c0NvbXBhcmVyLCBjdXJyZW50Q29tcGFyZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdE9mUHJldmlvdXNDb21wYXJlciA9IHByZXZpb3VzQ29tcGFyZXIoYSwgYik7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0T2ZQcmV2aW91c0NvbXBhcmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudENvbXBhcmVyKGEsIGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9mUHJldmlvdXNDb21wYXJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbXBhcmVySGVscGVyO1xyXG59KCkpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHNvcnRlZCBzZXF1ZW5jZS4gVGhlIG1ldGhvZHMgb2YgdGhpcyBjbGFzcyBhcmUgaW1wbGVtZW50ZWQgYnkgdXNpbmcgZGVmZXJyZWQgZXhlY3V0aW9uLlxyXG4gKiBUaGUgaW1tZWRpYXRlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3QgdGhhdCBzdG9yZXMgYWxsIHRoZSBpbmZvcm1hdGlvbiB0aGF0IGlzIHJlcXVpcmVkIHRvIHBlcmZvcm0gdGhlIGFjdGlvbi5cclxuICogVGhlIHF1ZXJ5IHJlcHJlc2VudGVkIGJ5IHRoaXMgbWV0aG9kIGlzIG5vdCBleGVjdXRlZCB1bnRpbCB0aGUgb2JqZWN0IGlzIGVudW1lcmF0ZWQgZWl0aGVyIGJ5XHJcbiAqIGNhbGxpbmcgaXRzIFRvRGljdGlvbmFyeSwgVG9Mb29rdXAsIFRvTGlzdCBvciBUb0FycmF5IG1ldGhvZHNcclxuICovXHJcbnZhciBPcmRlcmVkTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhPcmRlcmVkTGlzdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE9yZGVyZWRMaXN0KGVsZW1lbnRzLCBfY29tcGFyZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbGVtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fY29tcGFyZXIgPSBfY29tcGFyZXI7XHJcbiAgICAgICAgX3RoaXMuX2VsZW1lbnRzLnNvcnQoX3RoaXMuX2NvbXBhcmVyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm1zIGEgc3Vic2VxdWVudCBvcmRlcmluZyBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5LlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE9yZGVyZWRMaXN0LnByb3RvdHlwZS5UaGVuQnkgPSBmdW5jdGlvbiAoa2V5U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9yZGVyZWRMaXN0KHRoaXMuX2VsZW1lbnRzLCBDb21wYXJlckhlbHBlci5Db21wb3NlQ29tcGFyZXJzKHRoaXMuX2NvbXBhcmVyLCBDb21wYXJlckhlbHBlci5Db21wYXJlckZvcktleShrZXlTZWxlY3RvciwgZmFsc2UpKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBhIHN1YnNlcXVlbnQgb3JkZXJpbmcgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgaW4gZGVzY2VuZGluZyBvcmRlciwgYWNjb3JkaW5nIHRvIGEga2V5LlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE9yZGVyZWRMaXN0LnByb3RvdHlwZS5UaGVuQnlEZXNjZW5kaW5nID0gZnVuY3Rpb24gKGtleVNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlcmVkTGlzdCh0aGlzLl9lbGVtZW50cywgQ29tcGFyZXJIZWxwZXIuQ29tcG9zZUNvbXBhcmVycyh0aGlzLl9jb21wYXJlciwgQ29tcGFyZXJIZWxwZXIuQ29tcGFyZXJGb3JLZXkoa2V5U2VsZWN0b3IsIHRydWUpKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9yZGVyZWRMaXN0O1xyXG59KExpc3QpKTtcclxudmFyIEVudW1lcmFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbnVtZXJhYmxlKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSBzZXF1ZW5jZSBvZiBpbnRlZ3JhbCBudW1iZXJzIHdpdGhpbiBhIHNwZWNpZmllZCByYW5nZS5cclxuICAgICAqL1xyXG4gICAgRW51bWVyYWJsZS5SYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgY291bnQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IExpc3QoKTtcclxuICAgICAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgICAgICByZXN1bHQuQWRkKHN0YXJ0KyspO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgc2VxdWVuY2UgdGhhdCBjb250YWlucyBvbmUgcmVwZWF0ZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIEVudW1lcmFibGUuUmVwZWF0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvdW50KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBMaXN0KCk7XHJcbiAgICAgICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LkFkZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRW51bWVyYWJsZTtcclxufSgpKTtcclxuZXhwb3J0cy5FbnVtZXJhYmxlID0gRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9saW5xdHNfbmV3L2Rpc3QvbGlucS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xyXG4gICAgZ2FtZVBpZWNlLFxyXG4gICAgcGllY2VUeXBlcyxcclxuICAgIHBhd24sXHJcbiAgICBxdWVlbixcclxuICAgIGtpbmdcclxuXHJcbn0gZnJvbSAnLi4vcGllY2VzJztcclxuaW1wb3J0IHtcclxuICAgIHBsYXllclxyXG59IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IGluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTGlzdFxyXG59IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9saW5xdHNfbmV3L2Rpc3QvbGlucSdcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBydWxlc0hlbHBlciB7XHJcblxyXG4gICAgLy9wdWJsaWMgXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY2hlY2tBdmFpbGFibGVNb3ZlcyhwaWVjZTogZ2FtZVBpZWNlLCBnYW1lOiBnYW1lKTogTGlzdDxudW1iZXI+IHtcclxuICAgICAgICBsZXQgaW5pdGlhbExlZ2FsTW92ZXMgPSBjaGVja0JvdW5kYXJpZXMocGllY2UpO1xyXG4gICAgICAgIGlmIChpbml0aWFsTGVnYWxNb3Zlcy5Db3VudCgpID09IDApIHJldHVybiBpbml0aWFsTGVnYWxNb3ZlcztcclxuICAgICAgICBsZXQgbGVnYWxLaW5nUHJvdGVjdGlvbk1vdmVzID0gZXhwb3NpbmdLaW5nKHBpZWNlLCBnYW1lLCBpbml0aWFsTGVnYWxNb3Zlcyk7XHJcbiAgICAgICAgaWYgKGxlZ2FsS2luZ1Byb3RlY3Rpb25Nb3Zlcy5Db3VudCgpID09IDApIHJldHVybiBsZWdhbEtpbmdQcm90ZWN0aW9uTW92ZXM7XHJcbiAgICAgICAgbGV0IGxlZ2FsQm9hcmRNb3ZlcyA9IGNoZWNrQmxvY2tzKHBpZWNlLCBsZWdhbEtpbmdQcm90ZWN0aW9uTW92ZXMsIGdhbWUuY3VycmVudFBsYXllcik7XHJcbiAgICAgICAgaWYgKGxlZ2FsQm9hcmRNb3Zlcy5Db3VudCgpID09IDApIHJldHVybiBsZWdhbEJvYXJkTW92ZXM7XHJcbiAgICAgICAgbGV0IGxlZ2FsQm9hcmRNb3ZlczIgPSBjaGVja0Jsb2NrcyhwaWVjZSwgbGVnYWxCb2FyZE1vdmVzLCBnYW1lLm5vbkN1cnJlbnRQbGF5ZXIsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBsZWdhbEJvYXJkTW92ZXMyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjaGVja0tpbmdBdmFpbGFibGVNb3ZlcyhraW5nOiBraW5nLCBnYW1lOiBnYW1lKTogTGlzdDxudW1iZXI+IHtcclxuICAgICAgICBsZXQgaW5pdGlhbExlZ2FsTW92ZXMgPSBjaGVja0JvdW5kYXJpZXMoa2luZyk7XHJcbiAgICAgICAgaWYgKGluaXRpYWxMZWdhbE1vdmVzLkNvdW50KCkgPT0gMCkgcmV0dXJuIGluaXRpYWxMZWdhbE1vdmVzO1xyXG4gICAgICAgIGxldCBsZWdhbEJvYXJkTW92ZXMgPSBjaGVja0Jsb2NrcyhraW5nLCBpbml0aWFsTGVnYWxNb3ZlcywgZ2FtZS5jdXJyZW50UGxheWVyKTtcclxuICAgICAgICBpZiAobGVnYWxCb2FyZE1vdmVzLkNvdW50KCkgPT0gMCkgcmV0dXJuIGxlZ2FsQm9hcmRNb3ZlcztcclxuICAgICAgICByZXR1cm4gY2hlY2tLaW5nT25seU1vdmVzKGxlZ2FsQm9hcmRNb3ZlcywgZ2FtZS5ub25DdXJyZW50UGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaXNBdHRhY2sodGlsZXM6IExpc3Q8bnVtYmVyPiwgdGFyZ2V0VGlsZTogaW5pdGlhbGl6ZXIub2NjdXBpZWRUaWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRhcmdldFRpbGUub2NjdXBhbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aWxlcy5Db250YWlucyh0YXJnZXRUaWxlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY2FuUGF3blVwZ3JhZGUocGF3bjogcGF3bik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChwYXduLmN1cnJlbnRMb2NhdGlvbiA8IDkgfHwgcGF3bi5jdXJyZW50TG9jYXRpb24gPiA1NykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbnNCZXR3ZWVuVHdvUGllY2VzKGxpbmU6IG51bWJlciwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogTGlzdDxudW1iZXI+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IExpc3Q8bnVtYmVyPigpO1xyXG4gICAgICAgIGxldCBiaWdOdW0gPSBmcm9tID4gdG8gPyBmcm9tIDogdG87XHJcbiAgICAgICAgbGV0IHNtYWxsTnVtID0gZnJvbSA+IHRvID8gdG8gOiBmcm9tO1xyXG4gICAgICAgIHN3aXRjaCAobGluZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc21hbGxOdW0gPCBiaWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbE51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbWFsbE51bSA8IGJpZ051bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkFkZChzbWFsbE51bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzbWFsbE51bSA8IGJpZ051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbWFsbE51bSA8IGJpZ051bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkFkZChiaWdOdW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzbWFsbE51bSA8IGJpZ051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsTnVtICs9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNtYWxsTnVtIDwgYmlnTnVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKHNtYWxsTnVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIC05OlxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHNtYWxsTnVtIDwgYmlnTnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlnTnVtIC09IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNtYWxsTnVtIDwgYmlnTnVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKGJpZ051bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHNtYWxsTnVtIDwgYmlnTnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc21hbGxOdW0gKz0gODtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc21hbGxOdW0gPCBiaWdOdW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5BZGQoc21hbGxOdW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgLTg6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc21hbGxOdW0gPCBiaWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBiaWdOdW0gLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc21hbGxOdW0gPCBiaWdOdW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5BZGQoYmlnTnVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoc21hbGxOdW0gPCBiaWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbE51bSArPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbWFsbE51bSA8IGJpZ051bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkFkZChzbWFsbE51bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAtNzpcclxuICAgICAgICAgICAgICAgIHdoaWxlIChzbWFsbE51bSA8IGJpZ051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZ051bSAtPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbWFsbE51bSA8IGJpZ051bSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkFkZChiaWdOdW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldExpbmUoYXNzYXNzaW46IGdhbWVQaWVjZSwgdGFyZ2V0OiBnYW1lUGllY2UpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBkaWZmID0gYXNzYXNzaW4uY3VycmVudExvY2F0aW9uIC0gdGFyZ2V0LmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICBpZiAoZGlmZiAlIDkgPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSByZXR1cm4gOTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gLTlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpZmYgJSA4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkaWZmID4gMCkgcmV0dXJuIDg7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC04XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaWZmICUgNyA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZGlmZiA+IDApIHJldHVybiA3O1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtNztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpZmYgPiAwKSByZXR1cm4gMTtcclxuICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vI3JlZ2lvbiBraW5nIHByb3RlY3Rpb25cclxuXHJcbiAgICBmdW5jdGlvbiBleHBvc2luZ0tpbmcocGllY2U6IGdhbWVQaWVjZSwgZ2FtZTogZ2FtZSwgaW5pdGlhbExlZ2FsTW92ZXM6IExpc3Q8bnVtYmVyPik6IExpc3Q8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBMaXN0PG51bWJlcj4oKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZ2FtZS5jdXJyZW50UGxheWVyLnBpZWNlcy5XaGVyZSh4ID0+IHgudHlwZSA9PT0gcGllY2VUeXBlcy5raW5nKS5GaXJzdE9yRGVmYXVsdCgpIGFzIGtpbmc7XHJcbiAgICAgICAgaWYgKCFpc0RpcmVjdExpbmUocGllY2UsIHRhcmdldCkpIHJldHVybiBpbml0aWFsTGVnYWxNb3ZlczsgLy8xLmlzIHRoZXJlIGEgZGlyZWN0IGxpbmUgYmV0d2VlbiB0aGUgbW92aW5nIHBpZWNlIGFuZCBpdHMga2luZ1xyXG4gICAgICAgIGxldCBsaW5lID0gZ2V0TGluZShwaWVjZSwgdGFyZ2V0KTtcclxuICAgICAgICBsZXQgbG9jYXRpb25zVG9DaGVjazEgPSBnZXRMb2NhdGlvbnNCZXR3ZWVuVHdvUGllY2VzKGxpbmUsIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiwgdGFyZ2V0LmN1cnJlbnRMb2NhdGlvbik7XHJcbiAgICAgICAgaWYgKGJsb2NrZXJzSW5Mb2NhdGlvbnMobG9jYXRpb25zVG9DaGVjazEsIGdhbWUpKSByZXR1cm4gaW5pdGlhbExlZ2FsTW92ZXM7IC8vMi4gYXJlIHRoZXJlIG90aGVyIHBpZWNlcyBiZXR3ZWVuIHRoZSBtb3ZpbmcgcGllY2UgYW5kIGl0cyBraW5nXHJcbiAgICAgICAgbGV0IGFzc2Fzc2luID0gcG90ZW50aWFsQXNzYXNzaW4obGluZSwgcGllY2UuY3VycmVudExvY2F0aW9uLCBnYW1lKTsgLy8zLiBpcyB0aGVyZSBhbiBlbmVteSBwaWVjZSBpbiBsaW5lIHRoYXQgY2FuIGtpbGwgdGhlIGtpbmdcclxuICAgICAgICBpZiAoIWFzc2Fzc2luKSByZXR1cm4gaW5pdGlhbExlZ2FsTW92ZXM7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uc1RvQ2hlY2syID0gZ2V0TG9jYXRpb25zQmV0d2VlblR3b1BpZWNlcyhsaW5lLCBwaWVjZS5jdXJyZW50TG9jYXRpb24sIGFzc2Fzc2luLmN1cnJlbnRMb2NhdGlvbik7XHJcbiAgICAgICAgaWYgKGJsb2NrZXJzSW5Mb2NhdGlvbnMobG9jYXRpb25zVG9DaGVjazIsIGdhbWUpKSByZXR1cm4gaW5pdGlhbExlZ2FsTW92ZXM7IC8vNC4gaXMgdGhlIG1vdmluZyBwaWVjZSB0aGUgb25seSB0aGluZyBiZXR3ZWVuIHRoZSBhc3Nhc3NpbiBhbmQgdGhlIGtpbmdcclxuICAgICAgICBsZXQgdG90YWxMaW5lTW92ZXMgPSBsb2NhdGlvbnNUb0NoZWNrMS5Db25jYXQobG9jYXRpb25zVG9DaGVjazIpO1xyXG4gICAgICAgIGxldCBsZWdhbE1vdmVzID0gaW5pdGlhbExlZ2FsTW92ZXMuSW50ZXJzZWN0KHRvdGFsTGluZU1vdmVzKTtcclxuICAgICAgICBpZiAoaW5pdGlhbExlZ2FsTW92ZXMuQ29udGFpbnMoYXNzYXNzaW4uY3VycmVudExvY2F0aW9uKSkgbGVnYWxNb3Zlcy5BZGQoYXNzYXNzaW4uY3VycmVudExvY2F0aW9uKTtcclxuICAgICAgICByZXR1cm4gbGVnYWxNb3ZlcyAvL3JldHVybiBvbmx5IG1vdmVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHBpZWNlIG1vdmVzZXQgYW5kIGFyZSBvbiB0aGUgbGluZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJsb2NrZXJzSW5Mb2NhdGlvbnMobG9jYXRpb25zVG9DaGVjazogTGlzdDxudW1iZXI+LCBnYW1lOiBnYW1lKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IEFsbGllZExvY2F0aW9ucyA9IGdhbWUuY3VycmVudFBsYXllci5vY2N1cGllZFRpbGVzLlNlbGVjdCh4ID0+IHguaWQpO1xyXG4gICAgICAgIGxldCBlbmVteUxvY2F0aW9ucyA9IGdhbWUubm9uQ3VycmVudFBsYXllci5vY2N1cGllZFRpbGVzLlNlbGVjdCh4ID0+IHguaWQpO1xyXG4gICAgICAgIGlmIChBbGxpZWRMb2NhdGlvbnMuSW50ZXJzZWN0KGxvY2F0aW9uc1RvQ2hlY2spLkNvdW50KCkgPiAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZW5lbXlMb2NhdGlvbnMuSW50ZXJzZWN0KGxvY2F0aW9uc1RvQ2hlY2spLkNvdW50KCkgPiAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEaXJlY3RMaW5lKGRlZmVuZGVyOiBnYW1lUGllY2UsIHRhcmdldDogZ2FtZVBpZWNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBNYXRoLmFicyhkZWZlbmRlci5jdXJyZW50TG9jYXRpb24gLSB0YXJnZXQuY3VycmVudExvY2F0aW9uKTtcclxuICAgICAgICBpZiAoZGlmZiAlIDkgPT09IDApIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChkaWZmICUgOCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGRpZmYgJSA3ID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZGlmZiA+IDcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoc2FtZVJvdyhkZWZlbmRlci5jdXJyZW50TG9jYXRpb24sIHRhcmdldC5jdXJyZW50TG9jYXRpb24pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2FtZVJvdyhsb2NhdGlvbjE6IG51bWJlciwgbG9jYXRpb24yOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcm93MSA9IE1hdGguZmxvb3IobG9jYXRpb24xIC8gOCk7XHJcbiAgICAgICAgbGV0IHJvdzIgPSBNYXRoLmZsb29yKGxvY2F0aW9uMiAvIDgpO1xyXG4gICAgICAgIGlmIChsb2NhdGlvbjEgJSA4ICE9PSAwICYmIGxvY2F0aW9uMiAlIDggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHJvdzEgPT09IHJvdzIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb24xICUgOCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAocm93MSAtIDEgPT09IHJvdzIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb24yICUgOCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAocm93MiAtIDEgPT09IHJvdzEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb25zQmV0d2VlblBpZWNlQW5kQm91bmRhcnkobGluZTogbnVtYmVyLCBmcm9tOiBudW1iZXIpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgTGlzdDxudW1iZXI+KCk7XHJcbiAgICAgICAgbGV0IHJpZ2h0Qm91bmRhcnkgPSBmcm9tICUgOCA9PSAwID8gZnJvbSA6IChNYXRoLmNlaWwoZnJvbSAvIDgpKSAqIDg7XHJcbiAgICAgICAgbGV0IGxlZnRCb3VuZGFyeSA9IGZyb20gJSA4ID09IDEgPyBmcm9tIDogKE1hdGguZmxvb3IoZnJvbSAvIDgpKSAqIDggKyAxO1xyXG4gICAgICAgIGxldCBsaW1pdDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGZyb207XHJcbiAgICAgICAgc3dpdGNoIChsaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGxpbWl0ID0gcmlnaHRCb3VuZGFyeTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBsaW1pdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkFkZChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgIGxpbWl0ID0gbGVmdEJvdW5kYXJ5O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gbGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGxpbWl0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCA2NSAmJiBpbmRleCAlIDggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgNjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgLTk6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPiAwICYmIGluZGV4ICUgOCAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggLT0gOTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCA2NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgNjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgLTg6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCA2NSAmJiBpbmRleCAlIDggIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgNjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgLTc6XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCAwICYmIGluZGV4ICUgOCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggLT0gNztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuQWRkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvdGVudGlhbEFzc2Fzc2luKGxpbmU6IG51bWJlciwgZnJvbTogbnVtYmVyLCBnYW1lOiBnYW1lKTogZ2FtZVBpZWNlIHtcclxuICAgICAgICBsZXQgbG9jYXRpb25zID0gZ2V0TG9jYXRpb25zQmV0d2VlblBpZWNlQW5kQm91bmRhcnkobGluZSwgZnJvbSk7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9ucy5Db3VudCgpID09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBhc3Nhc3NpbiA9IGdhbWUubm9uQ3VycmVudFBsYXllci5waWVjZXMuV2hlcmUoeCA9PiBsb2NhdGlvbnMuQ29udGFpbnMoeC5jdXJyZW50TG9jYXRpb24pKS5GaXJzdE9yRGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghYXNzYXNzaW4pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChhc3Nhc3Npbi50eXBlID09PSBwaWVjZVR5cGVzLnF1ZWVuKSByZXR1cm4gYXNzYXNzaW47XHJcbiAgICAgICAgaWYgKGFzc2Fzc2luLnR5cGUgPT09IHBpZWNlVHlwZXMucm9vaykge1xyXG4gICAgICAgICAgICBpZiAobGluZSA9PSA5IHx8IGxpbmUgPT0gLTkgfHwgbGluZSA9PSA3IHx8IGxpbmUgPT0gLTcpIHJldHVybiBhc3Nhc3NpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzc2Fzc2luLnR5cGUgPT09IHBpZWNlVHlwZXMudG93ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGxpbmUgPT0gOCB8fCBsaW5lID09IC04IHx8IGxpbmUgPT0gMSB8fCBsaW5lID09IC0xKSByZXR1cm4gYXNzYXNzaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uIGJvdW5kYXJpZXNcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQm91bmRhcmllcyhwaWVjZTogZ2FtZVBpZWNlKTogTGlzdDxudW1iZXI+IHtcclxuICAgICAgICB2YXIgcmF3TW92ZXMgPSBwaWVjZS5tb3ZlU2V0LlRvQXJyYXkoKS5maWx0ZXIoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vdmUgKyBwaWVjZS5jdXJyZW50TG9jYXRpb24gPCA2NSAmJiBtb3ZlICsgcGllY2UuY3VycmVudExvY2F0aW9uID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN3aXRjaCAocGllY2UudHlwZSkgeyAvL2Vhc3QgYW5kIHdlc3QgY2hlY2sgc3BlY2lmaWMgdG8gcGllY2UgdHlwZVxyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMucGF3bjpcclxuICAgICAgICAgICAgICAgIGxldCBfcGF3biA9IHBpZWNlIGFzIHBhd247XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25zID0gcmF3TW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXduLmlzRmlyc3RNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgIT09IDE2ICYmIG1vdmUgIT09IC0xNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZSArIHBpZWNlLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5rbmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25zID0gcmF3TW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgPT09IC0xNSB8fCBtb3ZlID09PSAtNiB8fCBtb3ZlID09PSAxMCB8fCBtb3ZlID09PSAxNylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgIT09IDYgJiYgbW92ZSAhPT0gLTEwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSAhPT0gLTYgJiYgbW92ZSAhPT0gMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlID09PSA2IHx8IG1vdmUgPT09IC0xMCB8fCBtb3ZlID09PSAxNSB8fCBtb3ZlID09PSAtMTcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlXHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZSArIHBpZWNlLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5yb29rOlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9ucyA9IHJhd01vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlID09PSAtNjMgfHwgbW92ZSA9PT0gLTU0IHx8IG1vdmUgPT09IC00NSB8fCBtb3ZlID09PSAtMzYgfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC0xOCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDE0IHx8IG1vdmUgPT09IDIxIHx8IG1vdmUgPT09IDI4IHx8IG1vdmUgPT09IDM1IHx8IG1vdmUgPT09IDQyIHx8IG1vdmUgPT09IDQ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgPT09IC00OSB8fCBtb3ZlID09PSAtNDIgfHwgbW92ZSA9PT0gLTM1IHx8IG1vdmUgPT09IC0yOCB8fCBtb3ZlID09PSAtMjEgfHwgbW92ZSA9PT0gLTE0IHx8IG1vdmUgPT09IC03IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYgfHwgbW92ZSA9PT0gNDUgfHwgbW92ZSA9PT0gNTQgfHwgbW92ZSA9PT0gNjMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTQyIHx8IG1vdmUgPT09IC0zNSB8fCBtb3ZlID09PSAtMjggfHwgbW92ZSA9PT0gLTIxIHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYgfHwgbW92ZSA9PT0gNDUgfHwgbW92ZSA9PT0gNTQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTM1IHx8IG1vdmUgPT09IC0yOCB8fCBtb3ZlID09PSAtMjEgfHwgbW92ZSA9PT0gLTE4IHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYgfHwgbW92ZSA9PT0gNDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTI4IHx8IG1vdmUgPT09IC0yNyB8fCBtb3ZlID09PSAtMjEgfHwgbW92ZSA9PT0gLTE4IHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjEgfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTM2IHx8IG1vdmUgPT09IC0yNyB8fCBtb3ZlID09PSAtMjEgfHwgbW92ZSA9PT0gLTE4IHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjEgfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTM2IHx8IG1vdmUgPT09IC0yNyB8fCBtb3ZlID09PSAtNDUgfHwgbW92ZSA9PT0gLTE4IHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjEgfHwgbW92ZSA9PT0gMjggfHwgbW92ZSA9PT0gMzUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTU0IHx8IG1vdmUgPT09IC00NSB8fCBtb3ZlID09PSAtMzYgfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC0xOCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMjEgfHwgbW92ZSA9PT0gMjggfHwgbW92ZSA9PT0gMzUgfHwgbW92ZSA9PT0gNDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5tYXAoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZSArIHBpZWNlLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy50b3dlcjpcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbnMgPSByYXdNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA8IDAgfHwgbW92ZSAlIDggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA+IDAgfHwgbW92ZSAlIDggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSAlIDggPT09IDAgfHwgKG1vdmUgPiAwICYmIG1vdmUgPCA3KSB8fCBtb3ZlID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlICUgOCA9PT0gMCB8fCAobW92ZSA+IDAgJiYgbW92ZSA8IDYpIHx8IG1vdmUgPT09IC0xIHx8IG1vdmUgPT09IC0yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgJSA4ID09PSAwIHx8IChtb3ZlID4gMCAmJiBtb3ZlIDwgNSkgfHwgbW92ZSA9PT0gLTEgfHwgbW92ZSA9PT0gLTIgfHwgbW92ZSA9PT0gLTMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSAlIDggPT09IDAgfHwgKG1vdmUgPiAwICYmIG1vdmUgPCA0KSB8fCBtb3ZlID09PSAtMSB8fCBtb3ZlID09PSAtMiB8fCBtb3ZlID09PSAtMyB8fCBtb3ZlID09PSAtNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlICUgOCA9PT0gMCB8fCAobW92ZSA+IDAgJiYgbW92ZSA8IDMpIHx8IChtb3ZlID4gLTYgJiYgbW92ZSA8IDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgJSA4ID09PSAwIHx8IChtb3ZlID09PSAxKSB8fCAobW92ZSA+IC03ICYmIG1vdmUgPCAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLm1hcCgobW92ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlICsgcGllY2UuY3VycmVudExvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnF1ZWVuOlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9ucyA9IHJhd01vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobW92ZSA8IDAgJiYgbW92ZSA+IC04KSB8fCBtb3ZlICUgOCA9PT0gMCB8fCBtb3ZlID09PSAtNjMgfHwgbW92ZSA9PT0gLTU0IHx8IG1vdmUgPT09IC00NSB8fCBtb3ZlID09PSAtMzYgfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC0xOCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDE0IHx8IG1vdmUgPT09IDIxIHx8IG1vdmUgPT09IDI4IHx8IG1vdmUgPT09IDM1IHx8IG1vdmUgPT09IDQyIHx8IG1vdmUgPT09IDQ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtb3ZlID4gMCAmJiBtb3ZlIDwgOCkgfHwgbW92ZSAlIDggPT09IDAgfHwgbW92ZSA9PT0gLTQ5IHx8IG1vdmUgPT09IC00MiB8fCBtb3ZlID09PSAtMzUgfHwgbW92ZSA9PT0gLTI4IHx8IG1vdmUgPT09IC0yMSB8fCBtb3ZlID09PSAtMTQgfHwgbW92ZSA9PT0gLTcgfHwgbW92ZSA9PT0gOSB8fCBtb3ZlID09PSAxOCB8fCBtb3ZlID09PSAyNyB8fCBtb3ZlID09PSAzNiB8fCBtb3ZlID09PSA0NSB8fCBtb3ZlID09PSA1NCB8fCBtb3ZlID09PSA2MylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlID09PSAtMSB8fCAobW92ZSA+IDAgJiYgbW92ZSA8IDcpIHx8IG1vdmUgJSA4ID09PSAwIHx8IG1vdmUgPT09IC00MiB8fCBtb3ZlID09PSAtMzUgfHwgbW92ZSA9PT0gLTI4IHx8IG1vdmUgPT09IC0yMSB8fCBtb3ZlID09PSAtMTQgfHwgbW92ZSA9PT0gLTkgfHwgbW92ZSA9PT0gLTcgfHwgbW92ZSA9PT0gNyB8fCBtb3ZlID09PSA5IHx8IG1vdmUgPT09IDE4IHx8IG1vdmUgPT09IDI3IHx8IG1vdmUgPT09IDM2IHx8IG1vdmUgPT09IDQ1IHx8IG1vdmUgPT09IDU0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgPT09IC0xIHx8IG1vdmUgPT09IC0yIHx8IChtb3ZlID4gMCAmJiBtb3ZlIDwgNikgfHwgbW92ZSAlIDggPT09IDAgfHwgbW92ZSA9PT0gLTM1IHx8IG1vdmUgPT09IC0yOCB8fCBtb3ZlID09PSAtMjEgfHwgbW92ZSA9PT0gLTE4IHx8IG1vdmUgPT09IC0xNCB8fCBtb3ZlID09PSAtOSB8fCBtb3ZlID09PSAtNyB8fCBtb3ZlID09PSA3IHx8IG1vdmUgPT09IDkgfHwgbW92ZSA9PT0gMTQgfHwgbW92ZSA9PT0gMTggfHwgbW92ZSA9PT0gMjcgfHwgbW92ZSA9PT0gMzYgfHwgbW92ZSA9PT0gNDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSA9PT0gLTEgfHwgbW92ZSA9PT0gLTIgfHwgbW92ZSA9PT0gLTMgfHwgKG1vdmUgPiAwICYmIG1vdmUgPCA1KSB8fCBtb3ZlICUgOCA9PT0gMCB8fCBtb3ZlID09PSAtMjggfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC0yMSB8fCBtb3ZlID09PSAtMTggfHwgbW92ZSA9PT0gLTE0IHx8IG1vdmUgPT09IC05IHx8IG1vdmUgPT09IC03IHx8IG1vdmUgPT09IDcgfHwgbW92ZSA9PT0gOSB8fCBtb3ZlID09PSAxNCB8fCBtb3ZlID09PSAxOCB8fCBtb3ZlID09PSAyMSB8fCBtb3ZlID09PSAyNyB8fCBtb3ZlID09PSAzNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlID09PSAtMSB8fCBtb3ZlID09PSAtMiB8fCBtb3ZlID09PSAtMyB8fCBtb3ZlID09PSAtIDQgfHwgKG1vdmUgPiAwICYmIG1vdmUgPCA0KSB8fCBtb3ZlICUgOCA9PT0gMCB8fCBtb3ZlID09PSAtMzYgfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC0yMSB8fCBtb3ZlID09PSAtMTggfHwgbW92ZSA9PT0gLTE0IHx8IG1vdmUgPT09IC05IHx8IG1vdmUgPT09IC03IHx8IG1vdmUgPT09IDcgfHwgbW92ZSA9PT0gOSB8fCBtb3ZlID09PSAxNCB8fCBtb3ZlID09PSAxOCB8fCBtb3ZlID09PSAyMSB8fCBtb3ZlID09PSAyNyB8fCBtb3ZlID09PSAyOClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlID09PSAtMSB8fCBtb3ZlID09PSAtMiB8fCBtb3ZlID09PSAtMyB8fCBtb3ZlID09PSAtIDQgfHwgbW92ZSA9PT0gLTUgfHwgKG1vdmUgPiAwICYmIG1vdmUgPCAzKSB8fCBtb3ZlICUgOCA9PT0gMCB8fCBtb3ZlID09PSAtMzYgfHwgbW92ZSA9PT0gLTI3IHx8IG1vdmUgPT09IC00NSB8fCBtb3ZlID09PSAtMTggfHwgbW92ZSA9PT0gLTE0IHx8IG1vdmUgPT09IC05IHx8IG1vdmUgPT09IC03IHx8IG1vdmUgPT09IDcgfHwgbW92ZSA9PT0gOSB8fCBtb3ZlID09PSAxNCB8fCBtb3ZlID09PSAxOCB8fCBtb3ZlID09PSAyMSB8fCBtb3ZlID09PSAyOCB8fCBtb3ZlID09PSAzNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobW92ZSA+IC03ICYmIG1vdmUgPCAwKSB8fCBtb3ZlID09PSAxIHx8IG1vdmUgJSA4ID09PSAwIHx8IG1vdmUgPT09IC01NCB8fCBtb3ZlID09PSAtNDUgfHwgbW92ZSA9PT0gLTM2IHx8IG1vdmUgPT09IC0yNyB8fCBtb3ZlID09PSAtMTggfHwgbW92ZSA9PT0gLTkgfHwgbW92ZSA9PT0gLTcgfHwgbW92ZSA9PT0gNyB8fCBtb3ZlID09PSA5IHx8IG1vdmUgPT09IDE0IHx8IG1vdmUgPT09IDIxIHx8IG1vdmUgPT09IDI4IHx8IG1vdmUgPT09IDM1IHx8IG1vdmUgPT09IDQyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkubWFwKChtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmUgKyBwaWVjZS5jdXJyZW50TG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMua2luZzpcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbnMgPSByYXdNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY3VycmVudExvY2F0aW9uICUgOCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZSAhPT0gOSAmJiBtb3ZlICE9PSAxICYmIG1vdmUgIT09IC05KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAlIDggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmUgIT09IDcgJiYgbW92ZSAhPT0gLTEgJiYgbW92ZSAhPT0gNylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlO1xyXG4gICAgICAgICAgICAgICAgfSkubWFwKChtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmUgKyBwaWVjZS5jdXJyZW50TG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IExpc3Q8bnVtYmVyPihsb2NhdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gYmxvY2tzXHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tCbG9ja3MocGllY2U6IGdhbWVQaWVjZSwgbG9jYXRpb25zOiBMaXN0PG51bWJlcj4sIHBsYXllcjogcGxheWVyLCBpc09wcG9uZW50OiBib29sZWFuID0gZmFsc2UpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgIGxldCByZXMgPSBuZXcgTGlzdDxudW1iZXI+KCk7XHJcbiAgICAgICAgc3dpdGNoIChwaWVjZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5wYXduOlxyXG4gICAgICAgICAgICAgICAgcmVzID0gY2hlY2tCbG9ja1Bhd24ocGllY2UsIGxvY2F0aW9ucywgcGxheWVyLCBpc09wcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHBpZWNlVHlwZXMua25pZ2h0OlxyXG4gICAgICAgICAgICAgICAgcmVzID0gY2hlY2tCbG9ja0tuaWdodChsb2NhdGlvbnMsIHBsYXllciwgaXNPcHBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBwaWVjZVR5cGVzLnJvb2s6XHJcbiAgICAgICAgICAgICAgICByZXMgPSBjaGVja0Jsb2NrUm9vayhwaWVjZSwgbG9jYXRpb25zLCBwbGF5ZXIsIGlzT3Bwb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy50b3dlcjpcclxuICAgICAgICAgICAgICAgIHJlcyA9IGNoZWNrQmxvY2tUb3dlcihwaWVjZSwgbG9jYXRpb25zLCBwbGF5ZXIsIGlzT3Bwb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5xdWVlbjpcclxuICAgICAgICAgICAgICAgIHJlcyA9IGNoZWNrQmxvY2tRdWVlbihwaWVjZSwgbG9jYXRpb25zLCBwbGF5ZXIsIGlzT3Bwb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcGllY2VUeXBlcy5raW5nOlxyXG4gICAgICAgICAgICAgICAgcmVzID0gY2hlY2tCbG9ja0tpbmcocGllY2UsIGxvY2F0aW9ucywgcGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxCbG9ja0NoZWNrKHBpZWNlOiBnYW1lUGllY2UsIGxvY2F0aW9uczogTGlzdDxudW1iZXI+LCBwbGF5ZXI6IHBsYXllciwgaXNPcHBvbmVudDogYm9vbGVhbiA9IGZhbHNlKTogTGlzdDxudW1iZXI+IHtcclxuICAgICAgICBsZXQgb2NjdXBpZWQgPSBwbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeCA9PiB4LmlkKS5PcmRlckJ5KHkgPT4geSk7XHJcbiAgICAgICAgaWYgKHBsYXllci5pZCA9PT0gXCJibGFja1wiKVxyXG4gICAgICAgICAgICBvY2N1cGllZCA9IHBsYXllci5vY2N1cGllZFRpbGVzLlNlbGVjdCh4ID0+IHguaWQpLk9yZGVyQnlEZXNjZW5kaW5nKHkgPT4geSk7XHJcbiAgICAgICAgbG9jYXRpb25zID0gbG9jYXRpb25zLk9yZGVyQnlEZXNjZW5kaW5nKHkgPT4geSk7XHJcbiAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IHBpZWNlVHlwZXMudG93ZXIpIHtcclxuICAgICAgICAgICAgbGV0IHBsdXM4ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uID4gMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA4ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgKyAoaXNPcHBvbmVudCA/IDggOiAwKTtcclxuICAgICAgICAgICAgaWYgKHBsdXM4ID4gNjQpIHBsdXM4ID0gTmFOO1xyXG4gICAgICAgICAgICBsZXQgbWludXM4ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uIDwgMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA4ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgLSAoaXNPcHBvbmVudCA/IDggOiAwKTtcclxuICAgICAgICAgICAgaWYgKG1pbnVzOCA8IDApIG1pbnVzOCA9IE5hTjtcclxuICAgICAgICAgICAgbGV0IHJpZ2h0U2lkZSA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA+IDAgJiYgdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA8PSBwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDggIT09IDApLk9yZGVyQnkobSA9PiBNYXRoLmFicyhtIC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSArIChpc09wcG9uZW50ID8gMSA6IDApO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFNpZGUgPSBsb2NhdGlvbnMuSW50ZXJzZWN0KG9jY3VwaWVkKS5XaGVyZSh0ID0+IHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24gPCAwICYmIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAtIHQgPiBwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDggIT09IDApLk9yZGVyQnkobSA9PiBNYXRoLmFicyhtIC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSAtIChpc09wcG9uZW50ID8gMSA6IDApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8bnVtYmVyPihbbWludXM4LCBsZWZ0U2lkZSwgcmlnaHRTaWRlLCBwbHVzOF0pLldoZXJlKHkgPT4geSAhPT0gdW5kZWZpbmVkKS5EaXN0aW5jdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWVjZS50eXBlID09PSBwaWVjZVR5cGVzLnJvb2spIHtcclxuICAgICAgICAgICAgbGV0IHBsdXM5ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uID4gMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA5ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgKyAoaXNPcHBvbmVudCA/IDkgOiAwKTtcclxuICAgICAgICAgICAgbGV0IG1pbnVzOSA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA8IDAgJiYgKHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pICUgOSA9PT0gMCkuT3JkZXJCeSh4ID0+IE1hdGguYWJzKHggLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pKS5GaXJzdE9yRGVmYXVsdCgpIC0gKGlzT3Bwb25lbnQgPyA5IDogMCk7XHJcbiAgICAgICAgICAgIGxldCBwbHVzNyA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA+IDAgJiYgKHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pICUgNyA9PT0gMCkuT3JkZXJCeSh4ID0+IE1hdGguYWJzKHggLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pKS5GaXJzdE9yRGVmYXVsdCgpICsgKGlzT3Bwb25lbnQgPyA3IDogMCk7XHJcbiAgICAgICAgICAgIGxldCBtaW51czcgPSBsb2NhdGlvbnMuSW50ZXJzZWN0KG9jY3VwaWVkKS5XaGVyZSh0ID0+IHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24gPCAwICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDcgPT09IDApLk9yZGVyQnkoeCA9PiBNYXRoLmFicyh4IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSAtIChpc09wcG9uZW50ID8gNyA6IDApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8bnVtYmVyPihbbWludXM5LCBtaW51czcsIHBsdXM3LCBwbHVzOV0pLldoZXJlKHkgPT4geSAhPT0gdW5kZWZpbmVkKS5EaXN0aW5jdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWVjZVR5cGVzLnF1ZWVuKSB7XHJcbiAgICAgICAgICAgIGxldCBwbHVzOCA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA+IDAgJiYgKHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pICUgOCA9PT0gMCkuT3JkZXJCeSh4ID0+IE1hdGguYWJzKHggLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pKS5GaXJzdE9yRGVmYXVsdCgpICsgKGlzT3Bwb25lbnQgPyA4IDogMCk7O1xyXG4gICAgICAgICAgICBsZXQgbWludXM4ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uIDwgMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA4ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgLSAoaXNPcHBvbmVudCA/IDggOiAwKTtcclxuICAgICAgICAgICAgbGV0IHJpZ2h0U2lkZSA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA+IDAgJiYgdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA8PSBwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDggIT09IDApLk9yZGVyQnkobSA9PiBNYXRoLmFicyhtIC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSArIChpc09wcG9uZW50ID8gMSA6IDApO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFNpZGUgPSBsb2NhdGlvbnMuSW50ZXJzZWN0KG9jY3VwaWVkKS5XaGVyZSh0ID0+IHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24gPCAwICYmIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiAtIHQgPiBwaWVjZS5jdXJyZW50TG9jYXRpb24gJSA4ICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDggIT09IDApLk9yZGVyQnkobSA9PiBNYXRoLmFicyhtIC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSAtIChpc09wcG9uZW50ID8gMSA6IDApO1xyXG4gICAgICAgICAgICBsZXQgcGx1czkgPSBsb2NhdGlvbnMuSW50ZXJzZWN0KG9jY3VwaWVkKS5XaGVyZSh0ID0+IHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24gPiAwICYmICh0IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSAlIDkgPT09IDApLk9yZGVyQnkoeCA9PiBNYXRoLmFicyh4IC0gcGllY2UuY3VycmVudExvY2F0aW9uKSkuRmlyc3RPckRlZmF1bHQoKSArIChpc09wcG9uZW50ID8gOSA6IDApO1xyXG4gICAgICAgICAgICBsZXQgbWludXM5ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uIDwgMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA5ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgLSAoaXNPcHBvbmVudCA/IDkgOiAwKTtcclxuICAgICAgICAgICAgbGV0IHBsdXM3ID0gbG9jYXRpb25zLkludGVyc2VjdChvY2N1cGllZCkuV2hlcmUodCA9PiB0IC0gcGllY2UuY3VycmVudExvY2F0aW9uID4gMCAmJiAodCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikgJSA3ID09PSAwKS5PcmRlckJ5KHggPT4gTWF0aC5hYnMoeCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbikpLkZpcnN0T3JEZWZhdWx0KCkgKyAoaXNPcHBvbmVudCA/IDcgOiAwKTtcclxuICAgICAgICAgICAgbGV0IG1pbnVzNyA9IGxvY2F0aW9ucy5JbnRlcnNlY3Qob2NjdXBpZWQpLldoZXJlKHQgPT4gdCAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbiA8IDAgJiYgKHQgLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pICUgNyA9PT0gMCkuT3JkZXJCeSh4ID0+IE1hdGguYWJzKHggLSBwaWVjZS5jdXJyZW50TG9jYXRpb24pKS5GaXJzdE9yRGVmYXVsdCgpIC0gKGlzT3Bwb25lbnQgPyA3IDogMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdDxudW1iZXI+KFttaW51czksIG1pbnVzNywgcGx1czcsIHBsdXM5LCBtaW51czgsIGxlZnRTaWRlLCByaWdodFNpZGUsIHBsdXM4XSkuV2hlcmUoeSA9PiB5ICE9PSB1bmRlZmluZWQpLk9yZGVyQnkoYiA9PiBiKS5EaXN0aW5jdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0Jsb2NrUGF3bihwaWVjZTogZ2FtZVBpZWNlLCBsb2NhdGlvbnM6IExpc3Q8bnVtYmVyPiwgcGxheWVyOiBwbGF5ZXIsIGlzT3Bwb25lbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IExpc3Q8bnVtYmVyPiB7IC8vaW5jbHVkZXMgY29sb3IgcmVsYXRlZCBtb3ZlIGNoZWNrXHJcbiAgICAgICAgbGV0IHBhd24gPSBwaWVjZSBhcyBwYXduO1xyXG4gICAgICAgIGlmIChwYXduLmlzV2hpdGUpIHtcclxuICAgICAgICAgICAgaWYgKGlzT3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2aWN0aW0xID0gcGxheWVyLm9jY3VwaWVkVGlsZXMuV2hlcmUoeCA9PiB4LmlkID09PSBwYXduLmN1cnJlbnRMb2NhdGlvbiArIDcpLkZpcnN0T3JEZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpY3RpbTEpXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zID0gbG9jYXRpb25zLkV4Y2VwdChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBwYXduLmN1cnJlbnRMb2NhdGlvbiArIDcpKVxyXG4gICAgICAgICAgICAgICAgbGV0IHZpY3RpbTIgPSBwbGF5ZXIub2NjdXBpZWRUaWxlcy5XaGVyZSh4ID0+IHguaWQgPT09IHBhd24uY3VycmVudExvY2F0aW9uICsgOSkuRmlyc3RPckRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmljdGltMilcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMgPSBsb2NhdGlvbnMuRXhjZXB0KGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IHBhd24uY3VycmVudExvY2F0aW9uICsgOSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zID0gbG9jYXRpb25zLkV4Y2VwdChwbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeiA9PiB6LmlkKS5XaGVyZShjID0+IGMgPCBwYXduLmN1cnJlbnRMb2NhdGlvbikuVG9MaXN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2aWN0aW0xID0gcGxheWVyLm9jY3VwaWVkVGlsZXMuV2hlcmUoeCA9PiB4LmlkID09PSBwYXduLmN1cnJlbnRMb2NhdGlvbiAtIDcpLkZpcnN0T3JEZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpY3RpbTEpXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zID0gbG9jYXRpb25zLkV4Y2VwdChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBwYXduLmN1cnJlbnRMb2NhdGlvbiAtIDcpKVxyXG4gICAgICAgICAgICAgICAgbGV0IHZpY3RpbTIgPSBwbGF5ZXIub2NjdXBpZWRUaWxlcy5XaGVyZSh4ID0+IHguaWQgPT09IHBhd24uY3VycmVudExvY2F0aW9uIC0gOSkuRmlyc3RPckRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmljdGltMilcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbnMgPSBsb2NhdGlvbnMuRXhjZXB0KGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IHBhd24uY3VycmVudExvY2F0aW9uIC0gOSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zID0gbG9jYXRpb25zLkV4Y2VwdChwbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeiA9PiB6LmlkKS5XaGVyZShjID0+IGMgPiBwYXduLmN1cnJlbnRMb2NhdGlvbikuVG9MaXN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhd24uaXNGaXJzdE1vdmUpIHtcclxuICAgICAgICAgICAgaWYgKGlzT3Bwb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9ucy5FeGNlcHQocGxheWVyLm9jY3VwaWVkVGlsZXMuV2hlcmUoeiA9PiBNYXRoLmFicyh6LmlkIC0gcGF3bi5jdXJyZW50TG9jYXRpb24pID09PSA4KS5TZWxlY3QodCA9PiB0LmlkKS5Ub0xpc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zLkV4Y2VwdChwbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeiA9PiB6LmlkKS5Ub0xpc3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9jYXRpb25zLkNvbnRhaW5zKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiArIDE2KSAmJiAhbG9jYXRpb25zLkNvbnRhaW5zKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiArIDgpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMuUmVtb3ZlKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiArIDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbnMuQ29udGFpbnMocGllY2UuY3VycmVudExvY2F0aW9uIC0gMTYpICYmICFsb2NhdGlvbnMuQ29udGFpbnMocGllY2UuY3VycmVudExvY2F0aW9uIC0gOCkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5SZW1vdmUocGllY2UuY3VycmVudExvY2F0aW9uIC0gMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQmxvY2tLbmlnaHQobG9jYXRpb25zOiBMaXN0PG51bWJlcj4sIHBsYXllcjogcGxheWVyLCBpc09wcG9uZW50OiBib29sZWFuID0gZmFsc2UpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgIGlmIChpc09wcG9uZW50KSByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbnMuRXhjZXB0KHBsYXllci5vY2N1cGllZFRpbGVzLlNlbGVjdCh6ID0+IHouaWQpLlRvTGlzdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0Jsb2NrUm9vayhwaWVjZTogZ2FtZVBpZWNlLCBsb2NhdGlvbnM6IExpc3Q8bnVtYmVyPiwgcGxheWVyOiBwbGF5ZXIsIGlzT3Bwb25lbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IExpc3Q8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IGJlaGluZEJsb2NrZWQgPSBuZXcgTGlzdDxudW1iZXI+KCk7XHJcbiAgICAgICAgbGV0IGJsb2NrZWQgPSBpbml0aWFsQmxvY2tDaGVjayhwaWVjZSwgbG9jYXRpb25zLCBwbGF5ZXIsIGlzT3Bwb25lbnQpXHJcbiAgICAgICAgaWYgKGJsb2NrZWQuQ291bnQoKSA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgICAgIGJsb2NrZWQuRm9yRWFjaCgobnVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gbnVtIC0gcGllY2UuY3VycmVudExvY2F0aW9uO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBudW07XHJcbiAgICAgICAgICAgIGlmIChkaWZmICUgOSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgNjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IGluZGV4KS5Db3VudCgpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGluZEJsb2NrZWQuQWRkKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC09IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBpbmRleCkuQ291bnQoKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhpbmRCbG9ja2VkLkFkZChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmICUgNyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgNTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IGluZGV4KS5Db3VudCgpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGluZEJsb2NrZWQuQWRkKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9ucy5FeGNlcHQoYmxvY2tlZCkuRXhjZXB0KGJlaGluZEJsb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQmxvY2tUb3dlcihwaWVjZTogZ2FtZVBpZWNlLCBsb2NhdGlvbnM6IExpc3Q8bnVtYmVyPiwgcGxheWVyOiBwbGF5ZXIsIGlzT3Bwb25lbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IExpc3Q8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IGJlaGluZEJsb2NrZWQgPSBuZXcgTGlzdDxudW1iZXI+KCk7XHJcbiAgICAgICAgbGV0IGJsb2NrZWQgPSBpbml0aWFsQmxvY2tDaGVjayhwaWVjZSwgbG9jYXRpb25zLCBwbGF5ZXIsIGlzT3Bwb25lbnQpXHJcbiAgICAgICAgaWYgKGJsb2NrZWQuQ291bnQoKSA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgICAgIGJsb2NrZWQuRm9yRWFjaChudW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IG51bSAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbnVtO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggJSA4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCAlIDggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBpbmRleCkuQ291bnQoKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhpbmRCbG9ja2VkLkFkZChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmICUgOCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgNjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IGluZGV4KS5Db3VudCgpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGluZEJsb2NrZWQuQWRkKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbnMuRXhjZXB0KGJsb2NrZWQpLkV4Y2VwdChiZWhpbmRCbG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0Jsb2NrUXVlZW4ocGllY2U6IGdhbWVQaWVjZSwgbG9jYXRpb25zOiBMaXN0PG51bWJlcj4sIHBsYXllcjogcGxheWVyLCBpc09wcG9uZW50OiBib29sZWFuID0gZmFsc2UpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgIGxldCBiZWhpbmRCbG9ja2VkID0gbmV3IExpc3Q8bnVtYmVyPigpO1xyXG4gICAgICAgIGxldCBibG9ja2VkID0gaW5pdGlhbEJsb2NrQ2hlY2socGllY2UsIGxvY2F0aW9ucywgcGxheWVyLCBpc09wcG9uZW50KVxyXG4gICAgICAgIGlmIChibG9ja2VkLkNvdW50KCkgPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9ucztcclxuICAgICAgICBibG9ja2VkLkZvckVhY2goKG51bSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IG51bSAtIHBpZWNlLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbnVtO1xyXG4gICAgICAgICAgICBpZiAoZGlmZiAlIDkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IDU2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBpbmRleCkuQ291bnQoKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhpbmRCbG9ja2VkLkFkZChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtPSA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiAlIDcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IDU2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBpbmRleCkuQ291bnQoKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhpbmRCbG9ja2VkLkFkZChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhkaWZmKSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCAlIDggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09PSBpbmRleCkuQ291bnQoKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWhpbmRCbG9ja2VkLkFkZChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4ICUgOCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IGluZGV4KS5Db3VudCgpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGluZEJsb2NrZWQuQWRkKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgJSA4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25zLldoZXJlKHggPT4geCA9PT0gaW5kZXgpLkNvdW50KCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoaW5kQmxvY2tlZC5BZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLT0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9ucy5XaGVyZSh4ID0+IHggPT09IGluZGV4KS5Db3VudCgpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGluZEJsb2NrZWQuQWRkKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb25zLkV4Y2VwdChibG9ja2VkKS5FeGNlcHQoYmVoaW5kQmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tCbG9ja0tpbmcocGllY2U6IGdhbWVQaWVjZSwgbG9jYXRpb25zOiBMaXN0PG51bWJlcj4sIHBsYXllcjogcGxheWVyLCBpc09wcG9uZW50OiBib29sZWFuID0gZmFsc2UpOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgIGxldCBibG9ja2VkID0gbG9jYXRpb25zLkludGVyc2VjdChwbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeCA9PiB4LmlkKSk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9ucy5FeGNlcHQoYmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tLaW5nT25seU1vdmVzKGluaXRpYWxMb2NhdGlvbnM6IExpc3Q8bnVtYmVyPiwgZW5lbXlQbGF5ZXI6IHBsYXllcik6IExpc3Q8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IHRyYXNoID0gbmV3IExpc3Q8bnVtYmVyPigpO1xyXG4gICAgICAgIGluaXRpYWxMb2NhdGlvbnMuRm9yRWFjaChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15UGxheWVyLnBpZWNlcy5Gb3JFYWNoKHBpZWNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwaWVjZS5hdmFpbGFibGVMb2NhdGlvbnMuV2hlcmUoeCA9PiB4ID09IGxvY2F0aW9uKS5Db3VudCgpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFzaC5BZGQobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxMb2NhdGlvbnMuRXhjZXB0KHRyYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL21vdmVtZW50UnVsZXMudHMiLCJleHBvcnQgbmFtZXNwYWNlIHZpc3VhbFVJe1xyXG4gICAgXHJcbiAgICBleHBvcnQgdmFyIGNsYXNzTmFtZXM6IHsgW2tleSA6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiaGlnaGxpZ2h0LWRlc3RpbmF0aW9uXCIsXHJcbiAgICAgICAgdGhyZWF0OiBcImhpZ2hsaWdodC10aHJlYXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0VGlsZShpZDogbnVtYmVyLCBjbGFzc05hbWU6IHN0cmluZyApOiB2b2lkIHtcclxuICAgICAgICB2YXIgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGlmICh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAvL3RpbGUuaW5uZXJUZXh0ID0gdGlsZS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEhpZ2hsaWdodHMoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waWVjZVwiKTtcclxuICAgICAgICBpZihlbGVtZW50cyl7XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtZW50cywgKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aGl0ZV9zcXVhcmUnKSlcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAncGllY2Ugd2hpdGVfc3F1YXJlJzsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAncGllY2UgYmxhY2tfc3F1YXJlJzsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaWdobGlnaHQoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpZWNlXCIpO1xyXG4gICAgICAgIGlmKGVsZW1lbnRzKXtcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1vdmUoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKXtcclxuICAgICAgICBsZXQgcGllY2VIdG1sVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZyb20udG9TdHJpbmcoKSkuaW5uZXJUZXh0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZyb20udG9TdHJpbmcoKSkuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0by50b1N0cmluZygpKS5pbm5lclRleHQgPSBwaWVjZUh0bWxUZXh0O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3Zpc3VhbFVJLnRzIiwiaW1wb3J0IHsgZ2FtZVBpZWNlLCBwaWVjZVR5cGVzLCBwYXduLCBrbmlnaHQsIHJvb2ssIHRvd2VyLCBxdWVlbiwga2luZyB9IGZyb20gXCIuLi9waWVjZXNcIjtcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xyXG5pbXBvcnQge1xyXG4gICAgcnVsZXNIZWxwZXJcclxufSBmcm9tIFwiLi4vaGVscGVycy9tb3ZlbWVudFJ1bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICB2aXN1YWxVSSBhcyB2aXNIZWxwZXJcclxufSBmcm9tIFwiLi4vaGVscGVycy92aXN1YWxVSVwiO1xyXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0IHtcclxuICAgIExpc3RcclxufSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2xpbnF0c19uZXcvZGlzdC9saW5xXCI7XHJcblxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBpbml0aWFsaXplciB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaW5pdFBpZWNlcyhpZDogc3RyaW5nKTogTGlzdDxnYW1lUGllY2U+IHtcclxuICAgICAgICBpZiAoaWQgPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGlzdDxnYW1lUGllY2U+KFtcclxuICAgICAgICAgICAgICAgIG5ldyBwYXduKFwicHcxXCIsIHBpZWNlVHlwZXMucGF3biwgdHJ1ZSwgZmFsc2UsIDkpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzJcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTApLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzNcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTEpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzRcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTIpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzVcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTMpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzZcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzdcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTUpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwdzhcIiwgcGllY2VUeXBlcy5wYXduLCB0cnVlLCBmYWxzZSwgMTYpLFxyXG4gICAgICAgICAgICAgICAgbmV3IGtuaWdodChcImtudzFcIiwgcGllY2VUeXBlcy5rbmlnaHQsIHRydWUsIGZhbHNlLCAyKSxcclxuICAgICAgICAgICAgICAgIG5ldyBrbmlnaHQoXCJrbncyXCIsIHBpZWNlVHlwZXMua25pZ2h0LCB0cnVlLCBmYWxzZSwgNyksXHJcbiAgICAgICAgICAgICAgICBuZXcgdG93ZXIoXCJ0dzFcIiwgcGllY2VUeXBlcy50b3dlciwgdHJ1ZSwgZmFsc2UsIDEpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHRvd2VyKFwidHcyXCIsIHBpZWNlVHlwZXMudG93ZXIsIHRydWUsIGZhbHNlLCA4KSxcclxuICAgICAgICAgICAgICAgIG5ldyByb29rKFwicncxXCIsIHBpZWNlVHlwZXMucm9vaywgdHJ1ZSwgZmFsc2UsIDMpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHJvb2soXCJydzJcIiwgcGllY2VUeXBlcy5yb29rLCB0cnVlLCBmYWxzZSwgNiksXHJcbiAgICAgICAgICAgICAgICBuZXcgcXVlZW4oXCJxd1wiLCBwaWVjZVR5cGVzLnF1ZWVuLCB0cnVlLCBmYWxzZSwgNCksXHJcbiAgICAgICAgICAgICAgICBuZXcga2luZyhcImtpd1wiLCBwaWVjZVR5cGVzLmtpbmcsIHRydWUsIGZhbHNlLCA1KSxcclxuXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0PGdhbWVQaWVjZT4oW1xyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwYjFcIiwgcGllY2VUeXBlcy5wYXduLCBmYWxzZSwgZmFsc2UsIDQ5KSxcclxuICAgICAgICAgICAgICAgIG5ldyBwYXduKFwicGIyXCIsIHBpZWNlVHlwZXMucGF3biwgZmFsc2UsIGZhbHNlLCA1MCksXHJcbiAgICAgICAgICAgICAgICBuZXcgcGF3bihcInBiM1wiLCBwaWVjZVR5cGVzLnBhd24sIGZhbHNlLCBmYWxzZSwgNTEpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwYjRcIiwgcGllY2VUeXBlcy5wYXduLCBmYWxzZSwgZmFsc2UsIDUyKSxcclxuICAgICAgICAgICAgICAgIG5ldyBwYXduKFwicGI1XCIsIHBpZWNlVHlwZXMucGF3biwgZmFsc2UsIGZhbHNlLCA1MyksXHJcbiAgICAgICAgICAgICAgICBuZXcgcGF3bihcInBiNlwiLCBwaWVjZVR5cGVzLnBhd24sIGZhbHNlLCBmYWxzZSwgNTQpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHBhd24oXCJwYjdcIiwgcGllY2VUeXBlcy5wYXduLCBmYWxzZSwgZmFsc2UsIDU1KSxcclxuICAgICAgICAgICAgICAgIG5ldyBwYXduKFwicGI4XCIsIHBpZWNlVHlwZXMucGF3biwgZmFsc2UsIGZhbHNlLCA1NiksXHJcbiAgICAgICAgICAgICAgICBuZXcga25pZ2h0KFwia25iMVwiLCBwaWVjZVR5cGVzLmtuaWdodCwgZmFsc2UsIGZhbHNlLCA1OCksXHJcbiAgICAgICAgICAgICAgICBuZXcga25pZ2h0KFwia25iMlwiLCBwaWVjZVR5cGVzLmtuaWdodCwgZmFsc2UsIGZhbHNlLCA2MyksXHJcbiAgICAgICAgICAgICAgICBuZXcgdG93ZXIoXCJ0YjFcIiwgcGllY2VUeXBlcy50b3dlciwgZmFsc2UsIGZhbHNlLCA1NyksXHJcbiAgICAgICAgICAgICAgICBuZXcgdG93ZXIoXCJ0YjJcIiwgcGllY2VUeXBlcy50b3dlciwgZmFsc2UsIGZhbHNlLCA2NCksXHJcbiAgICAgICAgICAgICAgICBuZXcgcm9vayhcInJiMVwiLCBwaWVjZVR5cGVzLnJvb2ssIGZhbHNlLCBmYWxzZSwgNTkpLFxyXG4gICAgICAgICAgICAgICAgbmV3IHJvb2soXCJyYjJcIiwgcGllY2VUeXBlcy5yb29rLCBmYWxzZSwgZmFsc2UsIDYyKSxcclxuICAgICAgICAgICAgICAgIG5ldyBxdWVlbihcInFiXCIsIHBpZWNlVHlwZXMucXVlZW4sIGZhbHNlLCBmYWxzZSwgNjApLFxyXG4gICAgICAgICAgICAgICAgbmV3IGtpbmcoXCJraWJcIiwgcGllY2VUeXBlcy5raW5nLCBmYWxzZSwgZmFsc2UsIDYxKSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaW5pdE9jY3VwaWVkVGlsZXMocGxheWVyOiBwbGF5ZXIpOiBMaXN0PG9jY3VwaWVkVGlsZT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgPT09IFwid2hpdGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8b2NjdXBpZWRUaWxlPihbXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwidHcxXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDIsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJrbncxXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDMsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJydzFcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNCwgb2NjdXBhbnQ6IHBsYXllci5waWVjZXMuV2hlcmUocCA9PiBwLmlkID09PSBcInF3XCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDUsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJraXdcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNiwgb2NjdXBhbnQ6IHBsYXllci5waWVjZXMuV2hlcmUocCA9PiBwLmlkID09PSBcInJ3MlwiKS5GaXJzdCgpIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiA3LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwia253MlwiKS5GaXJzdCgpIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiA4LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwidHcyXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDksIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzFcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTAsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzJcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTEsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzNcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTIsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzRcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTMsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzVcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTQsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzZcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTUsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzdcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogMTYsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJwdzhcIikuRmlyc3QoKSB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0PG9jY3VwaWVkVGlsZT4oW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogNTcsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJ0YjFcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNTgsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJrbmIxXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDU5LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicmIxXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDYwLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicWJcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNjEsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJraWJcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNjIsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJyYjJcIikuRmlyc3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBpZDogNjMsIG9jY3VwYW50OiBwbGF5ZXIucGllY2VzLldoZXJlKHAgPT4gcC5pZCA9PT0gXCJrbmIyXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDY0LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwidGIyXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDQ5LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGIxXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDUwLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGIyXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDUxLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGIzXCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDUyLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGI0XCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDUzLCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGI1XCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDU0LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGI2XCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDU1LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGI3XCIpLkZpcnN0KCkgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDU2LCBvY2N1cGFudDogcGxheWVyLnBpZWNlcy5XaGVyZShwID0+IHAuaWQgPT09IFwicGI4XCIpLkZpcnN0KCkgfVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGluaXRQbGF5ZXJzKCk6IExpc3Q8cGxheWVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXN0PHBsYXllcj4oW1xyXG4gICAgICAgICAgICBuZXcgcGxheWVyKFwid2hpdGVcIiksXHJcbiAgICAgICAgICAgIG5ldyBwbGF5ZXIoXCJibGFja1wiKSxcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaW5pdFRpbGVzKGdhbWU6IGdhbWUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDY1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSBpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpLnRvU3RyaW5nKCkpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrVGlsZShlLCB4LCBnYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrVGlsZShlOiBFdmVudCwgdGlsZUlkOiBudW1iZXIsIGdhbWU6IGdhbWUpOiBhbnkge1xyXG4gICAgICAgIGxldCBwaWNrZWRQaWVjZSA9IGdhbWUuY3VycmVudFBsYXllci5waWVjZXMuV2hlcmUoeCA9PiB4LmN1cnJlbnRMb2NhdGlvbiA9PT0gdGlsZUlkKS5GaXJzdE9yRGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChwaWNrZWRQaWVjZSAhPT0gdW5kZWZpbmVkKSB7IC8vIGNsaWNrZWQgb24gYW4gYWN0aXZlIHBpZWNlXHJcbiAgICAgICAgICAgIGdhbWUuY3VycmVudFBsYXllci5jdXJyZW50QWN0aXZlUGllY2UgPSBwaWNrZWRQaWVjZTtcclxuICAgICAgICAgICAgZ2FtZS5waWVjZVNlbGVjdGVkKHBpY2tlZFBpZWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vIGNsaWNrZWQgb24gYW4gdW5vY2N1cGllZCB0aWxlXHJcbiAgICAgICAgICAgIGdhbWUudGlsZVNlbGVjdGVkKHRpbGVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBvY2N1cGllZFRpbGUge1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgb2NjdXBhbnQ6IGdhbWVQaWVjZTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihJZDogbnVtYmVyLCBwaWVjZTogZ2FtZVBpZWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBJZDtcclxuICAgICAgICAgICAgdGhpcy5vY2N1cGFudCA9IHBpZWNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4geyBba2V5OiBzdHJpbmddOiBUOyB9XHJcblxyXG5cclxuICAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2luaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgZ2FtZUdlbmVyYXRvciBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlLmNzcyc7XHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGxldCBnYW1lID0gbmV3IGdhbWVHZW5lcmF0b3IuZ2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCB7IGdhbWVQaWVjZSwgcGllY2VUeXBlcywga2luZyB9IGZyb20gXCIuL3BpZWNlc1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIHJ1bGVzSGVscGVyXHJcbn0gZnJvbSBcIi4vaGVscGVycy9tb3ZlbWVudFJ1bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICB2aXN1YWxVSSBhcyB2aXNIZWxwZXJcclxufSBmcm9tIFwiLi9oZWxwZXJzL3Zpc3VhbFVJXCI7XHJcbmltcG9ydCB7XHJcbiAgICBpbml0aWFsaXplclxyXG59IGZyb20gXCIuL2hlbHBlcnMvaW5pdGlhbGl6ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrSGVscGVyXHJcbn0gZnJvbSBcIi4vaGVscGVycy9jaGVja0hlbHBlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgTGlzdFxyXG59IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbGlucXRzX25ldy9kaXN0L2xpbnFcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBnYW1lIHtcclxuXHJcbiAgICBwbGF5ZXJzOiBMaXN0PHBsYXllcj47XHJcbiAgICBjdXJyZW50UGxheWVyOiBwbGF5ZXI7XHJcbiAgICBub25DdXJyZW50UGxheWVyOiBwbGF5ZXI7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBpbml0aWFsaXplci5pbml0UGxheWVycygpO1xyXG4gICAgICAgIHRoaXMubm9uQ3VycmVudFBsYXllciA9IHRoaXMucGxheWVycy5XaGVyZSh4ID0+IHguaWQgPT09IFwiYmxhY2tcIikuRmlyc3RPckRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnMuV2hlcmUoeCA9PiB4LmlkID09PSBcIndoaXRlXCIpLkZpcnN0T3JEZWZhdWx0KCk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZXIuaW5pdFRpbGVzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwaWVjZVNlbGVjdGVkKHBpZWNlOiBnYW1lUGllY2UpOiB2b2lkIHtcclxuICAgICAgICB2aXNIZWxwZXIucmVtb3ZlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgICAgIHBpZWNlLmF2YWlsYWJsZUxvY2F0aW9ucy5Gb3JFYWNoKCh0aWxlKSA9PiB7IHZpc0hlbHBlci5oaWdobGlnaHRUaWxlKHRpbGUsIHZpc0hlbHBlci5jbGFzc05hbWVzW1wiZGVzdGluYXRpb25cIl0pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbGVTZWxlY3RlZCh0aWxlSWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHZpc0hlbHBlci5yZW1vdmVIaWdobGlnaHQodmlzSGVscGVyLmNsYXNzTmFtZXNbXCJkZXN0aW5hdGlvblwiXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllci5jdXJyZW50QWN0aXZlUGllY2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllci5jdXJyZW50QWN0aXZlUGllY2UuYXZhaWxhYmxlTG9jYXRpb25zLkNvbnRhaW5zKHRpbGVJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5tb3ZlKHRoaXMsIHRpbGVJZCwgdGhpcy5pbml0Q2hlY2tMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2hlY2tMaXN0KGdhbWU6IGdhbWUpOiB2b2lkIHtcclxuICAgICAgICB2aXNIZWxwZXIucmVtb3ZlSGlnaGxpZ2h0KHZpc0hlbHBlci5jbGFzc05hbWVzW1widGhyZWF0XCJdKTtcclxuICAgICAgICAvLzEuIGNoZWNrIGN1cnJlbnQgcGxheWVyIGF2YWlsYWJsZSBtb3Zlc1xyXG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllci5waWVjZXMuV2hlcmUoeCA9PiB4LnR5cGUgIT0gcGllY2VUeXBlcy5raW5nKS5Gb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmF2YWlsYWJsZUxvY2F0aW9ucyA9IHJ1bGVzSGVscGVyLmNoZWNrQXZhaWxhYmxlTW92ZXMoZWxlbWVudCwgZ2FtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8yLiBzd2l0Y2ggY3VycmVudCBwbGF5ZXJcclxuICAgICAgICBnYW1lLmN1cnJlbnRQbGF5ZXIuY3VycmVudEFjdGl2ZVBpZWNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gZ2FtZS5jdXJyZW50UGxheWVyO1xyXG4gICAgICAgIGxldCBub25DdXJyZW50ID0gZ2FtZS5ub25DdXJyZW50UGxheWVyXHJcbiAgICAgICAgZ2FtZS5jdXJyZW50UGxheWVyID0gbm9uQ3VycmVudDtcclxuICAgICAgICBnYW1lLm5vbkN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50O1xyXG4gICAgICAgIC8vMy4gY2hlY2sgY2hlY2sgKyBjaGVjayBjdXJyZW50IGtpbmcgbW92ZXNcclxuICAgICAgICBsZXQga2luZyA9IGdhbWUuY3VycmVudFBsYXllci5waWVjZXMuV2hlcmUoeCA9PiB4LnR5cGUgPT09IHBpZWNlVHlwZXMua2luZykuRmlyc3RPckRlZmF1bHQoKSBhcyBraW5nO1xyXG4gICAgICAgIGtpbmcuYXZhaWxhYmxlTG9jYXRpb25zID0gcnVsZXNIZWxwZXIuY2hlY2tLaW5nQXZhaWxhYmxlTW92ZXMoa2luZywgZ2FtZSk7XHJcbiAgICAgICAga2luZyA9IGNoZWNrSGVscGVyLmlzVW5kZXJDaGVjayhraW5nLCBnYW1lLm5vbkN1cnJlbnRQbGF5ZXIpXHJcbiAgICAgICAgaWYgKGtpbmcuaXNJbkNoZWNrKSB7XHJcbiAgICAgICAgICAgIGtpbmcucG90ZW50aWFsQXNzYXNzaW5zLlRvQXJyYXkoKS5mb3JFYWNoKHBpZWNlID0+IHtcclxuICAgICAgICAgICAgICAgIHZpc0hlbHBlci5oaWdobGlnaHRUaWxlKHBpZWNlLmN1cnJlbnRMb2NhdGlvbiwgdmlzSGVscGVyLmNsYXNzTmFtZXNbXCJ0aHJlYXRcIl0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGtpbmcucG90ZW50aWFsQXNzYXNzaW5zLkNvdW50KCkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2luZy5hdmFpbGFibGVMb2NhdGlvbnMuQ291bnQoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tIZWxwZXIuYW5ub3VuY2VXaW5uZXIoZ2FtZS5ub25DdXJyZW50UGxheWVyKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2UgZ2FtZS5jdXJyZW50UGxheWVyLnBpZWNlcy5XaGVyZSh5ID0+IHkudHlwZSAhPT0gcGllY2VUeXBlcy5raW5nKS5Gb3JFYWNoKHBpZWNlID0+IHBpZWNlLmF2YWlsYWJsZUxvY2F0aW9ucy5SZW1vdmVBbGwoeCA9PiB4ID4gMCkpIC8vb25seSB0aGUga2luZyBjYW4gbW92ZSBpbiB0aGlzIHNpdHVhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja2VyID0ga2luZy5wb3RlbnRpYWxBc3Nhc3NpbnMuRmlyc3RPckRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tlckxvY2F0aW9uID0gYXR0YWNrZXIuY3VycmVudExvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja2VyTGluZSA9IHJ1bGVzSGVscGVyLmdldExpbmUoYXR0YWNrZXIsIGtpbmcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja2VyUGF0aCA9IHJ1bGVzSGVscGVyLmdldExvY2F0aW9uc0JldHdlZW5Ud29QaWVjZXMoYXR0YWNrZXJMaW5lLCBhdHRhY2tlci5jdXJyZW50TG9jYXRpb24sIGtpbmcuY3VycmVudExvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdhbWUuY3VycmVudFBsYXllci5waWVjZXMuV2hlcmUoeCA9PiB4LnR5cGUgIT0gcGllY2VUeXBlcy5raW5nKS5Gb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXZhaWxhYmxlTG9jYXRpb25zID0gY2hlY2tIZWxwZXIuY2hlY2tBdmFpbGFibGVNb3ZlcyhlbGVtZW50LCBhdHRhY2tlciwgYXR0YWNrZXJQYXRoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBjaGVjayBtYXRlXHJcbiAgICAgICAgICAgICAgICBpZiAoa2luZy5hdmFpbGFibGVMb2NhdGlvbnMuQ291bnQoKSA9PT0gMCAmJiBnYW1lLmN1cnJlbnRQbGF5ZXIucGllY2VzLldoZXJlKHggPT4geC50eXBlICE9IHBpZWNlVHlwZXMua2luZyAmJiB4LmF2YWlsYWJsZUxvY2F0aW9ucy5Db3VudCgpID09PSAwKS5Db3VudCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tIZWxwZXIuYW5ub3VuY2VXaW5uZXIoZ2FtZS5ub25DdXJyZW50UGxheWVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvLyBub24gY2hlY2sgdGhyZWFkXHJcbiAgICAgICAgICAgIC8vNC4gY2hlY2sgbmV3IGN1cnJlbnQgcGxheWVyIG1vdmVzIGZvciBhbGwgcGllY2VzIGV4Y2VwdCB0aGUga2luZ1xyXG4gICAgICAgICAgICBnYW1lLmN1cnJlbnRQbGF5ZXIucGllY2VzLldoZXJlKHggPT4geC50eXBlICE9IHBpZWNlVHlwZXMua2luZykuRm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXZhaWxhYmxlTG9jYXRpb25zID0gcnVsZXNIZWxwZXIuY2hlY2tBdmFpbGFibGVNb3ZlcyhlbGVtZW50LCBnYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUudHMiLCJpbXBvcnQgeyBnYW1lUGllY2UsIHBpZWNlVHlwZXMgfSBmcm9tIFwiLi9waWVjZXNcIjtcclxuaW1wb3J0IHtcclxuICAgIHJ1bGVzSGVscGVyXHJcbn0gZnJvbSBcIi4vaGVscGVycy9tb3ZlbWVudFJ1bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBtb3ZlbWVudEhlbHBlciBhcyBtb3ZlSGFuZGxlciwgbW92ZW1lbnRIZWxwZXJcclxufSBmcm9tIFwiLi9oZWxwZXJzL21vdmVtZW50SGVscGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBtb3ZlXHJcbn1mcm9tIFwiLi9oZWxwZXJzL21vdmVtZW50SGVscGVyXCI7XHJcbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQge1xyXG4gICAgdmlzdWFsVUkgYXMgdmlzSGVscGVyXHJcbn0gZnJvbSBcIi4vaGVscGVycy92aXN1YWxVSVwiO1xyXG5pbXBvcnQge1xyXG4gICAgaW5pdGlhbGl6ZXJcclxufSBmcm9tIFwiLi9oZWxwZXJzL2luaXRpYWxpemVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMaXN0XHJcbn0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9saW5xdHNfbmV3L2Rpc3QvbGlucVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBwbGF5ZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzQ3VycmVudDogYm9vbGVhbjtcclxuICAgIGlzSW5DaGVjazogYm9vbGVhbjtcclxuICAgIHBpZWNlczogTGlzdDxnYW1lUGllY2U+O1xyXG4gICAgb2NjdXBpZWRUaWxlczogTGlzdDxpbml0aWFsaXplci5vY2N1cGllZFRpbGU+O1xyXG4gICAgY3VycmVudEFjdGl2ZVBpZWNlOiBnYW1lUGllY2U7XHJcbiAgICBtb3ZlczogTGlzdDxtb3ZlPjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmlzQ3VycmVudCA9IHRoaXMuaWQgPT0gXCJ3aGl0ZVwiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaWQgPT0gXCJ3aGl0ZVwiID8gXCJQbGF5ZXIgMVwiIDogXCJQbGF5ZXIgMlwiO1xyXG4gICAgICAgIHRoaXMuaXNJbkNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5waWVjZXMgPSBpbml0aWFsaXplci5pbml0UGllY2VzKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMub2NjdXBpZWRUaWxlcyA9IGluaXRpYWxpemVyLmluaXRPY2N1cGllZFRpbGVzKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubW92ZXMgPSBuZXcgTGlzdDxtb3ZlPigpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZ2FtZTogZ2FtZSwgdGFyZ2V0OiBudW1iZXIsIGNhbGxiYWNrOiAoZ2FtZTogZ2FtZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGFydFBvaW50ID0gZ2FtZS5jdXJyZW50UGxheWVyLm9jY3VwaWVkVGlsZXMuV2hlcmUoeCA9PiB4LmlkID09PSBnYW1lLmN1cnJlbnRQbGF5ZXIuY3VycmVudEFjdGl2ZVBpZWNlLmN1cnJlbnRMb2NhdGlvbikuRmlyc3QoKTtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb24gPSBuZXcgaW5pdGlhbGl6ZXIub2NjdXBpZWRUaWxlKHRhcmdldCwgZ2FtZS5jdXJyZW50UGxheWVyLmN1cnJlbnRBY3RpdmVQaWVjZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RhcnRQb2ludC5vY2N1cGFudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnYW1lLmN1cnJlbnRQbGF5ZXIuY3VycmVudEFjdGl2ZVBpZWNlID0gbW92ZUhhbmRsZXIuaGFuZGxlUGllY2VNb3ZlKGdhbWUuY3VycmVudFBsYXllci5jdXJyZW50QWN0aXZlUGllY2UsIGRlc3RpbmF0aW9uLmlkKTtcclxuICAgICAgICBsZXQgaXNBdHRhY2sgPSBydWxlc0hlbHBlci5pc0F0dGFjayhnYW1lLm5vbkN1cnJlbnRQbGF5ZXIub2NjdXBpZWRUaWxlcy5TZWxlY3QoeCA9PiB4LmlkKSwgZGVzdGluYXRpb24pO1xyXG4gICAgICAgIHZhciB2aWN0aW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGlzQXR0YWNrKSB7XHJcbiAgICAgICAgICAgIHZpY3RpbSA9IGdhbWUubm9uQ3VycmVudFBsYXllci5waWVjZXMuV2hlcmUocGkgPT4gcGkuY3VycmVudExvY2F0aW9uID09PSBkZXN0aW5hdGlvbi5pZCkuRmlyc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZSA9IG1vdmVIYW5kbGVyLmhhbmRsZVBsYXllcnNNb3ZlKGdhbWUsIHN0YXJ0UG9pbnQsIGRlc3RpbmF0aW9uLCBpc0F0dGFjaywgdmljdGltKTtcclxuICAgICAgICB2aXNIZWxwZXIubW92ZShzdGFydFBvaW50LmlkLCBkZXN0aW5hdGlvbi5pZCk7XHJcbiAgICAgICAgY2FsbGJhY2soZ2FtZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxheWVyLnRzIiwiaW1wb3J0IHtcclxuICAgIGdhbWVQaWVjZSxcclxuICAgIHBpZWNlVHlwZXMsXHJcbiAgICBwYXduLFxyXG4gICAgcXVlZW4sXHJcbiAgICBraW5nLFxyXG4gICAgdG93ZXJcclxuXHJcbn0gZnJvbSAnLi4vcGllY2VzJztcclxuaW1wb3J0IHtcclxuICAgIHBsYXllclxyXG59IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IGluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplcic7XHJcbmltcG9ydCB7XHJcbiAgICBydWxlc0hlbHBlclxyXG59IGZyb20gXCIuL21vdmVtZW50UnVsZXNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMaXN0XHJcbn0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2xpbnF0c19uZXcvZGlzdC9saW5xJztcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBtb3ZlbWVudEhlbHBlciB7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBpZWNlTW92ZShwaWVjZTogZ2FtZVBpZWNlLCBkZXN0OiBudW1iZXIpOiBnYW1lUGllY2V7XHJcbiAgICAgICAgcGllY2UuY3VycmVudExvY2F0aW9uID0gZGVzdDtcclxuICAgICAgICBpZihwaWVjZS50eXBlID09PSBwaWVjZVR5cGVzLnBhd24pe1xyXG4gICAgICAgICAgICBsZXQgX3BpZWNlID0gcGllY2UgYXMgcGF3bjtcclxuICAgICAgICAgICAgX3BpZWNlLmlzRmlyc3RNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9waWVjZS5jYW5VcGdyYWRlID0gcnVsZXNIZWxwZXIuY2FuUGF3blVwZ3JhZGUoX3BpZWNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9waWVjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaWVjZS50eXBlID09PSBwaWVjZVR5cGVzLnRvd2VyKXtcclxuICAgICAgICAgICAgbGV0IF9waWVjZSA9IHBpZWNlIGFzIHRvd2VyO1xyXG4gICAgICAgICAgICBfcGllY2UuY2FuVG93ZXJTd2l0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9waWVjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGllY2UudHlwZSA9PT0gcGllY2VUeXBlcy5raW5nKXtcclxuICAgICAgICAgICAgbGV0IF9waWVjZSA9IHBpZWNlIGFzIGtpbmc7XHJcbiAgICAgICAgICAgIF9waWVjZS5jYW5Ub3dlclN3aXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3BpZWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBpZWNlO1xyXG4gICAgfSBcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFuZGxlUGxheWVyc01vdmUgKGdhbWU6IGdhbWUsIHN0YXJ0UG9pbnQ6IGluaXRpYWxpemVyLm9jY3VwaWVkVGlsZSwgZGVzdDogaW5pdGlhbGl6ZXIub2NjdXBpZWRUaWxlLCBpc0F0dGFjazogYm9vbGVhbiwgdmljdGltOiBhbnkpOiBnYW1lIHtcclxuICAgICAgICBnYW1lLmN1cnJlbnRQbGF5ZXIub2NjdXBpZWRUaWxlcy5SZW1vdmUoc3RhcnRQb2ludCk7XHJcbiAgICAgICAgZ2FtZS5jdXJyZW50UGxheWVyLm9jY3VwaWVkVGlsZXMuQWRkKGRlc3QpO1xyXG4gICAgICAgIGdhbWUuY3VycmVudFBsYXllci5tb3Zlcy5BZGQobmV3IG1vdmUoc3RhcnRQb2ludC5pZCwgZGVzdC5pZCwgZ2FtZS5jdXJyZW50UGxheWVyLmN1cnJlbnRBY3RpdmVQaWVjZSwgaXNBdHRhY2ssIHZpY3RpbSkpXHJcbiAgICAgICAgaWYoaXNBdHRhY2spe1xyXG4gICAgICAgICAgICBnYW1lLm5vbkN1cnJlbnRQbGF5ZXIgPSBoYW5kbGVBdHRhY2soZ2FtZS5ub25DdXJyZW50UGxheWVyLCBkZXN0LCB2aWN0aW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2FtZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrKHBsYXllcjogcGxheWVyLCBkZXN0OiBpbml0aWFsaXplci5vY2N1cGllZFRpbGUsIHZpY3RpbTogZ2FtZVBpZWNlKTogcGxheWVyIHtcclxuICAgICAgICB2aWN0aW0uaXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICBwbGF5ZXIucGllY2VzLlJlbW92ZSh2aWN0aW0pO1xyXG4gICAgICAgIHBsYXllci5vY2N1cGllZFRpbGVzLlJlbW92ZShwbGF5ZXIub2NjdXBpZWRUaWxlcy5XaGVyZSh4ID0+IHguaWQgPT09IGRlc3QuaWQpLkZpcnN0T3JEZWZhdWx0KCkpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBtb3Zle1xyXG4gICAgb3JpZ2luOiBudW1iZXI7XHJcbiAgICBkZXN0aW5hdGlvbjogbnVtYmVyO1xyXG4gICAgbW92aW5nUGllY2U6IGdhbWVQaWVjZTtcclxuICAgIHZpY3RpbTogZ2FtZVBpZWNlXHJcbiAgICBpc0F0dGFjazogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvOiBudW1iZXIsIGQ6IG51bWJlciwgcDogZ2FtZVBpZWNlLCBpOiBib29sZWFuLCB2OiBhbnkpe1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gbztcclxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZDtcclxuICAgICAgICB0aGlzLm1vdmluZ1BpZWNlID0gcDtcclxuICAgICAgICB0aGlzLmlzQXR0YWNrID0gaTtcclxuICAgICAgICB0aGlzLnZpY3RpbSA9IHY7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvbW92ZW1lbnRIZWxwZXIudHMiLCJpbXBvcnQgeyBnYW1lUGllY2UsIHBpZWNlVHlwZXMsIHBhd24sIGtuaWdodCwgcm9vaywgdG93ZXIsIHF1ZWVuLCBraW5nIH0gZnJvbSBcIi4uL3BpZWNlc1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgcnVsZXNIZWxwZXJcclxufSBmcm9tIFwiLi4vaGVscGVycy9tb3ZlbWVudFJ1bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMaXN0XHJcbn0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9saW5xdHNfbmV3L2Rpc3QvbGlucVwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBjaGVja0hlbHBlciB7XHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZXJDaGVjayhraW5nOiBraW5nLCBhdHRhY2tpbmdQbGF5ZXI6IHBsYXllcik6IGtpbmcge1xyXG4gICAgICAgICBsZXQgbG9jYXRpb24gPSBraW5nLmN1cnJlbnRMb2NhdGlvbjtcclxuICAgICAgICAgbGV0IHBvdGVudGlhbEFzc2Fzc2lucyA9IGF0dGFja2luZ1BsYXllci5waWVjZXMuV2hlcmUoeCA9PiB4LmF2YWlsYWJsZUxvY2F0aW9ucy5XaGVyZSh5ID0+IHkgPT09IGxvY2F0aW9uKS5Db3VudCgpID4gMCk7XHJcbiAgICAgICAgIGlmKHBvdGVudGlhbEFzc2Fzc2lucy5Db3VudCgpID09PSAwKXtcclxuICAgICAgICAgICAgIGtpbmcuaXNJbkNoZWNrID09PSBmYWxzZTtcclxuICAgICAgICAgICAgIGtpbmcucG90ZW50aWFsQXNzYXNzaW5zID0gbnVsbDtcclxuICAgICAgICAgICAgIHJldHVybiBraW5nO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGtpbmcuaXNJbkNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAga2luZy5wb3RlbnRpYWxBc3Nhc3NpbnMgPSBwb3RlbnRpYWxBc3Nhc3NpbnM7XHJcbiAgICAgICAgIHJldHVybiBraW5nO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXZhaWxhYmxlTW92ZXMocGllY2U6IGdhbWVQaWVjZSwgYXR0YWNrZXI6IGdhbWVQaWVjZSAsYXR0YWNrZXJQYXRoOiBMaXN0PG51bWJlcj4pOiBMaXN0PG51bWJlcj4ge1xyXG4gICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IExpc3Q8bnVtYmVyPigpO1xyXG4gICAgICAgICBsZXQgcmVsZXZhbnRMb2NhdGlvbnMgPSBuZXcgTGlzdDxudW1iZXI+KCk7XHJcbiAgICAgICAgIHJlbGV2YW50TG9jYXRpb25zLkFkZChhdHRhY2tlci5jdXJyZW50TG9jYXRpb24pO1xyXG4gICAgICAgICBpZihhdHRhY2tlci50eXBlICE9PSBwaWVjZVR5cGVzLmtuaWdodCl7IC8vIGEga25pZ2h0IGNhbm5vdCBiZSBibG9ja2VkXHJcbiAgICAgICAgICAgIHJlbGV2YW50TG9jYXRpb25zLkFkZFJhbmdlKGF0dGFja2VyUGF0aC5Ub0FycmF5KCkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJlc3VsdCA9IHBpZWNlLmF2YWlsYWJsZUxvY2F0aW9ucy5JbnRlcnNlY3QocmVsZXZhbnRMb2NhdGlvbnMpO1xyXG4gICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGFubm91bmNlV2lubmVyKHdpbm5lcjogcGxheWVyKXtcclxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lckFubm91bmNtZW50JykuaW5uZXJUZXh0ID0gd2lubmVyLm5hbWUgKyBcIiB3aW5zISEhXCI7XHJcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVzc2JvYXJkJykuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQtYm9hcmQnKTtcclxuICAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jaGVja0hlbHBlci50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NoZXNzYm9hcmQsIC5ibGFja19zcXVhcmUsIC53aGl0ZV9zcXVhcmUge1xcclxcblxcdGRpc3BsYXk6YmxvY2s7XFxyXFxuXFx0cGFkZGluZzowcHg7XFxyXFxuXFx0bWFyZ2luOjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZXNzYm9hcmQge1xcclxcblxcdHdpZHRoOjY0MHB4O1xcclxcblxcdGhlaWdodDo2NDBweDtcXHJcXG5cXHRib3JkZXI6NHB4IHNvbGlkICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5ibGFja19zcXVhcmUsIC53aGl0ZV9zcXVhcmUge1xcclxcblxcdHdpZHRoOjgwcHg7XFxyXFxuXFx0aGVpZ2h0OjgwcHg7XFxyXFxuXFx0ZmxvYXQ6bGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrX3NxdWFyZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlX3NxdWFyZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0LWRlc3RpbmF0aW9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG5cXHRvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQtdGhyZWF0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGllY2V7XFxyXFxuXFx0Zm9udC1zaXplOiA2NHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1hbGVydHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZC1ib3JhZCB7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9