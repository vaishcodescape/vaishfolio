"use client"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS, WORK_EXPERIENCE, ACHIEVEMENTS, TECH_STACK, EMAIL, SOCIAL_LINKS } from "./data"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)
  
  // Hero Section Refs
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLParagraphElement>(null)
  const heroHeadingRef = useRef<HTMLHeadingElement>(null)
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const heroCTARef = useRef<HTMLDivElement>(null)

  // About Section Refs
  const aboutRef = useRef<HTMLElement>(null)
  const aboutContentRef = useRef<HTMLDivElement>(null)

  // Experience Section Refs
  const experienceRef = useRef<HTMLElement>(null)
  const experienceItemsRef = useRef<HTMLElement[]>([])

  // Projects Section Refs
  const projectsRef = useRef<HTMLElement>(null)
  const projectCardsRef = useRef<HTMLElement[]>([])

  // Tech Stack Section Refs
  const techStackRef = useRef<HTMLElement>(null)
  const techCategoriesRef = useRef<HTMLElement[]>([])

  // Achievements Section Refs
  const achievementsRef = useRef<HTMLElement>(null)
  const achievementItemsRef = useRef<HTMLElement[]>([])

  // Contact Section Refs
  const contactRef = useRef<HTMLElement>(null)
  const contactLinksRef = useRef<HTMLElement[]>([])
  const resumeButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Wait for ScrollSmoother to be ready
    const initAnimations = () => {
      // Refresh ScrollTrigger to ensure proper calculations with ScrollSmoother
      ScrollTrigger.refresh()

      // Hero Section Animation - Staggered Text Reveal
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      if (heroTitleRef.current) {
        gsap.set(heroTitleRef.current, { opacity: 0, y: 20 })
        heroTl.to(heroTitleRef.current, { opacity: 1, y: 0, duration: 0.6 })
      }

      if (heroHeadingRef.current) {
        // Split heading into words for character reveal
        const words = heroHeadingRef.current.textContent?.split(" ") || []
        heroHeadingRef.current.innerHTML = words
          .map((word, i) => `<span style="display: inline-block; opacity: 0; transform: translateY(20px);" data-word="${i}">${word}</span>`)
          .join(" ")

        const wordSpans = heroHeadingRef.current.querySelectorAll("span")
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "power2.out",
        })
      }

      if (heroImageRef.current) {
        gsap.set(heroImageRef.current, { opacity: 0, scale: 0.8 })
        heroTl.to(heroImageRef.current, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.4")
      }

      if (heroDescriptionRef.current) {
        gsap.set(heroDescriptionRef.current, { opacity: 0, y: 20 })
        heroTl.to(heroDescriptionRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      }

      // Parallax effect on scroll for hero - gentler parallax
      if (heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (heroHeadingRef.current) {
              const progress = self.progress
              gsap.set(heroHeadingRef.current, {
                y: progress * 20,
                opacity: Math.max(0.7, 1 - progress * 0.2),
              })
            }
          },
        })
      }

      // About Section - Smooth slide-up with better intersection
      if (aboutRef.current && aboutContentRef.current) {
        gsap.set(aboutContentRef.current, { opacity: 0, y: 50 })
        ScrollTrigger.create({
          trigger: aboutRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          animation: gsap.to(aboutContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }),
        })
      }

      // Experience Section - Staggered Scroll Reveal with smooth intersection
      experienceItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.set(item, { opacity: 0, x: -40 })
          
          ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            animation: gsap.to(item, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              delay: index * 0.08,
              ease: "power2.out",
            }),
          })

          // Hover animation for experience items
          const handleMouseEnter = () => {
            gsap.to(item, {
              x: 5,
              duration: 0.3,
              ease: "power2.out",
            })
          }
          const handleMouseLeave = () => {
            gsap.to(item, {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }
          
          item.addEventListener("mouseenter", handleMouseEnter)
          item.addEventListener("mouseleave", handleMouseLeave)
        }
      })

      // Projects Section - Staggered Card Reveals with better intersection
      projectCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.set(card, { opacity: 0, y: 60, scale: 0.92 })
          
          ScrollTrigger.create({
            trigger: card,
            start: "top 82%",
            end: "top 45%",
            toggleActions: "play none none reverse",
            animation: gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: index * 0.08,
              ease: "power3.out",
            }),
          })

          // Hover lift effect
          const cardLink = card.querySelector("a")
          if (cardLink) {
            const handleMouseEnter = () => {
              gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: "power2.out",
              })
            }
            const handleMouseLeave = () => {
              gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              })
            }
            
            cardLink.addEventListener("mouseenter", handleMouseEnter)
            cardLink.addEventListener("mouseleave", handleMouseLeave)
          }
        }
      })

      // Tech Stack Section - Timeline-based Entrance with smooth reveal
      if (techStackRef.current && techCategoriesRef.current.length > 0) {
        const techTl = gsap.timeline({ paused: true })
        
        techCategoriesRef.current.forEach((category, index) => {
          if (category) {
            gsap.set(category, { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 })
            techTl.to(
              category,
              {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
              },
              index * 0.1
            )
          }
        })

        ScrollTrigger.create({
          trigger: techStackRef.current,
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          animation: techTl,
        })
      }

      // Achievements Section - Smooth scroll-triggered Animation
      achievementItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.set(item, { opacity: 0, x: -40 })
          
          ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            animation: gsap.to(item, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.06,
              ease: "power2.out",
            }),
          })

          // Border animation on hover
          const handleMouseEnter = () => {
            gsap.to(item, {
              borderLeftWidth: "4px",
              x: 4,
              duration: 0.3,
              ease: "power2.out",
            })
          }
          const handleMouseLeave = () => {
            gsap.to(item, {
              borderLeftWidth: "2px",
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }
          
          item.addEventListener("mouseenter", handleMouseEnter)
          item.addEventListener("mouseleave", handleMouseLeave)
        }
      })

      // Contact Section - Micro-interactions with smooth reveal
      contactLinksRef.current.forEach((link, index) => {
        if (link) {
          gsap.set(link, { opacity: 0, y: 30, scale: 0.9 })
          
          ScrollTrigger.create({
            trigger: link,
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
            animation: gsap.to(link, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.1,
              ease: "back.out(1.3)",
            }),
          })

          // Hover micro-interactions
          const handleMouseEnter = () => {
            gsap.to(link, {
              scale: 1.05,
              y: -3,
              duration: 0.3,
              ease: "power2.out",
            })
            const icon = link.querySelector("svg")
            if (icon) {
              gsap.to(icon, {
                x: 3,
                y: -3,
                duration: 0.3,
                ease: "power2.out",
              })
            }
          }
          const handleMouseLeave = () => {
            gsap.to(link, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            })
            const icon = link.querySelector("svg")
            if (icon) {
              gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              })
            }
          }
          
          link.addEventListener("mouseenter", handleMouseEnter)
          link.addEventListener("mouseleave", handleMouseLeave)
        }
      })

      // Resume Button Animation with smooth reveal
      if (resumeButtonRef.current) {
        gsap.set(resumeButtonRef.current, { opacity: 0, scale: 0.85, y: 20 })
        
        ScrollTrigger.create({
          trigger: resumeButtonRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          animation: gsap.to(resumeButtonRef.current, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.4)",
          }),
        })

        const button = resumeButtonRef.current
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            y: -3,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            duration: 0.3,
            ease: "power2.out",
          })
          const icon = button.querySelector("svg")
          if (icon) {
            gsap.to(icon, {
              x: 3,
              y: -3,
              rotation: 5,
              duration: 0.3,
              ease: "power2.out",
            })
          }
        }
        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out",
          })
          const icon = button.querySelector("svg")
          if (icon) {
            gsap.to(icon, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }
        }
        
        button.addEventListener("mouseenter", handleMouseEnter)
        button.addEventListener("mouseleave", handleMouseLeave)
      }
    }

    // Small delay to ensure DOM is ready and ScrollSmoother is initialized
    const timeoutId = setTimeout(() => {
      initAnimations()
      // Refresh on resize
      const handleResize = () => {
        ScrollTrigger.refresh()
      }
      window.addEventListener("resize", handleResize)
      
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main ref={mainRef} className="space-y-24">
      {/* Hero Section */}
      <section ref={heroRef} className="space-y-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 flex-1">
            <p
              ref={heroTitleRef}
              className="text-sm uppercase tracking-wider text-muted-foreground"
            >
              Full Stack Developer
            </p>
            <h2
              ref={heroHeadingRef}
              className="text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Building polished software and web experiences.
            </h2>
          </div>
          <div
            ref={heroImageRef}
            className="relative h-32 w-32 shrink-0 md:h-40 md:w-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border">
              <Image
                src="/profile_pic.jpeg"
                alt="Aditya Vaishampayan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <p
          ref={heroDescriptionRef}
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          I&apos;m a Full Stack Developer passionate about building scalable software
          and integrating AI/ML with DevOps. Currently pursuing my undergrad in ICT at
          Dhirubhai Ambani University, I love contributing to open source and tinkering
          with new technologies.
        </p>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="space-y-6">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          About
        </h3>
        <div
          ref={aboutContentRef}
          className="space-y-4 text-base leading-relaxed text-foreground"
        >
          <p>
            I&apos;m always looking for new challenges, especially in building SaaS
            products with the potential to create a lasting impact. My work spans
            full-stack development, cloud infrastructure, and machine learning
            integration.
          </p>
          <p>
            In the past, I&apos;ve had the opportunity to develop software across a
            variety of settings — from advertising agencies and large corporations to
            start-ups and small digital product studios.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          Experience
        </h3>
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((job, index) => (
            <a
              key={job.id}
              ref={(el) => {
                if (el) experienceItemsRef.current[index] = el
              }}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                      {job.title}
                    </h4>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right whitespace-nowrap">
                  {job.start} — {job.end}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2 md:auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                if (el) projectCardsRef.current[index] = el
              }}
              className="group relative h-full"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col space-y-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h4>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground grow">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techStackRef} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </h3>
        <div className="grid gap-8 md:grid-cols-2 md:auto-rows-fr">
          {TECH_STACK.map((category, index) => (
            <div
              key={category.category}
              ref={(el) => {
                if (el) techCategoriesRef.current[index] = el
              }}
              className="space-y-3"
            >
              <h4 className="text-sm font-medium text-foreground">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          Achievements
        </h3>
        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={achievement.uid}
              ref={(el) => {
                if (el) achievementItemsRef.current[index] = el
              }}
              className="space-y-2 border-l-2 border-border pl-4 transition-colors hover:border-accent"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <h4 className="font-medium text-foreground">{achievement.title}</h4>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {achievement.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="space-y-8">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
          Connect
        </h3>
        <div className="space-y-6">
          <p className="text-base text-foreground">
            Feel free to contact me at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={link.label}
                ref={(el) => {
                  if (el) contactLinksRef.current[index] = el
                }}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="flex justify-center pb-12">
        <a
          ref={resumeButtonRef}
          href="/Aditya Vaish Resume.pdf"
          download="Aditya Vaish Resume.pdf"
          className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-lg transition-all hover:shadow-xl"
        >
          Download Resume
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </section>
    </main>
  )
}