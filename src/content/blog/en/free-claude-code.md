---
title: "Free Claude Code"
description: "You need to download Ollama and register, then, when you're on your Windows computer running a web programming and development session in VS Code,"
pubDate: 2026-02-17
heroImage: "/assets/blog/covers/free-claude-code.svg"
---

<p>Programming with AI assistance no longer requires paying a monthly subscription. With <strong>Claude Code</strong> connected to open-source models through <strong>Ollama</strong>, you can enjoy a full AI-assisted development workflow on your own machine, without sending your code to external services.</p>

<ul>
<li><p>Set up free Claude Code on your own machine by connecting it to Ollama and open-source models such as kimi-k2.5.</p></li>
<li><p>The connection takes minutes from WSL with Anthropic environment variables pointing to localhost.</p></li>
<li><p>The free plan has clear limits: context that resets every 6 hours and a weekly usage cap.</p></li>
</ul>

<ul>
<li><a href="#connect-claude-code-to-open-source-ai-models">Connect Claude Code to open-source AI models</a></li>
<li><a href="#how-the-connection-works">How the connection between Claude Code and Ollama works</a></li>
<li><a href="#free-plan-limits">Ollama free plan limits</a></li>
<li><a href="#ralph-loop-tips">Tips to get the most out of the ralph-loop plugin</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="connect-claude-code-to-open-source-ai-models">Connect Claude Code to open-source AI models</h2>

<figure><img width="1024" height="576" src="/assets/blog/claude-code-gratis-1.webp" alt="Claude Code connected to open-source AI models running in VS Code"></figure>

<p>You need to download <a href="https://ollama.com/" target="_blank" rel="nofollow noopener">Ollama</a> and register, then, when you're on your <a href="https://lanuscomputacion.com/" target="_blank" rel="nofollow noreferrer noopener">Windows computer</a> running a <a href="https://selvaggiesteban.dev/" target="_blank" rel="nofollow noreferrer noopener">web programming and development</a> session in VS Code, run:</p>

<pre><code><strong>wsl</strong>
<strong>export ANTHROPIC_AUTH_TOKEN=ollama</strong>
<strong>export ANTHROPIC_API_KEY=""</strong>
<strong>export ANTHROPIC_BASE_URL=http://127.0.0.1:11434</strong>
<strong>claude -c --dangerously-skip-permissions --model kimi-k2.5:cloud</strong></code></pre>

<p>You should see: Skill(superpowers:subagent-driven-development)</p>

<figure><img width="1024" height="223" src="/assets/blog/claude-code-gratis-2.webp" alt="Claude Code message confirming that the superpowers skill is loaded"></figure>

<p>On the day this article is published, Ollama offers a limited free plan with concurrency restrictions and multiple <a href="https://ollama.com/search" target="_blank" rel="nofollow noopener">available models</a>.</p>

<p>Daily context usage limits for programming and development web sessions reset every 6 hours. Additionally, there is a weekly usage limit.</p>

<p>You might be interested in: <a href="https://selvaggiesteban.dev/kimi-k2-5-en-la-nube-la-proxima-frontera-de-la-ia-empresarial/" target="_blank" rel="nofollow noopener">kimi-k2.5</a> and minimax-m2.1 from Moonshot AI, also Qwen3:4b for <a href="https://lanuscomputacion.com" target="_blank" rel="nofollow noopener">computers with 8 GB of RAM</a>.</p>

<p>It's essential to use the ralph-loop plugin and run /ralph-loop:ralph-loop to complete all pending tasks –max-iterations 5 –completion-promise 'I confirm there are no pending tasks to complete'.</p>

<h2 id="how-the-connection-works">How the connection between Claude Code and Ollama works</h2>

<p>The trick behind this setup is simple but powerful: Claude Code is a command-line interface that speaks Anthropic's API protocol, and Ollama can expose local (or cloud, as with kimi-k2.5:cloud) models by emulating that exact same protocol. By pointing the <code>ANTHROPIC_BASE_URL</code> variable to Ollama's local server on port 11434, the CLI never leaves your machine to run model inference: you are asking Ollama to act as an Anthropic-compatible proxy.</p>

<p>Each environment variable has a specific role. <code>ANTHROPIC_AUTH_TOKEN=ollama</code> is an arbitrary value that satisfies the CLI's validation without requiring a real Anthropic API key. <code>ANTHROPIC_API_KEY=""</code> is left empty precisely so that no legitimate credential is ever sent to the local proxy. And <code>claude -c</code> resumes your previous session, so the context of your work is not lost between runs. The <code>--dangerously-skip-permissions</code> flag skips command execution confirmations: use it only in development environments where you fully trust what the model proposes, because you are giving it a free pass to edit files and run terminal commands.</p>

<p>On Windows, going through WSL is no small detail: many tools in the AI-assisted development ecosystem assume a Unix environment. WSL gives you a real Linux terminal inside Windows, with access to your filesystem, Git and Node.js, without installing a full virtual machine. If you already work with VS Code, the WSL Remote extension lets you edit inside that environment with the full IDE experience.</p>

<h2 id="free-plan-limits">Ollama free plan limits</h2>

<p>Like every free tier, the plan comes with conditions worth knowing before you build your workflow around them. The most important one is <strong>concurrency</strong>: if you open several Claude Code sessions at the same time against the same cloud model, you will run into waits or rate limit errors. The smooth experience comes from working one session at a time, with clearly scoped tasks.</p>

<p>The <strong>context reset every 6 hours</strong> means that, if you keep working on a long project, the available token window renews every that period. Strategically, it pays off to plan your sessions: start each block with a clear goal (for example, "implement the complete authentication module") instead of leaving sessions open all day consuming quota on minor tasks. A good habit is closing each block with a state summary file in the repo, so when the context resets you can pick up the thread by reading that summary instead of reconstructing it from memory.</p>

<p>The <strong>weekly limit</strong> protects the platform from intensive use. If you combine several Ollama models and alternate between code generation, review and documentation tasks, you will distribute your consumption better. For projects with tight deadlines, a good practice is to have a backup model configured (for example, a local Qwen for small tasks) and reserve kimi-k2.5:cloud for what really needs long reasoning.</p>

<h2 id="ralph-loop-tips">Tips to get the most out of the ralph-loop plugin</h2>

<p>The <strong>ralph-loop</strong> plugin transforms Claude Code from a back-and-forth assistant into an autonomous batch execution agent. The <code>/ralph-loop:ralph-loop</code> command asks it to keep working on pending tasks until it confirms nothing is left, and the parameters that accompany it control the cycle: <code>--max-iterations 5</code> caps the passes so it does not run away, and <code>--completion-promise</code> defines the stopping condition in natural language.</p>

<p>For it to work well, the initial prompt must be concrete: listing tasks as verifiable checks ("add validation to the form", "write tests for service X", "update the README") works much better than a vague goal like "improve the project". Each loop iteration will take the current state of the code, execute, verify and re-evaluate; that is why the explicit <code>--completion-promise</code> prevents the model from declaring victory prematurely or, conversely, iterating over finished work.</p>

<p>A workflow that works in practice: run the loop on a dedicated branch, review the diff after each iteration, and only merge when the result passes your checks. Combine this technique with a good context folder (project convention files, preferred code examples) and you will notice the model's responses align much better with your codebase style. If you want to take automation to the next level, in <a href="/en/blog/claude-vs-openclaw-comparative-guide" target="_blank">our Claude vs OpenClaw comparison</a> we explore other alternatives in the ecosystem, and in <a href="/en/blog/ai-agents-complete-guide-to-intelligent-systems" target="_blank">our complete guide to AI agents</a> we look at how to apply these workflows to real business projects.</p>

<h2 id="conclusion">Conclusion</h2>

<p>Having <strong>free Claude Code</strong> connected to open-source models through Ollama is today one of the smartest ways to speed up your web programming and development without incurring fixed subscription costs. The setup takes minutes, runs on your own machine, and if you respect the free plan limits (concurrency, context every 6 hours and a weekly cap) the workflow is fully productive. Combined with the ralph-loop plugin, you can delegate complete refactoring or implementation tasks and dedicate your time to review and architecture decisions.</p>

<p>If you want to implement this or other AI-assisted development workflows in your project or business, <a href="/en/contact" target="_blank">contact us</a> and let's talk.</p>