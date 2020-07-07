import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = {
  onIncrement: () => ({type: 'INCREMENT'}),
};

const Count = ({count, onIncrement}) => {
  console.log('rendering count', count);
  return (
    <div>
      <button style={{marginRight: '12px'}} onClick={() => {
        onIncrement();
        onIncrement();
        onIncrement();
      }}>increment</button>
      Count: {count}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);