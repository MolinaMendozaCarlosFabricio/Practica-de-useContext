import React from "react";
import Panel from "./Panel";
import Button from "./Button";

export default function Form() {
    return (
      <Panel title="Welcome">
        <Button>Registrarse</Button>
        <Button>Iniciar sesión</Button>
      </Panel>
    );
}
  