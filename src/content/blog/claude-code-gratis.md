---
title: "Claude Code gratis"
description: "Debes descargar Ollama y registrarte, luego, cuando estés en tu computadora con Windows corriendo una sesión de programación y desarrollo web en VS Code,"
pubDate: 2026-02-17
heroImage: "/assets/blog/covers/claude-code-gratis.svg"
---



                


<h2>Conecta Claude code a modelos de IA de código abierto</h2>



<figure><img width="1024" height="576" src="/assets/blog/claude-code-gratis-1.webp" alt=""></figure>



<p>Debes descargar <a href="https://ollama.com/" target="_blank" rel="noopener">Ollama</a> y registrarte, luego, cuando estés en tu <a href="https://lanuscomputacion.com/" target="_blank" rel="noreferrer noopener">computadora con Windows</a> corriendo una sesión de <a href="https://selvaggiesteban.dev/" target="_blank" rel="noreferrer noopener">programación y desarrollo web</a> en VS Code, ejecuta:</p>



<pre><code><strong>wsl</strong>
<strong>export ANTHROPIC_AUTH_TOKEN=ollama</strong>
<strong>export ANTHROPIC_API_KEY=""</strong>
<strong>export ANTHROPIC_BASE_URL=http://127.0.0.1:11434</strong>
<strong>claude -c --dangerously-skip-permissions --model kimi-k2.5:cloud</strong></code></pre>



<p>Debes ver: Skill(superpowers:subagent-driven-development)</p>



<figure><img width="1024" height="223" src="/assets/blog/claude-code-gratis-2.png" alt=""></figure>



<p>El día en el que este articulo es publicado Ollama facilita un plan gratuito limitado con restricciones por concurrencia y múltiples <a href="https://ollama.com/search" target="_blank" rel="noopener">modelos disponibles</a>. </p>



<p>Las restricciones del uso de contexto diario para las sesiones de programación y desarrollo web se reinicia cada 6 horas. Adicionalmente existe un límite de uso semanal.</p>



<p>Te puede interesar: <a href="https://selvaggiesteban.dev/kimi-k2-5-en-la-nube-la-proxima-frontera-de-la-ia-empresarial/">kimi-k2.5</a> y minimax-m2.1 de Moonshot AI, también Qwen3:4b para <a href="https://lanuscomputacion.com" target="_blank" rel="noopener">computadoras con 8 gb de ram</a>.</p>



<p>Es clave el uso del plugin ralph-loop y ejecutar /ralph-loop:ralph-loop completa todas las tareas pendientes –max-iterations 5 –completion-promise ‘Te confirmo que no hay tareas pendientes por completar’.</p>
                                    
                        
                                                
                    
                    

