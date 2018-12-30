import {h} from 'preact'

import Header from 'header'

import style from './styles.scss'
import ContentRouter from 'content-router';

export default function ContentShell() {
  return (
    <div class={`flex flex-dc ${style.wrapper}`}>
      <div class={style.backgroundHeader} />
      <Header />
      <ContentRouter />      
    </div>
  )
}
