import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('articulation-therapy', 'Integration | Component | articulation therapy', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{articulation-therapy}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#articulation-therapy}}
      template block text
    {{/articulation-therapy}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
