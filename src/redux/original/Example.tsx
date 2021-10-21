/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LanguageType } from './languageReducer'
import { store } from './store'

class Example extends React.Component<RouteComponentProps, LanguageType> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      language: (store.getState() as LanguageType).language,
      languageList: (store.getState() as LanguageType).languageList
    }
  };

  render() {
    const { language, languageList } = this.state;
    return (
      <div>
        <p>{language}</p>

        {languageList.map((item, index) => {
          return (
            <div>{item.name}</div>
          )
        })}
      </div>
    )
  }
}

export default withRouter(Example)