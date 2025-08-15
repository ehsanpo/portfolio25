---
title: Git Approvers Hover Extension
date: '2024-11-28T12:58:42+00:00'
status: publish
permalink: vscode-git-approvers
author: Ehsan
type: portfolio
id: 335
agency: Telavox
category:
  - Lab
tag:
  - Javascript
  - Typescript
case_link_url: 'https://github.com/ehsanpo/pr-approve'
body_text:
  - ''
client: Telavox
tagline: Visar PR-godkännare när man för musen över kodrader.
background_image: vscode3.png
logo: vscodelogo.png
images:
  - vscode3.png
port_date:
  - '2024'
---
<h2>Git Approvers Hover Extension</h2>

<h3>Översikt</h3>
Git Approvers Hover är en Visual Studio Code-tillägg som visar PR-godkännarna när du för muspekaren över kodrader. Den fungerar genom att utnyttja git blame för att identifiera commiten och hämtar sedan den relaterade pull requesten och dess godkännanden från GitHub.
<br />

<h3>Funktioner</h3>
  <ul>
    <li>För muspekaren över en kodrad för att se listan över användare som godkänt motsvarande GitHub Pull Request.</li>
    <li>Stöder projekt med Git-repositorier länkade till GitHub.</li>
 </ul>

<h3>Installation</h3>
<ul>
    <li> Ladda ner .vsix-filen för tillägget. </li>
    <li> Öppna Visual Studio Code.</li>
    <li> Gå till Extensions-vyn genom att klicka på Extensions-ikonen i Aktivitetsfältet eller trycka på Ctrl+Shift+X.</li>
    <li> Klicka på den trepunktsmeny (...) i övre högra hörnet av Extensions-vyn.</li>
    <li> Välj Installera från VSIX....</li>
    <li> Bläddra till och välj den nedladdade .vsix-filen.</li>
</ul>

<h3>Användning</h3>
<ul>
    <li>Öppna en arbetsyta som är en del av ett Git-repositorium.</li>
    <li> För muspekaren över en kodrad i en spårad fil.</li>
    <li>Om raden motsvarar en commit med en associerad GitHub pull request, kommer tillägget att visa listan över godkännare för den PR.</li>
</ul>

<h3>Krav</h3>
<ul>
 <li>Arbetsytan måste vara ett Git-repositorium.</li>
 <li>Repositoriet måste vara värd på GitHub.</li>
 <li>Ett GitHub API-token med lämpliga behörigheter bör ställas in som en miljövariabel (GITHUB_TOKEN) eller konfigureras i tillägget.</li>
</ul>

<h3>Ställ in GitHub API Token</h3>
Tillägget kräver ett GitHub API-token för att hämta pull request-information. Du kan ställa in tokenet som en miljövariabel:

- Gå till GitHub's Personal Access Token-sida och generera ett nytt token med nödvändiga behörigheter (t.ex., repo).

- Ställ in tokenet som en miljövariabel:

<pre>export GITHUB_TOKEN=ditt-token-här</pre>
