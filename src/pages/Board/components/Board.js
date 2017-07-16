/**
 * Created by leijin on 2017/7/16.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Board = ({images}) => (
      <ul>
          {images.map((post,i)=>
              <li key = {i}>{post.title}</li>
          )}
      </ul>
)

Board.propTypes = {
    images : PropTypes.array.isRequired
}

export default Board

