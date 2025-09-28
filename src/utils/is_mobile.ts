const MOBILE_BREAKPOINT = 768; // px

export default function isMobile() {
    return typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false;
}

