"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "@/content/projects";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Card } from "@/components/ui/card";
import { LazyVideo } from "@/components/ui/lazy-video";
import { getCopy } from "@/lib/get-copy";
import type { Project, ProjectCategory, ProjectStatus } from "@/content/types";

const statusStyles: Record<ProjectStatus, string> = {
  deployed: "bg-emerald-400/15 text-emerald-300",
  "in-development": "bg-amber-400/15 text-amber-300",
  academic: "bg-sky-400/15 text-sky-300",
};

const categoryOrder: ProjectCategory[] = ["featured", "ai", "engineering"];

export function ProjectsSection() {
  const { dictionary } = useLanguage();

  const grouped = categoryOrder.map((category) => ({
    category,
    items: projects.filter((project) => project.category === category),
  }));

  return (
    <Section
      id="projects"
      title={dictionary.projects.title}
      subtitle={dictionary.projects.subtitle}
    >
      <p className="mb-8 text-sm text-white/60">{dictionary.projects.note}</p>
      <div className="space-y-16">
        {grouped.map(({ category, items }) => {
          if (items.length === 0) return null;
          const isFeatured = category === "featured";
          const title = dictionary.projects.categories[category];
          return (
            <div key={category} className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <div
                className={
                  isFeatured
                    ? "grid gap-6 lg:grid-cols-2"
                    : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {items.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    featured={isFeatured}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const { dictionary } = useLanguage();
  const title = getCopy(dictionary, project.titleKey);
  const description = getCopy(dictionary, project.descriptionKey);
  const poster = project.media?.poster;
  const video = project.media?.video;
  const isVerticalVideo = video?.aspect === "9/16";
  const isMediaBelow = project.mediaPlacement === "below";
  const statusLabel =
    project.status === "deployed"
      ? dictionary.projects.status.deployed
      : project.status === "in-development"
        ? dictionary.projects.status.inDevelopment
        : dictionary.projects.status.academic;

  // Desktop-only tilt effect
  const [isTouch, setIsTouch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.10), transparent 65%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-relY * 11);
    rotateY.set(relX * 11);
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
      className="h-full"
    >
      <motion.div
        style={
          isTouch
            ? {}
            : {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 900,
              }
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="relative h-full"
      >
        <Card
          className={
            featured
              ? "group relative flex h-full flex-col gap-6 overflow-hidden bg-white/10 p-8"
              : "group relative flex h-full flex-col gap-5 overflow-hidden"
          }
        >
          {/* Glare overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
            style={{ background: glareBackground }}
            animate={{ opacity: isHovered && !isTouch ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Existing ambient hover glow */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-accent/20 blur-[80px]" />
            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-[60px]" />
          </div>

          {isMediaBelow ? (
            <>
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h4
                    className={
                      featured
                        ? "text-2xl font-semibold text-white"
                        : "text-lg font-semibold text-white"
                    }
                  >
                    {title}
                  </h4>
                  <p className="mt-3 text-sm text-white/70">{description}</p>
                </div>
                <Badge className={statusStyles[project.status]} variant="status">
                  {statusLabel}
                </Badge>
              </div>
              {video && isVerticalVideo ? (
                <div className="relative mx-auto w-full max-w-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-black/20 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.8)] sm:max-w-[200px] lg:max-w-[220px]">
                  <LazyVideo
                    src={video.src}
                    poster={video.posterSrc}
                    ariaLabel={getCopy(dictionary, video.altKey)}
                    aspect="9/16"
                    muted={video.muted}
                    lockMuted={video.lockMuted}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ) : video ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <LazyVideo
                    src={video.src}
                    poster={video.posterSrc}
                    ariaLabel={getCopy(dictionary, video.altKey)}
                    aspect={video.aspect ?? (featured ? "16/10" : "4/3")}
                    muted={video.muted}
                    lockMuted={video.lockMuted}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ) : poster ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div className={featured ? "aspect-[16/10]" : "aspect-[4/3]"}>
                    <Image
                      src={poster.src}
                      alt={getCopy(dictionary, poster.altKey)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes={
                        featured
                          ? "(min-width: 1024px) 38vw, (min-width: 768px) 80vw, 92vw"
                          : "(min-width: 1024px) 24vw, (min-width: 768px) 40vw, 90vw"
                      }
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ) : null}
            </>
          ) : (
            <>
              {video && isVerticalVideo ? (
                <div className="relative mx-auto w-full max-w-[180px] overflow-hidden rounded-[26px] border border-white/10 bg-black/20 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.8)] sm:max-w-[200px] lg:max-w-[220px]">
                  <LazyVideo
                    src={video.src}
                    poster={video.posterSrc}
                    ariaLabel={getCopy(dictionary, video.altKey)}
                    aspect="9/16"
                    muted={video.muted}
                    lockMuted={video.lockMuted}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ) : video ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <LazyVideo
                    src={video.src}
                    poster={video.posterSrc}
                    ariaLabel={getCopy(dictionary, video.altKey)}
                    aspect={video.aspect ?? (featured ? "16/10" : "4/3")}
                    muted={video.muted}
                    lockMuted={video.lockMuted}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ) : poster ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <div className={featured ? "aspect-[16/10]" : "aspect-[4/3]"}>
                    <Image
                      src={poster.src}
                      alt={getCopy(dictionary, poster.altKey)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes={
                        featured
                          ? "(min-width: 1024px) 38vw, (min-width: 768px) 80vw, 92vw"
                          : "(min-width: 1024px) 24vw, (min-width: 768px) 40vw, 90vw"
                      }
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ) : null}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h4
                    className={
                      featured
                        ? "text-2xl font-semibold text-white"
                        : "text-lg font-semibold text-white"
                    }
                  >
                    {title}
                  </h4>
                  <p className="mt-3 text-sm text-white/70">{description}</p>
                </div>
                <Badge className={statusStyles[project.status]} variant="status">
                  {statusLabel}
                </Badge>
              </div>
            </>
          )}

          <div className="relative mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.demo ? (
                <Magnetic strength={0.3}>
                  <Button
                    href={project.links.demo}
                    variant="highlight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.projects.links.liveDemo}
                  </Button>
                </Magnetic>
              ) : project.status === "in-development" ? (
                <span className="inline-flex items-center rounded-full border border-dashed border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {dictionary.projects.links.comingSoon}
                </span>
              ) : null}
              {project.links.repo ? (
                <Button
                  href={project.links.repo}
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dictionary.projects.links.repo}
                </Button>
              ) : null}
              {project.links.caseStudy ? (
                <Button href={project.links.caseStudy} variant="ghost">
                  {dictionary.projects.links.caseStudy}
                </Button>
              ) : null}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
