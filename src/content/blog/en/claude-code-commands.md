---
title: "Claude Code Commands: Complete Guide 2026"
description: "Master all Claude Code commands, Anthropic's AI coding assistant. Shortcuts, slash commands, advanced configuration and best practices for developers."
pubDate: 2026-09-04
heroImage: "/assets/blog/covers/claude-code-commands.svg"
---

## TL;DR — Key Takeaways

- **Claude Code** is Anthropic's coding assistant that runs directly in your terminal.
- **Slash commands** (`/help`, `/init`, `/compact`, `/clear`) are the foundation for navigating the tool.
- **Keyboard shortcuts** (Ctrl+C, Ctrl+L, Tab) streamline your daily workflow.
- **Project configuration** (`.claude/settings.json`) allows customizing permissions and behavior.
- Claude Code is **free** for basic usage, with Pro and Team plans for intensive use.

> **CTA:** If you want to learn how to use Claude Code to power your [web development](/en/services/web-development) projects, [contact me](/en/contact) and I'll help you integrate it into your workflow.

---

## What is Claude Code?

Claude Code is an AI-powered coding tool developed by Anthropic that runs directly in your terminal. Unlike other assistants that work as editor plugins, Claude Code operates as an autonomous agent: it can read and write files, execute commands, navigate repositories, and make implementation decisions without constant intervention.

The key is its **terminal-first** approach: you don't need a specific IDE, you don't need plugins. You just need a terminal and your project.

---

## Claude Code Commands: Complete List

### Slash Commands

Slash commands are typed directly in the Claude Code terminal:

| Command | Function | Recommended use |
|---------|----------|-----------------|
| `/help` | Shows help with all available commands | Start here if you're new |
| `/init` | Initializes a `.claude/settings.json` file in the current project | First time using Claude Code on a project |
| `/compact` | Compacts the conversation context to save tokens | When the conversation gets long |
| `/clear` | Clears the current conversation history | Start a new topic |
| `/config` | Opens Claude Code configuration | Change model, API key or preferences |
| `/cost` | Shows the accumulated cost of the current session | Monitor token spending |
| `/doctor` | Diagnoses installation and configuration issues | If something isn't working as expected |
| `/login` | Logs in with your Anthropic account | Required to use the service |
| `/logout` | Logs out of the current session | Switch accounts |
| `/memory` | Shows or edits project memory | Review what Claude remembers about your code |
| `/permissions` | Manages Claude's execution permissions | Control what it can and cannot do |
| `/review` | Reviews recent code changes | After a commit or PR |
| `/status` | Shows current session status | Verify model, context and connection |

### Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `Ctrl+C` | Cancels the current operation |
| `Ctrl+L` | Clears the terminal screen |
| `Tab` | Autocompletes commands and file names |
| `Shift+Tab` | Accepts the autocomplete suggestion |
| `Up Arrow` | Recovers the last sent command |
| `Ctrl+R` | Searches command history |

### Terminal Commands (Executables)

Claude Code also accepts system commands directly:

```bash
# Global installation
npm install -g @anthropic-ai/claude-code

# Run in a project
claude

# Run with a direct prompt
claude "explain this file"

# Non-interactive mode (for scripts)
claude -p "generate tests for src/auth.ts"

# Installed version
claude --version

# Help from terminal
claude --help
```

---

## Project Configuration

Each project can have its own `.claude/settings.json`:

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

### Security Permissions

Permissions are organized in three levels:

| Level | Description | Example |
|-------|-------------|---------|
| `Read` | Read files | Verify content before editing |
| `Edit` | Modify files | Write code, update configs |
| `Bash(*)` | Execute terminal commands | `npm install`, `git push`, `pytest` |

---

## Best Practices for Using Claude Code

### 1. Start with `/init` in every project

This creates a configuration file that gives Claude context about your stack, conventions, and permissions.

### 2. Use `/compact` periodically

When the conversation grows large, Claude loses context. `/compact` summarizes the conversation and frees up tokens.

### 3. Define permissions explicitly

Don't let Claude execute arbitrary commands. Define what it can do with `Bash(npm run *)` or `Bash(git *)` instead of `Bash(*)`.

### 4. Review changes before committing

Always use `git diff` after Claude modifies files. The AI may make changes that look correct but have side effects.

### 5. Combine with your favorite editor

Claude Code works best when used alongside your IDE. Open it in a separate terminal and use your editor to navigate code while Claude works.

---

## Claude Code vs Other AI Tools

| Feature | Claude Code | GitHub Copilot | Cursor |
|---------|-------------|----------------|--------|
| **Environment** | Terminal | IDE plugin | Dedicated IDE |
| **Autonomy** | High (full agent) | Medium (completion) | Medium-High |
| **Cost** | Free (basic) / $20/mo (Pro) | $10/mo | $20/mo |
| **Model** | Claude 4 Sonnet / Opus | GPT-4o / Claude | Multiple |
| **Privacy** | Code is not trained on | Variable policy | Variable policy |
| **Multi-repo** | Yes | No | No |

---

## Frequently Asked Questions (FAQ)

### Is Claude Code free?

Yes. Claude Code has a free tier with limited usage. The Pro plan costs $20/mo and offers more context and priority.

### Do I need an Anthropic account to use Claude Code?

Yes, you need to create an account at console.anthropic.com and get an API key or log in with your account.

### Does Claude Code work offline?

No. Claude Code requires an internet connection because it processes code on Anthropic's servers. However, your code is not used to train models.

### What models does Claude Code use?

Claude Code can use Claude 4 Sonnet, Claude 4 Opus or Claude 3.5 Haiku depending on the configuration and plan.

### Can I use Claude Code on Windows?

Yes. Claude Code works on Windows through WSL2 (Windows Subsystem for Linux) or directly in PowerShell.

---

## Conclusion

Claude Code represents a fundamental shift in how programmers interact with AI. It's not just autocomplete — it's a complete coding agent that understands your project, executes commands, and makes implementation decisions.

If you want to integrate [artificial intelligence](/en/blog/ai-agents-complete-guide-to-intelligent-systems) into your development workflow and need help setting up your environment, [contact me](/en/contact).

---

## Related Articles

- [Free Claude Code](/en/blog/free-claude-code)
- [AI Prompts](/en/blog/ai-prompts)
- [Gemini CLI in VS Code Using Vertex AI](/en/blog/gemini-cli-in-vs-code-using-vertex-ai)
- [AI Agents: Complete Guide to Intelligent Systems](/en/blog/ai-agents-complete-guide-to-intelligent-systems)
- [Synthetic Code Generation](/en/blog/synthetic-code-generation)
- [Python Framework 2026: Key Trends and Predictions](/en/blog/python-framework-2026-key-trends-and-predictions)
