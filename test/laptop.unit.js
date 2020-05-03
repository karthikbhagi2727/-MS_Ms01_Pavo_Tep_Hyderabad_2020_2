if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("laptop.js", function () {
  describe("laptop()", function () {
      it("returns a random laptop", function () {
          sinon.stub(faker.laptop, 'laptop').returns('Lenovo Yoga');
          var laptop = faker.laptop.laptop();

          assert.equal(laptop, 'Lenovo Yoga');
          faker.laptop.laptop.restore();
      });
  });

  describe("manufacturer()", function () {
      it("returns random manufacturer", function () {
          sinon.stub(faker.laptop, 'manufacturer').returns('Apple');
          var manufacturer = faker.laptop.manufacturer();

          assert.equal(manufacturer, 'Apple');
          faker.laptop.manufacturer.restore();
      });
  });

  describe("type()", function () {
    it("returns random laptop type", function () {
      sinon.stub(faker.laptop, 'type').returns('Tablet');
          var type = faker.laptop.type();

          assert.equal(type, 'Tablet');
          faker.laptop.type.restore();
      });
  });

  describe("model()", function () {
      it("returns a model type", function () {
          sinon.stub(faker.laptop, 'model').returns('Yoga');
          var model = faker.laptop.model();

          assert.equal(model, 'Yoga');
          faker.laptop.model.restore();
      });
  });

  
  describe("color()", function () {
      it("returns a random color", function () {
          sinon.stub(faker.laptop, 'color').returns('black');
          var color = faker.laptop.color();

          assert.equal(color, 'black');
          faker.laptop.color.restore();
      });
  });
});
