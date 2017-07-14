import React , { Component } from 'react'

const Hello = ({actions, text}) => (
    <h1 onClick = {actions.ChangeText} >{text}</h1>
)

export default Hello