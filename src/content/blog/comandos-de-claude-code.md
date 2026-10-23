---
title: "Comandos de Claude Code: Guia Completa 2026"
description: "Descubre todos los comandos de Claude Code, el asistente de codificacion con IA de Anthropic. Atajos, slash commands, configuracion avanzada y mejores practicas para programadores."
pubDate: 2026-09-04
heroImage: "/assets/blog/covers/comandos-de-claude-code.svg"
---

## TL;DR — Key Takeaways

- **Claude Code** es el asistente de codificacion de Anthropic que funciona directamente en tu terminal.
- Los **slash commands** (`/help`, `/init`, `/compact`, `/clear`) son la base para navegar la herramienta.
- Los **atajos de teclado** (Ctrl+C, Ctrl+L, Tab) agilizan el flujo de trabajo diario.
- La **configuracion por proyecto** (`.claude/settings.json`) permite personalizar permisos y comportamiento.
- Claude Code es **gratis** para uso basico, con planes Pro y Team para uso intensivo.

> **CTA:** Si queres aprender a usar Claude Code para potenciar tus proyectos de [desarrollo web](/es/services/desarrollo-web), [contactame](/es/contact) y te ayudo a integrarlo en tu flujo de trabajo.

---

## Que es Claude Code?

Claude Code es una herramienta de codificacion con IA desarrollada por Anthropic que se ejecuta directamente en tu terminal. A diferencia de otros asistentes que funcionan como plugins de editores, Claude Code opera como un agente autonomo: puede leer y escribir archivos, ejecutar comandos, navegar repositorios y tomar decisiones de implementacion sin intervencion constante.

La clave es su enfoque **terminal-first**: no necesitas un IDE especifico, no necesitas plugins. Solo necesitas una terminal y tu proyecto.

---

## Comandos de Claude Code: Lista Completa

### Slash Commands (Comandos de Barra)

Los slash commands se escriben directamente en la terminal de Claude Code:

| Comando | Funcion | Uso recomendado |
|---------|---------|-----------------|
| `/help` | Muestra la ayuda con todos los comandos disponibles | Empezar aqui si sos nuevo |
| `/init` | Inicializa un archivo `.claude/settings.json` en el proyecto actual | Primera vez que usas Claude Code en un proyecto |
| `/compact` | Compacta el contexto de la conversacion para ahorrar tokens | Cuando la conversacion se pone larga |
| `/clear` | Limpia el historial de la conversacion actual | Empezar un tema nuevo |
| `/config` | Abre la configuracion de Claude Code | Cambiar modelo, API key o preferencias |
| `/cost` | Muestra el costo acumulado de la sesion actual | Controlar gasto en tokens |
| `/doctor` | Diagnostica problemas de instalacion y configuracion | Si algo no funciona como se espera |
| `/login` | Inicia sesion con tu cuenta de Anthropic | Necesario para usar el servicio |
| `/logout` | Cierra la sesion actual | Cambiar de cuenta |
| `/memory` | Muestra o edita la memoria del proyecto | Revisar que Claude recuerda de tu codigo |
| `/permissions` | Gestiona los permisos de ejecucion de Claude | Controlar que puede y que no puede hacer |
| `/review` | Revisa cambios recientes en el codigo | Despues de un commit o PR |
| `/status` | Muestra el estado actual de la sesion | Verificar modelo, contexto y connexion |

### Atajos de Teclado

| Atajo | Funcion |
|-------|---------|
| `Ctrl+C` | Cancela la operacion actual |
| `Ctrl+L` | Limpia la pantalla de la terminal |
| `Tab` | Autocompleta comandos y nombres de archivos |
| `Shift+Tab` | Acepta la sugerencia de autocompletado |
| `Up Arrow` | Recupera el ultimo comando enviado |
| `Ctrl+R` | Busca en el historial de comandos |

### Comandos de Terminal (Ejecutables)

Claude Code tambien acepta comandos de sistema directamente:

```bash
# Instalacion global
npm install -g @anthropic-ai/claude-code

# Ejecucion en un proyecto
claude

# Ejecucion con un prompt directo
claude "explica este archivo"

# Modo no interactivo (para scripts)
claude -p "genera tests para src/auth.ts"

# Version instalada
claude --version

# Ayuda desde terminal
claude --help
```

---

## Configuracion por Proyecto

Cada proyecto puede tener su propio archivo `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Edit",
      "Bash(npm run *)",
      "Bash(git *)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)"
    ]
  },
  "model": "claude-sonnet-4-20250514",
  "contextWindow": 200000
}
```

### Permisos de Seguridad

Los permisos se organizan en tres niveles:

| Nivel | Descripcion | Ejemplo |
|-------|-------------|---------|
| `Read` | Leer archivos | Verificar contenido antes de editar |
| `Edit` | Modificar archivos | Escribir codigo, actualizar configs |
| `Bash(*)` | Ejecutar comandos de terminal | `npm install`, `git push`, `pytest` |

---

## Mejores Practicas para Usar Claude Code

### 1. Inicia con `/init` en cada proyecto

Esto crea un archivo de configuracion que le da contexto a Claude sobre tu stack, convenciones y permisos.

### 2. Usa `/compact` periodicamente

Cuando la conversacion crece mucho, Claude pierde contexto. `/compact` resume la conversacion y libera tokens.

### 3. Define permisos explicitamente

No dejes que Claude ejecute comandos arbitrarios. Define que puede hacer con `Bash(npm run *)` o `Bash(git *)` en lugar de `Bash(*)`.

### 4. Revisa los cambios antes de commitear

Siempre usa `git diff` despues de que Claude modifique archivos. La IA puede hacer cambios que parecen correctos pero tienen efectos secundarios.

### 5. Combina con tu editor favorito

Claude Code funciona mejor cuando lo usas junto a tu IDE. Abrilo en una terminal separada y usa tu editor para navegar el codigo mientras Claude trabaja.

---

## Claude Code vs Otras Herramientas de IA

| Caracteristica | Claude Code | GitHub Copilot | Cursor |
|----------------|-------------|----------------|--------|
| **Entorno** | Terminal | IDE plugin | IDE dedicado |
| **Autonomia** | Alta (agente completo) | Media (completado) | Media-Alta |
| **Costo** | Gratis (basico) / $20/mes (Pro) | $10/mes | $20/mes |
| **Modelo** | Claude 4 Sonnet / Opus | GPT-4o / Claude | Multiples |
| **Privacidad** | codigo no se entrena | Politica variable | Politica variable |
| **Multi-repo** | Si | No | No |

---

## Preguntas Frecuentes (FAQ)

### Claude Code es gratis?

Si. Claude Code tiene un tier gratuito con uso limitado. El plan Pro cuesta $20/mes y ofrece mayor contexto y prioridad.

### Necesito cuenta de Anthropic para usar Claude Code?

Si, necesitas crear una cuenta en console.anthropic.com y obtener una API key o iniciar sesion con tu cuenta.

### Claude Code funciona offline?

No. Claude Code requiere connexion a internet porque procesa el codigo en los servidores de Anthropic. Sin embargo, tu codigo no se utiliza para entrenar modelos.

### Que modelos usa Claude Code?

Claude Code puede usar Claude 4 Sonnet, Claude 4 Opus o Claude 3.5 Haiku dependiendo de la configuracion y el plan contratado.

### Puedo usar Claude Code en Windows?

Si. Claude Code funciona en Windows a traves de WSL2 (Windows Subsystem for Linux) o directamente en PowerShell.

---

## Conclusion

Claude Code representa un cambio fundamental en la forma en que los programadores interactuan con la IA. No es solo un autocompletado — es un agente de codificacion completo que entiende tu proyecto, ejecuta comandos y toma decisiones de implementacion.

Si queres integrar [inteligencia artificial](/es/blog/agentes-de-ia-guia-completa-de-sistemas-inteligentes) en tu flujo de desarrollo y necesitas ayuda para configurar tu entorno, [contactame](/es/contact).

---

## Articulos Relacionados

- [Claude Code Gratis](/es/blog/claude-code-gratis)
- [Prompts para IA](/es/blog/prompts-para-ia)
- [Gemini CLI en VS Code usando Vertex AI](/es/blog/gemini-cli)
- [Agentes de IA: Guia Completa de Sistemas Inteligentes](/es/blog/agentes-de-ia-guia-completa-de-sistemas-inteligentes)
- [Generacion de Codigo Sintetico](/es/blog/generacion-de-codigo-sintetico)
- [Framework Python 2026: Tendencias y Predicciones Clave](/es/blog/framework-python-2026-tendencias-y-predicciones-clave)
