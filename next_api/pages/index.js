
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/geekyants/nativebase')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <div>
        <p>NativeBase has {this.props.stars} ⭐️</p>
        <Link prefetch href='/expo'><a>How about expo?</a></Link>
      </div>
    )
  }
}
