---
title: "Claude Code Commands: A Practical Guide to Mastering Your Coding Agent"
description: "Master Claude Code commands with this practical guide: essential slash commands, keyboard shortcuts, permission modes and prompting tips for your coding agent."
pubDate: 2026-10-21
heroImage: "/assets/blog/covers/claude-code-commands.svg"
---

<p>Claude Code is driven almost entirely from the keyboard: commands that start with <code>/</code>, shortcuts and permission modes that decide what the agent is allowed to touch. Knowing the right Claude Code commands turns an ordinary session into a fast, organized flow with everything under control and no surprises in your repo.</p>

<ul>
<li><p>The essential slash commands, from <code>/help</code> and <code>/clear</code> to <code>/model</code>, <code>/mcp</code> and <code>/agents</code> for running your session.</p></li>
<li><p>Key shortcuts such as Shift+Tab to cycle permission modes, Esc to interrupt and Tab to accept autocomplete suggestions.</p></li>
<li><p>Effective terminal prompting with clean context, plan mode and reviews before every commit.</p></li>
</ul>

## The slash commands you will use every day

Typing <code>/</code> at the start of your message opens the commands and skills menu: keep typing to filter, move with the arrow keys and confirm with Enter. These are the ones you will reach for most, based on the <a href="https://code.claude.com/docs/en/commands" rel="nofollow noopener" target="_blank">official commands reference</a>:

- <code>/help</code>: shows help and every available command.
- <code>/clear</code>: starts a new conversation with empty context (aliases <code>/reset</code> and <code>/new</code>); the previous one is preserved and you bring it back with <code>/resume</code>.
- <code>/compact</code>: summarizes the conversation to free up context window without breaking the thread; it accepts focus instructions.
- <code>/context</code>: visualizes what is consuming your window in a colored grid and suggests optimizations.
- <code>/model</code>: switches the model and saves it as the default; with no argument it opens a picker (press <code>s</code> to switch for the current session only).
- <code>/mcp</code>: manages MCP servers: reconnects, enables or disables them, and handles OAuth authentication.
- <code>/agents</code>: creates and manages subagents by editing <code>.claude/agents/</code> or <code>~/.claude/agents/</code>.
- <code>/permissions</code>: the dialog for allow, ask and deny rules by scope (alias <code>/allowed-tools</code>).
- <code>/init</code>: generates a starter <code>CLAUDE.md</code> with your project conventions; edit it afterwards with <code>/memory</code>.
- <code>/diff</code> and <code>/code-review</code>: review your changes and request a review of the diff before committing (alias <code>/review</code>).
- <code>/rewind</code>: rolls code and conversation back to a checkpoint (aliases <code>/checkpoint</code> and <code>/undo</code>).
- <code>/usage</code> (alias <code>/cost</code>): session cost and plan limits; <code>/status</code> shows version, model and connectivity.
- <code>/doctor</code>: a setup checkup that diagnoses issues and proposes fixes.

For git, Anthropic's official commit-commands plugin adds <code>/commit</code> and <code>/commit-push-pr</code>: they draft a message that matches your history and avoid sensitive files such as <code>.env</code>. You can also simply ask Claude to commit once the work has been reviewed.

## Keyboard shortcuts that change the terminal experience

The <a href="https://code.claude.com/docs/en/interactive-mode" rel="nofollow noopener" target="_blank">interactive mode guide</a> documents dozens of shortcuts; these are the ones that pay off daily:

- <code>Ctrl+L</code>: redraws the screen while keeping your input and history, for when the display ends up garbled mid-render.
- <code>Ctrl+O</code>: toggles the transcript viewer with detailed tool usage, timestamp and model on each message.
- <code>Esc</code>: interrupts Claude mid-turn and keeps the work done so far; it also closes dialogs and declines a permission prompt.
- <code>Esc</code> twice: with text, clears the draft and saves it to history (<code>Up</code> recalls it); with an empty input, opens the rewind menu.
- <code>Tab</code>: accepts the visible autocomplete suggestion; on permission prompts, it adds a comment to the answer you chose.
- <code>Shift+Tab</code>: cycles the permission modes —default (Manual), acceptEdits, plan and, when available, bypassPermissions and auto—. On Windows, <code>Alt+M</code> does the same without VT input mode.
- <code>Ctrl+C</code> and <code>Ctrl+D</code>: interrupt or clear the input; two <code>Ctrl+D</code> presses in a row exit the session.
- <code>Ctrl+R</code>: interactive reverse search across your full prompt history.
- <code>Ctrl+B</code>: backgrounds a Bash command or agent so you keep working.
- <code>Ctrl+G</code>: opens your draft in the default external editor.
- <code>Ctrl+Enter</code>: sends immediately any messages you queued while Claude was working.
- <code>Alt+P</code>: switches model without losing your typed prompt; <code>Ctrl+T</code> toggles the task checklist.

## Autocomplete and input shortcuts

Claude Code autocomplete goes beyond the <code>/</code> menu: typing <code>/</code> mid-prompt (after a space) also completes commands, though a command only runs when it starts your message. <code>@</code> triggers file path autocomplete so you can point at the exact file without typing it fully. The <code>!</code> prefix enters shell mode: it runs the command, adds its output to the context and Claude responds to it; there, <code>Tab</code> completes previous <code>!</code> commands and paths. <code>:</code> suggests emoji shortcodes, and <code>?</code> on an empty input opens the shortcut help panel.

For multiline input: <code>\</code> + Enter works in every terminal and <code>Ctrl+J</code> needs no configuration; <code>Shift+Enter</code> becomes native after running <code>/terminal-setup</code> in VS Code, Cursor or another supported terminal. The <code>Up</code> and <code>Down</code> arrows (or <code>Ctrl+P</code> / <code>Ctrl+N</code>) navigate history, which is stored per working directory and reaches past sessions of the project.

## Permissions: what the agent can and cannot do

Permission modes define how much Claude asks before acting. The default (Manual) mode requests approval for every tool; <code>acceptEdits</code> accepts file edits automatically; <code>plan</code> keeps the repo read-only while planning; <code>bypassPermissions</code> skips confirmations entirely, just like the <code>--dangerously-skip-permissions</code> flag at launch; and <code>auto</code> delegates decisions to a classifier. Cycle them with <code>Shift+Tab</code> and manage rules with <code>/permissions</code>.

The practical rule: in your own repos with disposable environments (containers, worktrees) you can run <code>acceptEdits</code> or even bypass mode for speed; in third-party repos, or anywhere with credentials or production access, stay in manual mode. If prompts overwhelm you, <code>/fewer-permission-prompts</code> scans your transcripts and writes an allowlist of read-only calls into <code>.claude/settings.json</code>.

## Plan mode: make the agent think before touching anything

Enter plan mode with <code>Shift+Tab</code> until the "plan" indicator shows, or run <code>/plan</code> (it accepts a task description as an argument). In this mode Claude reads the code, drafts a course of action and edits nothing until you approve it. It is the safest way to tackle changes that span several files: it separates analysis from execution and lets you correct the direction before a single diff exists. Once the plan is approved, Claude executes step by step; then close with <code>/diff</code> and <code>/code-review</code> to confirm it delivered what was promised.

## Terminal prompting best practices

- Start every repo with <code>/init</code> and keep the <code>CLAUDE.md</code> short and actionable: conventions, build and test commands, and clear limits. Edit it with <code>/memory</code>.
- One goal per task: concrete requests, files pointed at with <code>@</code>, and verifiable success criteria ("make the tests of module X pass") instead of "improve the project".
- Run <code>/clear</code> between unrelated tasks, <code>/compact</code> when the conversation grows, and <code>/context</code> to see what is eating the window.
- Queue messages while Claude works with <code>Enter</code> and send them right away with <code>Ctrl+Enter</code>; <code>Esc</code> interrupts without losing what was done.
- Always review with <code>/diff</code> and <code>/code-review</code> before the commit leaves your repo, and check costs with <code>/usage</code>.
- If you are just getting started, our guide to <a href="/en/blog/free-claude-code" target="_blank">free Claude Code</a> shows how to set up a full workflow without a subscription.

## Conclusion

Claude Code commands are not decoration: they are the levers of speed and control of your agent. Slash commands keep the session organized (<code>/clear</code>, <code>/compact</code>, <code>/model</code>, <code>/mcp</code>, <code>/agents</code>), shortcuts such as <code>Shift+Tab</code>, <code>Esc</code>, <code>Tab</code>, <code>Ctrl+L</code> and <code>Ctrl+O</code> keep you at the keyboard without losing context, and permission modes plus plan mode guarantee nothing gets touched without your approval. Add a well-written <code>CLAUDE.md</code> and reviews with <code>/diff</code> and <code>/code-review</code> and you have a professional flow from start to finish.

If you want to bring this flow to a real <a href="/en/services/programming" target="_blank">programming and web development</a> project, or you need us to implement it with you, <a href="/en/contact" target="_blank">contact us</a> and let's talk.
