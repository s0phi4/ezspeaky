import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('speech-emission', 'Integration | Component | speech emission', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{speech-emission}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#speech-emission}}
      template block text
    {{/speech-emission}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
