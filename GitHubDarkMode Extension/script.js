// The entrance of the extension, will run when `document` is ready

// The anonymous function: `( (params) => {} )(params)`
((darkModeIsOn) => {
    if (darkModeIsOn) {
        // The local variables, only available in this anonymous function, so that it won't affect the operation of other scripts.
        var body = document.body;
        var style = document.createElement('style');
        // Set `style.innerHTML` to the compressed [CSS](../styles/styles.css).
        style.innerHTML = `@media (prefers-color-scheme: dark) {
    .bg-gray-light {
        background-color: #24292e!important;
    }
    .text-gray {
        color: #c7d2de!important;
    }
    a {
        color: #6aaaf3;
    }
    .UnderlineNav-octicon {
        color: #d8e2ec;
    }
    .UnderlineNav-item {
        color: #d8e2ec;
    }
    .Counter {
        color: #d8e2ec;
        background-color: rgb(124 127 132 / 50%);
    }
    .btn {
        color: #d8e2ec;
        background-color: #24292e;
        box-shadow: 0 1px 0 rgb(21 24 27 / 4%), inset 0 1px 0 hsl(0deg 0% 34% / 25%);
    }
    .social-count {
        color: #d8e2ec;
        background-color: #24292e;
    }
    body {
        color: #d8e2ec;
        background-color: #1f2327;
    }
    .signup-prompt-bg {
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #151515), linear-gradient(70deg, #1a1f23 32%, #202721);
    }
    .link-gray {
        color: #7f8b98!important;
    }
    .btn.hover, .btn:hover, [open]>.btn {
        background-color: #2d333a;
    }
    .topic-tag {
        background-color: #2b3035;
    }
    .delete-topic-button, .topic-tag, .topic-tag-action {
        color: #6aaaf3;
    }
    .Box-header--blue {
        background-color: #24292e;
        border-color: #3d4650;
    }
    .team-mention, .user-mention {
        color: #acc3da;
    }
    .link-gray-dark {
        color: #24292e!important;
    }
    .Box-row--focus-gray.navigation-focus {
        background-color: #2b3035;
    }
    .Box-row {
        border-top: 1px solid #343435;
    }
    .link-gray-dark {
        color: #9ab4ce!important;
    }
    .Box {
        background-color: #24292e;
        border: 1px solid #45474a;
        border-radius: 6px;
    }
    .bg-white {
        background-color: #1f2327!important;
    }
    .markdown-body h1, .markdown-body h2 {
        border-bottom: 1px solid #646669;
    }
    .link-gray:hover {
        color: #6aaaf3!important;
    }
    .BorderGrid-cell {
        border: 1px solid #676869;
    }
    .muted-link {
        color: #8894a2!important;
    }
    .Progress {
        background-color: #323940;
    }
    .text-gray-dark {
        color: #a5bbd2!important;
    }
    .markdown-body .highlight pre, .markdown-body pre {
        background-color: #1f2327;
    }
    .pl-pds, .pl-s, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sra, .pl-sr .pl-sre {
        color: #2c7bd8;
    }
    .border-gray-light {
        border-color: #545658!important;
    }
    .Box-body {
        border-bottom: 1px solid #424346;
    }
    .social-count:hover {
        color: #6aaaf3;
    }
    .link-gray-dark:hover, .link-hover-blue:hover {
        color: #6aaaf3!important;
    }
    .hx_avatar_stack_commit .AvatarStack-body {
        background-color: transparent;
    }
    .UnderlineNav {
        box-shadow: inset 0 -1px 0 #484a4c;
    }
    .UnderlineNav-item:focus, .UnderlineNav-item:hover {
        border-bottom-color: #484a4c;
    }
    .topic-tag-link:hover {
        background-color: #626b73;
    }
    .form-control, .form-select {
        color: #d8e2ec;
        background-color: #1f2327;
        border: 1px solid #45474a;
        box-shadow: inset 0 1px 0 rgba(56, 57, 58, 0.2);
    }
    .border-bottom {
        border-bottom: 1px solid #424346!important;
    }
    .border-top {
        border-top: 1px solid #424346!important;
    }
    .dropdown-menu {
        background-color: #24292e;
        border: 1px solid #424346;
        box-shadow: 0 8px 24px rgb(50 53 56 / 20%);
    }
    .dropdown-menu:after {
        border-bottom-color: #24292e;
    }
    .dropdown-item {
        color: #c7d2de;
    }
    .dropdown-item:focus, .dropdown-item:hover {
        background-color: #054690;
    }
    .header-nav-current-user .user-profile-link {
        color: #c7d2de;
    }
    .dropdown-divider {
        border-top: 1px solid #424346;
    }
    .border {
        border: 1px solid #424346!important;
    }
    .bg-gray {
        background-color: #1f2327!important;
    }
    .form-group .form-control {
        background-color: #1f2327;
    }
    .border-right {
        border-right: 1px solid #424346!important;
    }
    .ajax-pagination-form .ajax-pagination-btn {
        color: #6aaaf3;
        background: #24292e;
        border: 1px solid #424346!important;
    }
    .ajax-pagination-form .ajax-pagination-btn:focus, .ajax-pagination-form .ajax-pagination-btn:hover {
        color: #6aaaf3;
        background-color: #2d333a;
    }
    .btn-primary {
        background-color: #27713c;
    }
    .subnav-item {
        color: #d8e2ec;
        border: 1px solid #424346;
    }
    .Box-header {
        background-color: #24292e;
        border: 1px solid #3d4650;
    }
    .table-list-header-toggle .btn-link.selected, .table-list-header-toggle .btn-link.selected:hover {
        color: #d8e2ec;
    }
    .table-list-header-toggle .btn-link {
        color: #bac1c7;
    }
    .table-list-header-toggle .btn-link:hover {
        color: #d8e2ec;
    }
    @media (min-width: 544px) {
        .SelectMenu-modal {
            border: 1px solid #424346;
            box-shadow: 0 8px 24px rgb(54 58 62 / 20%);
        }
        .project-header {
            background-color: #1f2327;
        }
    }
    .SelectMenu-modal {
        background-color: #24292e;
    }
    .SelectMenu-item {
        background-color: #24292e;
        border-bottom: 1px solid #424346;
        color: #d8e2ec;
    }
    .SelectMenu-header {
        border-bottom: 1px solid #424346;
    }
    @media (hover: hover) {
        .SelectMenu-item:hover, body:not(.intent-mouse) .SelectMenu-item:focus {
            background-color: #404242;
        }
    }
    .subnav-item:focus, .subnav-item:hover {
        background-color: #404242;
    }
    .input-contrast:focus {
        background-color: #24292e;
    }
    kbd {
        color: #d8e2e0;
        background-color: #24292e;
        border: 1px solid #424346;
        box-shadow: inset 0 -1px 0 #46484a;
    }
    .MarketplaceBackground-buffer {
        background: #1f2327;
    }
    .box-shadow-extra-large {
        box-shadow: 0 12px 48px rgba(56, 57, 58, .3)!important;
    }
    .filter-item:hover {
        background-color: #3f4448;
    }
    .muted-link:hover {
        color: #c8e1ff!important;
    }
    .profile-timeline-card-wrapper {
        border-top: 2px solid #1f2327;
        border-bottom: 2px solid #1f2327;
    }
    .discussion-item-icon {
        color: #d8e2ec;
        background-color: #24292e;
        border: 2px solid #424346;
    }
    .profile-timeline.discussion-timeline:before {
        background-color: #424346;
    }
    .profile-rollup-wrapper+.profile-rollup-wrapper {
        border-top: 1px solid #424346;
    }
    .profile-timeline.discussion-timeline .profile-timeline-month-heading:after {
        background-color: #424346;
    }
    .SelectMenu-item[aria-checked=true] {
        color: #a2d0ff;
    }
    .btn-primary.hover, .btn-primary:hover, [open]>.btn-primary {
        background-color: #165a2a;
    }
    .CopyBlock:active, .CopyBlock:focus, .CopyBlock:hover {
        background-color: #24292e;
    }
    .SelectMenu-filter {
        border-bottom: 1px solid #424346;
    }
    .ellipsis-expander, .hidden-text-expander a {
        color: #d8e2ec;
        background: #24292e;
    }
    .notifications-list-item:hover {
        background-color: #24292e!important;
    }
    .notifications-list-item .notification-list-item-link {
        color: #dce2ec!important;
    }
    .notifications-list-item:hover .notification-list-item-link {
        color: #bcd5ff!important;
    }
    .btn.selected, .btn:active, .btn[aria-selected=true] {
        background-color: #424648;
        box-shadow: inset 0 1px 0 rgb(31 35 39);
    }
    .btn-outline.disabled, .btn-outline:disabled, .btn-outline[aria-disabled=true] {
        color: rgba(3, 102, 214, .5);
        background-color: #24292e;
        border-color: rgb(66 67 70 / 0.15);
        box-shadow: 0 1px 0 rgba(27, 31, 35, .04), inset 0 1px 0 hsl(0deg 0% 0% / 25%);
    }
    .form-control[disabled], .form-select[disabled] {
        background-color: #24292e;
    }
    .text-gray-light {
        color: #93a4b7!important;
    }
    .flash {
        color: #afcae4;
        background-color: rgba(39, 58, 78, .8);
        border-color: rgba(4, 66, 137, .2);
        backdrop-filter: blur(16px);
    }
    .form-group .form-control:focus {
        background-color: #24292e;
    }
    .Box-row--hover-gray:hover {
        background-color: #2b3035;
    }
    .TimelineItem--condensed .TimelineItem-badge {
        background-color: #24292e;
        border-radius: 32px;
        border: 2px solid #424346;
        color: #d8e2ec;
    }
    .TimelineItem:before {
        background-color: #424346;
    }
    .signed-commit-badge-large, .signed-commit-badge-medium, .signed-commit-badge-small {
        border: 1px solid #6b6c71;
    }
    .markdown-body img {
        background-color: transparent;
    }
    .blob-code-inner {
        color: #dce6f1;
    }
    .breadcrumb strong.final-path {
        color: #d8e2ec;
    }
    .markdown-body table tr {
        background-color: #1f2327;
    }
    .orghead {
        background-color: #24292e;
    }
    .Label--gray, .Label--outline {
        border-color: #768084;
    }
    .select-menu-filters, .select-menu-header {
        background-color: #24292e;
        border-bottom: 1px solid #424346;
    }
    .select-menu-modal {
        color: #d8e2ec;
        background-color: #24292e;
        border: 1px solid #424346;
        box-shadow: 0 8px 24px rgb(54 58 62 / 20%);
    }
    .select-menu-divider, .select-menu-header .select-menu-title {
        color: #d8e2ec;
    }
    .select-menu-item {
        background-color: #24292e;
        border-bottom: 1px solid #424346;
    }
    .select-menu-item.selected, details-menu .select-menu-item[aria-checked=true], details-menu .select-menu-item[aria-selected=true] {
        color: #68b4ff;
    }
    .select-menu-item.navigation-focus, .select-menu-item.navigation-focus .description-inline, .select-menu-item.navigation-focus.select-menu-action, .select-menu-item.navigation-focus.selected, .select-menu-item.navigation-focus[aria-checked=true], .select-menu-item:focus, .select-menu-item:focus .description-inline, .select-menu-item:focus.select-menu-action, .select-menu-item:focus.selected, .select-menu-item:hover, .select-menu-item:hover .description-inline, .select-menu-item:hover.select-menu-action, .select-menu-item:hover.selected, .select-menu-item[aria-checked=true]:focus, .select-menu-item[aria-checked=true]:hover, .select-menu-item[aria-selected=true] .description-inline, .select-menu-item[aria-selected=true].select-menu-action, .select-menu-item[aria-selected=true]:focus, .select-menu-item[aria-selected=true]:hover {
        background-color: #054690;
    }
    .menu {
        background-color: #24292e;
        border: 1px solid #45474a;
    }
    .menu-heading {
        color: #d8e2ec;
        border-bottom: 1px solid #45474a;
    }
    .menu-item {
        color: #c6d1dc;
        border-color: #424346;
    }
    .table-list {
        border-bottom: 1px solid #424346;
    }
    .menu-item:focus, .menu-item:hover {
        background-color: #34393c;
    }
    .Header {
        color: hsl(0deg 0% 0% / 70%);
    }
    .header-search-current .header-search-wrapper.focus {
        background-color: hsl(0deg 0% 0% / 18%);
    }
    .header-search-current .jump-to-field-active {
        color: #d8e2ec!important;
        background-color: #373a3e;
    }
    .header-search-current .jump-to-suggestions-results-container .navigation-item {
        border-bottom: 1px solid #424346;
    }
    .header-search-current .jump-to-suggestions-path {
        color: #d8e2ec;
    }
    .header-search-current .jump-to-suggestions-results-container .navigation-focus .jump-to-suggestions-path, .header-search-current .jump-to-suggestions-results-container [aria-selected=true] .jump-to-suggestions-path {
        background: #054690;
    }
    .rule, hr {
        border-bottom: 1px solid #424346;
    }
    .file-header {
        background-color: #24292e;
        border-bottom: 1px solid #424346;
    }
    .tabnav-tab {
        color: #d8e2ec;
    }
    .tabnav-tab.selected, .tabnav-tab[aria-current]:not([aria-current=false]), .tabnav-tab[aria-selected=true] {
        background-color: #24292e;
        border-color: #424346;
    }
    .file {
        border: 1px solid #424346;
    }
    .cm-s-github-light.CodeMirror {
        background: #24292e;
        color: #d8e2ec;
    }
    .cm-s-github-light .CodeMirror-gutters {
        background: #1f2327;
    }
    .cm-s-github-light .CodeMirror-lines {
        background: #24292e;
    }
    .cm-s-github-light .cm-string {
        color: #96bae4;
    }
    @media (min-width: 1012px) {
        .border-lg-top, .border-lg-left, .border-lg-right, .border-lg-bottom {
            border-color: #424346!important;
        }
    }
    .commit-form:before {
        border-right-color: #424346;
    }
    .commit-form:after {
        border-right-color: #1f2327;
    }
    .btn-outline:hover, [open]>.btn-outline {
        background-color: #003e84;
    }
    .timeline-comment {
        color: #d8e2ec;
        background-color: #24292e;
    }
    .new-discussion-timeline .composer .comment-form-head.tabnav {
        background-color: #24292e;
    }
    .drag-and-drop {
        border-color: #424346;
        background-color: #24292e;
    }
    @media (min-width: 768px) {
        .composer.composer-responsive .timeline-comment:before {
            border-right-color: #424346;
        }
        .composer.composer-responsive .timeline-comment:after {
            border-right-color: #24292e;
        }
        .composer.composer-responsive .timeline-comment {
            border: 1px solid #424346;
        }
        .page-responsive .previewable-comment-form .comment-form-head.tabnav {
            background: #24292e;
        }
        .border-md {
            border: 1px solid #424346!important;
        }
    }
    .gh-header {
        background-color: #1f2327;
    }
    .gh-header-meta {
        border-color: #424346;
    }
    .discussion-sidebar-item+.discussion-sidebar-item {
        border-color: #424346;
    }
    .timeline-comment, .timeline-comment-header {
        border-color: #424346;
    }
    .timeline-comment-header {
        background-color: #24292e;
    }
    .gh-header .gh-header-sticky.is-stuck+.gh-header-shadow {
        background-color: rgb(36 41 46 / 0.8);
        border-bottom: 1px solid rgb(255 255 255 / 15%);
        backdrop-filter: blur(16px);
    }
    .pagination-loader-container {
        background-color: #1f2327;
        background-image: none;
    }
    .discussion-timeline-actions {
        background-color: #1f2327;
        border-top: 2px solid #424346;
    }
    .timeline-comment-wrapper {
        border-color: #424346;
    }
    .pl-k {
        color: #ff5565;
    }
    .pl-e, .pl-en {
        color: #8d5fe0;
    }
    .pl-s .pl-s1, .pl-smi {
        color: #cde4fb;
    }
    .pl-ent {
        color: #36ca59;
    }
    .pl-c1, .pl-s .pl-v {
        color: #3f91ef;
    }
    .subnav-link.selected {
        color: #d8e2ec!important;
    }
    .subnav-link {
        color: #b6c0ca;
    }
    .box-shadow-medium {
        box-shadow: 0 3px 6px rgb(31 35 39 / 0.15)!important;
    }
    .tabnav {
        border-color: #424346;
    }
    .Box-footer {
        border-color: #424346;
    }
    .box-shadow-large {
        box-shadow: 0 8px 24px rgb(31 35 39 / 0.2)!important;
    }
    .Popover-message--bottom-left:after, .Popover-message--bottom-right:after, .Popover-message--bottom:after {
        border-top-color: #24292e;
    }
    .TimelineItem-break {
        background-color: #1f2327;
        border-color: #424346;
    }
    .page-responsive .previewable-comment-form .comment-form-head.tabnav .toolbar-commenting {
        background: #1f2327;
    }
    .bg-blue-light {
        background-color: #1b3752!important;
    }
    .setup-info-module {
        background-color: #24292e;
        border-color: #424346;
    }
    .setup-info-module h2 {
        border-color: #424346;
    }
    .setup-header {
        border-color: #424346;
    }
    .setup-header .lead {
        color: #a9b0b7;
    }
    .note {
        color: #a9b0b7;
    }
    .select-menu-text-filter input {
        border-color: #424346;
    }
    .select-menu-text-filter:first-child:last-child {
        border-color: #424346;
    }
    .subnav-link:hover {
        color: #a9b0b7;
    }
    .Subhead {
        border-color: #424346;
    }
    mark {
        color: #aed6ff;
    }
    .filter-item {
        color: #a9b0b7;
    }
    .markdown-body table td, .markdown-body table th {
        border-color: #424346;
    }
    .markdown-body table tr:nth-child(2n) {
        background-color: #24292e;
    }
    .markdown-body hr {
        background-color: #424346;
    }
    .codesearch-results .repo-list-item+.repo-list-item {
        border-top: 1px solid #424346;
    }
    .pagination a, .pagination em, .pagination span {
        color: #d8e2e6;
    }
    .site-subnav-sticky {
        background-color: rgb(31 35 39 / 0.8)!important;
        backdrop-filter: blur(16px);
    }
    .fade-img-to-white-bg:before {
        background: linear-gradient(180deg, #1f2327 0, hsl(210 11% 14% / 0));
    }
    .fade-img-to-white-bg:after {
        background: linear-gradient(0deg, #1f2327 0, hsl(210 11% 14% / 0));
    }
    .Box-row--gray {
        background-color: #24292e;
    }
    .pinned-item-name {
        color: #d8e2ec;
    }
    .pinned-item-checkbox:checked+.pinned-item-name {
        color: #6aaaf3;
        background-color: #24292e;
    }
    .tabnav-pr .tabnav-tab {
        color: #b8c1cc;
    }
    .tabnav-pr .tabnav-tab.selected {
        color: #d8e2ec;
        border-color: #424346;
    }
    .TimelineItem-body {
        color: #d8e2ec;
    }
    .thread-subscription-status {
        background-color: #1f2327;
    }
    .discussion-sidebar-heading {
        color: #d8e2ec;
    }
    .discussion-sidebar-item {
        color: #b2bcc5;
    }
    .branch-action-body {
        background-color: #24292e;
    }
    .branch-action-state-clean .branch-action-body {
        border-color: #2b6538;
    }
    .merge-status-list {
        border-color: #424346;
    }
    .merge-status-item {
        background-color: #24292e;
        border-color: #424346;
    }
    .text-emphasized {
        color: #b2bcc5;
    }
    .status-meta {
        color: #b2bcc5;
    }
    .branch-action-body .merge-branch-form, .branch-action-body .merge-message {
        background-color: #24292e;
        border-color: #424346;
    }
    .btn-link {
        color: #6aaaf3;
    }
    .previewable-comment-form .comment-form-head.tabnav {
        background: #24292e;
    }
    .timeline-comment-label {
        border-color: #424346;
    }
    .timeline-comment--caret:before {
        border-right-color: #424346;
    }
    .timeline-comment--caret:after {
        border-right-color: #24292e;
    }
    .diffbar {
        background-color: #1f2327;
    }
    .blob-num-expandable, .blob-num-hunk {
        background-color: #24292e;
    }
    .blob-code-hunk {
        background-color: #24292e;
    }
    .blob-num-addition {
        background-color: #2f4032;
        border-color: #2f4032;
    }
    .blob-code-addition {
        background-color: #2f4032;
    }
    .blob-num {
        color: rgb(199 227 255 / 30%);
    }
    .blob-num-deletion {
        background-color: #483f40;
        border-color: #483f40;
    }
    .blob-code-deletion {
        background-color: #483f40;
    }
    .pr-toolbar.is-stuck {
        background-color: #1f2327;
    }
    .commit-ref {
        background-color: #274466;
    }
    .timeline-comment.current-user .timeline-comment-header {
        background-color: #24292e;
        border-bottom-color: #424346;
    }
    .timeline-comment.current-user {
        border-color: #424346;
    }
    .branch-action-body, .branch-action-state-closed-dirty .branch-action-body, .branch-action-state-dirty .branch-action-body, .is-rebasing .branch-action-state-dirty-if-rebasing .branch-action-body {
        border-color: #424346;
    }
    .branch-action-item+.branch-action-item, .branch-action-item+.mergeability-details {
        border-color: #424346;
    }
    .btn.disabled, .btn:disabled, .btn[aria-disabled=true] {
        color: #d8e2ec;
        background-color: #292f35;
    }
    .discussion-timeline.team-discussion-timeline .blankslate {
        background: #24292e;
    }
    .range-editor {
        background-color: #24292e;
        border-color: #424346;
    }
    .file-diff-split .blob-code+.blob-num {
        border-color: #424346;
    }
    .table-list-header {
        background-color: #24292e;
        border-color: #424346;
    }
    .table-list {
        border-color: #424346;
    }
    .table-list-bordered .table-list-cell:first-child {
        border-color: #424346;
    }
    .table-list-bordered .table-list-cell:last-child {
        border-color: #424346;
    }
    .table-list-cell {
        border-color: #424346;
    }
    .orgs-help-shelf {
        border-color: #424346;
    }
    .orgs-help-item-octicon {
        background-color: #24292e;
        border-color: #424346;
    }
    .review-thread-reply {
        background-color: #24292e;
        border-color: #424346;
    }
    .discussion-post .timeline-inline-comments {
        background: transparent;
    }
    .task-progress .progress-bar {
        background-color: #424346;
    }
    .markdown-body blockquote {
        border-color: #424346;
    }
    .review-thread-reply {
        background-color: #24292e;
        border-color: #424346;
    }
    .TimelineItem-badge {
        color: #d8e2ec;
        background-color: #24292e;
        border-color: #424346;
    }
    .review-comment .reaction-summary-item:not(.add-reaction-btn) {
        border-color: #424346;
    }
    .copyable-terminal {
        background-color: #1f2327;
    }
    .review-thread-reply .inline-comment-form {
        background-color: #24292e;
    }
    .form-group.errored .error {
        background-color: #463434;
        border-color: #77454b;
    }
    .home-enterprise-wrapper:before {
        background-color: #2b3137;
    }
    .timeline-comment--caret.current-user:before {
        border-right-color: #424346;
    }
    .timeline-comment--caret.current-user:after {
        border-right-color: #24292e;
    }
    .timeline-comment.current-user .timeline-comment-label {
        border-color: #424346;
    }
    .project-column {
        background-color: #24292E;
    }
    .project-card:hover {
        border-color: #727479!important;
    }
    .comment-reactions.has-reactions {
        border-color: #424346;
    }
    .reaction-summary-item {
        border-color: #424346;
    }
    .project-pane {
        background-color: rgba(36, 41, 46, 0.8)!important;
        backdrop-filter: blur(16px);
    }
    .project-issue-body-blur {
        background: linear-gradient(0deg, #23282d, hsl(210deg 12% 16% / 0%));
    }
    .comment-reactions.has-reactions {
        border-color: #424346;
    }
    .comment-reactions .user-has-reacted {
        background-color: #24292e;
    }
    .reaction-summary-item {
        border-color: #424346;
    }
    .full-commit {
        background: #24292e;
        border-color: #424346;
    }
    .full-commit p.commit-title {
        color: #acc3da;
    }
    .full-commit .commit-meta {
        background: #1f2327;
        border-color: #424346;
    }
    .commit-sha {
        background-color: #24292e;
        border-color: #424346;
    }
    .thread-subscription-status {
        border-color: #424346;
    }
    .upload-enabled textarea {
        border-color: #424346;
    }
    @media (min-width: 768px) {
        .border-md-top {
            border-color: #424346!important;
        }
    }
    .discussion-post .reply-comment:first-child {
        border-color: #424346;
    }
    .discussion-post .reply-comments-holder:before {
        background-color: #424346;
    }
    .review-comment {
        color: #d8e2ec;
    }
    .notifications-list-item.notification-unread {
        background-color: #24292e;
    }
    .notifications-list-item.notification-unread .notification-list-item-link {
        color: #d8e2ec!important;
    }
    .timeline-comment-header {
        color: #d8e2ec;
    }
    .Popover-message:after {
        border-bottom-color: #24292e;
    }
    .Popover-message:before {
        border-bottom-color: #424346;
    }
    .file-diff-split .empty-cell {
        background-color: #24292E;
    }
    .diff-table tr:not(:last-child) .line-comments {
        border-color: #424346;
    }
    .inline-comment-form {
        border-color: #424346;
    }
    .CheckRun-header {
        border-top-color: #424346;
    }
    .commit-ref {
        color: #6aaaf3;
    }
    .commit-ref .user {
        color: #6aaaf3;
    }
    .user-status-circle-badge {
        background-color: #24292e;
        border-color: #424346;
    }
    .session-authentication {
        background-color: #1f2327;
    }
    .session-authentication .auth-form-header {
        color: #d8e2ec;
    }
    .auth-form-body {
        background-color: #24292E;
        border-color: #424346;
    }
    .session-authentication .auth-form-body {
        border-color: #424346;
    }
    .subnav-bordered {
        border-color: #424346;
    }
    .org-user-notice-content strong {
        color: #fff;
    }
    .markdown-body h1 .octicon-link, .markdown-body h2 .octicon-link, .markdown-body h3 .octicon-link, .markdown-body h4 .octicon-link, .markdown-body h5 .octicon-link, .markdown-body h6 .octicon-link {
        color: #c7d2de;
    }
    .border-left {
        border-left: 1px solid #424346!important;
    }
    .SelectMenu-footer {
        border-color: #424346;
    }
    .SelectMenu-tabs {
        box-shadow: inset 0 -1px 0 #424346;
    }
    .SelectMenu-tab {
        box-shadow: inset 0 -1px 0 #424346;
    }
    .SelectMenu-tab[aria-selected=true] {
        color: #d8e2ec;
        background-color: #24292e;
        box-shadow: 0 0 0 1px #424346;
    }
    @media (min-width: 544px) {
        .SelectMenu-tab[aria-selected=true] {
            border-color: #424346;
        }
    }
    @media (hover: hover) {
        .SelectMenu-tab:hover {
            color: #d8e2ec;
        }
    }
    .SelectMenu-message {
        background-color: #24292e;
        border-bottom: 1px solid #424346;
    }
    .AvatarStack-body {
        background: transparent;
    }
    .branch-name {
        background-color: #274466;
    }
    a.branch-name {
        color: #6aaaf3;
    }
}`;
        // Append to <body>
        body.appendChild(style);

        // If at Explore page
        if (window.location.href.match('https://github.com/explore*') || window.location.href.match('https://github.com/topics*')) {
            // Select the white background and replace it
            document.querySelector(".border-bottom.border-gray-light").setAttribute("style", "");
            // Set `explorePageTopicsGradientMaskSelector` to the selector of the recommandation list
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
