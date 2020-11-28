// The entrance of the extension, will run when `document` is ready

// The anonymous function: `( (params) => {} )(params)`
document.addEventListener("DOMContentLoaded", function(event) {
    ((darkModeIsOn) => {
        if (darkModeIsOn) {
            // The local variables, only available in this anonymous function, so that it won't affect the operation of other scripts.
            var body = document.body;
            var style = document.createElement('style');
            // Set \`style.innerHTML\` to the compressed [CSS](../styles/styles.css).
            style.innerHTML = `@media (prefers-color-scheme: dark) {
            :root {
                /* --color-text- */
                --color-text-primary: #d8e2ec;
                --color-text-secondary: #99a6b5;
                --color-text-tertiary: #d8e2ec;
                --color-text-link: #5fafff;
                /* --color-bg- */
                --color-bg-primary: #1f2327;
                --color-bg-secondary: #24292e;
                --color-bg-tertiary: #24292e;
                --color-bg-overlay: #24292e;
                --color-bg-info: #1f2327;
                --color-bg-canvas: #24292e;
                --color-bg-canvas-inset: #1f2327;
                /* --color-border- */
                --color-border-primary: #424346;
                --color-border-secondary: #424346;
                --color-border-tertiary: #5e5f63;
                --color-border-overlay: #424346;
                /* --color-btn- */
                --color-btn-text: #d8e2ec;
                --color-btn-bg: #24292e;
                --color-btn-hover-bg: #323940;
                --color-btn-selected-bg: #505b67;
                --color-box-header-blue-bg: #1a334c;
                --color-box-header-blue-border: #27496b;
                --color-btn-outline-text: #5fafff;
                --color-btn-outline-hover-bg: #004ea7;
                --color-btn-primary-bg: #217d3b;
                /* --color-input- */
                --color-input-bg: #24292e;
                --color-input-contrast-bg: #24292e;
                --color-input-border: #424346;
                /* --color-box- */
                --color-box-bg-info: #24292e;
                --color-box-row-blue-bg: #45474a;
                /* --color-underlinenav- */
                --color-underlinenav-text: #959DA5;
                --color-underlinenav-text-active: #d8e2ec;
                --color-underlinenav-text-hover: #d8e2ec;
                /* --color-tabnav- */
                --color-tabnav-selected-bg: #24292e;
                /* --color-sidenav- */
                --color-sidenav-selected-bg: #2b3138;
                /* --color-dropdown- */
                --color-dropdown-shadow: rgb(31, 35, 39) 0px 8px 24px 0px;
                /* --color-branch- */
                --color-branch-name-bg: #00396d;
                --color-branch-name-link-bg: #45474a;
                /* --color-auto- */
                --color-auto-gray-1: #24292e;
                --color-auto-gray-2: #424346;
                --color-auto-gray-3: #424346;
                --color-auto-gray-7: #8b939a;
                --color-auto-gray-8: #9fa7af;
                --color-auto-gray-9: #d8e2ec;
                --color-auto-blue-0: #24292e;
                --color-auto-blue-2: rgba(3, 102, 214, 0.2);
                --color-auto-blue-9: #5fafff;
                --color-auto-green-2: #3f5244;
                /* --color-topic- */
                --color-topic-tag-text: var(--color-text-link);
                --color-topic-tag-bg: #292e33;
                --color-topic-tag-hover-bg: #34383e;
                /* --color-timeline- */
                --color-timeline-badge-bg: #24292e;
                --color-timeline-text: #99a6b5;
                /* --color-state- */
                --color-state-hover-primary-bg: #0256b5;
                --color-state-hover-secondary-bg: #2b3138;
                /* --color-social- */
                --color-social-count-bg: #24292e;
                /* --color-calendar-graph- */
                --color-calendar-graph-day-bg: #24292e;
                /* --color-previewable- */
                --color-previewable-comment-form-bg: #24292e;
                /* --color-verified- */
                --color-verified-badge-bg: #24292e;
                --color-verified-badge-border: #424346;
                /* --color-select- */
                --color-select-menu-border-secondary: #424346;
                /* --color-diff- */
                --color-diff-blob-num-text: rgba(190, 223, 255, 0.3);
                --color-diff-blob-hunk-text: rgba(220, 237, 255, 0.7);
                --color-diff-blob-hunk-line-bg: #31373e;
                --color-diff-blob-hunk-num-bg: #505b67;
                --color-diff-blob-addition-line-bg: #314235;
                --color-diff-blob-addition-num-bg: #3f5244;
                --color-diff-blob-addition-word-bg: #64906f;
                --color-diff-blob-deletion-line-bg: #443e3f;
                --color-diff-blob-deletion-num-bg: #635758;
                --color-diff-blob-deletion-word-bg: #a7787d;
                /* --color-shadow- */
                --color-shadow-large: #1f2327 0px 8px 24px;
            }
            /* others */
            .navigation-focus .AvatarStack-body, [aria-selected=true] .AvatarStack-body {
                background: transparent;
            }
            .signup-prompt-bg {
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #151515), linear-gradient(70deg, #1a1f23 32%, #202721);
            }
            /* dark scrollbar */
            ::-webkit-scrollbar {
                height: auto;
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #2e353c;
            }
            ::-webkit-scrollbar-thumb:hover {
                background-color: #3a434c;
            }
            ::-webkit-scrollbar-thumb:active {
                background-color: #1f2327;
            }
            ::-webkit-scrollbar-button {
                background-color: #2e353c;
            }
            ::-webkit-scrollbar-button:hover {
                background-color: #3a434c;
            }
            ::-webkit-scrollbar-button:active {
                background-color: #1f2327;
            }
            /* code highlight */
            .pl-k {
                color: #f97583;
            }
            .pl-c1, .pl-s .pl-v {
                color: #79b8ff;
            }
            .pl-pds, .pl-s, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sra, .pl-sr .pl-sre {
                color: #79b8ff;
            }
            .pl-ent {
                color: #85e89d;
            }
            .pl-c {
                color: #6a737d;
            }
            .pl-e, .pl-en {
                color: #b392f0;
            }
            .pl-s .pl-s1, .pl-smi {
                color: #f97583;
            }
        }`;
            // Append to <body>
            body.appendChild(style);
            // If at Explore page
            if (window.location.href.match('https://github.com/explore*') || window.location.href.match('https://github.com/topics*')) {
                // Select the white background and replace it
                document.querySelector(".border-bottom.border-gray-light").setAttribute("style", "");
                // Set \`explorePageTopicsGradientMaskSelector\` to the selector of the recommandation list
                var explorePageTopicsGradientMaskSelector = '[style="background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));"]';
                // Edit its mask then
                for (
                    let ele = document.querySelector(explorePageTopicsGradientMaskSelector);
                    document.querySelector(explorePageTopicsGradientMaskSelector);
                    ele = document.querySelector(explorePageTopicsGradientMaskSelector)
                ) {
                    ele.style.background = "linear-gradient(to top, rgb(31 35 39), rgb(31 35 39 / 0))"
                }
                // If on topic page
                if (window.location.href.match('https://github.com/topics*')) {
                    document.querySelector('[style="background-color: #fcfdfd;"]').style.backgroundColor = '#1F2327';
                }
            }
            // If at Sponsors page
            if (window.location.href.match('https://github.com/sponsors*')) {
                // Select the gradient cover and replace it
                document.querySelector('[style="height: 100%; background: linear-gradient(to bottom, rgba(246,248,250,0.5) 0%,rgba(246,248,250,1) 100%);"]').setAttribute("style", "height: 100%; background: linear-gradient(to bottom, rgba(31, 35, 39, 0.5) 0%,rgba(31, 35, 39, 1) 100%);");
            }
            console.log('GitHub Dark Mode initialized')
        } else {
            console.log("GitHub Dark Mode is off because your browser isn't in dark mode")
        }
    })((() => {
        if (window.matchMedia('(prefers-color-scheme)').media == 'not all') {
            console.log("GitHub Dark Mode didn't launch because your browser doesn't support dark mode");
            return false
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    })());
});
