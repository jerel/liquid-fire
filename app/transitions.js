export default function(){

  // BEGIN-SNIPPET transition-demo
  this.transition(
    this.fromRoute('helpers-documentation.liquid-outlet.index'),
    this.toRoute('helpers-documentation.liquid-outlet.other'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  // END-SNIPPET

  // BEGIN-SNIPPET bind-demo-transition
  this.transition(
    this.childOf('#liquid-bind-demo'),
    this.use('toUp')
  );
  // END-SNIPPET

  // BEGIN-SNIPPET liquid-box-demo-transition
  this.transition(
    // hasClass('vehicles') is true even during the first render, so
    // we also require fromNonEmptyModel to prevent an animation when
    // the page first loads.
    this.fromNonEmptyModel(),
    this.hasClass('vehicles'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toModel(true),
    this.use('crossFade', {duration: 1000}),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toLeft', {duration: 1000})
  );
  // END-SNIPPET

  this.transition(
    this.childOf("#interrupted-fade-demo"),
    this.use('fade', { duration: 1500 })
  );

  this.transition(
    this.childOf("#inline-serial-scenario"),
    this.use('fade', {duration: 1000})
  );

  this.transition(
    this.childOf("#inline-scenario"),
    this.toModel(true),
    this.use('toLeft', {duration: 1000}),
    this.reverse('toRight', {duration: 1000})
  );
}
