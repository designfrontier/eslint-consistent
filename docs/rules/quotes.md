# wuotes (quotes)

Please describe the origin of the rule here.


## Rule Details

This rule aims to ensure that quotes are consitent on a file per file basis and not a project basis.
This may seem like a crazy idea... but for large legacy projects or projects changing quote style
being able to check for cinsistency within a file is a huge win.

It also ensures consistency within a file's JSX blocks if there are any and allows JSX to use a 
different quote type then the file itself.

The following patterns are considered warnings:

```js

const test = "test", real = 'real';

const test = 'test', real = "real";

render() {
  return (
    <div className='program'>
      <div className='program__expander' />
      <Header
        isMobile={this.state.media.mobile}
        program={this.props.program}
      />
      <div className="program__item-list">
        <ProgramList
          noItemsText={I18n.t('No program items found.')}
          onClick={Function.prototype}
          showDescription={true}
        />
      </div>
    </div>
  );
}
```

The following patterns are not warnings:

```js

const test = "test", real = "real";

const test = 'test', real = 'real';

render() {
  return (
    <div className="program">
      <div className="program__expander" />
      <Header
        isMobile={this.state.media.mobile}
        program={this.props.program}
      />
      <div className="program__item-list">
        <ProgramList
          noItemsText={I18n.t('No program items found.')}
          onClick={Function.prototype}
          showDescription={true}
        />
      </div>
    </div>
  );
}

```
