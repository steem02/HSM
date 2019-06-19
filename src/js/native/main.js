"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.container');
  var og = 'dfsdf';

  var GoodsItem =
  /*#__PURE__*/
  function () {
    function GoodsItem() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'нет данных';
      var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'в личку отвечу';

      _classCallCheck(this, GoodsItem);

      this.title = title;
      this.price = price;
    }

    _createClass(GoodsItem, [{
      key: "render",
      value: function render() {
        return "<div class = \"goods-item\"><h3>".concat(this.title, "</h3><p>").concat(this.price, "</p><button class=\"buy-btn\" type=\"button\" onclick=\"let a = 'dfdfd'; console.log(a);\">\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button></div");
      }
    }, {
      key: "addToCart",
      value: function addToCart() {
        console.log('addToCart');
      }
    }]);

    return GoodsItem;
  }();

  var item = new GoodsItem('ЧТо это', '300 баксов');
  container.innerHTML = item.render();
});