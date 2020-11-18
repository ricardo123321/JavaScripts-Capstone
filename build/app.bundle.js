webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(281)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function localStoreScore(score) {
  var scr = JSON.stringify(score);
  localStorage.setItem('scores', scr);
}

function getLocalScores() {
  var score = localStorage.getItem('scores');
  var result = JSON.parse(score);
  if (result === null) {
    result = [0, 0];
    localStoreScore(result);
  }
  return result;
}

function storeScores(score) {
  var localScore = getLocalScores();
  localScore[0] = score;
  localScore[1] = Math.max.apply(Math, _toConsumableArray(localScore));
  localStoreScore(localScore);
}

exports.localStoreScore = localStoreScore;
exports.getLocalScores = getLocalScores;
exports.storeScores = storeScores;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGame = exports.getScoreBoard = exports.submitHighScore = undefined;

var submitHighScore = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userName, scoreValue) {
    var submit, post, address, settings, response, answer;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            submit = {
              user: userName,
              score: scoreValue
            };
            post = JSON.stringify(submit);
            address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N9E2SATejbOkDiI58nb6Vu/scores/';
            settings = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: post
            };
            _context2.next = 6;
            return fetch(address, settings);

          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();

          case 9:
            answer = _context2.sent;
            return _context2.abrupt('return', answer);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function submitHighScore(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getScoreBoard = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var address, settings, response, answer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N9E2SATejbOkDiI58nb6Vu/scores/';
            settings = {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            };
            _context3.next = 4;
            return fetch(address, settings);

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            answer = _context3.sent;
            return _context3.abrupt('return', sorting(answer.result));

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getScoreBoard() {
    return _ref3.apply(this, arguments);
  };
}();

__webpack_require__(296);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createGame = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var game, post, address, settings, response, answer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            game = {
              name: '1st Space Shooter'
            };
            post = JSON.stringify(game);
            address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
            settings = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: post
            };
            _context.next = 6;
            return fetch(address, settings);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            answer = _context.sent;
            return _context.abrupt('return', answer);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createGame() {
    return _ref.apply(this, arguments);
  };
}();

function sorting(obj) {
  var array = [];
  for (var i = 0; i < obj.length; i += 1) {
    array.push([obj[i].score, obj[i].user]);
  }
  return Array.from(array).sort(function (a, b) {
    return b[0] - a[0];
  });
}

exports.submitHighScore = submitHighScore;
exports.getScoreBoard = getScoreBoard;
exports.createGame = createGame;

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68);

var _SceneMain = __webpack_require__(287);

var _SceneMainMenu = __webpack_require__(294);

var _SceneGameOver = __webpack_require__(295);

var _LeaderBoard = __webpack_require__(330);

var game = void 0;
var config = {
  type: Phaser.WEBGL,
  parent: 'divld',
  dom: {
    createContainer: true
  },
  width: 450,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [_SceneMainMenu.SceneMainMenu, _SceneMain.SceneMain, _SceneGameOver.SceneGameOver, _LeaderBoard.LeaderBoard],
  pixelArt: true,
  roundPixels: true,
  autoCenter: Phaser.Scale.CENTER_BOTH
};

game = new Phaser.Game(config);

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneMain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player = __webpack_require__(288);

var _ChaserShip = __webpack_require__(290);

var _GunShip = __webpack_require__(291);

var _CarrierShip = __webpack_require__(293);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneMain = exports.SceneMain = function (_Phaser$Scene) {
  _inherits(SceneMain, _Phaser$Scene);

  function SceneMain() {
    _classCallCheck(this, SceneMain);

    return _possibleConstructorReturn(this, (SceneMain.__proto__ || Object.getPrototypeOf(SceneMain)).call(this, { key: "SceneMain" }));
  }

  _createClass(SceneMain, [{
    key: 'preload',
    value: function preload() {
      this.load.image('bg_1_1', 'assets/bg_1_1.png');
      this.load.image('flag', 'assets/flag.svg');
      this.load.image('projectile1', 'assets/projectile1.svg');
      this.load.image('starship', 'assets/starship.svg');
      this.load.image('starshipdark', 'assets/starshipdark.svg');
      this.load.image('projectile2', 'assets/projectile2.svg');
      this.load.image('ufo', 'assets/ufo.svg');
      this.load.image('ufodark', 'assets/ufodark.svg');
      this.load.image('torpedo', 'assets/torpedo.svg');
      this.load.image('torpedodark', 'assets/torpedodark.svg');
      this.load.spritesheet("exp2_0", "assets/exp2_0.png", {
        frameWidth: 64,
        frameHeight: 64
      });
      this.load.audio("xeon6", "assets/xeon6.ogg");
      this.load.audio("rlaunch", "assets/rlaunch.wav");
      this.load.audio("flaunch", "assets/flaunch.wav");
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.add.image(300, 320, 'bg_1_1');
      this.anims.create({
        key: "bg_1_1",
        frames: this.anims.generateFrameNumbers("ufo"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "exp2_0",
        frames: this.anims.generateFrameNumbers("exp2_0"),
        frameRate: 20,
        repeat: 0
      });

      this.sfx = {
        explosions: this.sound.add("flaunch"),
        laser: this.sound.add("rlaunch")
      };
      this.player = new _Player.Player(this, this.game.config.width * 0.5, this.game.config.height * 0.5, "starship");

      this.hpBar = ['hp0Of5', 'hp1Of5', 'hp2Of5', 'hp3Of5', 'hp4Of5', 'hp5Of5'];

      this.sceneScore = this.add.text(this.game.config.width * 0.025, this.game.config.height * 0.925, 'Score: ' + this.player.getData('score'), {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '3vw',
        lineHeight: 1.3
      });

      this.updateHPBar(this.player);

      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.enemies = this.add.group();
      this.enemyLasers = this.add.group();
      this.playerLasers = this.add.group();
      this.time.addEvent({
        delay: 1000,
        callback: function callback() {
          var enemy = null;

          if (Phaser.Math.Between(0, 10) >= 3) {
            enemy = new _GunShip.GunShip(this, Phaser.Math.Between(0, this.game.config.width), 0);
          } else if (Phaser.Math.Between(0, 10) >= 5) {
            if (this.getEnemiesByType("ChaserShip").length < 5) {

              enemy = new _ChaserShip.ChaserShip(this, Phaser.Math.Between(0, this.game.config.width), 0);
            }
          } else {
            enemy = new _CarrierShip.CarrierShip(this, Phaser.Math.Between(0, this.game.config.width), 0);
          }

          if (enemy !== null) {
            enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
            this.enemies.add(enemy);
          }
        },
        callbackScope: this,
        loop: true
      });
      this.physics.add.collider(this.playerLasers, this.enemies, function (playerLaser, enemy) {
        if (enemy && !_this2.player.getData('isDead')) {
          _this2.player.setScore(enemy.getData('score'));
          enemy.explode(true);
          playerLaser.destroy();
        }
      });
      this.physics.add.collider(this.player, this.enemyLasers, function (player, laser) {
        if (!player.getData('isDead') && !laser.getData('isDead')) {
          if (player.updateHealth()) {
            player.explode(false);
            laser.destroy();
            player.onDestroy();
          } else {
            laser.destroy();
            _this2.updateHPBar(_this2.player);
          }
        }
      });

      this.physics.add.collider(this.player, this.enemies, function (player, enemy) {
        if (!player.getData('isDead') && !enemy.getData('isDead')) {
          if (player.updateHealth()) {
            player.explode(false);

            if (enemy.onDestroy !== undefined) {
              enemy.onDestroy();
            }
            player.setScore(enemy.getData('score'));
            enemy.destroy();

            player.onDestroy();
          } else {
            if (enemy.onDestroy !== undefined) {
              player.setScore(enemy.getData('score'));
              enemy.onDestroy();
            }
            enemy.destroy();
            _this2.updateHPBar(_this2.player);
          }
        }
      });
    }
  }, {
    key: 'getEnemiesByType',
    value: function getEnemiesByType(type) {
      var arr = [];
      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        var enemy = this.enemies.getChildren()[i];
        if (enemy.getData("type") == type) {
          arr.push(enemy);
        }
      }
      return arr;
    }
  }, {
    key: 'update',
    value: function update() {
      this.player.update();
      this.sceneScore.text = 'Score: ' + this.player.getData('score');

      if (!this.player.getData("isDead")) {
        this.player.update();
        if (this.keyW.isDown) {
          this.player.moveUp();
        } else if (this.keyS.isDown) {
          this.player.moveDown();
        }
        if (this.keyA.isDown) {
          this.player.moveLeft();
        } else if (this.keyD.isDown) {
          this.player.moveRight();
        }

        if (this.keySpace.isDown) {
          this.player.setData("isShooting", true);
        } else {
          this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
          this.player.setData("isShooting", false);
        }
      }

      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        var enemy = this.enemies.getChildren()[i];

        enemy.update();
        if (enemy.x < -enemy.displayWidth || enemy.x > this.game.config.width + enemy.displayWidth || enemy.y < -enemy.displayHeight * 4 || enemy.y > this.game.config.height + enemy.displayHeight) {

          if (enemy) {
            if (enemy.onDestroy !== undefined) {
              enemy.onDestroy();
            }

            enemy.destroy();
          }
        }
      }
      for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
        var laser = this.enemyLasers.getChildren()[i];
        laser.update();

        if (laser.x < -laser.displayWidth || laser.x > this.game.config.width + laser.displayWidth || laser.y < -laser.displayHeight * 4 || laser.y > this.game.config.height + laser.displayHeight) {
          if (laser) {
            laser.destroy();
          }
        }
      }

      for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
        var laser = this.playerLasers.getChildren()[i];
        laser.update();

        if (laser.x < -laser.displayWidth || laser.x > this.game.config.width + laser.displayWidth || laser.y < -laser.displayHeight * 4 || laser.y > this.game.config.height + laser.displayHeight) {
          if (laser) {
            laser.destroy();
          }
        }
      }
    }
  }, {
    key: 'updateHPBar',
    value: function updateHPBar(player) {
      this.sceneHPBar = this.add.image(this.game.config.width * 0.3, this.game.config.height * 0.05, this.hpBar[player.getData('health')]);
    }
  }]);

  return SceneMain;
}(Phaser.Scene);

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entities = __webpack_require__(43);

var _PlayerLaser = __webpack_require__(289);

var _LocalStr = __webpack_require__(106);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Entity) {
  _inherits(Player, _Entity);

  function Player(scene, x, y, key) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, scene, x, y, key, "Player"));

    _this.setData("speed", 200);
    _this.setData("isShooting", false);
    _this.setData("timerShootDelay", 10);
    _this.setData("timerShootTick", _this.getData("timerShootDelay") - 1);
    _this.setData('health', 3);
    _this.setData('score', 0);
    return _this;
  }

  _createClass(Player, [{
    key: 'moveUp',
    value: function moveUp() {
      this.body.velocity.y = -this.getData("speed");
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      this.body.velocity.y = this.getData("speed");
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      this.body.velocity.x = -this.getData("speed");
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      this.body.velocity.x = this.getData("speed");
    }
  }, {
    key: 'onDestroy',
    value: function onDestroy() {
      this.scene.time.addEvent({
        delay: 1000,
        callback: function callback() {
          this.scene.scene.start("SceneGameOver");
        },
        callbackScope: this,
        loop: false
      });
    }
  }, {
    key: 'updateHealth',
    value: function updateHealth() {
      if (this.getData('health') > 0) {
        this.setData('health', this.getData('health') - 1);
        this.scene.cameras.main.shake(250, 0.02);
        return false;
      }

      return true;
    }
  }, {
    key: 'setScore',
    value: function setScore(value) {
      if (!this.getData('isDead')) {
        this.setData('score', this.getData('score') + value);
        (0, _LocalStr.storeScores)(this.getData('score'));
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.body.setVelocity(0, 0);
      this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
      this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
      if (this.getData("isShooting")) {
        if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
          this.setData("timerShootTick", this.getData("timerShootTick") + 1);
        } else {
          var laser = new _PlayerLaser.PlayerLaser(this.scene, this.x, this.y);
          this.scene.playerLasers.add(laser);

          this.scene.sfx.laser.play();
          this.setData("timerShootTick", 0);
        }
      }
    }
  }]);

  return Player;
}(_Entities.Entity);

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerLaser = undefined;

var _Entities = __webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerLaser = exports.PlayerLaser = function (_Entity) {
  _inherits(PlayerLaser, _Entity);

  function PlayerLaser(scene, x, y) {
    _classCallCheck(this, PlayerLaser);

    var _this = _possibleConstructorReturn(this, (PlayerLaser.__proto__ || Object.getPrototypeOf(PlayerLaser)).call(this, scene, x, y, "torpedo"));

    _this.body.velocity.y = -200;
    return _this;
  }

  return PlayerLaser;
}(_Entities.Entity);

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChaserShip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entities = __webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChaserShip = exports.ChaserShip = function (_Entity) {
  _inherits(ChaserShip, _Entity);

  function ChaserShip(scene, x, y) {
    _classCallCheck(this, ChaserShip);

    var _this = _possibleConstructorReturn(this, (ChaserShip.__proto__ || Object.getPrototypeOf(ChaserShip)).call(this, scene, x, y, "ufo", "ChaserShip"));

    _this.body.velocity.y = Phaser.Math.Between(50, 100);
    _this.states = {
      MOVE_DOWN: "MOVE_DOWN",
      CHASE: "CHASE"
    };
    _this.state = _this.states.MOVE_DOWN;
    _this.setData('score', 300);
    return _this;
  }

  _createClass(ChaserShip, [{
    key: "update",
    value: function update() {
      if (!this.getData("isDead") && this.scene.player) {
        if (Phaser.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y) < 320) {

          this.state = this.states.CHASE;
        }

        if (this.state == this.states.CHASE) {
          var dx = this.scene.player.x - this.x;
          var dy = this.scene.player.y - this.y;

          var angle = Math.atan2(dy, dx);

          var speed = 100;
          this.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
        }
      }
    }
  }]);

  return ChaserShip;
}(_Entities.Entity);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GunShip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entities = __webpack_require__(43);

var _EnemyLaser = __webpack_require__(292);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GunShip = exports.GunShip = function (_Entity) {
  _inherits(GunShip, _Entity);

  function GunShip(scene, x, y) {
    _classCallCheck(this, GunShip);

    var _this = _possibleConstructorReturn(this, (GunShip.__proto__ || Object.getPrototypeOf(GunShip)).call(this, scene, x, y, "ufodark", "GunShip"));

    _this.play("ufodark");

    _this.body.velocity.y = Phaser.Math.Between(50, 100);
    _this.shootTimer = _this.scene.time.addEvent({
      delay: 1000,
      callback: function callback() {
        var laser = new _EnemyLaser.EnemyLaser(this.scene, this.x, this.y);
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: _this,
      loop: true
    });
    _this.setData('score', 300);
    return _this;
  }

  _createClass(GunShip, [{
    key: 'onDestroy',
    value: function onDestroy() {
      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }
    }
  }]);

  return GunShip;
}(_Entities.Entity);

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnemyLaser = undefined;

var _Entities = __webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyLaser = exports.EnemyLaser = function (_Entity) {
  _inherits(EnemyLaser, _Entity);

  function EnemyLaser(scene, x, y) {
    _classCallCheck(this, EnemyLaser);

    var _this = _possibleConstructorReturn(this, (EnemyLaser.__proto__ || Object.getPrototypeOf(EnemyLaser)).call(this, scene, x, y, "projectile1"));

    _this.body.velocity.y = 200;
    return _this;
  }

  return EnemyLaser;
}(_Entities.Entity);

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarrierShip = undefined;

var _Entities = __webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarrierShip = exports.CarrierShip = function (_Entity) {
  _inherits(CarrierShip, _Entity);

  function CarrierShip(scene, x, y) {
    _classCallCheck(this, CarrierShip);

    var _this = _possibleConstructorReturn(this, (CarrierShip.__proto__ || Object.getPrototypeOf(CarrierShip)).call(this, scene, x, y, "starshipdark", "CarrierShip"));

    _this.body.velocity.y = Phaser.Math.Between(50, 100);
    _this.angle -= 180;
    _this.play("starshipdark");
    _this.setData('score', 100);
    return _this;
  }

  return CarrierShip;
}(_Entities.Entity);

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneMainMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollingBackground = __webpack_require__(69);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneMainMenu = exports.SceneMainMenu = function (_Phaser$Scene) {
  _inherits(SceneMainMenu, _Phaser$Scene);

  function SceneMainMenu() {
    _classCallCheck(this, SceneMainMenu);

    return _possibleConstructorReturn(this, (SceneMainMenu.__proto__ || Object.getPrototypeOf(SceneMainMenu)).call(this, { key: "SceneMainMenu" }));
  }

  _createClass(SceneMainMenu, [{
    key: "preload",
    value: function preload() {
      this.load.image("sprBg0", "assets/sprBg0.png");
      this.load.image("sprBg1", "assets/sprBg1.png");
      this.load.image("sprBtnPlay", "assets/sprBtnPlay.png");
      this.load.image("sprBtnPlayHover", "assets/sprBtnPlayHover.png");
      this.load.image("sprBtnPlayDown", "assets/sprBtnPlayDown.png");
      this.load.image('sprBtnRecord', 'assets/sprBtnRecord.png');
      this.load.image('sprBtnRecordHover', 'assets/sprBtnRecordHover.png');
      this.load.image('sprBtnRecordDown', 'assets/sprBtnRecordDown.png');
      this.load.audio("sndBtnOver", "assets/sndBtnOver.wav");
      this.load.audio("sndBtnDown", "assets/sndBtnDown.wav");
    }
  }, {
    key: "create",
    value: function create() {
      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };

      this.btnPlay = this.add.sprite(this.game.config.width * 0.25, this.game.config.height * 0.5, "sprBtnPlay");

      this.btnPlay.setInteractive();

      this.btnPlay.on("pointerover", function () {
        this.btnPlay.setTexture("sprBtnPlayHover");
        this.sfx.btnOver.play();
      }, this);

      this.btnPlay.on("pointerout", function () {
        this.setTexture("sprBtnPlay");
      });

      this.btnPlay.on("pointerdown", function () {
        this.btnPlay.setTexture("sprBtnPlayDown");
        this.sfx.btnDown.play();
      }, this);

      this.btnPlay.on("pointerup", function () {
        this.btnPlay.setTexture("sprBtnPlay");
        this.scene.start("SceneMain");
      }, this);

      this.btnRecord = this.add.sprite(this.game.config.width * 0.75, this.game.config.height * 0.5, "sprBtnRecord");

      this.btnRecord.setInteractive();

      this.btnRecord.on("pointerover", function () {
        this.btnRecord.setTexture("sprBtnRecordHover");
        this.sfx.btnOver.play();
      }, this);

      this.btnRecord.on("pointerout", function () {
        this.setTexture("sprBtnRecord");
      });

      this.btnRecord.on("pointerdown", function () {
        this.btnRecord.setTexture("sprBtnRecordDown");
        this.sfx.btnDown.play();
      }, this);

      this.btnRecord.on("pointerup", function () {
        this.btnRecord.setTexture("sprBtnRecord");
        this.scene.start("LeaderBoard");
      }, this);

      this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.title.setOrigin(0.5);

      this.backgrounds = [];
      for (var i = 0; i < 5; i++) {
        var keys = ["sprBg0", "sprBg1"];
        var key = keys[Phaser.Math.Between(0, keys.length - 1)];
        var bg = new _scrollingBackground.ScrollingBackground(this, key, i * 10);
        this.backgrounds.push(bg);
      }
    }
  }, {
    key: "update",
    value: function update() {
      for (var i = 0; i < this.backgrounds.length; i++) {
        this.backgrounds[i].update();
      }
    }
  }]);

  return SceneMainMenu;
}(Phaser.Scene);

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneGameOver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollingBackground = __webpack_require__(69);

var _LocalStr = __webpack_require__(106);

var _ScoreBoard = __webpack_require__(107);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneGameOver = exports.SceneGameOver = function (_Phaser$Scene) {
  _inherits(SceneGameOver, _Phaser$Scene);

  function SceneGameOver() {
    _classCallCheck(this, SceneGameOver);

    return _possibleConstructorReturn(this, (SceneGameOver.__proto__ || Object.getPrototypeOf(SceneGameOver)).call(this, { key: "SceneGameOver" }));
  }

  _createClass(SceneGameOver, [{
    key: 'preload',
    value: function preload() {
      this.load.image("sprBtnRestart", "assets/sprBtnRestart.png");
      this.load.image("sprBtnRestartHover", "assets/sprBtnRestartHover.png");
      this.load.image("sprBtnRestartDown", "assets/sprBtnRestartDown.png");
      this.load.image("sprBg0", "assets/sprBg0.png");
      this.load.image("sprBg1", "assets/sprBg1.png");
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.title.setOrigin(0.5);

      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };

      this.btnRestart = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.5, "sprBtnRestart");

      this.btnRestart.setInteractive();

      this.btnRestart.on("pointerover", function () {
        this.btnRestart.setTexture("sprBtnRestartHover");
        this.sfx.btnOver.play();
      }, this);

      this.btnRestart.on("pointerout", function () {
        this.setTexture("sprBtnRestart");
      });

      this.btnRestart.on("pointerdown", function () {
        this.btnRestart.setTexture("sprBtnRestartDown");
        this.sfx.btnDown.play();
      }, this);

      this.btnRestart.on("pointerup", function () {
        this.btnRestart.setTexture("sprBtnRestart");
        this.scene.start("SceneMain");
      }, this);

      this.backgrounds = [];
      for (var i = 0; i < 5; i++) {
        var keys = ["sprBg0", "sprBg1"];
        var key = keys[Phaser.Math.Between(0, keys.length - 1)];
        var bg = new _scrollingBackground.ScrollingBackground(this, key, i * 10);
        this.backgrounds.push(bg);
      }

      this.scores = (0, _LocalStr.getLocalScores)();
      this.gameOverSceneScore = this.add.text(this.game.config.width * 0.6, this.game.config.height * 0.72, 'Score: ' + this.scores[0], {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        lineHeight: 1.3,
        align: 'center'
      });

      this.userName = '';

      var div = document.createElement('div');
      div.innerHTML = '\n      <input type="text" id="nameField" placeholder="Enter your name" style="font-size: 1.5rem width: ' + this.game.config.width * 0.25 + '"><br>\n      <input type="button" name="submitButton" value="Submit Score" style="font-size: 1.5rem">\n    ';

      var element = this.add.dom(280, 480, div);
      element.addListener('click');

      element.on('click', function (event) {
        if (event.target.name === 'submitButton') {
          var inputText = document.getElementById('nameField');
          if (inputText.value !== '') {
            element.removeListener('click');
            element.setVisible(false);
            _this2.userName = inputText.value;
            _this2.submit = (0, _ScoreBoard.submitHighScore)(_this2.userName, _this2.scores[0]);
            _this2.submit.then(function () {
              _this2.scene.start('LeaderBoard');
            });
          }
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      for (var i = 0; i < this.backgrounds.length; i++) {
        this.backgrounds[i].update();
      }
    }
  }]);

  return SceneGameOver;
}(Phaser.Scene);

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(297);

var _global = _interopRequireDefault(__webpack_require__(317));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(298);

__webpack_require__(304);

__webpack_require__(305);

__webpack_require__(306);

__webpack_require__(307);

__webpack_require__(308);

__webpack_require__(309);

__webpack_require__(310);

__webpack_require__(311);

__webpack_require__(312);

__webpack_require__(313);

__webpack_require__(314);

__webpack_require__(315);

__webpack_require__(316);

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
__webpack_require__(128);
__webpack_require__(130);
__webpack_require__(131);
__webpack_require__(132);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(139);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(59);
__webpack_require__(225);
__webpack_require__(91);
__webpack_require__(226);
__webpack_require__(93);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(95);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
module.exports = __webpack_require__(8);


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(263);
module.exports = __webpack_require__(8).Array.includes;


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(264);
module.exports = __webpack_require__(8).Array.flatMap;


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);
module.exports = __webpack_require__(8).String.padStart;


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(268);
module.exports = __webpack_require__(8).String.padEnd;


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(269);
module.exports = __webpack_require__(8).String.trimLeft;


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(270);
module.exports = __webpack_require__(8).String.trimRight;


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(271);
module.exports = __webpack_require__(71).f('asyncIterator');


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(272);
module.exports = __webpack_require__(8).Object.getOwnPropertyDescriptors;


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(273);
module.exports = __webpack_require__(8).Object.values;


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(275);
module.exports = __webpack_require__(8).Object.entries;


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(95);
__webpack_require__(276);
module.exports = __webpack_require__(8).Promise['finally'];


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
module.exports = __webpack_require__(8);


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(318);
module.exports = __webpack_require__(280).global;


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(319);

$export($export.G, { global: __webpack_require__(103) });


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(103);
var core = __webpack_require__(280);
var ctx = __webpack_require__(320);
var hide = __webpack_require__(322);
var has = __webpack_require__(329);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(321);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(323);
var createDesc = __webpack_require__(328);
module.exports = __webpack_require__(105) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(324);
var IE8_DOM_DEFINE = __webpack_require__(325);
var toPrimitive = __webpack_require__(327);
var dP = Object.defineProperty;

exports.f = __webpack_require__(105) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(104);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(105) && !__webpack_require__(281)(function () {
  return Object.defineProperty(__webpack_require__(326)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(104);
var document = __webpack_require__(103).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(104);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeaderBoard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(68);

var _phaser2 = _interopRequireDefault(_phaser);

var _scrollingBackground = __webpack_require__(69);

var _ScoreBoard = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderBoard = exports.LeaderBoard = function (_Phaser$Scene) {
  _inherits(LeaderBoard, _Phaser$Scene);

  function LeaderBoard() {
    _classCallCheck(this, LeaderBoard);

    return _possibleConstructorReturn(this, (LeaderBoard.__proto__ || Object.getPrototypeOf(LeaderBoard)).call(this, { key: 'LeaderBoard' }));
  }

  _createClass(LeaderBoard, [{
    key: 'preload',
    value: function preload() {
      this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
      });
      this.load.image("sprBtnRestart", "assets/sprBtnRestart.png");
      this.load.image("sprBtnRestartHover", "assets/sprBtnRestartHover.png");
      this.load.image("sprBtnRestartDown", "assets/sprBtnRestartDown.png");
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.sfx = {
        btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
        btnDown: this.sound.add('sndBtnDown', { volume: 0.1 })
      };

      this.btnRestart = this.add.sprite(this.game.config.width * 0.3, this.game.config.height * 0.9, "sprBtnRestart");

      this.btnRestart.setInteractive();

      this.btnRestart.on("pointerover", function () {
        this.btnRestart.setTexture("sprBtnRestartHover");
        this.sfx.btnOver.play();
      }, this);

      this.btnRestart.on("pointerout", function () {
        this.setTexture("sprBtnRestart");
      });

      this.btnRestart.on("pointerdown", function () {
        this.btnRestart.setTexture("sprBtnRestartDown");
        this.sfx.btnDown.play();
      }, this);

      this.btnRestart.on("pointerup", function () {
        this.btnRestart.setTexture("sprBtnRestart");
        this.scene.start("SceneMain");
      }, this);

      this.keySpace = this.input.keyboard.addKey(_phaser2.default.Input.Keyboard.KeyCodes.SPACE);

      this.backgrounds = [];
      for (var i = 0; i < 5; i += 1) {
        var keys = ['sprBg0', 'sprBg1'];
        var key = keys[_phaser2.default.Math.Between(0, keys.length - 1)];
        var bg = new _scrollingBackground.ScrollingBackground(this, key, i * 10);
        this.backgrounds.push(bg);
      }

      this.getScores = (0, _ScoreBoard.getScoreBoard)();

      this.getScores.then(function (scores) {
        _this2.config = {
          color: '#d0c600',
          fontFamily: 'sans-serif',
          fontSize: '3vw',
          lineHeight: 1.3,
          align: 'center'
        };

        var scrollMode = 0;
        _this2.rexUI.add.gridTable({
          x: _this2.game.config.width * 0.46,
          y: 320,
          width: 400,
          height: 420,
          scrollMode: scrollMode,
          table: {
            cellWidth: scrollMode === 0 ? undefined : 60,
            cellHeight: scrollMode === 0 ? 60 : undefined,
            columns: 3,
            mask: {
              padding: 2
            },
            reuseCellContainer: true
          },
          slider: {
            track: _this2.rexUI.add.roundRectangle(0, 0, 20, 10, 10, 0xfcf8a2),
            thumb: _this2.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0x847d00)
          },
          createCellContainerCallback: function createCellContainerCallback(cell, cellContainer) {
            var scene = cell.scene;
            var width = cell.width;
            var height = cell.height;
            var item = cell.item;

            if (cellContainer === null) {
              cellContainer = scene.rexUI.add.label({
                width: width,
                height: height,
                align: 'center',
                orientation: scrollMode,
                text: scene.add.text(0, 0, '', {
                  color: '#d0c600',
                  fontFamily: 'sans-serif',
                  fontSize: '2vw',
                  lineHeight: 1.3
                })
              });
            }

            cellContainer.setMinSize(width, height);
            cellContainer.getElement('text').setText(item);
            return cellContainer;
          },

          items: _this2.getItems(20, scores)
        }).layout();
      });

      this.getItems = function (count, score) {
        var data = ['Rank', 'User', 'Score'];

        for (var _i = 0; _i < count; _i += 1) {
          if (score[_i]) {
            data.push(_i + 1);
            data.push(score[_i][1]);
            data.push(score[_i][0]);
          }
        }
        return data;
      };
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.keySpace.isDown) {
        this.song.stop();
        this.scene.start('SceneMain');
      }
    }
  }, {
    key: 'createButton',
    value: function createButton(btn, spr, sprHover, sprDown) {
      var _this3 = this;

      btn.on('pointerover', function () {
        btn.setTexture(sprHover);
        _this3.sfx.btnOver.play();
      }, this);

      btn.on('pointerout', function () {
        btn.setTexture(spr);
      });

      btn.on('pointerdown', function () {
        btn.setTexture(sprDown);
        _this3.sfx.btnDown.play();
      }, this);
    }
  }]);

  return LeaderBoard;
}(_phaser2.default.Scene);

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entity = exports.Entity = function (_Phaser$GameObjects$S) {
  _inherits(Entity, _Phaser$GameObjects$S);

  function Entity(scene, x, y, key, type) {
    _classCallCheck(this, Entity);

    var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, scene, x, y, key));

    _this.scene = scene;
    _this.scene.add.existing(_this);
    _this.scene.physics.world.enableBody(_this, 0);
    _this.setData("type", type);
    _this.setData("isDead", false);
    return _this;
  }

  _createClass(Entity, [{
    key: "explode",
    value: function explode(canDestroy) {
      if (!this.getData("isDead")) {
        this.setTexture("exp2_0"); // this refers to the same animation key we used when we added this.anims.create previously
        this.play("exp2_0");
        this.scene.sfx.explosions.play();
        if (this.shootTimer !== undefined) {
          if (this.shootTimer) {
            this.shootTimer.remove(false);
          }
        }
        this.setAngle(0);
        this.body.setVelocity(0, 0);
        this.on('animationcomplete', function () {
          if (canDestroy) {
            this.destroy();
          } else {
            this.setVisible(false);
          }
        }, this);
        this.setData("isDead", true);
      }
    }
  }]);

  return Entity;
}(Phaser.GameObjects.Sprite);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollingBackground = exports.ScrollingBackground = function () {
  function ScrollingBackground(scene, key, velocityY) {
    _classCallCheck(this, ScrollingBackground);

    this.scene = scene;
    this.key = key;
    this.velocityY = velocityY;

    this.layers = this.scene.add.group();

    this.createLayers();
  }

  _createClass(ScrollingBackground, [{
    key: "createLayers",
    value: function createLayers() {
      for (var i = 0; i < 2; i += 1) {
        var layer = this.scene.add.sprite(0, 0, this.key);
        layer.y = layer.displayHeight * i;
        var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
        var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
        layer.setScale(flipX * 2, flipY * 2);
        layer.setDepth(-5 - (i - 1));
        this.scene.physics.world.enableBody(layer, 0);
        layer.body.velocity.y = this.velocityY;

        this.layers.add(layer);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.layers.getChildren()[0].y > 0) {
        for (var i = 0; i < this.layers.getChildren().length; i += 1) {
          var layer = this.layers.getChildren()[i];
          layer.y = -layer.displayHeight + layer.displayHeight * i;
        }
      }
    }
  }]);

  return ScrollingBackground;
}();

/***/ })

},[286]);