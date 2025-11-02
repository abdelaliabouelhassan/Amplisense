<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>AmpliSense — Forensic Intelligence for Law and Media</title>
        <meta name="title" content="AmpliSense — Forensic Intelligence for Law and Media">
        <meta name="description" content="AmpliSense is a forensic intelligence practice operating at the intersection of law, finance, and investigative research. We assist legal teams and institutional clients in tracing, verifying, and communicating complex cross-border financial and reputational matters with precision and discretion.">
        <meta name="keywords" content="forensic intelligence, legal analysis, financial intelligence, investigative research, due diligence, litigation support, compliance, cross-border investigations, document forensics, legal teams">
        <meta name="author" content="AmpliSense">
        <meta name="robots" content="index, follow">
        <meta name="language" content="English">
        <meta name="revisit-after" content="7 days">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://amplisense.co.uk/">
        <meta property="og:title" content="AmpliSense — Forensic Intelligence for Law and Media">
        <meta property="og:description" content="Forensic intelligence practice operating at the intersection of law, finance, and investigative research. Supporting legal teams with precision and discretion.">
        <meta property="og:image" content="https://amplisense.co.uk/images/logo.png">
        <meta property="og:site_name" content="AmpliSense">
        <meta property="og:locale" content="en_GB">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://amplisense.co.uk/">
        <meta property="twitter:title" content="AmpliSense — Forensic Intelligence for Law and Media">
        <meta property="twitter:description" content="Forensic intelligence practice operating at the intersection of law, finance, and investigative research. Supporting legal teams with precision and discretion.">
        <meta property="twitter:image" content="https://amplisense.co.uk/images/logo.png">

        <!-- Additional Meta Tags -->
        <meta name="theme-color" content="#caa24a">
        <meta name="msapplication-TileColor" content="#caa24a">
        <link rel="canonical" href="https://amplisense.co.uk/">

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
