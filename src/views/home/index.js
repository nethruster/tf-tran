import { h } from 'preact'

import Icon from 'icon'

import style from './styles.scss'

export default function Home () {
  return (
    <div class={style.homeWrapper}>
      <div class={`flex flex-main-center ${style.lineListingContainer}`} data-line="1">
        <ul>
          <li class={`flex flex-cross-center flex-sb  ${style.listingItem}`}>
            <p class={`truncate ${style.stopTitle}`}>Intercambiador</p>
            <div class={`flex flex-full-center ${style.listingItemIcon}`}>
              <Icon name="next" color="var(--color-secondary)" size="28" />
            </div>
          </li>
          <li class={`flex flex-cross-center flex-sb  ${style.listingItem}`}>
            <p class={`truncate ${style.stopTitle}`}>Fundación</p>
            <div class={`flex flex-full-center ${style.listingItemIcon}`}>
              <Icon name="next" color="var(--color-secondary)" size="28" />
            </div>
          </li>
          <li class={`flex flex-cross-center flex-sb  ${style.listingItem}`}>
            <p class={`truncate ${style.stopTitle}`}>Teatro Guimerá</p>
            <div class={`flex flex-full-center ${style.listingItemIcon}`}>
              <Icon name="next" color="var(--color-secondary)" size="28" />
            </div>
          </li>
          <li class={`flex flex-cross-center flex-sb  ${style.listingItem}`}>
            <p class={`truncate ${style.stopTitle}`}>Weyler</p>
            <div class={`flex flex-full-center ${style.listingItemIcon}`}>
              <Icon name="next" color="var(--color-secondary)" size="28" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
