import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const aboutStats = [
  { label: "Years of experience", value: "2+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Companies worked with", value: "3+" },
];

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue.js",
  "NgPrime",
  "DaisyUI",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel Blade",
];

const backendSkills = [
  "Node.js",
  "Express",
  "NestJS",
  "Laravel",
  "PHP",
  "ASP.NET Core",
  "Spring Boot",
  "REST APIs",
  "Microservices",
];

const mobileSkills = ["Flutter"];

const databaseSkills = [
  "Microsoft SQL Server",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "TypeORM",
];

const cloudSkills = [
  "Heroku",
  "Netlify",
  "Vercel",
  "Linode",
  "Digital Ocean",
  "Azure",
];

const devopsSkills = [
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "GitLab CI",
  "Jenkins",
  "Nginx",
];

const projects = [
  {
    title: "TRC Service",
    description:
      "Web Application Portal For Request Applying For Permit, Certificate or Other Licenses From Telecommunication Regulator of Cambodia.",
    image: "/assets/trc_service.png",
    href: "https://service.trc.gov.kh/#/",
  },
  {
    title: "Ministry Culture and Fine Arts - Human Resource",
    description:
      "A website/web application for store/download juridical document and posting blogs.",
    image: "/assets/mcfa.jpg",
    href: "",
  },
  {
    title: "National Authority For Sambor Prei Kuk - Navigation Management",
    description:
      "Web Application for managing naviagation people request document",
    image: "/assets/naspk.png",
    href: "",
  },
  {
    title:
      "National Authority For Sambor Prei Kuk - Land Use Information Management",
    description: "Web Application for managing land use request document",
    image: "/assets/lui_naspk.png",
    href: "",
  },
  {
    title: "STOP DOMESTIC VIOLENCE",
    description: "A website/web app for manage and report domestic violence.",
    image: "/assets/sdv.png",
    href: "",
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "Devops",
    description:
      "Deploying finish products to cloud/vps server using CI/CD pipeline.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />
        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className={styles.intro}
          >
            <motion.div
              variants={item}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </motion.div>
            <motion.div variants={item}>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Sovandy Khgney.
                </span>
              </h1>
              <motion.p
                variants={item}
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </motion.p>
            </motion.div>
            <motion.span
              variants={item}
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link target="_blank" href="https://t.me/SovandyKH" passHref>
                <Button //whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </motion.span>

            <motion.div
              variants={item}
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <motion.h2 
              variants={slideUp}
              className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]"
            >
              I&apos;m{" "}
              <span className="clash-grotesk text-gradient font-bold">
                Khgney Sovandy
              </span>
              , a passionate Full Stack Web Developer by heart. I enjoy building
              modern web applications that solve real-world problems and enhance
              user experiences. With a strong foundation in both frontend and
              backend development, I specialize in frameworks like Angular, and
              React on the frontend, and ASP.NET Core, NestJS, and Spring Boot
              on the backend.
            </motion.h2>
            <motion.div 
              variants={container}
              className="grid grid-cols-2 gap-8 xl:grid-cols-3"
            >
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={item}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-scroll-section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            data-scroll
            data-scroll-speed=".4"
          >
            <motion.span variants={item} className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🛠️ Skills
            </motion.span>
            <motion.h2 variants={item} className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Technologies I work with.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-base tracking-tight text-muted-foreground xl:text-lg">
              Here are the technologies and tools I&apos;m working/learning in.
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="mt-10"
            >
              <TabView>
                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-desktop" />
                      <span>Frontend</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {frontendSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>

                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-server" />
                      <span>Backend</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {backendSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>

                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-mobile" />
                      <span>Mobile</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {mobileSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>

                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-database" />
                      <span>Database</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {databaseSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>

                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-cloud" />
                      <span>Cloud</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {cloudSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>

                <TabPanel
                  header={
                    <div className="flex items-center gap-2">
                      <i className="pi pi-code" />
                      <span>DevOps</span>
                    </div>
                  }
                >
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {devopsSkills.map((skill) => (
                      <motion.div key={skill} variants={item}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>
              </TabView>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            data-scroll
            data-scroll-speed=".4"
          >
            <motion.span variants={item} className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </motion.span>
            <motion.h2 variants={item} className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined digital experiences.
            </motion.h2>
            <motion.p variants={item} className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </motion.p>

            {/* Enhanced Card Grid with Auto-play */}
            <motion.div 
              variants={fadeIn}
              className="mt-1"
            >
              <Carousel
                setApi={setCarouselApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                  duration: 30,
                }}
              >
                <CarouselContent className="-ml-4">
                  {projects.map((project, index) => (
                    <CarouselItem
                      key={project.title}
                      className="pl-4 md:basis-1/2 lg:basis-2/3"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        // transition={{
                        //   type: "spring",
                        //   stiffness: 300,
                        //   damping: 10,
                        // }}
                        className="h-full"
                      >
                        <Card
                          id="tilt"
                          className="hover:shadow-3xl group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:border-white/20"
                        >
                          <CardHeader className="relative p-0">
                            <Link href={project.href} target="_blank" passHref>
                              <div className="relative aspect-[16/9] w-full overflow-hidden">
                                {project.image.endsWith(".webm") ? (
                                  <video
                                    src={project.image}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                ) : (
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={675}
                                    quality={100}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                              </div>
                            </Link>
                          </CardHeader>
                          <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500">
                            <div className="translate-y-10 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                              <CardTitle className="text-2xl font-bold">
                                {project.title}
                              </CardTitle>
                              <p className="mt-2 text-lg text-white/90">
                                {project.description}
                              </p>
                              {project.href !== "" && (
                                <Button size="lg" className="mt-4" asChild>
                                  <Link href={project.href} target="_blank">
                                    View Project{" "}
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 hidden h-14 w-14 border-none bg-white/20 backdrop-blur-md hover:bg-white/30 md:flex" />
                <CarouselNext className="right-6 hidden h-14 w-14 border-none bg-white/20 backdrop-blur-md hover:bg-white/30 md:flex" />
              </Carousel>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2"
              >
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${current === index + 1 ? "w-8 bg-primary" : "bg-white/20"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col justify-start space-y-10"
          >
            <motion.div
              variants={container}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <motion.div variants={item} className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </motion.div>
              {services.map((service, index) => (
                <motion.div
                  key={service.service}
                  variants={item}
                  custom={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="mb-64">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <motion.h2 variants={item} className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </motion.h2>
            <motion.p variants={item} className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </motion.p>
            <motion.div variants={item} className="flex gap-4">
              <Link target="_blank" href="https://t.me/SovandyKH" passHref>
                <Button 
                  // whileHover={{ scale: 1.05 }} 
                  //whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  Get in touch
                </Button>
              </Link>
              <Link target="_blank" href="/files/Sovandy_Khgney.pdf" passHref>
                <Button 
                  variant="outline" 
                  // whileHover={{ scale: 1.05 }} 
                  // whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  Download Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Lower gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}