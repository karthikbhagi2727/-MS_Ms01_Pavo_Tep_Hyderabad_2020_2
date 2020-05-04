/**
 *
 * @namespace faker.laptop
 */
var laptop = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * laptop
   *
   * @method faker.laptop.laptop
   */
  self.laptop = function () {
    return fake('{{laptop.manufacturer}} {{laptop.model}} {{laptop.type}}');
  };

  self.laptop.schema = {
    "description": "Generates a random laptop.",
    "sampleResults": ["Lenovo Yoga", "Dell Envy 13", "Lenovo ThinkBook"]
  };

  /**
   * manufacturer
   *
   * @method faker.laptop.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.laptop.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Lenovo", "Apple", "Dell"]
  };


  /**
   * model
   *
   * @method faker.laptop.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.laptop.model);
  };

  self.model.schema = {
    "description": "Generates a laptop model.",
    "sampleResults": ["Yoga", "Envy 13", "ThinkBook"]
  };

  /**
   * type
   *
   * @method faker.laptop.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.laptop.type);
  };

  self.type.schema = {
    "description": "Generates a laptop type.",
    "sampleResults": ["Tablet", "Chrome Book", "Gaming",]
  };


  /**
   * color
   *
   * @method faker.laptop.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };
};

module["exports"] = laptop;


