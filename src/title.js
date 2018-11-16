'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem Sobrenome'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },

//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
//     )
//   }
// })

export default Title
