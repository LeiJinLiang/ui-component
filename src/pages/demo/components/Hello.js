import React, { Component } from 'react'

const Hello = ({actions, text}) => (
    <h1 onClick = {actions.changeText}>{text}</h1>
)

export default Hello