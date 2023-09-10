const App = () => {
    return (
        <div>
            .tw-preflight *,
            .tw-preflight :before,
            .tw-preflight :after {'{'}
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: theme("borderColor.DEFAULT", currentColor)
            {'}'}
            .tw-preflight :before,
            .tw-preflight :after {'{'}
            --tw-content: ""
            {'}'}
            .tw-preflight html {'{'}
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: theme("fontFamily.sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
            font-feature-settings: theme("fontFamily.sans[1].fontFeatureSettings", normal);
            font-variation-settings: theme("fontFamily.sans[1].fontVariationSettings", normal)
            {'}'}
            .tw-preflight body {'{'}
            margin: 0;
            line-height: inherit
            {'}'}
            .tw-preflight hr {'{'}
            height: 0;
            color: inherit;
            border-top-width: 1px
            {'}'}
            .tw-preflight abbr:where([title]) {'{'}
            text-decoration: underline dotted
            {'}'}
            .tw-preflight h1,
            .tw-preflight h2,
            .tw-preflight h3,
            .tw-preflight h4,
            .tw-preflight h5,
            .tw-preflight h6 {'{'}
            font-size: inherit;
            font-weight: inherit
            {'}'}
            .tw-preflight a {'{'}
            color: inherit;
            text-decoration: inherit
            {'}'}
            .tw-preflight b,
            .tw-preflight strong {'{'}
            font-weight: bolder
            {'}'}
            .tw-preflight code,
            .tw-preflight kbd,
            .tw-preflight samp,
            .tw-preflight pre {'{'}
            font-family: theme("fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
            font-size: 1em
            {'}'}
            .tw-preflight small {'{'}
            font-size: 80%
            {'}'}
            .tw-preflight sub,
            .tw-preflight sup {'{'}
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline
            {'}'}
            .tw-preflight sub {'{'}
            bottom: -.25em
            {'}'}
            .tw-preflight sup {'{'}
            top: -.5em
            {'}'}
            .tw-preflight table {'{'}
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse
            {'}'}
            .tw-preflight button,
            .tw-preflight input,
            .tw-preflight optgroup,
            .tw-preflight select,
            .tw-preflight textarea {'{'}
            font-family: inherit;
            font-feature-settings: inherit;
            font-variation-settings: inherit;
            font-size: 100%;
            font-weight: inherit;
            line-height: inherit;
            color: inherit;
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight button,
            .tw-preflight select {'{'}
            text-transform: none
            {'}'}
            .tw-preflight button,
            .tw-preflight [type=button],
            .tw-preflight [type=reset],
            .tw-preflight [type=submit] {'{'}
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none
            {'}'}
            .tw-preflight :-moz-focusring {'{'}
            outline: auto
            {'}'}
            .tw-preflight :-moz-ui-invalid {'{'}
            box-shadow: none
            {'}'}
            .tw-preflight progress {'{'}
            vertical-align: baseline
            {'}'}
            .tw-preflight ::-webkit-inner-spin-button,
            .tw-preflight ::-webkit-outer-spin-button {'{'}
            height: auto
            {'}'}
            .tw-preflight [type=search] {'{'}
            -webkit-appearance: textfield;
            outline-offset: -2px
            {'}'}
            .tw-preflight ::-webkit-search-decoration {'{'}
            -webkit-appearance: none
            {'}'}
            .tw-preflight ::-webkit-file-upload-button {'{'}
            -webkit-appearance: button;
            font: inherit
            {'}'}
            .tw-preflight summary {'{'}
            display: list-item
            {'}'}
            .tw-preflight blockquote,
            .tw-preflight dl,
            .tw-preflight dd,
            .tw-preflight h1,
            .tw-preflight h2,
            .tw-preflight h3,
            .tw-preflight h4,
            .tw-preflight h5,
            .tw-preflight h6,
            .tw-preflight hr,
            .tw-preflight figure,
            .tw-preflight p,
            .tw-preflight pre {'{'}
            margin: 0
            {'}'}
            .tw-preflight fieldset {'{'}
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight legend {'{'}
            padding: 0
            {'}'}
            .tw-preflight ol,
            .tw-preflight ul,
            .tw-preflight menu {'{'}
            list-style: none;
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight dialog {'{'}
            padding: 0
            {'}'}
            .tw-preflight textarea {'{'}
            resize: vertical
            {'}'}
            .tw-preflight input::placeholder,
            .tw-preflight textarea::placeholder {'{'}
            opacity: 1;
            color: theme("colors.gray.400", #9ca3af)
            {'}'}
            .tw-preflight button,
            .tw-preflight [role=button] {'{'}
            cursor: pointer
            {'}'}
            .tw-preflight :disabled {'{'}
            cursor: default
            {'}'}
            .tw-preflight img,
            .tw-preflight svg,
            .tw-preflight video,
            .tw-preflight canvas,
            .tw-preflight audio,
            .tw-preflight iframe,
            .tw-preflight embed,
            .tw-preflight object {'{'}
            display: block;
            vertical-align: middle
            {'}'}
            .tw-preflight img,
            .tw-preflight video {'{'}
            max-width: 100%;
            height: auto
            {'}'}
            .tw-preflight [hidden] {'{'}
            display: none
            {'}'}
            *,
            :after,
            :before {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            ::-webkit-backdrop {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            ::backdrop {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            .container {'{'}
            width: 100%
            {'}'}
            @media (min-width:640px) {'{'}
            .container {'{'}
            max-width: 640px
            {'}'}
            {'}'}
            @media (min-width:768px) {'{'}
            .container {'{'}
            max-width: 768px
            {'}'}
            {'}'}
            @media (min-width:1024px) {'{'}
            .container {'{'}
            max-width: 1024px
            {'}'}
            {'}'}
            @media (min-width:1280px) {'{'}
            .container {'{'}
            max-width: 1280px
            {'}'}
            {'}'}
            @media (min-width:1536px) {'{'}
            .container {'{'}
            max-width: 1536px
            {'}'}
            {'}'}
            .tw-css :is(.sr-only) {'{'}
            clip: rect(0, 0, 0, 0);
            border-width: 0;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px
            {'}'}
            .tw-css :is(.pointer-events-none) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.pointer-events-auto) {'{'}
            pointer-events: auto
            {'}'}
            .tw-css :is(.\!visible) {'{'}
            visibility: visible !important
            {'}'}
            .tw-css :is(.visible) {'{'}
            visibility: visible
            {'}'}
            .tw-css :is(.invisible) {'{'}
            visibility: hidden
            {'}'}
            .tw-css :is(.collapse) {'{'}
            visibility: collapse
            {'}'}
            .tw-css :is(.static) {'{'}
            position: static
            {'}'}
            .tw-css :is(.fixed) {'{'}
            position: fixed
            {'}'}
            .tw-css :is(.absolute) {'{'}
            position: absolute
            {'}'}
            .tw-css :is(.relative) {'{'}
            position: relative
            {'}'}
            .tw-css :is(.sticky) {'{'}
            position: sticky
            {'}'}
            .tw-css :is(.-bottom-\[11px\]) {'{'}
            bottom: -11px
            {'}'}
            .tw-css :is(.-top-\[11px\]) {'{'}
            top: -11px
            {'}'}
            .tw-css :is(.bottom-0) {'{'}
            bottom: 0
            {'}'}
            .tw-css :is(.bottom-24) {'{'}
            bottom: 24px
            {'}'}
            .tw-css :is(.bottom-\[16px\]) {'{'}
            bottom: 16px
            {'}'}
            .tw-css :is(.bottom-\[96px\]) {'{'}
            bottom: 96px
            {'}'}
            .tw-css :is(.left-0) {'{'}
            left: 0
            {'}'}
            .tw-css :is(.left-12) {'{'}
            left: 12px
            {'}'}
            .tw-css :is(.left-2\/4) {'{'}
            left: 50%
            {'}'}
            .tw-css :is(.left-60) {'{'}
            left: 60px
            {'}'}
            .tw-css :is(.right-0) {'{'}
            right: 0
            {'}'}
            .tw-css :is(.right-12) {'{'}
            right: 12px
            {'}'}
            .tw-css :is(.right-\[15px\]) {'{'}
            right: 15px
            {'}'}
            .tw-css :is(.right-\[16px\]) {'{'}
            right: 16px
            {'}'}
            .tw-css :is(.right-\[19px\]) {'{'}
            right: 19px
            {'}'}
            .tw-css :is(.right-\[24px\]) {'{'}
            right: 24px
            {'}'}
            .tw-css :is(.right-\[2px\]) {'{'}
            right: 2px
            {'}'}
            .tw-css :is(.right-full) {'{'}
            right: 100%
            {'}'}
            .tw-css :is(.top-0) {'{'}
            top: 0
            {'}'}
            .tw-css :is(.top-1\/2) {'{'}
            top: 50%
            {'}'}
            .tw-css :is(.top-1\/4) {'{'}
            top: 25%
            {'}'}
            .tw-css :is(.top-12) {'{'}
            top: 12px
            {'}'}
            .tw-css :is(.top-36) {'{'}
            top: 36px
            {'}'}
            .tw-css :is(.top-\[14px\]) {'{'}
            top: 14px
            {'}'}
            .tw-css :is(.top-\[180px\]) {'{'}
            top: 180px
            {'}'}
            .tw-css :is(.top-\[20px\]) {'{'}
            top: 20px
            {'}'}
            .tw-css :is(.top-\[2px\]) {'{'}
            top: 2px
            {'}'}
            .tw-css :is(.top-full) {'{'}
            top: 100%
            {'}'}
            .tw-css :is(.isolate) {'{'}
            isolation: isolate
            {'}'}
            .tw-css :is(.z-10) {'{'}
            z-index: 10
            {'}'}
            .tw-css :is(.z-20) {'{'}
            z-index: 20
            {'}'}
            .tw-css :is(.z-30) {'{'}
            z-index: 30
            {'}'}
            .tw-css :is(.z-40) {'{'}
            z-index: 40
            {'}'}
            .tw-css :is(.z-50) {'{'}
            z-index: 50
            {'}'}
            .tw-css :is(.m-0) {'{'}
            margin: 0
            {'}'}
            .tw-css :is(.m-12) {'{'}
            margin: 12px
            {'}'}
            .tw-css :is(.m-\[2px\]) {'{'}
            margin: 2px
            {'}'}
            .tw-css :is(.m-auto) {'{'}
            margin: auto
            {'}'}
            .tw-css :is(.-mx-\[16px\]) {'{'}
            margin-left: -16px;
            margin-right: -16px
            {'}'}
            .tw-css :is(.-my-12) {'{'}
            margin-bottom: -12px;
            margin-top: -12px
            {'}'}
            .tw-css :is(.mx-8) {'{'}
            margin-left: 8px;
            margin-right: 8px
            {'}'}
            .tw-css :is(.mx-auto) {'{'}
            margin-left: auto;
            margin-right: auto
            {'}'}
            .tw-css :is(.my-10) {'{'}
            margin-bottom: 2.5rem;
            margin-top: 2.5rem
            {'}'}
            .tw-css :is(.my-2) {'{'}
            margin-bottom: .5rem;
            margin-top: .5rem
            {'}'}
            .tw-css :is(.my-4) {'{'}
            margin-bottom: 4px;
            margin-top: 4px
            {'}'}
            .tw-css :is(.-ml-12) {'{'}
            margin-left: -12px
            {'}'}
            .tw-css :is(.-ml-\[2px\]) {'{'}
            margin-left: -2px
            {'}'}
            .tw-css :is(.-mr-12) {'{'}
            margin-right: -12px
            {'}'}
            .tw-css :is(.-mr-24) {'{'}
            margin-right: -24px
            {'}'}
            .tw-css :is(.mb-12) {'{'}
            margin-bottom: 12px
            {'}'}
            .tw-css :is(.mb-24) {'{'}
            margin-bottom: 24px
            {'}'}
            .tw-css :is(.mb-4) {'{'}
            margin-bottom: 4px
            {'}'}
            .tw-css :is(.mb-48) {'{'}
            margin-bottom: 48px
            {'}'}
            .tw-css :is(.mb-\[16px\]) {'{'}
            margin-bottom: 16px
            {'}'}
            .tw-css :is(.mb-\[20px\]) {'{'}
            margin-bottom: 20px
            {'}'}
            .tw-css :is(.mb-\[22px\]) {'{'}
            margin-bottom: 22px
            {'}'}
            .tw-css :is(.mb-\[26px\]) {'{'}
            margin-bottom: 26px
            {'}'}
            .tw-css :is(.mb-\[28px\]) {'{'}
            margin-bottom: 28px
            {'}'}
            .tw-css :is(.mb-\[36px\]) {'{'}
            margin-bottom: 36px
            {'}'}
            .tw-css :is(.mb-\[3px\]) {'{'}
            margin-bottom: 3px
            {'}'}
            .tw-css :is(.ml-4) {'{'}
            margin-left: 4px
            {'}'}
            .tw-css :is(.ml-8) {'{'}
            margin-left: 8px
            {'}'}
            .tw-css :is(.ml-\[16px\]) {'{'}
            margin-left: 16px
            {'}'}
            .tw-css :is(.ml-\[5px\]) {'{'}
            margin-left: 5px
            {'}'}
            .tw-css :is(.ml-auto) {'{'}
            margin-left: auto
            {'}'}
            .tw-css :is(.mr-4) {'{'}
            margin-right: 4px
            {'}'}
            .tw-css :is(.mr-\[4px\]) {'{'}
            margin-right: 4px
            {'}'}
            .tw-css :is(.mt-0) {'{'}
            margin-top: 0
            {'}'}
            .tw-css :is(.mt-12) {'{'}
            margin-top: 12px
            {'}'}
            .tw-css :is(.mt-24) {'{'}
            margin-top: 24px
            {'}'}
            .tw-css :is(.mt-48) {'{'}
            margin-top: 48px
            {'}'}
            .tw-css :is(.mt-\[-16px\]) {'{'}
            margin-top: -16px
            {'}'}
            .tw-css :is(.mt-\[4px\]) {'{'}
            margin-top: 4px
            {'}'}
            .tw-css :is(.mt-\[6px\]) {'{'}
            margin-top: 6px
            {'}'}
            .tw-css :is(.box-content) {'{'}
            -webkit-box-sizing: content-box;
            box-sizing: content-box
            {'}'}
            .tw-css :is(.line-clamp-1) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-2) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-3) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-4) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-5) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-6) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.inline-block) {'{'}
            display: inline-block
            {'}'}
            .tw-css :is(.inline) {'{'}
            display: inline
            {'}'}
            .tw-css :is(.flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.inline-flex) {'{'}
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex
            {'}'}
            .tw-css :is(.table) {'{'}
            display: table
            {'}'}
            .tw-css :is(.grid) {'{'}
            display: grid
            {'}'}
            .tw-css :is(.contents) {'{'}
            display: contents
            {'}'}
            .tw-css :is(.hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.aspect-auto) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.aspect-square) {'{'}
            aspect-ratio: 1/1
            {'}'}
            .tw-css :is(.h-0) {'{'}
            height: 0
            {'}'}
            .tw-css :is(.h-24) {'{'}
            height: 24px
            {'}'}
            .tw-css :is(.h-36) {'{'}
            height: 36px
            {'}'}
            .tw-css :is(.h-4) {'{'}
            height: 4px
            {'}'}
            .tw-css :is(.h-48) {'{'}
            height: 48px
            {'}'}
            .tw-css :is(.h-60) {'{'}
            height: 60px
            {'}'}
            .tw-css :is(.h-\[16px\]) {'{'}
            height: 16px
            {'}'}
            .tw-css :is(.h-\[18px\]) {'{'}
            height: 18px
            {'}'}
            .tw-css :is(.h-\[20px\]) {'{'}
            height: 20px
            {'}'}
            .tw-css :is(.h-\[28px\]) {'{'}
            height: 28px
            {'}'}
            .tw-css :is(.h-\[32px\]) {'{'}
            height: 32px
            {'}'}
            .tw-css :is(.h-\[380px\]) {'{'}
            height: 380px
            {'}'}
            .tw-css :is(.h-\[40px\]) {'{'}
            height: 40px
            {'}'}
            .tw-css :is(.h-\[5px\]) {'{'}
            height: 5px
            {'}'}
            .tw-css :is(.h-\[96px\]) {'{'}
            height: 96px
            {'}'}
            .tw-css :is(.h-fit) {'{'}
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content
            {'}'}
            .tw-css :is(.h-full) {'{'}
            height: 100%
            {'}'}
            .tw-css :is(.h-screen) {'{'}
            height: 100vh
            {'}'}
            .tw-css :is(.max-h-24) {'{'}
            max-height: 24px
            {'}'}
            .tw-css :is(.max-h-36) {'{'}
            max-height: 36px
            {'}'}
            .tw-css :is(.max-h-48) {'{'}
            max-height: 48px
            {'}'}
            .tw-css :is(.max-h-\[100dvh\]) {'{'}
            max-height: 100dvh
            {'}'}
            .tw-css :is(.max-h-\[345px\]) {'{'}
            max-height: 345px
            {'}'}
            .tw-css :is(.max-h-\[40px\]) {'{'}
            max-height: 40px
            {'}'}
            .tw-css :is(.max-h-\[500px\]) {'{'}
            max-height: 500px
            {'}'}
            .tw-css :is(.max-h-\[calc\(100vh-38px\)\]) {'{'}
            max-height: calc(100vh - 38px)
            {'}'}
            .tw-css :is(.max-h-screen) {'{'}
            max-height: 100vh
            {'}'}
            .tw-css :is(.min-h-\[120px\]) {'{'}
            min-height: 120px
            {'}'}
            .tw-css :is(.min-h-\[16px\]) {'{'}
            min-height: 16px
            {'}'}
            .tw-css :is(.min-h-\[300px\]) {'{'}
            min-height: 300px
            {'}'}
            .tw-css :is(.min-h-\[48px\]) {'{'}
            min-height: 48px
            {'}'}
            .tw-css :is(.w-0) {'{'}
            width: 0
            {'}'}
            .tw-css :is(.w-24) {'{'}
            width: 24px
            {'}'}
            .tw-css :is(.w-48) {'{'}
            width: 48px
            {'}'}
            .tw-css :is(.w-\[18px\]) {'{'}
            width: 18px
            {'}'}
            .tw-css :is(.w-\[1px\]) {'{'}
            width: 1px
            {'}'}
            .tw-css :is(.w-\[235px\]) {'{'}
            width: 235px
            {'}'}
            .tw-css :is(.w-\[327px\]) {'{'}
            width: 327px
            {'}'}
            .tw-css :is(.w-\[40px\]) {'{'}
            width: 40px
            {'}'}
            .tw-css :is(.w-\[48px\]) {'{'}
            width: 48px
            {'}'}
            .tw-css :is(.w-auto) {'{'}
            width: auto
            {'}'}
            .tw-css :is(.w-fit) {'{'}
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content
            {'}'}
            .tw-css :is(.w-full) {'{'}
            width: 100%
            {'}'}
            .tw-css :is(.w-max) {'{'}
            width: -webkit-max-content;
            width: -moz-max-content;
            width: max-content
            {'}'}
            .tw-css :is(.w-screen) {'{'}
            width: 100vw
            {'}'}
            .tw-css :is(.min-w-\[18px\]) {'{'}
            min-width: 18px
            {'}'}
            .tw-css :is(.min-w-\[21px\]) {'{'}
            min-width: 21px
            {'}'}
            .tw-css :is(.min-w-\[327px\]) {'{'}
            min-width: 327px
            {'}'}
            .tw-css :is(.min-w-\[37\.5px\]) {'{'}
            min-width: 37.5px
            {'}'}
            .tw-css :is(.min-w-\[48px\]) {'{'}
            min-width: 48px
            {'}'}
            .tw-css :is(.min-w-\[9px\]) {'{'}
            min-width: 9px
            {'}'}
            .tw-css :is(.max-w-\[100vw\]) {'{'}
            max-width: 100vw
            {'}'}
            .tw-css :is(.max-w-\[1500px\]) {'{'}
            max-width: 1500px
            {'}'}
            .tw-css :is(.max-w-\[160px\]) {'{'}
            max-width: 160px
            {'}'}
            .tw-css :is(.max-w-\[21px\]) {'{'}
            max-width: 21px
            {'}'}
            .tw-css :is(.max-w-\[225px\]) {'{'}
            max-width: 225px
            {'}'}
            .tw-css :is(.max-w-\[260px\]) {'{'}
            max-width: 260px
            {'}'}
            .tw-css :is(.max-w-\[600px\]) {'{'}
            max-width: 600px
            {'}'}
            .tw-css :is(.max-w-\[72px\]) {'{'}
            max-width: 72px
            {'}'}
            .tw-css :is(.max-w-\[80px\]) {'{'}
            max-width: 80px
            {'}'}
            .tw-css :is(.max-w-\[96px\]) {'{'}
            max-width: 96px
            {'}'}
            .tw-css :is(.max-w-full) {'{'}
            max-width: 100%
            {'}'}
            .tw-css :is(.flex-1) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 0%;
            flex: 1 1 0%
            {'}'}
            .tw-css :is(.flex-auto) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto
            {'}'}
            .tw-css :is(.flex-grow) {'{'}
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1
            {'}'}
            .tw-css :is(.grow) {'{'}
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1
            {'}'}
            .tw-css :is(.border-collapse) {'{'}
            border-collapse: collapse
            {'}'}
            .tw-css :is(.border-spacing-0) {'{'}
            --tw-border-spacing-x: 0px;
            --tw-border-spacing-y: 0px;
            border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)
            {'}'}
            .tw-css :is(.-translate-x-2\/4) {'{'}
            --tw-translate-x: -50%;
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.translate-y-\[-50\%\]) {'{'}
            --tw-translate-y: -50%;
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.transform) {'{'}
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.transform-gpu) {'{'}
            -webkit-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.cursor-not-allowed) {'{'}
            cursor: not-allowed
            {'}'}
            .tw-css :is(.cursor-pointer) {'{'}
            cursor: pointer
            {'}'}
            .tw-css :is(.touch-none) {'{'}
            -ms-touch-action: none;
            touch-action: none
            {'}'}
            .tw-css :is(.select-all) {'{'}
            -webkit-user-select: all;
            -moz-user-select: all;
            user-select: all
            {'}'}
            .tw-css :is(.resize-none) {'{'}
            resize: none
            {'}'}
            .tw-css :is(.resize) {'{'}
            resize: both
            {'}'}
            .tw-css :is(.list-none) {'{'}
            list-style-type: none
            {'}'}
            .tw-css :is(.appearance-none) {'{'}
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
            {'}'}
            .tw-css :is(.grid-cols-1) {'{'}
            grid-template-columns: repeat(1, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.grid-cols-2) {'{'}
            grid-template-columns: repeat(2, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.flex-row) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row
            {'}'}
            .tw-css :is(.flex-row-reverse) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
            {'}'}
            .tw-css :is(.flex-col) {'{'}
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
            {'}'}
            .tw-css :is(.flex-col-reverse) {'{'}
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse
            {'}'}
            .tw-css :is(.flex-wrap) {'{'}
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
            {'}'}
            .tw-css :is(.place-content-center) {'{'}
            place-content: center
            {'}'}
            .tw-css :is(.items-end) {'{'}
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
            {'}'}
            .tw-css :is(.items-center) {'{'}
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
            {'}'}
            .tw-css :is(.items-stretch) {'{'}
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch
            {'}'}
            .tw-css :is(.justify-start) {'{'}
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start
            {'}'}
            .tw-css :is(.justify-end) {'{'}
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end
            {'}'}
            .tw-css :is(.justify-center) {'{'}
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center
            {'}'}
            .tw-css :is(.justify-between) {'{'}
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
            {'}'}
            .tw-css :is(.justify-around) {'{'}
            -ms-flex-pack: distribute;
            justify-content: space-around
            {'}'}
            .tw-css :is(.justify-evenly) {'{'}
            -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
            justify-content: space-evenly
            {'}'}
            .tw-css :is(.gap-10) {'{'}
            gap: 2.5rem
            {'}'}
            .tw-css :is(.gap-12) {'{'}
            gap: 12px
            {'}'}
            .tw-css :is(.gap-24) {'{'}
            gap: 24px
            {'}'}
            .tw-css :is(.gap-4) {'{'}
            gap: 4px
            {'}'}
            .tw-css :is(.gap-48) {'{'}
            gap: 48px
            {'}'}
            .tw-css :is(.gap-6) {'{'}
            gap: 1.5rem
            {'}'}
            .tw-css :is(.gap-8) {'{'}
            gap: 8px
            {'}'}
            .tw-css :is(.gap-\[10px\]) {'{'}
            gap: 10px
            {'}'}
            .tw-css :is(.gap-\[4px\]) {'{'}
            gap: 4px
            {'}'}
            .tw-css :is(.gap-\[8px\]) {'{'}
            gap: 8px
            {'}'}
            .tw-css :is(.space-x-12&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(12px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(12px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-4&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(4px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(4px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-8&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(8px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(8px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-\[8px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(8px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(8px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-y-12&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(12px*var(--tw-space-y-reverse));
            margin-top: calc(12px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-24&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(24px*var(--tw-space-y-reverse));
            margin-top: calc(24px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-4&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(4px*var(--tw-space-y-reverse));
            margin-top: calc(4px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-48&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(48px*var(--tw-space-y-reverse));
            margin-top: calc(48px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-\[12px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(12px*var(--tw-space-y-reverse));
            margin-top: calc(12px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-\[8px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(8px*var(--tw-space-y-reverse));
            margin-top: calc(8px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-reverse&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 1
            {'}'}
            .tw-css :is(.space-x-reverse&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 1
            {'}'}
            .tw-css :is(.justify-self-start) {'{'}
            justify-self: start
            {'}'}
            .tw-css :is(.justify-self-end) {'{'}
            justify-self: end
            {'}'}
            .tw-css :is(.justify-self-center) {'{'}
            justify-self: center
            {'}'}
            .tw-css :is(.overflow-auto) {'{'}
            overflow: auto
            {'}'}
            .tw-css :is(.overflow-hidden) {'{'}
            overflow: hidden
            {'}'}
            .tw-css :is(.overflow-visible) {'{'}
            overflow: visible
            {'}'}
            .tw-css :is(.overscroll-none) {'{'}
            -ms-scroll-chaining: none;
            overscroll-behavior: none
            {'}'}
            .tw-css :is(.truncate) {'{'}
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
            {'}'}
            .tw-css :is(.whitespace-nowrap) {'{'}
            white-space: nowrap
            {'}'}
            .tw-css :is(.break-words) {'{'}
            overflow-wrap: break-word
            {'}'}
            .tw-css :is(.rounded) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-0) {'{'}
            border-radius: 0
            {'}'}
            .tw-css :is(.rounded-12) {'{'}
            border-radius: 12px
            {'}'}
            .tw-css :is(.rounded-2) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.rounded-4) {'{'}
            border-radius: 4px
            {'}'}
            .tw-css :is(.rounded-48) {'{'}
            border-radius: 48px
            {'}'}
            .tw-css :is(.rounded-8) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-\[24px\]) {'{'}
            border-radius: 24px
            {'}'}
            .tw-css :is(.rounded-\[48px\]) {'{'}
            border-radius: 48px
            {'}'}
            .tw-css :is(.rounded-\[52px\]) {'{'}
            border-radius: 52px
            {'}'}
            .tw-css :is(.rounded-\[8px\]) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-full) {'{'}
            border-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-none) {'{'}
            border-radius: 0
            {'}'}
            .tw-css :is(.rounded-l-full) {'{'}
            border-bottom-left-radius: 9999px;
            border-top-left-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-l-none) {'{'}
            border-bottom-left-radius: 0;
            border-top-left-radius: 0
            {'}'}
            .tw-css :is(.rounded-r-\[100px\]) {'{'}
            border-bottom-right-radius: 100px;
            border-top-right-radius: 100px
            {'}'}
            .tw-css :is(.rounded-r-full) {'{'}
            border-bottom-right-radius: 9999px;
            border-top-right-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-r-none) {'{'}
            border-bottom-right-radius: 0;
            border-top-right-radius: 0
            {'}'}
            .tw-css :is(.rounded-t-\[24px\]) {'{'}
            border-top-left-radius: 24px;
            border-top-right-radius: 24px
            {'}'}
            .tw-css :is(.border) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-0) {'{'}
            border-width: 0
            {'}'}
            .tw-css :is(.border-1) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.border-\[1px\]) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-b-1) {'{'}
            border-bottom-width: 1px
            {'}'}
            .tw-css :is(.border-t) {'{'}
            border-top-width: 1px
            {'}'}
            .tw-css :is(.border-t-1) {'{'}
            border-top-width: 1px
            {'}'}
            .tw-css :is(.border-solid) {'{'}
            border-style: solid
            {'}'}
            .tw-css :is(.border-none) {'{'}
            border-style: none
            {'}'}
            .tw-css :is(.border-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-aura) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(222 225 227/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-destructive-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-destructive-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-ghost-dark-border) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-button-ghost-default-border) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-button-primary-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(83 212 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-primary-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(39 127 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-secondary-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(255 255 255/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-secondary-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-gray) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(106 111 116/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-light-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(148 149 155/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-red) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-transparent) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-white) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(255 255 255/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-destructive-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-destructive-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-ghost-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-ghost-default) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-nonprimary-active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-primary-dark) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-primary-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-secondary-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-secondary-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-video-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(89 95 97/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-destructive) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(214 30 39/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-divider) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(222 225 227/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-error) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(214 30 39/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-light-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(148 149 155/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-light-gray) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(246 247 248/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-saltpan) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(248 255 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-success) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-transparent) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-warning) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 137 87/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-white) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-no-repeat) {'{'}
            background-repeat: no-repeat
            {'}'}
            .tw-css :is(.\!p-24) {'{'}
            padding: 24px !important
            {'}'}
            .tw-css :is(.p-0) {'{'}
            padding: 0
            {'}'}
            .tw-css :is(.p-12) {'{'}
            padding: 12px
            {'}'}
            .tw-css :is(.p-24) {'{'}
            padding: 24px
            {'}'}
            .tw-css :is(.p-36) {'{'}
            padding: 36px
            {'}'}
            .tw-css :is(.p-4) {'{'}
            padding: 4px
            {'}'}
            .tw-css :is(.p-\[11px\]) {'{'}
            padding: 11px
            {'}'}
            .tw-css :is(.px-0) {'{'}
            padding-left: 0;
            padding-right: 0
            {'}'}
            .tw-css :is(.px-12) {'{'}
            padding-left: 12px;
            padding-right: 12px
            {'}'}
            .tw-css :is(.px-24) {'{'}
            padding-left: 24px;
            padding-right: 24px
            {'}'}
            .tw-css :is(.px-4) {'{'}
            padding-left: 4px;
            padding-right: 4px
            {'}'}
            .tw-css :is(.px-8) {'{'}
            padding-left: 8px;
            padding-right: 8px
            {'}'}
            .tw-css :is(.px-\[24px\]) {'{'}
            padding-left: 24px;
            padding-right: 24px
            {'}'}
            .tw-css :is(.px-\[6px\]) {'{'}
            padding-left: 6px;
            padding-right: 6px
            {'}'}
            .tw-css :is(.py-10) {'{'}
            padding-bottom: 2.5rem;
            padding-top: 2.5rem
            {'}'}
            .tw-css :is(.py-12) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            .tw-css :is(.py-2) {'{'}
            padding-bottom: .5rem;
            padding-top: .5rem
            {'}'}
            .tw-css :is(.py-24) {'{'}
            padding-bottom: 24px;
            padding-top: 24px
            {'}'}
            .tw-css :is(.py-4) {'{'}
            padding-bottom: 4px;
            padding-top: 4px
            {'}'}
            .tw-css :is(.py-8) {'{'}
            padding-bottom: 8px;
            padding-top: 8px
            {'}'}
            .tw-css :is(.py-\[10px\]) {'{'}
            padding-bottom: 10px;
            padding-top: 10px
            {'}'}
            .tw-css :is(.py-\[11px\]) {'{'}
            padding-bottom: 11px;
            padding-top: 11px
            {'}'}
            .tw-css :is(.py-\[12px\]) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            .tw-css :is(.py-\[8px\]) {'{'}
            padding-bottom: 8px;
            padding-top: 8px
            {'}'}
            .tw-css :is(.pb-0) {'{'}
            padding-bottom: 0
            {'}'}
            .tw-css :is(.pb-2) {'{'}
            padding-bottom: .5rem
            {'}'}
            .tw-css :is(.pb-24) {'{'}
            padding-bottom: 24px
            {'}'}
            .tw-css :is(.pb-\[12px\]) {'{'}
            padding-bottom: 12px
            {'}'}
            .tw-css :is(.pl-12) {'{'}
            padding-left: 12px
            {'}'}
            .tw-css :is(.pl-24) {'{'}
            padding-left: 24px
            {'}'}
            .tw-css :is(.pl-\[10px\]) {'{'}
            padding-left: 10px
            {'}'}
            .tw-css :is(.pl-\[20px\]) {'{'}
            padding-left: 20px
            {'}'}
            .tw-css :is(.pl-\[36px\]) {'{'}
            padding-left: 36px
            {'}'}
            .tw-css :is(.pl-\[6px\]) {'{'}
            padding-left: 6px
            {'}'}
            .tw-css :is(.pr-12) {'{'}
            padding-right: 12px
            {'}'}
            .tw-css :is(.pr-24) {'{'}
            padding-right: 24px
            {'}'}
            .tw-css :is(.pr-48) {'{'}
            padding-right: 48px
            {'}'}
            .tw-css :is(.pr-\[10px\]) {'{'}
            padding-right: 10px
            {'}'}
            .tw-css :is(.pr-\[20px\]) {'{'}
            padding-right: 20px
            {'}'}
            .tw-css :is(.pt-0) {'{'}
            padding-top: 0
            {'}'}
            .tw-css :is(.pt-24) {'{'}
            padding-top: 24px
            {'}'}
            .tw-css :is(.pt-48) {'{'}
            padding-top: 48px
            {'}'}
            .tw-css :is(.pt-60) {'{'}
            padding-top: 60px
            {'}'}
            .tw-css :is(.pt-\[12px\]) {'{'}
            padding-top: 12px
            {'}'}
            .tw-css :is(.text-left) {'{'}
            text-align: left
            {'}'}
            .tw-css :is(.text-center) {'{'}
            text-align: center
            {'}'}
            .tw-css :is(.text-right) {'{'}
            text-align: right
            {'}'}
            .tw-css :is(.align-baseline) {'{'}
            vertical-align: baseline
            {'}'}
            .tw-css :is(.align-top) {'{'}
            vertical-align: top
            {'}'}
            .tw-css :is(.align-middle) {'{'}
            vertical-align: middle
            {'}'}
            .tw-css :is(.text-12) {'{'}
            font-size: 12px;
            line-height: 16px
            {'}'}
            .tw-css :is(.text-16) {'{'}
            font-size: 16px;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-20) {'{'}
            font-size: 20px;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-24) {'{'}
            font-size: 24px;
            line-height: 28px
            {'}'}
            .tw-css :is(.text-34) {'{'}
            font-size: 34px;
            line-height: 40px
            {'}'}
            .tw-css :is(.text-48) {'{'}
            font-size: 48px;
            line-height: 60px
            {'}'}
            .tw-css :is(.text-\[12px\]) {'{'}
            font-size: 12px
            {'}'}
            .tw-css :is(.text-\[32px\]) {'{'}
            font-size: 32px
            {'}'}
            .tw-css :is(.text-\[36px\]) {'{'}
            font-size: 36px
            {'}'}
            .tw-css :is(.text-\[40px\]) {'{'}
            font-size: 40px
            {'}'}
            .tw-css :is(.text-body-md) {'{'}
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-body-sm) {'{'}
            font-size: 12px;
            letter-spacing: 0;
            line-height: 16px
            {'}'}
            .tw-css :is(.text-header-lg) {'{'}
            font-size: 34px;
            letter-spacing: .005em;
            line-height: 40px
            {'}'}
            .tw-css :is(.text-header-md) {'{'}
            font-size: 24px;
            letter-spacing: .01em;
            line-height: 28px
            {'}'}
            .tw-css :is(.text-header-sm) {'{'}
            font-size: 20px;
            letter-spacing: .015em;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-header-xl) {'{'}
            font-size: 48px;
            letter-spacing: .0015em;
            line-height: 60px
            {'}'}
            .tw-css :is(.text-header-xs) {'{'}
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px
            {'}'}
            .tw-css :is(.font-bold) {'{'}
            font-weight: 700
            {'}'}
            .tw-css :is(.uppercase) {'{'}
            text-transform: uppercase
            {'}'}
            .tw-css :is(.lowercase) {'{'}
            text-transform: lowercase
            {'}'}
            .tw-css :is(.capitalize) {'{'}
            text-transform: capitalize
            {'}'}
            .tw-css :is(.normal-case) {'{'}
            text-transform: none
            {'}'}
            .tw-css :is(.italic) {'{'}
            font-style: italic
            {'}'}
            .tw-css :is(.leading-\[12px\]) {'{'}
            line-height: 12px
            {'}'}
            .tw-css :is(.leading-\[20px\]) {'{'}
            line-height: 20px
            {'}'}
            .tw-css :is(.leading-normal) {'{'}
            line-height: 1.5
            {'}'}
            .tw-css :is(.tracking-body-md-bold) {'{'}
            letter-spacing: 0
            {'}'}
            .tw-css :is(.tracking-body-sm-bold) {'{'}
            letter-spacing: 0
            {'}'}
            .tw-css :is(.text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-asphalt) {'{'}
            --tw-text-opacity: 1;
            color: rgb(187 190 191/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-black) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-destructive-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-destructive-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-ghost-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-ghost-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-primary-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-primary-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-secondary-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-secondary-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-gray) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-green) {'{'}
            --tw-text-opacity: 1;
            color: rgb(39 127 106/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-red) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-transparent) {'{'}
            color: transparent
            {'}'}
            .tw-css :is(.text-white) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.underline) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.no-underline) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.antialiased) {'{'}
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
            {'}'}
            .tw-css :is(.opacity-0) {'{'}
            opacity: 0
            {'}'}
            .tw-css :is(.opacity-100) {'{'}
            opacity: 1
            {'}'}
            .tw-css :is(.opacity-50) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.shadow-\[0_1px_6px_rgba\(0\,0\,0\,0\.12\)\]) {'{'}
            --tw-shadow: 0 1px 6px rgba(0, 0, 0, .12);
            --tw-shadow-colored: 0 1px 6px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-lg) {'{'}
            --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
            --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-none) {'{'}
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-sm) {'{'}
            --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
            --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.outline-none) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.outline) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.outline-2) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.outline-transparent) {'{'}
            outline-color: transparent
            {'}'}
            .tw-css :is(.ring-offset) {'{'}
            --tw-ring-offset-width: 1px
            {'}'}
            .tw-css :is(.blur) {'{'}
            --tw-blur: blur(8px);
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.drop-shadow) {'{'}
            --tw-drop-shadow: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15));
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.filter) {'{'}
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.transition-all) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.transition-colors) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.transition-transform) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.duration-300) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.duration-700) {'{'}
            -webkit-transition-duration: .7s;
            transition-duration: .7s
            {'}'}
            .tw-css :is(.ease-in-out) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.will-change-transform) {'{'}
            will-change: transform
            {'}'}
            .tw-css :is(.backdrop\:bg-black)::-webkit-backdrop {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.backdrop\:bg-black)::backdrop {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.backdrop\:bg-opacity-50)::-webkit-backdrop {'{'}
            --tw-bg-opacity: .5
            {'}'}
            .tw-css :is(.backdrop\:bg-opacity-50)::backdrop {'{'}
            --tw-bg-opacity: .5
            {'}'}
            .tw-css :is(.backdrop\:transition-opacity)::-webkit-backdrop {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.backdrop\:transition-opacity)::backdrop {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.before\:absolute):before {'{'}
            content: var(--tw-content);
            position: absolute
            {'}'}
            .tw-css :is(.before\:bottom-0):before {'{'}
            bottom: 0;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:bottom-12):before {'{'}
            bottom: 12px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:left-0):before {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.before\:left-60):before {'{'}
            content: var(--tw-content);
            left: 60px
            {'}'}
            .tw-css :is(.before\:top-12):before {'{'}
            content: var(--tw-content);
            top: 12px
            {'}'}
            .tw-css :is(.before\:-z-\[1\]):before {'{'}
            content: var(--tw-content);
            z-index: -1
            {'}'}
            .tw-css :is(.before\:block):before {'{'}
            content: var(--tw-content);
            display: block
            {'}'}
            .tw-css :is(.before\:h-12):before {'{'}
            content: var(--tw-content);
            height: 12px
            {'}'}
            .tw-css :is(.before\:h-4):before {'{'}
            content: var(--tw-content);
            height: 4px
            {'}'}
            .tw-css :is(.before\:w-0):before {'{'}
            content: var(--tw-content);
            width: 0
            {'}'}
            .tw-css :is(.before\:w-12):before {'{'}
            content: var(--tw-content);
            width: 12px
            {'}'}
            .tw-css :is(.before\:w-full):before {'{'}
            content: var(--tw-content);
            width: 100%
            {'}'}
            .tw-css :is(.before\:scale-0):before {'{'}
            --tw-scale-x: 0;
            --tw-scale-y: 0;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.before\:rounded-48):before {'{'}
            border-radius: 48px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:rounded-full):before {'{'}
            border-radius: 9999px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:bg-black):before {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:shadow-\[0_0_6px_0_rgba\(0\,0\,0\,0\.15\)\]):before {'{'}
            --tw-shadow: 0 0 6px 0 rgba(0, 0, 0, .15);
            --tw-shadow-colored: 0 0 6px 0 var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:shadow-\[inset_1em_1em_black\]):before {'{'}
            --tw-shadow: inset 1em 1em #000;
            --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:transition-all):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.before\:duration-75):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: 75ms;
            transition-duration: 75ms
            {'}'}
            .tw-css :is(.before\:ease-linear):before {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: linear;
            transition-timing-function: linear
            {'}'}
            .tw-css :is(.after\:absolute):after {'{'}
            content: var(--tw-content);
            position: absolute
            {'}'}
            .tw-css :is(.after\:-top-12):after {'{'}
            content: var(--tw-content);
            top: -12px
            {'}'}
            .tw-css :is(.after\:bottom-0):after {'{'}
            bottom: 0;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:left-0):after {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.after\:right-0):after {'{'}
            content: var(--tw-content);
            right: 0
            {'}'}
            .tw-css :is(.after\:top-0):after {'{'}
            content: var(--tw-content);
            top: 0
            {'}'}
            .tw-css :is(.after\:z-10):after {'{'}
            content: var(--tw-content);
            z-index: 10
            {'}'}
            .tw-css :is(.after\:m-\[2px\]):after {'{'}
            content: var(--tw-content);
            margin: 2px
            {'}'}
            .tw-css :is(.after\:block):after {'{'}
            content: var(--tw-content);
            display: block
            {'}'}
            .tw-css :is(.after\:h-48):after {'{'}
            content: var(--tw-content);
            height: 48px
            {'}'}
            .tw-css :is(.after\:h-\[24px\]):after {'{'}
            content: var(--tw-content);
            height: 24px
            {'}'}
            .tw-css :is(.after\:h-screen):after {'{'}
            content: var(--tw-content);
            height: 100vh
            {'}'}
            .tw-css :is(.after\:w-\[24px\]):after {'{'}
            content: var(--tw-content);
            width: 24px
            {'}'}
            .tw-css :is(.after\:w-screen):after {'{'}
            content: var(--tw-content);
            width: 100vw
            {'}'}
            .tw-css :is(.after\:rounded-full):after {'{'}
            border-radius: 9999px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:bg-white):after {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:shadow):after {'{'}
            --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);
            --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:duration-300):after {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.after\:ease-in-out):after {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.after\:content-\[\"\"\]):after {'{'}
            --tw-content: "";
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.first\:mt-12:first-child) {'{'}
            margin-top: 12px
            {'}'}
            .tw-css :is(.last\:mb-12:last-child) {'{'}
            margin-bottom: 12px
            {'}'}
            .tw-css :is(.visited\:text-black:visited) {'{'}
            color: #2f3639
            {'}'}
            .tw-css :is(.visited\:text-gray:visited) {'{'}
            color: #6a6f74
            {'}'}
            .tw-css :is(.visited\:text-red:visited) {'{'}
            color: #d61e27
            {'}'}
            .tw-css :is(.visited\:text-white:visited) {'{'}
            color: #fff
            {'}'}
            .tw-css :is(.visited\:no-underline:visited) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.checked\:border-black:checked) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.checked\:text-white:checked) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.checked\:before\:scale-\[1\]:checked):before {'{'}
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.invalid\:border-red:invalid) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:border-black:focus-within) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:border-red:focus-within) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:outline-none:focus-within) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.hover\:aspect-square:hover) {'{'}
            aspect-ratio: 1/1
            {'}'}
            .tw-css :is(.hover\:cursor-pointer:hover) {'{'}
            cursor: pointer
            {'}'}
            .tw-css :is(.hover\:rounded-2:hover) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.hover\:border-black:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-destructive-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-destructive-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-ghost-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-ghost-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-primary-dark-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(83 212 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-primary-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(0 94 77/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-secondary-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-secondary-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-red:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-black:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-destructive-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-destructive-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-ghost-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-ghost-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-nonprimary-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-primary-dark-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(83 212 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-primary-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(0 94 77/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-secondary-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-secondary-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-video-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(102 107 109/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-video-destructive-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(194 27 35/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-light-gray:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(246 247 248/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-transparent:hover) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.hover\:bg-white:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:p-1:hover) {'{'}
            padding: .25rem
            {'}'}
            .tw-css :is(.hover\:text-black:hover) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.hover\:underline:hover) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.hover\:no-underline:hover) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.hover\:outline:hover) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.hover\:outline-1:hover) {'{'}
            outline-width: 1px
            {'}'}
            .tw-css :is(.hover\:outline-2:hover) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.hover\:outline-black:hover) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.hover\:outline-light-gray:hover) {'{'}
            outline-color: #f6f7f8
            {'}'}
            .tw-css :is(.hover\:transition-all:hover) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.hover\:duration-300:hover) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.hover\:ease-in-out:hover) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.hover\:before\:left-0:hover):before {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.hover\:before\:w-full:hover):before {'{'}
            content: var(--tw-content);
            width: 100%
            {'}'}
            .tw-css :is(.hover\:before\:bg-divider:hover):before {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(222 225 227/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.focus\:border-black:focus) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus\:border-red:focus) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus\:text-black:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-gray:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-red:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-white:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:underline:focus) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.focus\:no-underline:focus) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.focus\:outline-none:focus) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:aspect-auto:focus-visible) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.focus-visible\:rounded-full:focus-visible) {'{'}
            border-radius: 9999px
            {'}'}
            .tw-css :is(.focus-visible\:border-black:focus-visible) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-visible\:outline-none:focus-visible) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline:focus-visible) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.focus-visible\:outline-2:focus-visible) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline-offset-1:focus-visible) {'{'}
            outline-offset: 1px
            {'}'}
            .tw-css :is(.focus-visible\:outline-offset-2:focus-visible) {'{'}
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline-black:focus-visible) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.focus-visible\:ring:focus-visible) {'{'}
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
            {'}'}
            .tw-css :is(.focus-visible\:ring-black:focus-visible) {'{'}
            --tw-ring-opacity: 1;
            --tw-ring-color: rgb(47 54 57/var(--tw-ring-opacity))
            {'}'}
            .tw-css :is(.focus-visible\:ring-offset-2:focus-visible) {'{'}
            --tw-ring-offset-width: 2px
            {'}'}
            .tw-css :is(.active\:border-black:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-destructive-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-destructive-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-ghost-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-ghost-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-primary-dark-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(78 201 101/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-primary-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(25 82 68/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-secondary-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-secondary-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:bg-black:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-destructive-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-destructive-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-ghost-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-ghost-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-nonprimary-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-primary-dark-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(78 201 101/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-primary-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(25 82 68/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-secondary-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-secondary-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-video-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(117 122 124/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-video-destructive-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(173 24 32/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-white:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:text-black:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-gray:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-red:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-white:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:underline:active) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.active\:no-underline:active) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.active\:outline-none:active) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.enabled\:opacity-50:enabled) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.disabled\:pointer-events-none:disabled) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.disabled\:opacity-50:disabled) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.hover\:disabled\:border-asphalt:disabled:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.disabled\:focus-visible\:outline-none:focus-visible:disabled) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.disabled\:active\:outline-none:active:disabled) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.group:focus-within .group-focus-within\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.group:hover .group-hover\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.group:hover .group-hover\:rounded-2) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.group:hover .group-hover\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:text-white) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:duration-300) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:ease-in-out) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:after\:translate-x-20):after {'{'}
            --tw-translate-x: 20px;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:disabled\:bg-asphalt:disabled) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.group:hover .peer-checked\:group-hover\:bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:aspect-auto) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:outline-none) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring) {'{'}
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring-black) {'{'}
            --tw-ring-opacity: 1;
            --tw-ring-color: rgb(47 54 57/var(--tw-ring-opacity))
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring-offset-2) {'{'}
            --tw-ring-offset-width: 2px
            {'}'}
            .tw-css :is(.peer:disabled~.peer-disabled\:border-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:disabled~.peer-disabled\:bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:disabled:checked~.peer-disabled\:peer-checked\:bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.aria-checked\:bg-transparent[aria-checked=true]) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.aria-checked\:outline[aria-checked=true]) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.aria-checked\:outline-2[aria-checked=true]) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.aria-checked\:outline-black[aria-checked=true]) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.aria-selected\:hover\:bg-gray:hover[aria-selected=true]) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(106 111 116/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-transparent) {'{'}
            border-color: transparent
            {'}'}
            @media (min-width:640px) {'{'}
            .tw-css :is(.sm\:gap-24) {'{'}
            gap: 24px
            {'}'}
            .tw-css :is(.sm\:justify-self-start) {'{'}
            justify-self: start
            {'}'}
            .tw-css :is(.sm\:justify-self-end) {'{'}
            justify-self: end
            {'}'}
            .tw-css :is(.sm\:py-12) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            {'}'}
            @media (min-width:768px) {'{'}
            .tw-css :is(.md\:absolute) {'{'}
            position: absolute
            {'}'}
            .tw-css :is(.md\:relative) {'{'}
            position: relative
            {'}'}
            .tw-css :is(.md\:bottom-auto) {'{'}
            bottom: auto
            {'}'}
            .tw-css :is(.md\:left-0) {'{'}
            left: 0
            {'}'}
            .tw-css :is(.md\:left-12) {'{'}
            left: 12px
            {'}'}
            .tw-css :is(.md\:right-0) {'{'}
            right: 0
            {'}'}
            .tw-css :is(.md\:right-12) {'{'}
            right: 12px
            {'}'}
            .tw-css :is(.md\:top-0) {'{'}
            top: 0
            {'}'}
            .tw-css :is(.md\:top-12) {'{'}
            top: 12px
            {'}'}
            .tw-css :is(.md\:top-full) {'{'}
            top: 100%
            {'}'}
            .tw-css :is(.md\:-m-12) {'{'}
            margin: -12px
            {'}'}
            .tw-css :is(.md\:my-24) {'{'}
            margin-bottom: 24px;
            margin-top: 24px
            {'}'}
            .tw-css :is(.md\:-mt-24) {'{'}
            margin-top: -24px
            {'}'}
            .tw-css :is(.md\:ml-\[-500px\]) {'{'}
            margin-left: -500px
            {'}'}
            .tw-css :is(.md\:ml-\[180px\]) {'{'}
            margin-left: 180px
            {'}'}
            .tw-css :is(.md\:ml-\[200px\]) {'{'}
            margin-left: 200px
            {'}'}
            .tw-css :is(.md\:ml-\[264px\]) {'{'}
            margin-left: 264px
            {'}'}
            .tw-css :is(.md\:ml-\[618px\]) {'{'}
            margin-left: 618px
            {'}'}
            .tw-css :is(.md\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.md\:flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.md\:inline-flex) {'{'}
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex
            {'}'}
            .tw-css :is(.md\:hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.md\:h-48) {'{'}
            height: 48px
            {'}'}
            .tw-css :is(.md\:h-60) {'{'}
            height: 60px
            {'}'}
            .tw-css :is(.md\:h-\[calc\(100\%\+24px\)\]) {'{'}
            height: calc(100% + 24px)
            {'}'}
            .tw-css :is(.md\:w-\[200px\]) {'{'}
            width: 200px
            {'}'}
            .tw-css :is(.md\:w-\[355px\]) {'{'}
            width: 355px
            {'}'}
            .tw-css :is(.md\:w-\[600px\]) {'{'}
            width: 600px
            {'}'}
            .tw-css :is(.md\:w-\[820px\]) {'{'}
            width: 820px
            {'}'}
            .tw-css :is(.md\:w-auto) {'{'}
            width: auto
            {'}'}
            .tw-css :is(.md\:flex-1) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 0%;
            flex: 1 1 0%
            {'}'}
            .tw-css :is(.md\:grid-cols-2) {'{'}
            grid-template-columns: repeat(2, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.md\:flex-row) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row
            {'}'}
            .tw-css :is(.md\:items-center) {'{'}
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
            {'}'}
            .tw-css :is(.md\:gap-0) {'{'}
            gap: 0
            {'}'}
            .tw-css :is(.md\:gap-12) {'{'}
            gap: 12px
            {'}'}
            .tw-css :is(.md\:gap-72) {'{'}
            gap: 72px
            {'}'}
            .tw-css :is(.md\:rounded-\[14px\]) {'{'}
            border-radius: 14px
            {'}'}
            .tw-css :is(.md\:border-b) {'{'}
            border-bottom-width: 1px
            {'}'}
            .tw-css :is(.md\:border-none) {'{'}
            border-style: none
            {'}'}
            .tw-css :is(.md\:border-transparent) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.md\:border-b-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-bottom-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.md\:p-36) {'{'}
            padding: 36px
            {'}'}
            .tw-css :is(.md\:px-12) {'{'}
            padding-left: 12px;
            padding-right: 12px
            {'}'}
            .tw-css :is(.md\:px-48) {'{'}
            padding-left: 48px;
            padding-right: 48px
            {'}'}
            .tw-css :is(.md\:px-72) {'{'}
            padding-left: 72px;
            padding-right: 72px
            {'}'}
            .tw-css :is(.md\:py-24) {'{'}
            padding-bottom: 24px;
            padding-top: 24px
            {'}'}
            .tw-css :is(.md\:py-48) {'{'}
            padding-bottom: 48px;
            padding-top: 48px
            {'}'}
            .tw-css :is(.md\:py-\[18px\]) {'{'}
            padding-bottom: 18px;
            padding-top: 18px
            {'}'}
            .tw-css :is(.md\:pb-0) {'{'}
            padding-bottom: 0
            {'}'}
            .tw-css :is(.md\:pb-12) {'{'}
            padding-bottom: 12px
            {'}'}
            .tw-css :is(.md\:pb-24) {'{'}
            padding-bottom: 24px
            {'}'}
            .tw-css :is(.md\:pb-4) {'{'}
            padding-bottom: 4px
            {'}'}
            .tw-css :is(.md\:pb-48) {'{'}
            padding-bottom: 48px
            {'}'}
            .tw-css :is(.md\:pl-24) {'{'}
            padding-left: 24px
            {'}'}
            .tw-css :is(.md\:pl-\[18px\]) {'{'}
            padding-left: 18px
            {'}'}
            .tw-css :is(.md\:pr-0) {'{'}
            padding-right: 0
            {'}'}
            .tw-css :is(.md\:pr-4) {'{'}
            padding-right: 4px
            {'}'}
            .tw-css :is(.md\:pt-24) {'{'}
            padding-top: 24px
            {'}'}
            .tw-css :is(.md\:pt-4) {'{'}
            padding-top: 4px
            {'}'}
            .tw-css :is(.md\:pt-48) {'{'}
            padding-top: 48px
            {'}'}
            .tw-css :is(.md\:pt-60) {'{'}
            padding-top: 60px
            {'}'}
            .tw-css :is(.md\:text-header-lg-tablet) {'{'}
            font-size: 40px;
            letter-spacing: .005em;
            line-height: 48px
            {'}'}
            .tw-css :is(.md\:text-header-md-tablet) {'{'}
            font-size: 28px;
            letter-spacing: .01em;
            line-height: 36px
            {'}'}
            .tw-css :is(.md\:shadow-none) {'{'}
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.md\:after\:h-0):after {'{'}
            content: var(--tw-content);
            height: 0
            {'}'}
            .tw-css :is(.md\:first\:mt-24:first-child) {'{'}
            margin-top: 24px
            {'}'}
            .tw-css :is(.md\:last\:mb-24:last-child) {'{'}
            margin-bottom: 24px
            {'}'}
            {'}'}
            @media (min-width:1024px) {'{'}
            .tw-css :is(.lg\:w-\[355px\]) {'{'}
            width: 355px
            {'}'}
            .tw-css :is(.lg\:w-\[440px\]) {'{'}
            width: 440px
            {'}'}
            {'}'}
            @media (min-width:1280px) {'{'}
            .tw-css :is(.xl\:flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.xl\:hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.xl\:justify-between) {'{'}
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
            {'}'}
            .tw-css :is(.xl\:pr-60) {'{'}
            padding-right: 60px
            {'}'}
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:pointer-events-none&gt;*) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:pointer-events-auto&gt;*) {'{'}
            pointer-events: auto
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:transition-all&gt;*) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:duration-300&gt;*) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:ease-in-out&gt;*) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:transition-all&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:duration-300&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:ease-in-out&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .prev_next_page_btn&gt;svg&gt;path {'{'}
            stroke-width: 1
            {'}'}
            .prev_next_page_btn:hover&gt;svg&gt;path {'{'}
            stroke-width: 2
            {'}'}
            .tw-preflight *,
            .tw-preflight :before,
            .tw-preflight :after {'{'}
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: theme("borderColor.DEFAULT", currentColor)
            {'}'}
            .tw-preflight :before,
            .tw-preflight :after {'{'}
            --tw-content: ""
            {'}'}
            .tw-preflight html {'{'}
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: theme("fontFamily.sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
            font-feature-settings: theme("fontFamily.sans[1].fontFeatureSettings", normal);
            font-variation-settings: theme("fontFamily.sans[1].fontVariationSettings", normal)
            {'}'}
            .tw-preflight body {'{'}
            margin: 0;
            line-height: inherit
            {'}'}
            .tw-preflight hr {'{'}
            height: 0;
            color: inherit;
            border-top-width: 1px
            {'}'}
            .tw-preflight abbr:where([title]) {'{'}
            text-decoration: underline dotted
            {'}'}
            .tw-preflight h1,
            .tw-preflight h2,
            .tw-preflight h3,
            .tw-preflight h4,
            .tw-preflight h5,
            .tw-preflight h6 {'{'}
            font-size: inherit;
            font-weight: inherit
            {'}'}
            .tw-preflight a {'{'}
            color: inherit;
            text-decoration: inherit
            {'}'}
            .tw-preflight b,
            .tw-preflight strong {'{'}
            font-weight: bolder
            {'}'}
            .tw-preflight code,
            .tw-preflight kbd,
            .tw-preflight samp,
            .tw-preflight pre {'{'}
            font-family: theme("fontFamily.mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
            font-size: 1em
            {'}'}
            .tw-preflight small {'{'}
            font-size: 80%
            {'}'}
            .tw-preflight sub,
            .tw-preflight sup {'{'}
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline
            {'}'}
            .tw-preflight sub {'{'}
            bottom: -.25em
            {'}'}
            .tw-preflight sup {'{'}
            top: -.5em
            {'}'}
            .tw-preflight table {'{'}
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse
            {'}'}
            .tw-preflight button,
            .tw-preflight input,
            .tw-preflight optgroup,
            .tw-preflight select,
            .tw-preflight textarea {'{'}
            font-family: inherit;
            font-feature-settings: inherit;
            font-variation-settings: inherit;
            font-size: 100%;
            font-weight: inherit;
            line-height: inherit;
            color: inherit;
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight button,
            .tw-preflight select {'{'}
            text-transform: none
            {'}'}
            .tw-preflight button,
            .tw-preflight [type=button],
            .tw-preflight [type=reset],
            .tw-preflight [type=submit] {'{'}
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none
            {'}'}
            .tw-preflight :-moz-focusring {'{'}
            outline: auto
            {'}'}
            .tw-preflight :-moz-ui-invalid {'{'}
            box-shadow: none
            {'}'}
            .tw-preflight progress {'{'}
            vertical-align: baseline
            {'}'}
            .tw-preflight ::-webkit-inner-spin-button,
            .tw-preflight ::-webkit-outer-spin-button {'{'}
            height: auto
            {'}'}
            .tw-preflight [type=search] {'{'}
            -webkit-appearance: textfield;
            outline-offset: -2px
            {'}'}
            .tw-preflight ::-webkit-search-decoration {'{'}
            -webkit-appearance: none
            {'}'}
            .tw-preflight ::-webkit-file-upload-button {'{'}
            -webkit-appearance: button;
            font: inherit
            {'}'}
            .tw-preflight summary {'{'}
            display: list-item
            {'}'}
            .tw-preflight blockquote,
            .tw-preflight dl,
            .tw-preflight dd,
            .tw-preflight h1,
            .tw-preflight h2,
            .tw-preflight h3,
            .tw-preflight h4,
            .tw-preflight h5,
            .tw-preflight h6,
            .tw-preflight hr,
            .tw-preflight figure,
            .tw-preflight p,
            .tw-preflight pre {'{'}
            margin: 0
            {'}'}
            .tw-preflight fieldset {'{'}
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight legend {'{'}
            padding: 0
            {'}'}
            .tw-preflight ol,
            .tw-preflight ul,
            .tw-preflight menu {'{'}
            list-style: none;
            margin: 0;
            padding: 0
            {'}'}
            .tw-preflight dialog {'{'}
            padding: 0
            {'}'}
            .tw-preflight textarea {'{'}
            resize: vertical
            {'}'}
            .tw-preflight input::placeholder,
            .tw-preflight textarea::placeholder {'{'}
            opacity: 1;
            color: theme("colors.gray.400", #9ca3af)
            {'}'}
            .tw-preflight button,
            .tw-preflight [role=button] {'{'}
            cursor: pointer
            {'}'}
            .tw-preflight :disabled {'{'}
            cursor: default
            {'}'}
            .tw-preflight img,
            .tw-preflight svg,
            .tw-preflight video,
            .tw-preflight canvas,
            .tw-preflight audio,
            .tw-preflight iframe,
            .tw-preflight embed,
            .tw-preflight object {'{'}
            display: block;
            vertical-align: middle
            {'}'}
            .tw-preflight img,
            .tw-preflight video {'{'}
            max-width: 100%;
            height: auto
            {'}'}
            .tw-preflight [hidden] {'{'}
            display: none
            {'}'}
            *,
            :after,
            :before {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            ::-webkit-backdrop {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            ::backdrop {'{'}
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-pan-x: ;
            --tw-pan-y: ;
            --tw-pinch-zoom: ;
            --tw-scroll-snap-strictness: proximity;
            --tw-gradient-from-position: ;
            --tw-gradient-via-position: ;
            --tw-gradient-to-position: ;
            --tw-ordinal: ;
            --tw-slashed-zero: ;
            --tw-numeric-figure: ;
            --tw-numeric-spacing: ;
            --tw-numeric-fraction: ;
            --tw-ring-inset: ;
            --tw-ring-offset-width: 1px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: #2f3639;
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            --tw-blur: ;
            --tw-brightness: ;
            --tw-contrast: ;
            --tw-grayscale: ;
            --tw-hue-rotate: ;
            --tw-invert: ;
            --tw-saturate: ;
            --tw-sepia: ;
            --tw-drop-shadow: ;
            --tw-backdrop-blur: ;
            --tw-backdrop-brightness: ;
            --tw-backdrop-contrast: ;
            --tw-backdrop-grayscale: ;
            --tw-backdrop-hue-rotate: ;
            --tw-backdrop-invert: ;
            --tw-backdrop-opacity: ;
            --tw-backdrop-saturate: ;
            --tw-backdrop-sepia:
            {'}'}
            .container {'{'}
            width: 100%
            {'}'}
            @media (min-width:640px) {'{'}
            .container {'{'}
            max-width: 640px
            {'}'}
            {'}'}
            @media (min-width:768px) {'{'}
            .container {'{'}
            max-width: 768px
            {'}'}
            {'}'}
            @media (min-width:1024px) {'{'}
            .container {'{'}
            max-width: 1024px
            {'}'}
            {'}'}
            @media (min-width:1280px) {'{'}
            .container {'{'}
            max-width: 1280px
            {'}'}
            {'}'}
            @media (min-width:1536px) {'{'}
            .container {'{'}
            max-width: 1536px
            {'}'}
            {'}'}
            .tw-css :is(.sr-only) {'{'}
            clip: rect(0, 0, 0, 0);
            border-width: 0;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px
            {'}'}
            .tw-css :is(.pointer-events-none) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.pointer-events-auto) {'{'}
            pointer-events: auto
            {'}'}
            .tw-css :is(.\!visible) {'{'}
            visibility: visible !important
            {'}'}
            .tw-css :is(.visible) {'{'}
            visibility: visible
            {'}'}
            .tw-css :is(.invisible) {'{'}
            visibility: hidden
            {'}'}
            .tw-css :is(.collapse) {'{'}
            visibility: collapse
            {'}'}
            .tw-css :is(.static) {'{'}
            position: static
            {'}'}
            .tw-css :is(.fixed) {'{'}
            position: fixed
            {'}'}
            .tw-css :is(.absolute) {'{'}
            position: absolute
            {'}'}
            .tw-css :is(.relative) {'{'}
            position: relative
            {'}'}
            .tw-css :is(.sticky) {'{'}
            position: sticky
            {'}'}
            .tw-css :is(.-bottom-\[11px\]) {'{'}
            bottom: -11px
            {'}'}
            .tw-css :is(.-top-\[11px\]) {'{'}
            top: -11px
            {'}'}
            .tw-css :is(.bottom-0) {'{'}
            bottom: 0
            {'}'}
            .tw-css :is(.bottom-24) {'{'}
            bottom: 24px
            {'}'}
            .tw-css :is(.bottom-\[16px\]) {'{'}
            bottom: 16px
            {'}'}
            .tw-css :is(.bottom-\[96px\]) {'{'}
            bottom: 96px
            {'}'}
            .tw-css :is(.left-0) {'{'}
            left: 0
            {'}'}
            .tw-css :is(.left-12) {'{'}
            left: 12px
            {'}'}
            .tw-css :is(.left-2\/4) {'{'}
            left: 50%
            {'}'}
            .tw-css :is(.left-60) {'{'}
            left: 60px
            {'}'}
            .tw-css :is(.right-0) {'{'}
            right: 0
            {'}'}
            .tw-css :is(.right-12) {'{'}
            right: 12px
            {'}'}
            .tw-css :is(.right-\[15px\]) {'{'}
            right: 15px
            {'}'}
            .tw-css :is(.right-\[16px\]) {'{'}
            right: 16px
            {'}'}
            .tw-css :is(.right-\[19px\]) {'{'}
            right: 19px
            {'}'}
            .tw-css :is(.right-\[24px\]) {'{'}
            right: 24px
            {'}'}
            .tw-css :is(.right-\[2px\]) {'{'}
            right: 2px
            {'}'}
            .tw-css :is(.right-full) {'{'}
            right: 100%
            {'}'}
            .tw-css :is(.top-0) {'{'}
            top: 0
            {'}'}
            .tw-css :is(.top-1\/2) {'{'}
            top: 50%
            {'}'}
            .tw-css :is(.top-1\/4) {'{'}
            top: 25%
            {'}'}
            .tw-css :is(.top-12) {'{'}
            top: 12px
            {'}'}
            .tw-css :is(.top-36) {'{'}
            top: 36px
            {'}'}
            .tw-css :is(.top-\[14px\]) {'{'}
            top: 14px
            {'}'}
            .tw-css :is(.top-\[180px\]) {'{'}
            top: 180px
            {'}'}
            .tw-css :is(.top-\[20px\]) {'{'}
            top: 20px
            {'}'}
            .tw-css :is(.top-\[2px\]) {'{'}
            top: 2px
            {'}'}
            .tw-css :is(.top-full) {'{'}
            top: 100%
            {'}'}
            .tw-css :is(.isolate) {'{'}
            isolation: isolate
            {'}'}
            .tw-css :is(.z-10) {'{'}
            z-index: 10
            {'}'}
            .tw-css :is(.z-20) {'{'}
            z-index: 20
            {'}'}
            .tw-css :is(.z-30) {'{'}
            z-index: 30
            {'}'}
            .tw-css :is(.z-40) {'{'}
            z-index: 40
            {'}'}
            .tw-css :is(.z-50) {'{'}
            z-index: 50
            {'}'}
            .tw-css :is(.m-0) {'{'}
            margin: 0
            {'}'}
            .tw-css :is(.m-12) {'{'}
            margin: 12px
            {'}'}
            .tw-css :is(.m-\[2px\]) {'{'}
            margin: 2px
            {'}'}
            .tw-css :is(.m-auto) {'{'}
            margin: auto
            {'}'}
            .tw-css :is(.-mx-\[16px\]) {'{'}
            margin-left: -16px;
            margin-right: -16px
            {'}'}
            .tw-css :is(.-my-12) {'{'}
            margin-bottom: -12px;
            margin-top: -12px
            {'}'}
            .tw-css :is(.mx-8) {'{'}
            margin-left: 8px;
            margin-right: 8px
            {'}'}
            .tw-css :is(.mx-auto) {'{'}
            margin-left: auto;
            margin-right: auto
            {'}'}
            .tw-css :is(.my-10) {'{'}
            margin-bottom: 2.5rem;
            margin-top: 2.5rem
            {'}'}
            .tw-css :is(.my-2) {'{'}
            margin-bottom: .5rem;
            margin-top: .5rem
            {'}'}
            .tw-css :is(.my-4) {'{'}
            margin-bottom: 4px;
            margin-top: 4px
            {'}'}
            .tw-css :is(.-ml-12) {'{'}
            margin-left: -12px
            {'}'}
            .tw-css :is(.-ml-\[2px\]) {'{'}
            margin-left: -2px
            {'}'}
            .tw-css :is(.-mr-12) {'{'}
            margin-right: -12px
            {'}'}
            .tw-css :is(.-mr-24) {'{'}
            margin-right: -24px
            {'}'}
            .tw-css :is(.mb-12) {'{'}
            margin-bottom: 12px
            {'}'}
            .tw-css :is(.mb-24) {'{'}
            margin-bottom: 24px
            {'}'}
            .tw-css :is(.mb-4) {'{'}
            margin-bottom: 4px
            {'}'}
            .tw-css :is(.mb-48) {'{'}
            margin-bottom: 48px
            {'}'}
            .tw-css :is(.mb-\[16px\]) {'{'}
            margin-bottom: 16px
            {'}'}
            .tw-css :is(.mb-\[20px\]) {'{'}
            margin-bottom: 20px
            {'}'}
            .tw-css :is(.mb-\[22px\]) {'{'}
            margin-bottom: 22px
            {'}'}
            .tw-css :is(.mb-\[26px\]) {'{'}
            margin-bottom: 26px
            {'}'}
            .tw-css :is(.mb-\[28px\]) {'{'}
            margin-bottom: 28px
            {'}'}
            .tw-css :is(.mb-\[36px\]) {'{'}
            margin-bottom: 36px
            {'}'}
            .tw-css :is(.mb-\[3px\]) {'{'}
            margin-bottom: 3px
            {'}'}
            .tw-css :is(.ml-4) {'{'}
            margin-left: 4px
            {'}'}
            .tw-css :is(.ml-8) {'{'}
            margin-left: 8px
            {'}'}
            .tw-css :is(.ml-\[16px\]) {'{'}
            margin-left: 16px
            {'}'}
            .tw-css :is(.ml-\[5px\]) {'{'}
            margin-left: 5px
            {'}'}
            .tw-css :is(.ml-auto) {'{'}
            margin-left: auto
            {'}'}
            .tw-css :is(.mr-4) {'{'}
            margin-right: 4px
            {'}'}
            .tw-css :is(.mr-\[4px\]) {'{'}
            margin-right: 4px
            {'}'}
            .tw-css :is(.mt-0) {'{'}
            margin-top: 0
            {'}'}
            .tw-css :is(.mt-12) {'{'}
            margin-top: 12px
            {'}'}
            .tw-css :is(.mt-24) {'{'}
            margin-top: 24px
            {'}'}
            .tw-css :is(.mt-48) {'{'}
            margin-top: 48px
            {'}'}
            .tw-css :is(.mt-\[-16px\]) {'{'}
            margin-top: -16px
            {'}'}
            .tw-css :is(.mt-\[4px\]) {'{'}
            margin-top: 4px
            {'}'}
            .tw-css :is(.mt-\[6px\]) {'{'}
            margin-top: 6px
            {'}'}
            .tw-css :is(.box-content) {'{'}
            -webkit-box-sizing: content-box;
            box-sizing: content-box
            {'}'}
            .tw-css :is(.line-clamp-1) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-2) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-3) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-4) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-5) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.line-clamp-6) {'{'}
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            display: -webkit-box;
            overflow: hidden
            {'}'}
            .tw-css :is(.block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.inline-block) {'{'}
            display: inline-block
            {'}'}
            .tw-css :is(.inline) {'{'}
            display: inline
            {'}'}
            .tw-css :is(.flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.inline-flex) {'{'}
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex
            {'}'}
            .tw-css :is(.table) {'{'}
            display: table
            {'}'}
            .tw-css :is(.grid) {'{'}
            display: grid
            {'}'}
            .tw-css :is(.contents) {'{'}
            display: contents
            {'}'}
            .tw-css :is(.hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.aspect-auto) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.aspect-square) {'{'}
            aspect-ratio: 1/1
            {'}'}
            .tw-css :is(.h-0) {'{'}
            height: 0
            {'}'}
            .tw-css :is(.h-24) {'{'}
            height: 24px
            {'}'}
            .tw-css :is(.h-36) {'{'}
            height: 36px
            {'}'}
            .tw-css :is(.h-4) {'{'}
            height: 4px
            {'}'}
            .tw-css :is(.h-48) {'{'}
            height: 48px
            {'}'}
            .tw-css :is(.h-60) {'{'}
            height: 60px
            {'}'}
            .tw-css :is(.h-\[16px\]) {'{'}
            height: 16px
            {'}'}
            .tw-css :is(.h-\[18px\]) {'{'}
            height: 18px
            {'}'}
            .tw-css :is(.h-\[20px\]) {'{'}
            height: 20px
            {'}'}
            .tw-css :is(.h-\[28px\]) {'{'}
            height: 28px
            {'}'}
            .tw-css :is(.h-\[32px\]) {'{'}
            height: 32px
            {'}'}
            .tw-css :is(.h-\[380px\]) {'{'}
            height: 380px
            {'}'}
            .tw-css :is(.h-\[40px\]) {'{'}
            height: 40px
            {'}'}
            .tw-css :is(.h-\[5px\]) {'{'}
            height: 5px
            {'}'}
            .tw-css :is(.h-\[96px\]) {'{'}
            height: 96px
            {'}'}
            .tw-css :is(.h-fit) {'{'}
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content
            {'}'}
            .tw-css :is(.h-full) {'{'}
            height: 100%
            {'}'}
            .tw-css :is(.h-screen) {'{'}
            height: 100vh
            {'}'}
            .tw-css :is(.max-h-24) {'{'}
            max-height: 24px
            {'}'}
            .tw-css :is(.max-h-36) {'{'}
            max-height: 36px
            {'}'}
            .tw-css :is(.max-h-48) {'{'}
            max-height: 48px
            {'}'}
            .tw-css :is(.max-h-\[100dvh\]) {'{'}
            max-height: 100dvh
            {'}'}
            .tw-css :is(.max-h-\[345px\]) {'{'}
            max-height: 345px
            {'}'}
            .tw-css :is(.max-h-\[40px\]) {'{'}
            max-height: 40px
            {'}'}
            .tw-css :is(.max-h-\[500px\]) {'{'}
            max-height: 500px
            {'}'}
            .tw-css :is(.max-h-\[calc\(100vh-38px\)\]) {'{'}
            max-height: calc(100vh - 38px)
            {'}'}
            .tw-css :is(.max-h-screen) {'{'}
            max-height: 100vh
            {'}'}
            .tw-css :is(.min-h-\[120px\]) {'{'}
            min-height: 120px
            {'}'}
            .tw-css :is(.min-h-\[16px\]) {'{'}
            min-height: 16px
            {'}'}
            .tw-css :is(.min-h-\[300px\]) {'{'}
            min-height: 300px
            {'}'}
            .tw-css :is(.min-h-\[48px\]) {'{'}
            min-height: 48px
            {'}'}
            .tw-css :is(.w-0) {'{'}
            width: 0
            {'}'}
            .tw-css :is(.w-24) {'{'}
            width: 24px
            {'}'}
            .tw-css :is(.w-48) {'{'}
            width: 48px
            {'}'}
            .tw-css :is(.w-\[18px\]) {'{'}
            width: 18px
            {'}'}
            .tw-css :is(.w-\[1px\]) {'{'}
            width: 1px
            {'}'}
            .tw-css :is(.w-\[235px\]) {'{'}
            width: 235px
            {'}'}
            .tw-css :is(.w-\[327px\]) {'{'}
            width: 327px
            {'}'}
            .tw-css :is(.w-\[40px\]) {'{'}
            width: 40px
            {'}'}
            .tw-css :is(.w-\[48px\]) {'{'}
            width: 48px
            {'}'}
            .tw-css :is(.w-auto) {'{'}
            width: auto
            {'}'}
            .tw-css :is(.w-fit) {'{'}
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content
            {'}'}
            .tw-css :is(.w-full) {'{'}
            width: 100%
            {'}'}
            .tw-css :is(.w-max) {'{'}
            width: -webkit-max-content;
            width: -moz-max-content;
            width: max-content
            {'}'}
            .tw-css :is(.w-screen) {'{'}
            width: 100vw
            {'}'}
            .tw-css :is(.min-w-\[18px\]) {'{'}
            min-width: 18px
            {'}'}
            .tw-css :is(.min-w-\[21px\]) {'{'}
            min-width: 21px
            {'}'}
            .tw-css :is(.min-w-\[327px\]) {'{'}
            min-width: 327px
            {'}'}
            .tw-css :is(.min-w-\[37\.5px\]) {'{'}
            min-width: 37.5px
            {'}'}
            .tw-css :is(.min-w-\[48px\]) {'{'}
            min-width: 48px
            {'}'}
            .tw-css :is(.min-w-\[9px\]) {'{'}
            min-width: 9px
            {'}'}
            .tw-css :is(.max-w-\[100vw\]) {'{'}
            max-width: 100vw
            {'}'}
            .tw-css :is(.max-w-\[1500px\]) {'{'}
            max-width: 1500px
            {'}'}
            .tw-css :is(.max-w-\[160px\]) {'{'}
            max-width: 160px
            {'}'}
            .tw-css :is(.max-w-\[21px\]) {'{'}
            max-width: 21px
            {'}'}
            .tw-css :is(.max-w-\[225px\]) {'{'}
            max-width: 225px
            {'}'}
            .tw-css :is(.max-w-\[260px\]) {'{'}
            max-width: 260px
            {'}'}
            .tw-css :is(.max-w-\[600px\]) {'{'}
            max-width: 600px
            {'}'}
            .tw-css :is(.max-w-\[72px\]) {'{'}
            max-width: 72px
            {'}'}
            .tw-css :is(.max-w-\[80px\]) {'{'}
            max-width: 80px
            {'}'}
            .tw-css :is(.max-w-\[96px\]) {'{'}
            max-width: 96px
            {'}'}
            .tw-css :is(.max-w-full) {'{'}
            max-width: 100%
            {'}'}
            .tw-css :is(.flex-1) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 0%;
            flex: 1 1 0%
            {'}'}
            .tw-css :is(.flex-auto) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto
            {'}'}
            .tw-css :is(.flex-grow) {'{'}
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1
            {'}'}
            .tw-css :is(.grow) {'{'}
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1
            {'}'}
            .tw-css :is(.border-collapse) {'{'}
            border-collapse: collapse
            {'}'}
            .tw-css :is(.border-spacing-0) {'{'}
            --tw-border-spacing-x: 0px;
            --tw-border-spacing-y: 0px;
            border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)
            {'}'}
            .tw-css :is(.-translate-x-2\/4) {'{'}
            --tw-translate-x: -50%;
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.translate-y-\[-50\%\]) {'{'}
            --tw-translate-y: -50%;
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.transform) {'{'}
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.transform-gpu) {'{'}
            -webkit-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.cursor-not-allowed) {'{'}
            cursor: not-allowed
            {'}'}
            .tw-css :is(.cursor-pointer) {'{'}
            cursor: pointer
            {'}'}
            .tw-css :is(.touch-none) {'{'}
            -ms-touch-action: none;
            touch-action: none
            {'}'}
            .tw-css :is(.select-all) {'{'}
            -webkit-user-select: all;
            -moz-user-select: all;
            user-select: all
            {'}'}
            .tw-css :is(.resize-none) {'{'}
            resize: none
            {'}'}
            .tw-css :is(.resize) {'{'}
            resize: both
            {'}'}
            .tw-css :is(.list-none) {'{'}
            list-style-type: none
            {'}'}
            .tw-css :is(.appearance-none) {'{'}
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
            {'}'}
            .tw-css :is(.grid-cols-1) {'{'}
            grid-template-columns: repeat(1, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.grid-cols-2) {'{'}
            grid-template-columns: repeat(2, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.flex-row) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row
            {'}'}
            .tw-css :is(.flex-row-reverse) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
            {'}'}
            .tw-css :is(.flex-col) {'{'}
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
            {'}'}
            .tw-css :is(.flex-col-reverse) {'{'}
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse
            {'}'}
            .tw-css :is(.flex-wrap) {'{'}
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
            {'}'}
            .tw-css :is(.place-content-center) {'{'}
            place-content: center
            {'}'}
            .tw-css :is(.items-end) {'{'}
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
            {'}'}
            .tw-css :is(.items-center) {'{'}
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
            {'}'}
            .tw-css :is(.items-stretch) {'{'}
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch
            {'}'}
            .tw-css :is(.justify-start) {'{'}
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start
            {'}'}
            .tw-css :is(.justify-end) {'{'}
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end
            {'}'}
            .tw-css :is(.justify-center) {'{'}
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center
            {'}'}
            .tw-css :is(.justify-between) {'{'}
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
            {'}'}
            .tw-css :is(.justify-around) {'{'}
            -ms-flex-pack: distribute;
            justify-content: space-around
            {'}'}
            .tw-css :is(.justify-evenly) {'{'}
            -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
            justify-content: space-evenly
            {'}'}
            .tw-css :is(.gap-10) {'{'}
            gap: 2.5rem
            {'}'}
            .tw-css :is(.gap-12) {'{'}
            gap: 12px
            {'}'}
            .tw-css :is(.gap-24) {'{'}
            gap: 24px
            {'}'}
            .tw-css :is(.gap-4) {'{'}
            gap: 4px
            {'}'}
            .tw-css :is(.gap-48) {'{'}
            gap: 48px
            {'}'}
            .tw-css :is(.gap-6) {'{'}
            gap: 1.5rem
            {'}'}
            .tw-css :is(.gap-8) {'{'}
            gap: 8px
            {'}'}
            .tw-css :is(.gap-\[10px\]) {'{'}
            gap: 10px
            {'}'}
            .tw-css :is(.gap-\[4px\]) {'{'}
            gap: 4px
            {'}'}
            .tw-css :is(.gap-\[8px\]) {'{'}
            gap: 8px
            {'}'}
            .tw-css :is(.space-x-12&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(12px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(12px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-4&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(4px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(4px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-8&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(8px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(8px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-x-\[8px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 0;
            margin-left: calc(8px*(1 - var(--tw-space-x-reverse)));
            margin-right: calc(8px*var(--tw-space-x-reverse))
            {'}'}
            .tw-css :is(.space-y-12&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(12px*var(--tw-space-y-reverse));
            margin-top: calc(12px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-24&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(24px*var(--tw-space-y-reverse));
            margin-top: calc(24px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-4&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(4px*var(--tw-space-y-reverse));
            margin-top: calc(4px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-48&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(48px*var(--tw-space-y-reverse));
            margin-top: calc(48px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-\[12px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(12px*var(--tw-space-y-reverse));
            margin-top: calc(12px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-\[8px\]&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 0;
            margin-bottom: calc(8px*var(--tw-space-y-reverse));
            margin-top: calc(8px*(1 - var(--tw-space-y-reverse)))
            {'}'}
            .tw-css :is(.space-y-reverse&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-y-reverse: 1
            {'}'}
            .tw-css :is(.space-x-reverse&gt;:not([hidden])~:not([hidden])) {'{'}
            --tw-space-x-reverse: 1
            {'}'}
            .tw-css :is(.justify-self-start) {'{'}
            justify-self: start
            {'}'}
            .tw-css :is(.justify-self-end) {'{'}
            justify-self: end
            {'}'}
            .tw-css :is(.justify-self-center) {'{'}
            justify-self: center
            {'}'}
            .tw-css :is(.overflow-auto) {'{'}
            overflow: auto
            {'}'}
            .tw-css :is(.overflow-hidden) {'{'}
            overflow: hidden
            {'}'}
            .tw-css :is(.overflow-visible) {'{'}
            overflow: visible
            {'}'}
            .tw-css :is(.overscroll-none) {'{'}
            -ms-scroll-chaining: none;
            overscroll-behavior: none
            {'}'}
            .tw-css :is(.truncate) {'{'}
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
            {'}'}
            .tw-css :is(.whitespace-nowrap) {'{'}
            white-space: nowrap
            {'}'}
            .tw-css :is(.break-words) {'{'}
            overflow-wrap: break-word
            {'}'}
            .tw-css :is(.rounded) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-0) {'{'}
            border-radius: 0
            {'}'}
            .tw-css :is(.rounded-12) {'{'}
            border-radius: 12px
            {'}'}
            .tw-css :is(.rounded-2) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.rounded-4) {'{'}
            border-radius: 4px
            {'}'}
            .tw-css :is(.rounded-48) {'{'}
            border-radius: 48px
            {'}'}
            .tw-css :is(.rounded-8) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-\[24px\]) {'{'}
            border-radius: 24px
            {'}'}
            .tw-css :is(.rounded-\[48px\]) {'{'}
            border-radius: 48px
            {'}'}
            .tw-css :is(.rounded-\[52px\]) {'{'}
            border-radius: 52px
            {'}'}
            .tw-css :is(.rounded-\[8px\]) {'{'}
            border-radius: 8px
            {'}'}
            .tw-css :is(.rounded-full) {'{'}
            border-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-none) {'{'}
            border-radius: 0
            {'}'}
            .tw-css :is(.rounded-l-full) {'{'}
            border-bottom-left-radius: 9999px;
            border-top-left-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-l-none) {'{'}
            border-bottom-left-radius: 0;
            border-top-left-radius: 0
            {'}'}
            .tw-css :is(.rounded-r-\[100px\]) {'{'}
            border-bottom-right-radius: 100px;
            border-top-right-radius: 100px
            {'}'}
            .tw-css :is(.rounded-r-full) {'{'}
            border-bottom-right-radius: 9999px;
            border-top-right-radius: 9999px
            {'}'}
            .tw-css :is(.rounded-r-none) {'{'}
            border-bottom-right-radius: 0;
            border-top-right-radius: 0
            {'}'}
            .tw-css :is(.rounded-t-\[24px\]) {'{'}
            border-top-left-radius: 24px;
            border-top-right-radius: 24px
            {'}'}
            .tw-css :is(.border) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-0) {'{'}
            border-width: 0
            {'}'}
            .tw-css :is(.border-1) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.border-\[1px\]) {'{'}
            border-width: 1px
            {'}'}
            .tw-css :is(.border-b-1) {'{'}
            border-bottom-width: 1px
            {'}'}
            .tw-css :is(.border-t) {'{'}
            border-top-width: 1px
            {'}'}
            .tw-css :is(.border-t-1) {'{'}
            border-top-width: 1px
            {'}'}
            .tw-css :is(.border-solid) {'{'}
            border-style: solid
            {'}'}
            .tw-css :is(.border-none) {'{'}
            border-style: none
            {'}'}
            .tw-css :is(.border-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-aura) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(222 225 227/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-destructive-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-destructive-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-ghost-dark-border) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-button-ghost-default-border) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-button-primary-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(83 212 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-primary-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(39 127 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-secondary-dark-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(255 255 255/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-button-secondary-default-border) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-gray) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(106 111 116/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-light-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(148 149 155/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-red) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.border-transparent) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.border-white) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(255 255 255/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-destructive-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-destructive-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-ghost-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-ghost-default) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-nonprimary-active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-primary-dark) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-primary-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-secondary-dark) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-button-secondary-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-button-video-default) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(89 95 97/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-destructive) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(214 30 39/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-divider) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(222 225 227/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-error) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(214 30 39/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-light-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(148 149 155/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-light-gray) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(246 247 248/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-saltpan) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(248 255 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-success) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(39 127 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-transparent) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.bg-warning) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 137 87/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-white) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.bg-no-repeat) {'{'}
            background-repeat: no-repeat
            {'}'}
            .tw-css :is(.\!p-24) {'{'}
            padding: 24px !important
            {'}'}
            .tw-css :is(.p-0) {'{'}
            padding: 0
            {'}'}
            .tw-css :is(.p-12) {'{'}
            padding: 12px
            {'}'}
            .tw-css :is(.p-24) {'{'}
            padding: 24px
            {'}'}
            .tw-css :is(.p-36) {'{'}
            padding: 36px
            {'}'}
            .tw-css :is(.p-4) {'{'}
            padding: 4px
            {'}'}
            .tw-css :is(.p-\[11px\]) {'{'}
            padding: 11px
            {'}'}
            .tw-css :is(.px-0) {'{'}
            padding-left: 0;
            padding-right: 0
            {'}'}
            .tw-css :is(.px-12) {'{'}
            padding-left: 12px;
            padding-right: 12px
            {'}'}
            .tw-css :is(.px-24) {'{'}
            padding-left: 24px;
            padding-right: 24px
            {'}'}
            .tw-css :is(.px-4) {'{'}
            padding-left: 4px;
            padding-right: 4px
            {'}'}
            .tw-css :is(.px-8) {'{'}
            padding-left: 8px;
            padding-right: 8px
            {'}'}
            .tw-css :is(.px-\[24px\]) {'{'}
            padding-left: 24px;
            padding-right: 24px
            {'}'}
            .tw-css :is(.px-\[6px\]) {'{'}
            padding-left: 6px;
            padding-right: 6px
            {'}'}
            .tw-css :is(.py-10) {'{'}
            padding-bottom: 2.5rem;
            padding-top: 2.5rem
            {'}'}
            .tw-css :is(.py-12) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            .tw-css :is(.py-2) {'{'}
            padding-bottom: .5rem;
            padding-top: .5rem
            {'}'}
            .tw-css :is(.py-24) {'{'}
            padding-bottom: 24px;
            padding-top: 24px
            {'}'}
            .tw-css :is(.py-4) {'{'}
            padding-bottom: 4px;
            padding-top: 4px
            {'}'}
            .tw-css :is(.py-8) {'{'}
            padding-bottom: 8px;
            padding-top: 8px
            {'}'}
            .tw-css :is(.py-\[10px\]) {'{'}
            padding-bottom: 10px;
            padding-top: 10px
            {'}'}
            .tw-css :is(.py-\[11px\]) {'{'}
            padding-bottom: 11px;
            padding-top: 11px
            {'}'}
            .tw-css :is(.py-\[12px\]) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            .tw-css :is(.py-\[8px\]) {'{'}
            padding-bottom: 8px;
            padding-top: 8px
            {'}'}
            .tw-css :is(.pb-0) {'{'}
            padding-bottom: 0
            {'}'}
            .tw-css :is(.pb-2) {'{'}
            padding-bottom: .5rem
            {'}'}
            .tw-css :is(.pb-24) {'{'}
            padding-bottom: 24px
            {'}'}
            .tw-css :is(.pb-\[12px\]) {'{'}
            padding-bottom: 12px
            {'}'}
            .tw-css :is(.pl-12) {'{'}
            padding-left: 12px
            {'}'}
            .tw-css :is(.pl-24) {'{'}
            padding-left: 24px
            {'}'}
            .tw-css :is(.pl-\[10px\]) {'{'}
            padding-left: 10px
            {'}'}
            .tw-css :is(.pl-\[20px\]) {'{'}
            padding-left: 20px
            {'}'}
            .tw-css :is(.pl-\[36px\]) {'{'}
            padding-left: 36px
            {'}'}
            .tw-css :is(.pl-\[6px\]) {'{'}
            padding-left: 6px
            {'}'}
            .tw-css :is(.pr-12) {'{'}
            padding-right: 12px
            {'}'}
            .tw-css :is(.pr-24) {'{'}
            padding-right: 24px
            {'}'}
            .tw-css :is(.pr-48) {'{'}
            padding-right: 48px
            {'}'}
            .tw-css :is(.pr-\[10px\]) {'{'}
            padding-right: 10px
            {'}'}
            .tw-css :is(.pr-\[20px\]) {'{'}
            padding-right: 20px
            {'}'}
            .tw-css :is(.pt-0) {'{'}
            padding-top: 0
            {'}'}
            .tw-css :is(.pt-24) {'{'}
            padding-top: 24px
            {'}'}
            .tw-css :is(.pt-48) {'{'}
            padding-top: 48px
            {'}'}
            .tw-css :is(.pt-60) {'{'}
            padding-top: 60px
            {'}'}
            .tw-css :is(.pt-\[12px\]) {'{'}
            padding-top: 12px
            {'}'}
            .tw-css :is(.text-left) {'{'}
            text-align: left
            {'}'}
            .tw-css :is(.text-center) {'{'}
            text-align: center
            {'}'}
            .tw-css :is(.text-right) {'{'}
            text-align: right
            {'}'}
            .tw-css :is(.align-baseline) {'{'}
            vertical-align: baseline
            {'}'}
            .tw-css :is(.align-top) {'{'}
            vertical-align: top
            {'}'}
            .tw-css :is(.align-middle) {'{'}
            vertical-align: middle
            {'}'}
            .tw-css :is(.text-12) {'{'}
            font-size: 12px;
            line-height: 16px
            {'}'}
            .tw-css :is(.text-16) {'{'}
            font-size: 16px;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-20) {'{'}
            font-size: 20px;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-24) {'{'}
            font-size: 24px;
            line-height: 28px
            {'}'}
            .tw-css :is(.text-34) {'{'}
            font-size: 34px;
            line-height: 40px
            {'}'}
            .tw-css :is(.text-48) {'{'}
            font-size: 48px;
            line-height: 60px
            {'}'}
            .tw-css :is(.text-\[12px\]) {'{'}
            font-size: 12px
            {'}'}
            .tw-css :is(.text-\[32px\]) {'{'}
            font-size: 32px
            {'}'}
            .tw-css :is(.text-\[36px\]) {'{'}
            font-size: 36px
            {'}'}
            .tw-css :is(.text-\[40px\]) {'{'}
            font-size: 40px
            {'}'}
            .tw-css :is(.text-body-md) {'{'}
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-body-sm) {'{'}
            font-size: 12px;
            letter-spacing: 0;
            line-height: 16px
            {'}'}
            .tw-css :is(.text-header-lg) {'{'}
            font-size: 34px;
            letter-spacing: .005em;
            line-height: 40px
            {'}'}
            .tw-css :is(.text-header-md) {'{'}
            font-size: 24px;
            letter-spacing: .01em;
            line-height: 28px
            {'}'}
            .tw-css :is(.text-header-sm) {'{'}
            font-size: 20px;
            letter-spacing: .015em;
            line-height: 24px
            {'}'}
            .tw-css :is(.text-header-xl) {'{'}
            font-size: 48px;
            letter-spacing: .0015em;
            line-height: 60px
            {'}'}
            .tw-css :is(.text-header-xs) {'{'}
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px
            {'}'}
            .tw-css :is(.font-bold) {'{'}
            font-weight: 700
            {'}'}
            .tw-css :is(.uppercase) {'{'}
            text-transform: uppercase
            {'}'}
            .tw-css :is(.lowercase) {'{'}
            text-transform: lowercase
            {'}'}
            .tw-css :is(.capitalize) {'{'}
            text-transform: capitalize
            {'}'}
            .tw-css :is(.normal-case) {'{'}
            text-transform: none
            {'}'}
            .tw-css :is(.italic) {'{'}
            font-style: italic
            {'}'}
            .tw-css :is(.leading-\[12px\]) {'{'}
            line-height: 12px
            {'}'}
            .tw-css :is(.leading-\[20px\]) {'{'}
            line-height: 20px
            {'}'}
            .tw-css :is(.leading-normal) {'{'}
            line-height: 1.5
            {'}'}
            .tw-css :is(.tracking-body-md-bold) {'{'}
            letter-spacing: 0
            {'}'}
            .tw-css :is(.tracking-body-sm-bold) {'{'}
            letter-spacing: 0
            {'}'}
            .tw-css :is(.text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-asphalt) {'{'}
            --tw-text-opacity: 1;
            color: rgb(187 190 191/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-black) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-destructive-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-destructive-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-ghost-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-ghost-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-primary-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-primary-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-secondary-dark-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-button-secondary-default-text) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-gray) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-green) {'{'}
            --tw-text-opacity: 1;
            color: rgb(39 127 106/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-red) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.text-transparent) {'{'}
            color: transparent
            {'}'}
            .tw-css :is(.text-white) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.underline) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.no-underline) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.antialiased) {'{'}
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
            {'}'}
            .tw-css :is(.opacity-0) {'{'}
            opacity: 0
            {'}'}
            .tw-css :is(.opacity-100) {'{'}
            opacity: 1
            {'}'}
            .tw-css :is(.opacity-50) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.shadow-\[0_1px_6px_rgba\(0\,0\,0\,0\.12\)\]) {'{'}
            --tw-shadow: 0 1px 6px rgba(0, 0, 0, .12);
            --tw-shadow-colored: 0 1px 6px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-lg) {'{'}
            --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
            --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-none) {'{'}
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.shadow-sm) {'{'}
            --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
            --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.outline-none) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.outline) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.outline-2) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.outline-transparent) {'{'}
            outline-color: transparent
            {'}'}
            .tw-css :is(.ring-offset) {'{'}
            --tw-ring-offset-width: 1px
            {'}'}
            .tw-css :is(.blur) {'{'}
            --tw-blur: blur(8px);
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.drop-shadow) {'{'}
            --tw-drop-shadow: drop-shadow(0px 2px 6px rgba(0, 0, 0, .15));
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.filter) {'{'}
            -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
            {'}'}
            .tw-css :is(.transition-all) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.transition-colors) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.transition-transform) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.duration-300) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.duration-700) {'{'}
            -webkit-transition-duration: .7s;
            transition-duration: .7s
            {'}'}
            .tw-css :is(.ease-in-out) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.will-change-transform) {'{'}
            will-change: transform
            {'}'}
            .tw-css :is(.backdrop\:bg-black)::-webkit-backdrop {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.backdrop\:bg-black)::backdrop {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.backdrop\:bg-opacity-50)::-webkit-backdrop {'{'}
            --tw-bg-opacity: .5
            {'}'}
            .tw-css :is(.backdrop\:bg-opacity-50)::backdrop {'{'}
            --tw-bg-opacity: .5
            {'}'}
            .tw-css :is(.backdrop\:transition-opacity)::-webkit-backdrop {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.backdrop\:transition-opacity)::backdrop {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.before\:absolute):before {'{'}
            content: var(--tw-content);
            position: absolute
            {'}'}
            .tw-css :is(.before\:bottom-0):before {'{'}
            bottom: 0;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:bottom-12):before {'{'}
            bottom: 12px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:left-0):before {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.before\:left-60):before {'{'}
            content: var(--tw-content);
            left: 60px
            {'}'}
            .tw-css :is(.before\:top-12):before {'{'}
            content: var(--tw-content);
            top: 12px
            {'}'}
            .tw-css :is(.before\:-z-\[1\]):before {'{'}
            content: var(--tw-content);
            z-index: -1
            {'}'}
            .tw-css :is(.before\:block):before {'{'}
            content: var(--tw-content);
            display: block
            {'}'}
            .tw-css :is(.before\:h-12):before {'{'}
            content: var(--tw-content);
            height: 12px
            {'}'}
            .tw-css :is(.before\:h-4):before {'{'}
            content: var(--tw-content);
            height: 4px
            {'}'}
            .tw-css :is(.before\:w-0):before {'{'}
            content: var(--tw-content);
            width: 0
            {'}'}
            .tw-css :is(.before\:w-12):before {'{'}
            content: var(--tw-content);
            width: 12px
            {'}'}
            .tw-css :is(.before\:w-full):before {'{'}
            content: var(--tw-content);
            width: 100%
            {'}'}
            .tw-css :is(.before\:scale-0):before {'{'}
            --tw-scale-x: 0;
            --tw-scale-y: 0;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.before\:rounded-48):before {'{'}
            border-radius: 48px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:rounded-full):before {'{'}
            border-radius: 9999px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:bg-black):before {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:shadow-\[0_0_6px_0_rgba\(0\,0\,0\,0\.15\)\]):before {'{'}
            --tw-shadow: 0 0 6px 0 rgba(0, 0, 0, .15);
            --tw-shadow-colored: 0 0 6px 0 var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:shadow-\[inset_1em_1em_black\]):before {'{'}
            --tw-shadow: inset 1em 1em #000;
            --tw-shadow-colored: inset 1em 1em var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.before\:transition-all):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.before\:duration-75):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: 75ms;
            transition-duration: 75ms
            {'}'}
            .tw-css :is(.before\:ease-linear):before {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: linear;
            transition-timing-function: linear
            {'}'}
            .tw-css :is(.after\:absolute):after {'{'}
            content: var(--tw-content);
            position: absolute
            {'}'}
            .tw-css :is(.after\:-top-12):after {'{'}
            content: var(--tw-content);
            top: -12px
            {'}'}
            .tw-css :is(.after\:bottom-0):after {'{'}
            bottom: 0;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:left-0):after {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.after\:right-0):after {'{'}
            content: var(--tw-content);
            right: 0
            {'}'}
            .tw-css :is(.after\:top-0):after {'{'}
            content: var(--tw-content);
            top: 0
            {'}'}
            .tw-css :is(.after\:z-10):after {'{'}
            content: var(--tw-content);
            z-index: 10
            {'}'}
            .tw-css :is(.after\:m-\[2px\]):after {'{'}
            content: var(--tw-content);
            margin: 2px
            {'}'}
            .tw-css :is(.after\:block):after {'{'}
            content: var(--tw-content);
            display: block
            {'}'}
            .tw-css :is(.after\:h-48):after {'{'}
            content: var(--tw-content);
            height: 48px
            {'}'}
            .tw-css :is(.after\:h-\[24px\]):after {'{'}
            content: var(--tw-content);
            height: 24px
            {'}'}
            .tw-css :is(.after\:h-screen):after {'{'}
            content: var(--tw-content);
            height: 100vh
            {'}'}
            .tw-css :is(.after\:w-\[24px\]):after {'{'}
            content: var(--tw-content);
            width: 24px
            {'}'}
            .tw-css :is(.after\:w-screen):after {'{'}
            content: var(--tw-content);
            width: 100vw
            {'}'}
            .tw-css :is(.after\:rounded-full):after {'{'}
            border-radius: 9999px;
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:bg-white):after {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:shadow):after {'{'}
            --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);
            --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.after\:duration-300):after {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.after\:ease-in-out):after {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.after\:content-\[\"\"\]):after {'{'}
            --tw-content: "";
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.first\:mt-12:first-child) {'{'}
            margin-top: 12px
            {'}'}
            .tw-css :is(.last\:mb-12:last-child) {'{'}
            margin-bottom: 12px
            {'}'}
            .tw-css :is(.visited\:text-black:visited) {'{'}
            color: #2f3639
            {'}'}
            .tw-css :is(.visited\:text-gray:visited) {'{'}
            color: #6a6f74
            {'}'}
            .tw-css :is(.visited\:text-red:visited) {'{'}
            color: #d61e27
            {'}'}
            .tw-css :is(.visited\:text-white:visited) {'{'}
            color: #fff
            {'}'}
            .tw-css :is(.visited\:no-underline:visited) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.checked\:border-black:checked) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.checked\:text-white:checked) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.checked\:before\:scale-\[1\]:checked):before {'{'}
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.invalid\:border-red:invalid) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:border-black:focus-within) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:border-red:focus-within) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-within\:outline-none:focus-within) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.hover\:aspect-square:hover) {'{'}
            aspect-ratio: 1/1
            {'}'}
            .tw-css :is(.hover\:cursor-pointer:hover) {'{'}
            cursor: pointer
            {'}'}
            .tw-css :is(.hover\:rounded-2:hover) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.hover\:border-black:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-destructive-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-destructive-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-ghost-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-ghost-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-primary-dark-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(83 212 106/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-primary-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(0 94 77/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-button-secondary-dark-hover:hover) {'{'}
            border-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:border-button-secondary-default-hover:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(238 239 240/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:border-red:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-black:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-destructive-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-destructive-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-ghost-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-ghost-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-nonprimary-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-primary-dark-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(83 212 106/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-primary-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(0 94 77/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-secondary-dark-hover:hover) {'{'}
            background-color: #ffffff1a
            {'}'}
            .tw-css :is(.hover\:bg-button-secondary-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(238 239 240/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-video-default-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(102 107 109/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-button-video-destructive-hover:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(194 27 35/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-light-gray:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(246 247 248/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:bg-transparent:hover) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.hover\:bg-white:hover) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.hover\:p-1:hover) {'{'}
            padding: .25rem
            {'}'}
            .tw-css :is(.hover\:text-black:hover) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.hover\:underline:hover) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.hover\:no-underline:hover) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.hover\:outline:hover) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.hover\:outline-1:hover) {'{'}
            outline-width: 1px
            {'}'}
            .tw-css :is(.hover\:outline-2:hover) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.hover\:outline-black:hover) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.hover\:outline-light-gray:hover) {'{'}
            outline-color: #f6f7f8
            {'}'}
            .tw-css :is(.hover\:transition-all:hover) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.hover\:duration-300:hover) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.hover\:ease-in-out:hover) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.hover\:before\:left-0:hover):before {'{'}
            content: var(--tw-content);
            left: 0
            {'}'}
            .tw-css :is(.hover\:before\:w-full:hover):before {'{'}
            content: var(--tw-content);
            width: 100%
            {'}'}
            .tw-css :is(.hover\:before\:bg-divider:hover):before {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(222 225 227/var(--tw-bg-opacity));
            content: var(--tw-content)
            {'}'}
            .tw-css :is(.focus\:border-black:focus) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus\:border-red:focus) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(214 30 39/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus\:text-black:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-gray:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-red:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:text-white:focus) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.focus\:underline:focus) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.focus\:no-underline:focus) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.focus\:outline-none:focus) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:aspect-auto:focus-visible) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.focus-visible\:rounded-full:focus-visible) {'{'}
            border-radius: 9999px
            {'}'}
            .tw-css :is(.focus-visible\:border-black:focus-visible) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.focus-visible\:outline-none:focus-visible) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline:focus-visible) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.focus-visible\:outline-2:focus-visible) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline-offset-1:focus-visible) {'{'}
            outline-offset: 1px
            {'}'}
            .tw-css :is(.focus-visible\:outline-offset-2:focus-visible) {'{'}
            outline-offset: 2px
            {'}'}
            .tw-css :is(.focus-visible\:outline-black:focus-visible) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.focus-visible\:ring:focus-visible) {'{'}
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
            {'}'}
            .tw-css :is(.focus-visible\:ring-black:focus-visible) {'{'}
            --tw-ring-opacity: 1;
            --tw-ring-color: rgb(47 54 57/var(--tw-ring-opacity))
            {'}'}
            .tw-css :is(.focus-visible\:ring-offset-2:focus-visible) {'{'}
            --tw-ring-offset-width: 2px
            {'}'}
            .tw-css :is(.active\:border-black:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-destructive-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-destructive-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-ghost-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-ghost-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-primary-dark-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(78 201 101/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-primary-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(25 82 68/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:border-button-secondary-dark-active:active) {'{'}
            border-color: #fff3
            {'}'}
            .tw-css :is(.active\:border-button-secondary-default-active:active) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(220 221 222/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.active\:bg-black:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-destructive-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-destructive-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-ghost-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-ghost-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-nonprimary-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-primary-dark-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(78 201 101/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-primary-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(25 82 68/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-secondary-dark-active:active) {'{'}
            background-color: #fff3
            {'}'}
            .tw-css :is(.active\:bg-button-secondary-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(220 221 222/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-video-default-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(117 122 124/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-button-video-destructive-active:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(173 24 32/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:bg-white:active) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.active\:text-black:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(47 54 57/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-gray:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(106 111 116/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-red:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(214 30 39/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:text-white:active) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.active\:underline:active) {'{'}
            text-decoration-line: underline
            {'}'}
            .tw-css :is(.active\:no-underline:active) {'{'}
            text-decoration-line: none
            {'}'}
            .tw-css :is(.active\:outline-none:active) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.enabled\:opacity-50:enabled) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.disabled\:pointer-events-none:disabled) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.disabled\:opacity-50:disabled) {'{'}
            opacity: .5
            {'}'}
            .tw-css :is(.hover\:disabled\:border-asphalt:disabled:hover) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.disabled\:focus-visible\:outline-none:focus-visible:disabled) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.disabled\:active\:outline-none:active:disabled) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.group:focus-within .group-focus-within\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.group:hover .group-hover\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.group:hover .group-hover\:rounded-2) {'{'}
            border-radius: 2px
            {'}'}
            .tw-css :is(.group:hover .group-hover\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:text-white) {'{'}
            --tw-text-opacity: 1;
            color: rgb(255 255 255/var(--tw-text-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:duration-300) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:ease-in-out) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:after\:translate-x-20):after {'{'}
            --tw-translate-x: 20px;
            content: var(--tw-content);
            -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
            {'}'}
            .tw-css :is(.peer:checked~.peer-checked\:disabled\:bg-asphalt:disabled) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:checked~.group:hover .peer-checked\:group-hover\:bg-black) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(47 54 57/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:aspect-auto) {'{'}
            aspect-ratio: auto
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:outline-none) {'{'}
            outline: 2px solid transparent;
            outline-offset: 2px
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring) {'{'}
            --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
            --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
            -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring-black) {'{'}
            --tw-ring-opacity: 1;
            --tw-ring-color: rgb(47 54 57/var(--tw-ring-opacity))
            {'}'}
            .tw-css :is(.peer:focus-visible~.peer-focus-visible\:ring-offset-2) {'{'}
            --tw-ring-offset-width: 2px
            {'}'}
            .tw-css :is(.peer:disabled~.peer-disabled\:border-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.peer:disabled~.peer-disabled\:bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.peer:disabled:checked~.peer-disabled\:peer-checked\:bg-asphalt) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(187 190 191/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.aria-checked\:bg-transparent[aria-checked=true]) {'{'}
            background-color: transparent
            {'}'}
            .tw-css :is(.aria-checked\:outline[aria-checked=true]) {'{'}
            outline-style: solid
            {'}'}
            .tw-css :is(.aria-checked\:outline-2[aria-checked=true]) {'{'}
            outline-width: 2px
            {'}'}
            .tw-css :is(.aria-checked\:outline-black[aria-checked=true]) {'{'}
            outline-color: #2f3639
            {'}'}
            .tw-css :is(.aria-selected\:hover\:bg-gray:hover[aria-selected=true]) {'{'}
            --tw-bg-opacity: 1;
            background-color: rgb(106 111 116/var(--tw-bg-opacity))
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-2) {'{'}
            border-width: 2px
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-black) {'{'}
            --tw-border-opacity: 1;
            border-color: rgb(47 54 57/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.group[aria-checked=true] .group-aria-checked\:border-transparent) {'{'}
            border-color: transparent
            {'}'}
            @media (min-width:640px) {'{'}
            .tw-css :is(.sm\:gap-24) {'{'}
            gap: 24px
            {'}'}
            .tw-css :is(.sm\:justify-self-start) {'{'}
            justify-self: start
            {'}'}
            .tw-css :is(.sm\:justify-self-end) {'{'}
            justify-self: end
            {'}'}
            .tw-css :is(.sm\:py-12) {'{'}
            padding-bottom: 12px;
            padding-top: 12px
            {'}'}
            {'}'}
            @media (min-width:768px) {'{'}
            .tw-css :is(.md\:absolute) {'{'}
            position: absolute
            {'}'}
            .tw-css :is(.md\:relative) {'{'}
            position: relative
            {'}'}
            .tw-css :is(.md\:bottom-auto) {'{'}
            bottom: auto
            {'}'}
            .tw-css :is(.md\:left-0) {'{'}
            left: 0
            {'}'}
            .tw-css :is(.md\:left-12) {'{'}
            left: 12px
            {'}'}
            .tw-css :is(.md\:right-0) {'{'}
            right: 0
            {'}'}
            .tw-css :is(.md\:right-12) {'{'}
            right: 12px
            {'}'}
            .tw-css :is(.md\:top-0) {'{'}
            top: 0
            {'}'}
            .tw-css :is(.md\:top-12) {'{'}
            top: 12px
            {'}'}
            .tw-css :is(.md\:top-full) {'{'}
            top: 100%
            {'}'}
            .tw-css :is(.md\:-m-12) {'{'}
            margin: -12px
            {'}'}
            .tw-css :is(.md\:my-24) {'{'}
            margin-bottom: 24px;
            margin-top: 24px
            {'}'}
            .tw-css :is(.md\:-mt-24) {'{'}
            margin-top: -24px
            {'}'}
            .tw-css :is(.md\:ml-\[-500px\]) {'{'}
            margin-left: -500px
            {'}'}
            .tw-css :is(.md\:ml-\[180px\]) {'{'}
            margin-left: 180px
            {'}'}
            .tw-css :is(.md\:ml-\[200px\]) {'{'}
            margin-left: 200px
            {'}'}
            .tw-css :is(.md\:ml-\[264px\]) {'{'}
            margin-left: 264px
            {'}'}
            .tw-css :is(.md\:ml-\[618px\]) {'{'}
            margin-left: 618px
            {'}'}
            .tw-css :is(.md\:block) {'{'}
            display: block
            {'}'}
            .tw-css :is(.md\:flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.md\:inline-flex) {'{'}
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex
            {'}'}
            .tw-css :is(.md\:hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.md\:h-48) {'{'}
            height: 48px
            {'}'}
            .tw-css :is(.md\:h-60) {'{'}
            height: 60px
            {'}'}
            .tw-css :is(.md\:h-\[calc\(100\%\+24px\)\]) {'{'}
            height: calc(100% + 24px)
            {'}'}
            .tw-css :is(.md\:w-\[200px\]) {'{'}
            width: 200px
            {'}'}
            .tw-css :is(.md\:w-\[355px\]) {'{'}
            width: 355px
            {'}'}
            .tw-css :is(.md\:w-\[600px\]) {'{'}
            width: 600px
            {'}'}
            .tw-css :is(.md\:w-\[820px\]) {'{'}
            width: 820px
            {'}'}
            .tw-css :is(.md\:w-auto) {'{'}
            width: auto
            {'}'}
            .tw-css :is(.md\:flex-1) {'{'}
            -webkit-box-flex: 1;
            -ms-flex: 1 1 0%;
            flex: 1 1 0%
            {'}'}
            .tw-css :is(.md\:grid-cols-2) {'{'}
            grid-template-columns: repeat(2, minmax(0, 1fr))
            {'}'}
            .tw-css :is(.md\:flex-row) {'{'}
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row
            {'}'}
            .tw-css :is(.md\:items-center) {'{'}
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
            {'}'}
            .tw-css :is(.md\:gap-0) {'{'}
            gap: 0
            {'}'}
            .tw-css :is(.md\:gap-12) {'{'}
            gap: 12px
            {'}'}
            .tw-css :is(.md\:gap-72) {'{'}
            gap: 72px
            {'}'}
            .tw-css :is(.md\:rounded-\[14px\]) {'{'}
            border-radius: 14px
            {'}'}
            .tw-css :is(.md\:border-b) {'{'}
            border-bottom-width: 1px
            {'}'}
            .tw-css :is(.md\:border-none) {'{'}
            border-style: none
            {'}'}
            .tw-css :is(.md\:border-transparent) {'{'}
            border-color: transparent
            {'}'}
            .tw-css :is(.md\:border-b-asphalt) {'{'}
            --tw-border-opacity: 1;
            border-bottom-color: rgb(187 190 191/var(--tw-border-opacity))
            {'}'}
            .tw-css :is(.md\:p-36) {'{'}
            padding: 36px
            {'}'}
            .tw-css :is(.md\:px-12) {'{'}
            padding-left: 12px;
            padding-right: 12px
            {'}'}
            .tw-css :is(.md\:px-48) {'{'}
            padding-left: 48px;
            padding-right: 48px
            {'}'}
            .tw-css :is(.md\:px-72) {'{'}
            padding-left: 72px;
            padding-right: 72px
            {'}'}
            .tw-css :is(.md\:py-24) {'{'}
            padding-bottom: 24px;
            padding-top: 24px
            {'}'}
            .tw-css :is(.md\:py-48) {'{'}
            padding-bottom: 48px;
            padding-top: 48px
            {'}'}
            .tw-css :is(.md\:py-\[18px\]) {'{'}
            padding-bottom: 18px;
            padding-top: 18px
            {'}'}
            .tw-css :is(.md\:pb-0) {'{'}
            padding-bottom: 0
            {'}'}
            .tw-css :is(.md\:pb-12) {'{'}
            padding-bottom: 12px
            {'}'}
            .tw-css :is(.md\:pb-24) {'{'}
            padding-bottom: 24px
            {'}'}
            .tw-css :is(.md\:pb-4) {'{'}
            padding-bottom: 4px
            {'}'}
            .tw-css :is(.md\:pb-48) {'{'}
            padding-bottom: 48px
            {'}'}
            .tw-css :is(.md\:pl-24) {'{'}
            padding-left: 24px
            {'}'}
            .tw-css :is(.md\:pl-\[18px\]) {'{'}
            padding-left: 18px
            {'}'}
            .tw-css :is(.md\:pr-0) {'{'}
            padding-right: 0
            {'}'}
            .tw-css :is(.md\:pr-4) {'{'}
            padding-right: 4px
            {'}'}
            .tw-css :is(.md\:pt-24) {'{'}
            padding-top: 24px
            {'}'}
            .tw-css :is(.md\:pt-4) {'{'}
            padding-top: 4px
            {'}'}
            .tw-css :is(.md\:pt-48) {'{'}
            padding-top: 48px
            {'}'}
            .tw-css :is(.md\:pt-60) {'{'}
            padding-top: 60px
            {'}'}
            .tw-css :is(.md\:text-header-lg-tablet) {'{'}
            font-size: 40px;
            letter-spacing: .005em;
            line-height: 48px
            {'}'}
            .tw-css :is(.md\:text-header-md-tablet) {'{'}
            font-size: 28px;
            letter-spacing: .01em;
            line-height: 36px
            {'}'}
            .tw-css :is(.md\:shadow-none) {'{'}
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
            -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
            {'}'}
            .tw-css :is(.md\:after\:h-0):after {'{'}
            content: var(--tw-content);
            height: 0
            {'}'}
            .tw-css :is(.md\:first\:mt-24:first-child) {'{'}
            margin-top: 24px
            {'}'}
            .tw-css :is(.md\:last\:mb-24:last-child) {'{'}
            margin-bottom: 24px
            {'}'}
            {'}'}
            @media (min-width:1024px) {'{'}
            .tw-css :is(.lg\:w-\[355px\]) {'{'}
            width: 355px
            {'}'}
            .tw-css :is(.lg\:w-\[440px\]) {'{'}
            width: 440px
            {'}'}
            {'}'}
            @media (min-width:1280px) {'{'}
            .tw-css :is(.xl\:flex) {'{'}
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
            {'}'}
            .tw-css :is(.xl\:hidden) {'{'}
            display: none
            {'}'}
            .tw-css :is(.xl\:justify-between) {'{'}
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
            {'}'}
            .tw-css :is(.xl\:pr-60) {'{'}
            padding-right: 60px
            {'}'}
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:pointer-events-none&gt;*) {'{'}
            pointer-events: none
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:pointer-events-auto&gt;*) {'{'}
            pointer-events: auto
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:transition-all&gt;*) {'{'}
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:duration-300&gt;*) {'{'}
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:ease-in-out&gt;*) {'{'}
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:transition-all&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .15s;
            transition-duration: .15s;
            -webkit-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:duration-300&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-duration: .3s;
            transition-duration: .3s
            {'}'}
            .tw-css :is(.\[\&amp;\&gt;\*\]\:before\:ease-in-out&gt;*):before {'{'}
            content: var(--tw-content);
            -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            {'}'}
            .prev_next_page_btn&gt;svg&gt;path {'{'}
            stroke-width: 1
            {'}'}
            .prev_next_page_btn:hover&gt;svg&gt;path {'{'}
            stroke-width: 2
            {'}'}
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));