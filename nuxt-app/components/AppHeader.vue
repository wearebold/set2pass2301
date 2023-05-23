<template>
  <header ref="siteHeader" class="site-header | py-5 fixed top-0 x-0 w-full">
    <div
      class="l-container l-container--1440 | flex justify-between items-center"
    >
      <div>
        <nuxt-link to="/" rel="home" aria-label="Home Page">
          <svg
            class="site-brand w-full"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1200 91"
          >
            <g clip-path="url(#a)">
              <path
                fill="#130902"
                d="M234.798 61.7337c0 16.7063-15.854 28.3211-45.88 28.3211-21.423 0-38.856-6.0574-51.801-17.0699l11.138-13.1946c10.41 9.5578 23.843 14.0356 41.152 14.0356 17.308 0 25.9-3.2731 25.9-10.2852s-8.717-8.9555-28.207-10.6488c-24.207-2.0571-46.721-7.3872-46.721-25.5368S159.267 0 185.406 0c18.525 0 34.493 4.60275 45.266 12.9559l-10.648 13.4332c-9.32-7.1371-20.821-10.0465-34.618-10.1715-11.501-.125-25.536 1.932-25.536 9.6828 0 7.2621 12.103 7.9895 28.934 9.3192 26.992 2.182 45.994 7.8644 45.994 26.5141Zm92.522 9.4336 12.853 16.2289h-86.066V2.66016h86.066L327.32 18.8777h-53.961v17.4337h55.802V52.529h-55.802v18.6383h53.961ZM453.013 2.66016l-13.24 16.70624h-23.798v68.0298H396.61V19.3664h-36.799l13.24-16.70624h79.962ZM603.064 45.0274C603.064 16.7063 623.885 0 656.934 0c33.049 0 53.869 16.7063 53.869 45.0274s-20.82 45.0274-53.869 45.0274-53.87-16.7063-53.87-45.0274Zm87.998 0c0-18.161-13.194-28.3211-34.14-28.3211-20.945 0-34.128 10.1715-34.128 28.3211s13.069 28.3211 34.128 28.3211c21.059 0 34.14-10.1715 34.14-28.3211Zm175.88-13.6825c0 18.7634-14.524 28.6848-36.31 28.6848h-38.618v27.3551h-19.366V2.66016h57.984c21.786 0 36.31 10.17154 36.31 28.68474Zm-19.729.1251c0-9.6829-7.262-12.5923-18.161-12.5923h-37.038v25.1731h37.038c10.888 0 18.161-2.9094 18.161-12.5922v.0114Zm99.283 38.0039h-51.199l-9.08 17.9109h-20.696l44.903-84.72464h21.184L976.51 87.3848h-20.945l-9.081-17.9109h.012Zm-8.115-15.7403-17.547-34.4922-17.547 34.4922h35.106-.012Zm144.299 8.0001c0 16.7063-15.85 28.3211-45.88 28.3211-21.42 0-38.854-6.0574-51.798-17.0699l11.137-13.1946c10.411 9.5578 23.841 14.0356 41.151 14.0356 17.31 0 25.9-3.2731 25.9-10.2852s-8.71-8.9555-28.21-10.6488c-24.2-2.0571-46.716-7.3872-46.716-25.5368S1007.15 0 1033.29 0c18.51 0 34.49 4.60275 45.27 12.9559l-10.65 13.4332c-9.32-7.1371-20.82-10.0465-34.62-10.1715-11.5-.125-25.54 1.932-25.54 9.6828 0 7.2621 12.11 7.9895 28.94 9.3192 26.99 2.182 45.99 7.8644 45.99 26.5141Zm117.32 0c0 16.7063-15.85 28.3211-45.88 28.3211-21.42 0-38.86-6.0574-51.8-17.0699l11.14-13.1946c10.41 9.5578 23.84 14.0356 41.15 14.0356s25.9-3.2731 25.9-10.2852-8.72-8.9555-28.21-10.6488c-24.2-2.0571-46.72-7.3872-46.72-25.5368S1124.47 0 1150.61 0c18.52 0 34.49 4.60275 45.27 12.9559l-10.65 13.4332c-9.32-7.1371-20.82-10.0465-34.62-10.1715-11.5-.125-25.54 1.932-25.54 9.6828 0 7.2621 12.11 7.9895 28.94 9.3192C1181 37.4016 1200 43.084 1200 61.7337ZM598.711 2.66016l-13.24 16.70624h-23.798v68.0298h-19.366V19.3664h-36.799l13.24-16.70624h79.963ZM83.2476 0H65.2344v18.0132h18.0132V0Zm0 36.0273H65.2344v18.0133h18.0132V36.0273Zm0 36.0137H65.2344v18.0133h18.0132V72.041ZM65.2339 18.0137H47.2207v18.0132h18.0132V18.0137Zm0 36.0156H47.2207v18.0132h18.0132V54.0293Z"
              />
              <path
                class="site-brand__t"
                fill="#130902"
                d="M47.2208 0v18.0132H11.2057L0 0h47.2208Z"
              />
              <path
                class="site-brand__m"
                fill="#130902"
                d="m22.4004 36.0273 5.6028 9.001-5.6028 9.0009h24.8208V36.0273H22.4004Z"
              />
              <path
                class="site-brand__b"
                fill="#130902"
                d="M11.2057 72.041 0 90.0543h47.2208V72.041H11.2057Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h1200v90.0548H0z" />
              </clipPath>
            </defs>
          </svg>
        </nuxt-link>
      </div>
      <div class="site-nav">
        <nav
          ref="siteNav"
          class="c-nav c-nav--primary | inline-flex ml-auto font-display"
          data-target-site-nav
          id="a11y-nav-primary"
        >
          <nuxt-link to="/about" @click="clearState" class="text-xs mx-4"
            >About Us</nuxt-link
          >
          <nuxt-link to="/stories" @click="clearState" class="text-xs mx-4"
            >Stories</nuxt-link
          >
          <nuxt-link to="/pricing" @click="clearState" class="text-xs mx-4"
            >Pricing</nuxt-link
          >
          <nuxt-link to="/faqs" @click="clearState" class="text-xs mx-4"
            >FAQ's</nuxt-link
          >
          <nuxt-link
            to="/contact"
            @click="clearState"
            class="text-xs mx-4 | md:hidden"
            >Contact</nuxt-link
          >

          <!-- <nuxt-link to="/posts">Posts</nuxt-link>  -->
        </nav>
      </div>

      <nuxt-link
        to="/contact"
        class="c-btn c-btn--primary |  hidden | md:inline-flex"
        ><span class="relative z-1">Contact</span></nuxt-link
      >

      <button
        ref="btnToggle"
        @click="_onTogglerClick"
        aria-expanded="false"
        aria-controls="a11y-nav-primary"
        class="flex flex-row items-center ml-auto relative z-2 | md:hidden"
      >
        <span class="f-caps text-xs mr-4" ref="btnToggleLabel">Menu</span>
        <svg
          class="site-nav__icon"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          viewBox="0 0 40 22"
          width="25"
          height="16"
        >
          <path
            class="site-nav__bar bar--t"
            d="M38,4H2C0.9,4,0,3.1,0,2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,4,38,4z"
          />
          <path
            class="site-nav__bar bar--m"
            d="M38,13H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,13,38,13z"
          />
          <path
            class="site-nav__bar bar--b"
            d="M38,22H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,22,38,22z"
          />
        </svg>
      </button>

      <div
        ref="siteNavBg"
        data-target-site-nav-bg
        class="site-nav__bg | md:hidden"
      ></div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

let open = false;

const siteNav = ref();
const btnToggle = ref();
const btnToggleLabel = ref();
const siteHeader = ref();

const _onTogglerClick = (e) => {
  e.preventDefault();
  const menuIsOpen = document
    .querySelector("body")
    .classList.contains("s-menu-open");
  if (!menuIsOpen) {
    openMenu();
  } else {
    closeMenu();
  }
};

const clearState = (e) => {
  if (open) {
    closeMenu();
  }
};

const openMenu = () => {
  const tlOpen = new gsap.timeline({
    defaults: { duration: 0.3, ease: "power1.inOut" },
    onStart: () => {
      open = true;
      document.querySelector("body").classList.add("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "true");
      btnToggleLabel.value.textContent = "Close";
      // firstMenuItem.focus();
      // window.scroll( 0, 0 );
    },
  });
  tlOpen
    .set(siteNav.value, { autoAlpha: 1 })
    .to(siteNav.value, { xPercent: 0 });
};
const closeMenu = () => {
  const tlClose = new gsap.timeline({
    defaults: { duration: 0.3, ease: "power1.inOut" },
    onStart: () => {
      open = false;
      document.querySelector("body").classList.remove("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "false");
      btnToggleLabel.value.textContent = "Menu";
    },
  });
  tlClose
    .to(siteNav.value, { xPercent: "-100" })
    .set(siteNav.value, { autoAlpha: 0, delay: 0.2 });
};
 
onMounted(() => {
  const mql = window.matchMedia("(max-width: 768px)");

  const _state = () => {
    if (mql.matches) {
      gsap.set(siteNav.value, { autoAlpha: 0, xPercent: "-100" });
    } else {
      gsap.set(siteNav.value, { clearProps: "all" });
      document.querySelector("body").classList.remove("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "false");
    }
  };

  _state();

  //   ctx = gsap.context((self) => {
  //     const boxes = self.selector('.box');
  //     tl.value = gsap
  //       .timeline()
  //       .to(boxes[0], { x: 120, rotation: 360 })
  //       .to(boxes[1], { x: -120, rotation: -360 }, '<')
  //       .to(boxes[2], { y: -166 })
  //       .reverse();
  //   }, main.value); // <- Scope!

  if (mql.addEventListener) {
    mql.addEventListener(`change`, _state);
  } else {
    // Deprecated 'MediaQueryList' API, <Safari 14, IE, <Edge 16
    mql.addListener(_state);
  }

  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  var checkScroll = () => {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = (direction, curScroll) => {
    if (direction === 2 && curScroll > 92) { 
      
      siteHeader.value.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1 && curScroll > 92) {
        siteHeader.value.classList.remove('hide');
        siteHeader.value.classList.add('bg-white');
      prevDirection = direction;
    } else if (direction === 1 && curScroll < 92) {
        console.log(curScroll);
      siteHeader.value.classList.remove('hide');
      siteHeader.value.classList.remove('bg-white');
      prevDirection = direction;
    }
  };
  

  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  // ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped lang="scss">
// - SITE
// - HEADER
.site-header {
  transition: all 0.4s ease;
  z-index: 10;  

  &.hide {
    transform: translateY(-100%);
  }

  .s-menu-open & {
    color: orange;
    transform: none;
    overflow: hidden;
  }

  &.s-active {
    background-color: white;
    box-shadow: 0px 21.6px 14.3px rgba(0, 0, 0, 0.025),
      0px 36px 99px rgba(0, 0, 0, 0.08);
  }
}

.site-brand {
  max-width: 160px;
  width: 100%;
  @media (min-width: 1280px) {
    max-width: 200px;
  }
}

// - NAV
.site-nav {
  // - ICON
  &__bar {
    transition: all 0.6s ease-in-out;

    .s-menu-open & {
      &.bar--t {
        transform: translate(-5px, 7px) rotate(33deg);
        transform-origin: center;
      }

      &.bar--m {
        opacity: 0;
        transition: none;
      }

      &.bar--b {
        transform: translate(-4px, -8px) rotate(-33deg);
        transform-origin: center;
      }
    }
  }
}

// - NAV
.c-nav--primary {
  // until md
  @media (max-width: 47.99em) {
    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    width: 100vw;
    // width: calc(100vw - 122px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    padding-left: 1.25rem;

    a {
      font-size: clamp(1.5rem, 1.136rem + 1.82vw, 2.5rem);
      font-weight: 500;
      color: white;
      &:hover,
      &:focus {
        color: orange;
      }
    }
  }

  // from - md
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
</style>
