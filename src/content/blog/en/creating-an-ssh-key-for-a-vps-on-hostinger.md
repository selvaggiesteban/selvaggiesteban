---
title: "Creating an SSH Key for a VPS on Hostinger"
description: "When I work with a VPS on Hostinger, one of the first things I do is set up secure SSH access. I don't like relying on passwords"
pubDate: 2026-04-18
heroImage: "/assets/blog/covers/creating-an-ssh-key-for-a-vps-on-hostinger.svg"
---




<p>When I work with a <strong>VPS on Hostinger</strong>, one of the first things I do is set up secure SSH access. I don't like relying on passwords to access the server or tying everything to the root user, because that increases risk and complicates daily administration. That's why I always prefer to create an <strong>SSH key</strong>, associate it with a user with sudo permissions, and establish a solid foundation from the start.</p>



<p>In this guide, I explain exactly how I do this process step by step: from updating the server to generating the key, copying the public key to the VPS, adjusting permissions, testing the connection, and strengthening security with a firewall. If you're getting started with a <strong>VPS on Hostinger</strong>, this workflow will help you get your server much better prepared for work.</p>

<ul>
<li><p>Set up SSH key authentication on your VPS so you never have to rely on passwords for remote access again.</p></li>
<li><p>Follow a step-by-step workflow that covers user creation, key generation, permissions, testing, and firewall hardening.</p></li>
<li><p>Start every new server with a clean, updated, and secure base ready for real projects and deployments.</p></li>
</ul>

<ul>
<li><a href="#why-create-an-ssh-key">Why I Create an SSH Key on My VPS on Hostinger</a></li>
<li><a href="#before-generating-the-key">The First Thing I Do Before Generating the SSH Key</a></li>
<li><a href="#create-a-new-user">Then I Create a New User and Stop Using Root as the Main Account</a></li>
<li><a href="#generate-the-ssh-key">How I Generate My SSH Key for the VPS on Hostinger</a></li>
<li><a href="#copy-the-public-key">How I Copy the Public Key to the Server</a></li>
<li><a href="#configure-permissions">The Permissions I Always Configure Afterward</a></li>
<li><a href="#test-the-connection">How I Test the SSH Connection to the VPS</a></li>
<li><a href="#activate-the-firewall">Then I Activate the Firewall</a></li>
<li><a href="#final-reboot">The Final Reboot</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="why-create-an-ssh-key">Why I create an SSH key on my VPS on Hostinger</h2>



<p>Setting up an SSH key allows me to access my server much more securely than using a regular password. It's also more convenient, because once everything is properly configured, I can connect from my computer without having to manually enter credentials each time.</p>



<p>It also helps me maintain a professional work structure. Instead of managing everything from root, I create a new user for daily use, assign sudo permissions, and use public key authentication. This way I reduce risks and maintain better organization on the server.</p>



<h2 id="before-generating-the-key">The first thing I do before generating the SSH key</h2>



<p>Before creating the key, I log into my VPS panel on Hostinger, locate the server's public IP, and open the built-in browser terminal. With that ready, the first thing I do is update the system to start from a clean and up-to-date installation.</p>



<pre><code>sudo apt update &amp;&amp; sudo apt upgrade -y</code></pre>



<p>This step is important because it installs security updates and recent packages. I like to always do this at the beginning to avoid working on an outdated base.</p>



<h2 id="create-a-new-user">Then I create a new user and stop using root as the main account</h2>



<p>Once the server is updated, I create a new user. I don't recommend staying with root all the time, because any mistake can have more serious consequences. That's why I prefer a separate user with administrative privileges.</p>



<pre><code>sudo adduser nombredeusuario
sudo usermod -aG sudo nombredeusuario
id nombredeusuario
su - nombredeusuario</code></pre>



<p>This sets up the user I'll use to manage the VPS on a daily basis. From there, I continue all the SSH configuration on that account.</p>



<h2 id="generate-the-ssh-key">How I generate my SSH key for the VPS on Hostinger</h2>



<p>I generate the SSH key from my own computer, not from the VPS. If I'm on Windows I use PowerShell, and if I'm on Mac or Linux I use Terminal. The command I run is:</p>



<pre><code>ssh-keygen -t ed25519 -C "My personal SSH key"</code></pre>



<p>When I run it, the system asks me to confirm the file location and, if I want, to add a passphrase. I usually leave the default path unless I have a specific need. At the end, I get two files:</p>



<ul>
<li><strong>The private key</strong>, which I never share.</li>



<li><strong>The public key</strong>, which is the one I copy to the server.</li>
</ul>



<p>This is key: the private one stays on my computer and the public one is what I authorize on the VPS.</p>



<h2 id="copy-the-public-key">How I copy the public key to the server</h2>



<p>After generating the key, I open the public file and copy its full content. Then I go back to the VPS terminal on Hostinger, confirm I'm logged in as the new user, and create the <code>.ssh</code> folder if it doesn't exist.</p>



<pre><code>mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys</code></pre>



<p>Inside <code>authorized_keys</code> I paste the full public key, save the file, and close the editor. This way, the server recognizes that my computer is authorized to connect with that cryptographic identity.</p>



<h2 id="configure-permissions">The permissions I always configure afterward</h2>



<p>Once I paste the public key, I adjust the correct permissions. SSH is usually strict about this, so I never skip this step.</p>



<pre><code>chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys</code></pre>



<p>With these permissions, I ensure that only my user can access the folder and the authorized keys file.</p>



<h2 id="test-the-connection">How I test the SSH connection to the VPS</h2>



<p>With the key already loaded on the server, I go back to my computer and test the connection:</p>



<pre><code>ssh nombredeusuario@YOUR_VPS_IP</code></pre>



<p>The first time, the message to accept the server's fingerprint usually appears. I confirm by typing <code>yes</code> and continue. If everything is fine, I'm already logged into the VPS using my SSH key.</p>



<p>In some cases I also restart the SSH service to make sure the configuration is properly applied:</p>



<pre><code>sudo systemctl restart ssh</code></pre>



<h2 id="activate-the-firewall">Then I activate the firewall</h2>



<p>Once I verify that SSH access works, I activate a basic firewall with UFW to leave only the necessary ports open.</p>



<pre><code>sudo ufw status
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status</code></pre>



<p>First I enable OpenSSH so I don't block my remote access. Then I leave ports 80 and 443 open for web traffic. With that, the server is much better protected to start working.</p>



<h2 id="final-reboot">The final reboot</h2>



<p>To close the process, I reboot the VPS:</p>



<pre><code>sudo reboot</code></pre>



<p>This ensures that the updates, the SSH service, and the firewall rules are fully applied. From that point on, I have a <strong>VPS on Hostinger</strong> that is much more organized, secure, and ready for additional installations, deployments, or configurations.</p>



<h2 id="conclusion">Conclusion</h2>

<p>Creating an SSH key for a <strong>VPS on Hostinger</strong> is one of those tasks that's worth doing right from the start. In my case, it's part of the base procedure every time I prepare a new server. Not only because it improves security, but also because it forces me to establish a more professional workflow: separate user, more robust access, correct permissions, and an active firewall.</p>

<p>If you're setting up your server for the first time, this step will save you problems and allow you to work with a much more solid foundation from day one. And if you want to go further with your server setup, my guide on <a href="/en/blog/premium-web-hosting-from-hostinger" target="_blank">premium web hosting from Hostinger</a> covers the hosting side of the equation.</p>

<p>Need a hand preparing your server or deploying your project? <a href="/en/contact" target="_blank">Contact me</a> and I'll help you get everything up and running securely.</p>