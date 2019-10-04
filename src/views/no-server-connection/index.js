import { h } from "preact";

import Icon from "icon";

import style from "./styles.scss";

export default function NoServerConnection() {
  return (
    <div class="flex flex-dc flex-full-center">
      <div class={`flex flex-full-center ${style.iconContainer}`}>
        <Icon name="error" size="94" color="var(--color-bg)" />
      </div>
      <p class={`text-center ${style.description}`}>
        {this.props.metroTenerifeFault ? "No se pudo conectar con MetroTenerife" : "No se pudo conectar con el servidor."}
      </p>
      <p class={`text-center ${style.subdescription}`}>
        Por favor, intentalo de nuevo dentro de unos minutos.
      </p>
    </div>
  );
}
