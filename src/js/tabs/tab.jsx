var React = require('react');
var Classable = require('../mixins/classable');
var TabTemplate = require('./tabTemplate');


var Tab = React.createClass({

  mixins: [Classable],

  propTypes: {
    handleClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },


  handleClick: function(){
    if (!this.props.disabled) this.props.handleClick(this.props.tabIndex, this);
  },

  render: function(){
    var styles = {
      width: this.props.width
    };

    var classes = this.getClasses('mui-tab-item', {
      'mui-tab-is-active': this.props.selected,
      'mui-tab-is-disabled' : this.props.disabled
    });

    return (
    <div className={classes} style={styles} onClick={this.handleClick} routeName={this.props.route}>
      {this.props.label}
    </div>
    )
  }

});

module.exports = Tab;
