describe('Testing home page', function() {
 it('name should be home', function() {
 browser.get('http://127.0.0.1:62424/index.html#/home');
   var text = element(by.id('home'));
   expect(text.getText()).toEqual("home");
  });
});