'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.PropTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.object.isRequired
}

export default AppContent
