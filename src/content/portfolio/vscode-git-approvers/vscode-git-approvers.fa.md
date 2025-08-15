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
client: تلواوکس
tagline: هنگام اشاره به خطوط کد، تاییدکنندگان روابط عمومی را نشان می‌دهد.
background_image: vscode3.png
logo: vscodelogo.png
images:
  - vscode3.png
port_date:
  - '2024'
---
<h2>افزونه Git Approvers Hover</h2>

<h3>بررسی اجمالی</h3>
Git Approvers Hover یک افزونه Visual Studio Code است که با اشاره بر روی خطوط کد، تاییدکنندگان PR را نشان می‌دهد. این افزونه با استفاده از git blame برای شناسایی commit و سپس دریافت درخواست pull مرتبط و تاییدیه‌های آن از GitHub کار می‌کند.
<br />

<h3>ویژگی‌ها</h3>
  <ul>
    <li>با اشاره بر روی یک خط کد، لیست کاربرانی که درخواست Pull مربوطه GitHub را تایید کرده‌اند را ببینید.</li>
    <li>پروژه‌هایی با مخازن Git مرتبط با GitHub را پشتیبانی می‌کند.</li>
 </ul>

<h3>نصب</h3>
<ul>
    <li> فایل .vsix مربوط به افزونه را دانلود کنید. </li>
    <li> Visual Studio Code را باز کنید.</li>
    <li> با کلیک بر روی آیکون Extensions در نوار فعالیت یا فشردن Ctrl+Shift+X به نمای Extensions بروید.</li>
    <li> در گوشه بالا سمت راست نمای Extensions روی منوی سه نقطه (...) کلیک کنید.</li>
    <li> Install from VSIX... را انتخاب کنید.</li>
    <li> به فایل .vsix دانلود شده مرور کنید و آن را انتخاب کنید.</li>
</ul>

<h3>چگونگی استفاده</h3>
<ul>
    <li>یک workspace که بخشی از یک مخزن Git است را باز کنید.</li>
    <li> بر روی هر خط کد در یک فایل ردیابی شده اشاره کنید.</li>
    <li>اگر خط مربوط به یک commit با یک درخواست pull مرتبط GitHub باشد، افزونه لیست تاییدکنندگان آن PR را نشان می‌دهد.</li>
</ul>

<h3>نیازمندی‌ها</h3>
<ul>
 <li>Workspace باید یک مخزن Git باشد.</li>
 <li>مخزن باید بر روی GitHub میزبانی شود.</li>
 <li>یک توکن API GitHub با مجوزهای مناسب باید به عنوان یک متغیر محیطی (GITHUB_TOKEN) تنظیم شود یا در افزونه پیکربندی شود.</li>
</ul>

<h3>راه اندازی توکن API GitHub</h3>
این افزونه نیاز به یک توکن API GitHub برای دریافت اطلاعات درخواست pull دارد. شما می‌توانید توکن را به عنوان یک متغیر محیطی تنظیم کنید:

- به صفحه Personal Access Token GitHub بروید و یک توکن جدید با مجوزهای لازم (مثلا، repo) تولید کنید.

- توکن را به عنوان یک متغیر محیطی تنظیم کنید:

<pre>export GITHUB_TOKEN=your-token-here</pre>
