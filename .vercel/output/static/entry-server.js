import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useRef, useEffect, useState } from "react";
import { renderToPipeableStream } from "react-dom/server";
import Lenis from "lenis";
import gsap$1, { gsap } from "gsap";
import parse from "html-react-parser";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";
const Intro = () => {
  const svgRef = useRef(null);
  const introRef = useRef(null);
  useEffect(() => {
    var _a, _b;
    const svg = svgRef.current;
    if (svg) {
      const viewBox = (_a = svg.getAttribute("viewBox")) == null ? void 0 : _a.split(" ");
      if (viewBox) {
        const ratio = parseFloat(viewBox[2]) / parseFloat(viewBox[3]);
        const containerWidth = ((_b = svg.parentElement) == null ? void 0 : _b.clientWidth) || 0;
        const containerHeight = containerWidth / ratio;
        svg.setAttribute("width", containerWidth.toString());
        svg.setAttribute("height", containerHeight.toString());
      }
      gsap.to(svg, { opacity: 1, duration: 1 });
      gsap.fromTo(
        "#animate path, #animate line",
        { strokeDasharray: 2e3, strokeDashoffset: 2e3 },
        { strokeDashoffset: 0, duration: 16 }
      );
      gsap.to(introRef.current, { opacity: 1, delay: 1.5, ease: "power3.out", duration: 2 });
    }
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "svgintro", className: "intro-section  w-full m-0 p-4 sm:p-0", children: [
    /* @__PURE__ */ jsx("div", { className: "svg-container w-full h-auto pb-16 sm:w-400px mb-[-15%] sm:mb-0", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        ref: svgRef,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 874.13 130",
        className: "w-full h-auto responsive-svg",
        children: [
          /* @__PURE__ */ jsx("title", { children: "S DINESH KUMAR" }),
          /* @__PURE__ */ jsxs("g", { id: "animate", children: [
            /* @__PURE__ */ jsx(
              "line",
              {
                className: "cls-1",
                x1: "9.37",
                x2: "9.37",
                y2: "121",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "line",
              {
                className: "cls-1",
                y1: "58.56",
                x2: "95.13",
                y2: "58.56",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "line",
              {
                className: "cls-1",
                x1: "85.48",
                x2: "85.48",
                y2: "120.56",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                className: "cls-1",
                d: "M110.81,74.94h76.45s0-35.2-31.63-35.2c0,0-34.26-1.88-34.26,33.88,0,0-.18,39.91,34.26,39.91,27.59,0,31.63-24.47,31.63-24.47",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "line",
              {
                className: "cls-1",
                x1: "222.34",
                x2: "222.34",
                y2: "121.21",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "line",
              {
                className: "cls-1",
                x1: "262.34",
                x2: "262.34",
                y2: "121.21",
                stroke: "#000",
                strokeMiterlimit: "10",
                strokeWidth: "21px",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                className: "cls-1",
                d: "M325.09,41H334c19.44.69,33.08,15.37,33.08,35.75,0,20.88-14.31,35.78-34.52,35.78-20.37,0-34.52-14.9-34.52-35.78,0-20.1,13.12-34.67,32.28-35.72",
                stroke: "#000",
                strokeWidth: "21px",
                fill: "none"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "intro text-left mt-4 sm:mt-0", ref: introRef, children: [
      /* @__PURE__ */ jsxs("strong", { className: "pb-8", children: [
        "My name is S Dinesh Kumar, aka Supah, short for Supahfunk: Code Meets Creativity. ",
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "leading-relaxed max-sm:text-3xl max-sm:leading-loose", children: [
        "I am an Indian multidisciplinary creative full-stack developer with over 1 years of experience through personal projects and continuous learning.",
        /* @__PURE__ */ jsx("br", {}),
        "I have a creative mind inclined to learn something new every day to develop solutions and experiences with a strong visual impact.",
        /* @__PURE__ */ jsx("br", {}),
        "I love to work with an incredible team to build the future together."
      ] })
    ] })
  ] });
};
const useGsapReveal = (delay = 0, duration = 2) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, { opacity: 1, delay, ease: "power3.out", duration });
    }
  }, [delay, duration]);
  return ref;
};
const ExperienceItem = ({ startDate, endDate, title, company }) => /* @__PURE__ */ jsxs("div", { className: "experience-item", children: [
  /* @__PURE__ */ jsxs("div", { className: "experience-dates pt-4 md:pt-8", children: [
    startDate,
    " - ",
    endDate
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "experience-title font-medium pb-4 md:pb-8", children: [
    title,
    " @ ",
    company
  ] }),
  /* @__PURE__ */ jsx("hr", { className: "border-1 border-black" })
] });
const Experience = () => {
  const experienceRef = useGsapReveal(2.2);
  const experience = [
    {
      startDate: "Feb 2023",
      endDate: "June 2023",
      title: "SEO & React js Developer Internship",
      company: "NXG Solutions"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "experience-section text-left w-full opacity-0", ref: experienceRef, children: [
    /* @__PURE__ */ jsx("h1", { className: "experience-heading mt-10 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium", children: "Experience" }),
    experience.map((exp, index) => /* @__PURE__ */ jsx(ExperienceItem, { ...exp }, index))
  ] });
};
const Work = ({
  link,
  name,
  image,
  nameClass,
  containerClass,
  imageClass,
  imageStyle,
  overlayClass,
  alt
}) => {
  const $root = useRef(null);
  const $overlay = useRef(null);
  const $link = useRef(null);
  const $image = useRef(null);
  const handleMouseEnter = (e) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;
    if ($link.current) {
      gsap$1.to($link.current, {
        x: "2.5rem",
        color: "#fff",
        duration: 0.5,
        ease: "power3.out"
      });
    }
    if ($image.current) {
      gsap$1.to($image.current, {
        filter: "invert(1)",
        duration: 0.5
      });
    }
    if ($overlay.current) {
      gsap$1.fromTo(
        $overlay.current,
        {
          scaleY: 0,
          transformOrigin: top ? "0 0" : "0 100%"
        },
        {
          scaleY: 1,
          duration: 0.5,
          ease: "power3.out"
        }
      );
    }
  };
  const handleMouseLeave = (e) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;
    const elements = [$overlay.current, $link.current, $image.current].filter((el) => el !== null);
    gsap$1.killTweensOf(elements);
    if ($link.current) {
      gsap$1.to($link.current, {
        x: 0,
        color: "#000",
        duration: 0.3,
        ease: "power3.out"
      });
    }
    if ($image.current) {
      gsap$1.to($image.current, {
        filter: "invert(0)",
        duration: 0.3,
        ease: "power3.out"
      });
    }
    if ($overlay.current) {
      gsap$1.to($overlay.current, {
        scaleY: 0,
        transformOrigin: top ? "0 0" : "0 100%",
        duration: 0.7,
        ease: "power3.out"
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      ref: $root,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: `relative flex items-center ${containerClass}`,
      children: [
        image && /* @__PURE__ */ jsx(
          "img",
          {
            ref: $image,
            src: image,
            alt,
            className: imageClass,
            style: imageStyle
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: nameClass,
            ref: $link,
            children: parse(name)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: overlayClass, ref: $overlay })
      ]
    }
  );
};
const meta = "/assets/meta-Ba9IQJUZ.webp";
const ibmImage = "data:image/avif;base64,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";
const certificate_3 = "/assets/certificate_3-M7cVbck0.webp";
const certificate_4 = "/assets/certificate_4-CP5Ez1jL.webp";
const Certificates = () => {
  const workItems = [
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Meta Front-End Developer Professional",
      image: meta,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "Meta Front-End Developer Certificate"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2",
      name: "IBM Back-end JavaScript Developer Professional",
      image: ibmImage,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "IBM Back-end JavaScript Developer Certificate"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB",
      name: "Search Engine Optimization (SEO) Specializations",
      image: certificate_3,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "SEO Certificate"
    },
    {
      link: "https://example.com",
      name: "UI Fullstack With React js By -- Sudhakar Sharma Sir",
      image: certificate_4,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "Example Project Certificate"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium", children: "Professional Certificates" }),
    workItems.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `border-b border-black mb-0 ${index === 0 ? "border-t" : ""}`,
        children: /* @__PURE__ */ jsx(
          Work,
          {
            ...item,
            nameClass: "font-medium text-2xl sm:text-3xl lg:text-5xl ml-2 sm:ml-4 max-sm:text-start pl-2",
            containerClass: "w-full h-40 max-sm:h-32 flex items-center",
            imageClass: `ml-2 sm:ml-4 ${item.imageStyle}`,
            imageStyle: {},
            overlayClass: "absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          }
        )
      },
      item.name
    ))
  ] });
};
const proj_1 = "/assets/proj_1-DZllk2yI.webp";
const proj_2 = "/assets/proj_2-CTHZlyyr.webp";
const proj_3 = "/assets/proj_3-DxzVrDvG.webp";
const proj_4 = "/assets/proj_4-Pu3FUy30.webp";
const proj_5 = "/assets/proj_5-C5xpCagt.webp";
const Projects = () => {
  const workItems = [
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Coming soon . . .",
      image: proj_1,
      imageStyle: "w-32 h-24",
      // Changed to Tailwind classes
      alt: "Meta Project"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2",
      name: "Coming soon . . .",
      image: proj_2,
      imageStyle: "w-32 h-24",
      // Changed to Tailwind classes
      alt: "IBM Project"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB",
      name: "Coming soon . . .",
      image: proj_3,
      imageStyle: "w-32 h-24",
      // Changed to Tailwind classes
      alt: "SEO Project"
    },
    {
      link: "https://example.com",
      name: "Coming soon . . .",
      image: proj_4,
      imageStyle: "w-32 h-24",
      // Changed to Tailwind classes
      alt: "Example Project"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Coming soon . . .",
      image: proj_5,
      imageStyle: "w-32 h-24",
      // Changed to Tailwind classes
      alt: "Meta Project"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "projects-section flex flex-col  w-full", children: [
    /* @__PURE__ */ jsx("h1", { className: "projects-heading text-start text-6xl mb-4 mt-24 md:mt-20 md:mb-6  md:text-8xl font-medium", children: "Projects" }),
    /* @__PURE__ */ jsx("p", { className: "projects-description text-start font-light pb-14 pt-2", children: "Projects are in development. Their listing will be available soon." }),
    /* @__PURE__ */ jsx("div", { className: "projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-4", children: workItems.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `project-item border-b border-black mb-0 ${index === 0 ? "border-t" : ""} ${index === 1 ? "md:border-t" : ""}`,
        children: /* @__PURE__ */ jsx(
          Work,
          {
            ...item,
            nameClass: "font-medium text-2xl md:text-4xl ml-4",
            containerClass: "w-full h-32 flex items-center",
            imageClass: `ml-4 ${item.imageStyle}`,
            imageStyle: {},
            overlayClass: "absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          }
        )
      },
      item.name
    )) })
  ] });
};
const Contact = () => {
  const workItems = [
    {
      link: "mailto:sdineshk7899@gmail.com",
      name: "Email: sdineshk7899@gmail.com",
      alt: "Email",
      image: ""
      // Add an empty string or a default image URL
    },
    {
      link: "https://www.linkedin.com/in/sdineshku",
      name: "LinkedIn",
      alt: "LinkedIn Profile",
      image: ""
      // Add an empty string or a default image URL
    },
    {
      link: "https://github.com/sdineshku",
      name: "GitHub",
      alt: "GitHub Profile",
      image: ""
      // Add an empty string or a default image URL
    },
    {
      link: "/path/to/resume.pdf",
      name: "Download Resume",
      alt: "Resume",
      image: ""
      // Add an empty string or a default image URL
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "contact-section flex h-28  flex-col w-full", children: [
    /* @__PURE__ */ jsx("h1", { className: "contact-heading text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium", children: "Contact" }),
    workItems.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `contact-item border-b border-black mb-0 ${index === 0 ? "border-t" : ""}`,
        children: /* @__PURE__ */ jsx(
          Work,
          {
            ...item,
            nameClass: "font-normal text-2xl",
            containerClass: "w-full h-24",
            imageClass: "ml-4",
            overlayClass: "absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          }
        )
      },
      index
    )),
    /* @__PURE__ */ jsx("h2", { className: "thank-you-message py-20 text-start text-2xl font-bold", children: "👋 Thank you." })
  ] });
};
const Layout = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "header-section w-full", children: /* @__PURE__ */ jsx(Intro, {}) }),
    /* @__PURE__ */ jsxs("main", { className: "main-section w-full", children: [
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Certificates, {}),
      /* @__PURE__ */ jsx(Projects, {})
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer-section w-full", children: /* @__PURE__ */ jsx(Contact, {}) })
  ] });
};
const Loading = () => {
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber < 100 ? prevNumber + 1 : 1);
    }, 10);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2e3);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  if (!loading) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "loading-container", children: /* @__PURE__ */ jsx("div", { className: "number", children: number }) });
};
const Popup = ({ onClose }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-lg p-6 mx-10 w-full", children: [
    /* @__PURE__ */ jsx("p", { className: "text-4xl font-medium mb-5", children: "For awesome experience, please view on desktop . " }),
    /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold text-green-500 mb-5", children: "Please Continue Thankyou.." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "bg-slate-800 text-white font-medium px-8 py-4 rounded-full ",
        children: "Close"
      }
    )
  ] }) });
};
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 1e3);
    inject();
    return () => {
      lenis.destroy();
    };
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-sm:h-[2700px]", children: [
    /* @__PURE__ */ jsx(Layout, {}),
    /* @__PURE__ */ jsx(SpeedInsights, {}),
    showPopup && /* @__PURE__ */ jsx(Popup, { onClose: () => setShowPopup(false) }),
    " "
  ] });
}
function render(_url, _ssrManifest, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }),
    options
  );
}
export {
  render
};
