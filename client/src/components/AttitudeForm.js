import React from 'react'

function AttitudeForm() {
  const [state, setState] = React.useState({

  })
  return (
    <form>

    </form>
  )
}

const mapStateToProps = state => {
  return {
    props: state.attitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAttitude: (props) => dispatch(updateAttitude(props))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttitudeForm)
