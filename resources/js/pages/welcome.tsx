import { Head } from '@inertiajs/react';
import { Separator } from "@/components/ui/separator";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlowingText } from "@/components/GlowingText";
import { RevealSection } from "@/components/RevealSection";
import { useEffect, useState } from "react";
import { Linkedin, Twitter, MessageCircle } from "lucide-react";

export default function Welcome() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Amplisense - Forensic Intelligence for Law and Media</title>
                <meta name="title" content="Amplisense - Forensic Intelligence for Law and Media" />
                <meta name="description" content="Amplisense is a forensic intelligence practice operating at the intersection of law, finance, and investigative research. We assist legal teams and institutional clients in tracing, verifying, and communicating complex cross-border financial and reputational matters with precision and discretion." />
                <meta name="keywords" content="forensic intelligence, legal analysis, financial intelligence, investigative research, due diligence, litigation support, compliance, cross-border investigations, document forensics, legal teams" />
                <meta name="author" content="Amplisense" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://amplisense.co.uk/" />
                <meta property="og:title" content="Amplisense - Forensic Intelligence for Law and Media" />
                <meta property="og:description" content="Forensic intelligence practice operating at the intersection of law, finance, and investigative research. Supporting legal teams with precision and discretion." />
                <meta property="og:image" content="https://amplisense.co.uk/images/logo.png" />
                <meta property="og:site_name" content="Amplisense" />
                <meta property="og:locale" content="en_GB" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://amplisense.co.uk/" />
                <meta property="twitter:title" content="Amplisense - Forensic Intelligence for Law and Media" />
                <meta property="twitter:description" content="Forensic intelligence practice operating at the intersection of law, finance, and investigative research. Supporting legal teams with precision and discretion." />
                <meta property="twitter:image" content="https://amplisense.co.uk/images/logo.png" />

                {/* Additional Meta Tags */}
                <meta name="theme-color" content="#caa24a" />
                <meta name="msapplication-TileColor" content="#caa24a" />
                <link rel="canonical" href="https://amplisense.co.uk/" />
            </Head>

            <div className="min-h-screen bg-background overflow-hidden">
                <AnimatedBackground />

                {/* Cursor glow effect */}
                <div
                    className="fixed pointer-events-none transition-opacity duration-300 z-50"
                    style={{
                        left: cursorPos.x - 150,
                        top: cursorPos.y - 150,
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(202,162,74,0.08) 0%, transparent 70%)',
                    }}
                />

                <main className="relative mx-auto max-w-4xl px-6 py-12 md:py-20" style={{ zIndex: 10 }}>
                    {/* Header */}
                    <header className="text-center mb-16 md:mb-24">
                        <div
                            className="relative inline-block mb-6 group cursor-pointer"
                            onMouseEnter={() => setIsLogoHovered(true)}
                            onMouseLeave={() => setIsLogoHovered(false)}
                        >
                            <div className={`absolute inset-0 blur-2xl transition-all duration-500 ${isLogoHovered ? 'opacity-60 scale-110' : 'opacity-30'
                                }`} style={{ background: 'radial-gradient(circle, rgba(202,162,74,0.4) 0%, transparent 70%)' }} />
                            <img
                                src="/images/logo.png"
                                alt="Amplisense Logo"
                                className={` h-80 mx-auto rounded-full relative z-10 transition-all duration-500 ${isLogoHovered ? 'scale-110 rotate-12' : 'scale-100'
                                    }`}
                                style={{ filter: 'drop-shadow(0 0 20px rgba(202,162,74,0.5))' }}
                            />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-heading font-semibold tracking-wide">
                            <GlowingText intensity="high">
                                Forensic Intelligence for Law and Media
                            </GlowingText>
                        </h1>
                    </header>

                    <div className="relative mb-16 md:mb-20">
                        <Separator className="opacity-30" />
                        <div className="absolute left-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-x-1/2 animate-pulse" />
                    </div>

                    {/* Main Content */}
                    <RevealSection>
                        <section className="space-y-6 mb-16 md:mb-20">
                            <p className="text-base md:text-lg leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-300">
                                Amplisense is a forensic intelligence practice operating at the intersection of law, finance, and investigative research.
                                We assist legal teams, investigative partners, and institutional clients in tracing, verifying, and communicating complex cross-border financial and reputational matters with precision and discretion.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-300">
                                Our work integrates document forensics, analytical synthesis, and narrative structure to support litigation, compliance, and regulatory alignment across multiple jurisdictions.
                                Through collaborations with journalists, analysts, and legal professionals, Amplisense contributes to transparent, accountable outcomes grounded in verified data.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-300">
                                Whether the objective is case recovery, due diligence, or institutional reporting, Amplisense provides calm, evidence-led clarity in environments where truth and integrity are non-negotiable.
                            </p>

                            <div className="relative pt-12 text-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                                </div>
                                <div className="relative bg-background px-8 inline-block">
                                    <p className="text-xl md:text-2xl font-heading font-semibold tracking-[0.3em]">
                                        <GlowingText intensity="high">
                                            <span className="inline-block hover:scale-110 transition-transform duration-300">Truth</span>
                                            <span className="mx-4 text-accent/50">▸</span>
                                            <span className="inline-block hover:scale-110 transition-transform duration-300">Integrity</span>
                                            <span className="mx-4 text-accent/50">▸</span>
                                            <span className="inline-block hover:scale-110 transition-transform duration-300">Clarity</span>
                                        </GlowingText>
                                    </p>
                                    <p className="text-sm md:text-base text-muted-foreground mt-4 italic opacity-70">
                                        That is the principle underlying every case we handle.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </RevealSection>

                    <div className="relative mb-16 md:mb-20">
                        <Separator className="opacity-30" />
                        <div className="absolute left-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-x-1/2 animate-pulse" />
                    </div>

                    {/* About Section */}
                    <RevealSection delay={200}>
                        <section className="mb-16 md:mb-20 group">
                            <div className="relative inline-block mb-6">
                                <h2 className="text-xl md:text-2xl font-heading font-semibold">
                                    <GlowingText intensity="medium">About</GlowingText>
                                </h2>
                                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full" />
                            </div>
                            <div className="space-y-6 text-base md:text-lg leading-relaxed">
                                <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 border-l-2 border-accent/30 pl-6 hover:border-accent">
                                    Founded by Charles Pycraft, an investigative journalist and strategic analyst, Amplisense bridges the fields of financial intelligence, legal analysis, and responsible disclosure.
                                    The practice supports attorneys, researchers, and investigative collaborators in transforming complex documentation into coherent, actionable intelligence.
                                </p>

                                <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 border-l-2 border-accent/30 pl-6 hover:border-accent">
                                    Amplisense maintains absolute confidentiality and ensures that verified information is interpreted and presented with accuracy, restraint, and purpose.
                                    Our objective is to provide clarity, assisting decision-makers in identifying what is true, relevant, and defensible.
                                </p>
                            </div>
                        </section>
                    </RevealSection>

                    <div className="relative mb-16 md:mb-20">
                        <Separator className="opacity-30" />
                        <div className="absolute left-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-x-1/2 animate-pulse" />
                    </div>

                    {/* Contact Section */}
                    <RevealSection delay={400}>
                        <section className="mb-16 group">
                            <div className="relative inline-block mb-6">
                                <h2 className="text-xl md:text-2xl font-heading font-semibold">
                                    <GlowingText intensity="medium">Contact</GlowingText>
                                </h2>
                                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full" />
                            </div>
                            <div className="space-y-6 text-base md:text-lg">
                                <p className="text-muted-foreground group/email hover:text-foreground transition-colors duration-300">
                                    <span className="text-accent font-medium">Email:</span>{" "}
                                    <a
                                        href="mailto:pr@amplisense.co.uk"
                                        className="relative inline-block hover:text-accent transition-all duration-300 group-hover/email:tracking-wider"
                                        style={{ textShadow: '0 0 20px rgba(202,162,74,0.0)' }}
                                        onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(202,162,74,0.6)'}
                                        onMouseLeave={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(202,162,74,0.0)'}
                                    >
                                        contact@amplisense.co.uk
                                        <span className="absolute -bottom-1 left-0 w-full h-px bg-accent scale-x-0 group-hover/email:scale-x-100 transition-transform duration-300 origin-left" />
                                    </a>
                                </p>

                                {/* Social Media Links */}
                                <div className="space-y-3">
                                    <p className="text-muted-foreground">
                                        <span className="text-accent font-medium">Connect:</span>
                                    </p>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <a
                                            href="https://www.linkedin.com/in/charlespycraft"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
                                        >
                                            <div className="relative">
                                                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover/social:scale-110" />
                                                <div className="absolute inset-0 blur-md bg-accent/0 group-hover/social:bg-accent/50 transition-all duration-300 rounded-full" />
                                            </div>
                                            <span className="text-sm md:text-base hover:tracking-wider transition-all duration-300">
                                                Charles Pycraft
                                            </span>
                                        </a>

                                        <span className="text-accent/50">▸</span>

                                        <a
                                            href="https://x.com/amplisense0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
                                        >
                                            <div className="relative">
                                                <Twitter className="w-5 h-5 transition-transform duration-300 group-hover/social:scale-110" />
                                                <div className="absolute inset-0 blur-md bg-accent/0 group-hover/social:bg-accent/50 transition-all duration-300 rounded-full" />
                                            </div>
                                            <span className="text-sm md:text-base hover:tracking-wider transition-all duration-300">
                                                @amplisense0
                                            </span>
                                        </a>

                                        <span className="text-accent/50">▸</span>

                                        <a
                                            href="https://wa.me/447967224385"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/social flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
                                        >
                                            <div className="relative">
                                                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover/social:scale-110" />
                                                <div className="absolute inset-0 blur-md bg-accent/0 group-hover/social:bg-accent/50 transition-all duration-300 rounded-full" />
                                            </div>
                                            <span className="text-sm md:text-base hover:tracking-wider transition-all duration-300">
                                                +44 7967 224 385
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground/70 italic flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    Secure communication available upon request.
                                </p>
                            </div>
                        </section>
                    </RevealSection>

                    {/* Footer Disclaimer */}
                    <RevealSection delay={600}>
                        <footer className="relative pt-12 mt-12">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '200ms' }} />
                                <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '400ms' }} />
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground/60 leading-relaxed text-center max-w-3xl mx-auto hover:text-muted-foreground/80 transition-colors duration-300">
                                Amplisense operates independently, in coordination with verified legal and investigative partners, to facilitate the lawful analysis and disclosure of information.
                            </p>
                        </footer>
                    </RevealSection>
                </main>
            </div>
        </>
    );
}
