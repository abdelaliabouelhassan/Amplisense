<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Amplisense - Forensic Intelligence for Law, Finance, and Investigative Research</title> 
        {{-- <title inertia>Amplisense - Forensic Intelligence for Law, Finance, and Investigative Research</title> --}}
        <meta name="title" content="AmpliSense — Forensic Intelligence for Law, Finance, and Investigative Research">
        <meta name="description" content="AmpliSense is a forensic intelligence practice operating at the intersection of law, finance, and investigative research. We assist legal teams and institutional clients in tracing, verifying, and communicating complex cross-border financial and reputational matters with precision and discretion.">
        <meta name="keywords" content="forensic intelligence, legal analysis, financial intelligence, investigative research, due diligence, litigation support, compliance, cross-border investigations, document forensics, legal teams">
        <meta name="author" content="AmpliSense">
        <meta name="robots" content="index, follow">
        <meta name="language" content="English">
        <meta name="revisit-after" content="7 days">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://amplisense.co.uk/">
        <meta property="og:title" content="Amplisense - Forensic Intelligence for Law, Finance, and Investigative Research">
        <meta property="og:description" content="Amplisense is a London-based forensic intelligence firm operating at the intersection of law, finance, and investigative research. We deliver clarity and precision in cross-border legal, financial, and reputational investigations.">
        <meta property="og:image" content="https://amplisense.co.uk/images/logo.png">
        <meta property="og:site_name" content="AmpliSense">
        <meta property="og:locale" content="en_GB">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://amplisense.co.uk/">
        <meta property="twitter:title" content="Amplisense - Forensic Intelligence for Law, Finance, and Investigative Research">
        <meta property="twitter:description" content="Amplisense is a London-based forensic intelligence firm operating at the intersection of law, finance, and investigative research. We deliver clarity and precision in cross-border legal, financial, and reputational investigations.">
        <meta property="twitter:image" content="https://amplisense.co.uk/images/logo.png">

        <!-- Additional Meta Tags -->
        <meta name="theme-color" content="#caa24a">
        <meta name="msapplication-TileColor" content="#caa24a">
        <link rel="canonical" href="https://amplisense.co.uk/">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
