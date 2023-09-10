const App = () => {
    return (
        <div>
            html,
            body {'{'}
            margin: 0;
            padding: 0;
            overflow: scroll;
            {'}'}
            .obscured {'{'}
            left: -999999px !important;
            {'}'}
            .collapsed {'{'}
            display: none;
            {'}'}
            [collapsed="true"] {'{'}
            display: none;
            {'}'}
            #fbCSS {'{'}
            padding: 0 !important;
            {'}'}
            .cssPropDisable {'{'}
            float: left;
            display: block;
            width: 2em;
            cursor: default;
            {'}'}
            .infoTip {'{'}
            z-index: 2147483647;
            position: fixed;
            padding: 2px 3px;
            border: 1px solid #CBE087;
            background: LightYellow;
            font-family: Monaco, monospace;
            color: #000000;
            display: none;
            white-space: nowrap;
            pointer-events: none;
            {'}'}
            .infoTip[active="true"] {'{'}
            display: block;
            {'}'}
            .infoTipLoading {'{'}
            width: 16px;
            height: 16px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/loading_16.gif) no-repeat;
            {'}'}
            .infoTipImageBox {'{'}
            font-size: 11px;
            min-width: 100px;
            text-align: center;
            {'}'}
            .infoTipCaption {'{'}
            font-size: 11px;
            font: Monaco, monospace;
            {'}'}
            .infoTipLoading&gt;.infoTipImage,
            .infoTipLoading&gt;.infoTipCaption {'{'}
            display: none;
            {'}'}
            h1.groupHeader {'{'}
            padding: 2px 4px;
            margin: 0 0 4px 0;
            border-top: 1px solid #CCCCCC;
            border-bottom: 1px solid #CCCCCC;
            background: #eee url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/group.gif) repeat-x;
            font-size: 11px;
            font-weight: bold;
            _position: relative;
            {'}'}
            .inlineEditor,
            .fixedWidthEditor {'{'}
            z-index: 2147483647;
            position: absolute;
            display: none;
            {'}'}
            .inlineEditor {'{'}
            margin-left: -6px;
            margin-top: -3px;
            {'}'}
            .textEditorInner,
            .fixedWidthEditor {'{'}
            margin: 0 0 0 0 !important;
            padding: 0;
            border: none !important;
            font: inherit;
            text-decoration: inherit;
            background-color: #FFFFFF;
            {'}'}
            .fixedWidthEditor {'{'}
            border-top: 1px solid #888888 !important;
            border-bottom: 1px solid #888888 !important;
            {'}'}
            .textEditorInner {'{'}
            position: relative;
            top: -7px;
            left: -5px;
            outline: none;
            resize: none;
            {'}'}
            .textEditorInner1 {'{'}
            padding-left: 11px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorBorders.png) repeat-y;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorBorders.gif) repeat-y;
            _overflow: hidden;
            {'}'}
            .textEditorInner2 {'{'}
            position: relative;
            padding-right: 2px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorBorders.png) repeat-y 100% 0;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorBorders.gif) repeat-y 100% 0;
            _position: fixed;
            {'}'}
            .textEditorTop1 {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.png) no-repeat 100% 0;
            margin-left: 11px;
            height: 10px;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.gif) no-repeat 100% 0;
            _overflow: hidden;
            {'}'}
            .textEditorTop2 {'{'}
            position: relative;
            left: -11px;
            width: 11px;
            height: 10px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.png) no-repeat;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.gif) no-repeat;
            {'}'}
            .textEditorBottom1 {'{'}
            position: relative;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.png) no-repeat 100% 100%;
            margin-left: 11px;
            height: 12px;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.gif) no-repeat 100% 100%;
            {'}'}
            .textEditorBottom2 {'{'}
            position: relative;
            left: -11px;
            width: 11px;
            height: 12px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.png) no-repeat 0 100%;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/textEditorCorners.gif) no-repeat 0 100%;
            {'}'}
            .panelNode-css {'{'}
            overflow-x: hidden;
            {'}'}
            .cssSheet&gt;.insertBefore {'{'}
            height: 1.5em;
            {'}'}
            .cssRule {'{'}
            position: relative;
            margin: 0;
            padding: 1em 0 0 6px;
            font-family: Monaco, monospace;
            color: #000000;
            {'}'}
            .cssRule:first-child {'{'}
            padding-top: 6px;
            {'}'}
            .cssElementRuleContainer {'{'}
            position: relative;
            {'}'}
            .cssHead {'{'}
            padding-right: 150px;
            {'}'}
            .cssProp {'{'}{'}'}
            .cssPropName {'{'}
            color: DarkGreen;
            {'}'}
            .cssPropValue {'{'}
            margin-left: 8px;
            color: DarkBlue;
            {'}'}
            .cssOverridden span {'{'}
            text-decoration: line-through;
            {'}'}
            .cssInheritedRule {'{'}{'}'}
            .cssInheritLabel {'{'}
            margin-right: 0.5em;
            font-weight: bold;
            {'}'}
            .cssRule .objectLink-sourceLink {'{'}
            top: 0;
            {'}'}
            .cssProp.editGroup:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/disable.png) no-repeat 2px 1px;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/disable.gif) no-repeat 2px 1px;
            {'}'}
            .cssProp.editGroup.editing {'{'}
            background: none;
            {'}'}
            .cssProp.disabledStyle {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/disableHover.png) no-repeat 2px 1px;
            _background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/disableHover.gif) no-repeat 2px 1px;
            opacity: 1;
            color: #CCCCCC;
            {'}'}
            .disabledStyle .cssPropName,
            .disabledStyle .cssPropValue {'{'}
            color: #CCCCCC;
            {'}'}
            .cssPropValue.editing+.cssSemi,
            .inlineExpander+.cssSemi {'{'}
            display: none;
            {'}'}
            .cssPropValue.editing {'{'}
            white-space: nowrap;
            {'}'}
            .stylePropName {'{'}
            font-weight: bold;
            padding: 0 4px 4px 4px;
            width: 50%;
            {'}'}
            .stylePropValue {'{'}
            width: 50%;
            {'}'}
            .panelNode-net {'{'}
            overflow-x: hidden;
            {'}'}
            .netTable {'{'}
            width: 100%;
            {'}'}
            .hideCategory-undefined .category-undefined,
            .hideCategory-html .category-html,
            .hideCategory-css .category-css,
            .hideCategory-js .category-js,
            .hideCategory-image .category-image,
            .hideCategory-xhr .category-xhr,
            .hideCategory-flash .category-flash,
            .hideCategory-txt .category-txt,
            .hideCategory-bin .category-bin {'{'}
            display: none;
            {'}'}
            .netHeadRow {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/group.gif) repeat-x #FFFFFF;
            {'}'}
            .netHeadCol {'{'}
            border-bottom: 1px solid #CCCCCC;
            padding: 2px 4px 2px 18px;
            font-weight: bold;
            {'}'}
            .netHeadLabel {'{'}
            white-space: nowrap;
            overflow: hidden;
            {'}'}
            .netHeaderRow {'{'}
            height: 16px;
            {'}'}
            .netHeaderCell {'{'}
            cursor: pointer;
            -moz-user-select: none;
            border-bottom: 1px solid #9C9C9C;
            padding: 0 !important;
            font-weight: bold;
            background: #BBBBBB url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/tableHeader.gif) repeat-x;
            white-space: nowrap;
            {'}'}
            .netHeaderRow&gt;.netHeaderCell:first-child&gt;.netHeaderCellBox {'{'}
            padding: 2px 14px 2px 18px;
            {'}'}
            .netHeaderCellBox {'{'}
            padding: 2px 14px 2px 10px;
            border-left: 1px solid #D9D9D9;
            border-right: 1px solid #9C9C9C;
            {'}'}
            .netHeaderCell:hover:active {'{'}
            background: #959595 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/tableHeaderActive.gif) repeat-x;
            {'}'}
            .netHeaderSorted {'{'}
            background: #7D93B2 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/tableHeaderSorted.gif) repeat-x;
            {'}'}
            .netHeaderSorted&gt;.netHeaderCellBox {'{'}
            border-right-color: #6B7C93;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/arrowDown.png) no-repeat right;
            {'}'}
            .netHeaderSorted.sortedAscending&gt;.netHeaderCellBox {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/arrowUp.png);
            {'}'}
            .netHeaderSorted:hover:active {'{'}
            background: #536B90 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/tableHeaderSortedActive.gif) repeat-x;
            {'}'}
            .panelNode-net .netRowHeader {'{'}
            display: block;
            {'}'}
            .netRowHeader {'{'}
            cursor: pointer;
            display: none;
            height: 15px;
            margin-right: 0 !important;
            {'}'}
            .netRow .netRowHeader {'{'}
            background-position: 5px 1px;
            {'}'}
            .netRow[breakpoint="true"] .netRowHeader {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/breakpoint.png);
            {'}'}
            .netRow[breakpoint="true"][disabledBreakpoint="true"] .netRowHeader {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/breakpointDisabled.png);
            {'}'}
            .netRow.category-xhr:hover .netRowHeader {'{'}
            background-color: #F6F6F6;
            {'}'}
            #netBreakpointBar {'{'}
            max-width: 38px;
            {'}'}
            #netHrefCol&gt;.netHeaderCellBox {'{'}
            border-left: 0px;
            {'}'}
            .netRow .netRowHeader {'{'}
            width: 3px;
            {'}'}
            .netInfoRow .netRowHeader {'{'}
            display: table-cell;
            {'}'}
            .netTable[hiddenCols~=netHrefCol] TD[id="netHrefCol"],
            .netTable[hiddenCols~=netHrefCol] TD.netHrefCol,
            .netTable[hiddenCols~=netStatusCol] TD[id="netStatusCol"],
            .netTable[hiddenCols~=netStatusCol] TD.netStatusCol,
            .netTable[hiddenCols~=netDomainCol] TD[id="netDomainCol"],
            .netTable[hiddenCols~=netDomainCol] TD.netDomainCol,
            .netTable[hiddenCols~=netSizeCol] TD[id="netSizeCol"],
            .netTable[hiddenCols~=netSizeCol] TD.netSizeCol,
            .netTable[hiddenCols~=netTimeCol] TD[id="netTimeCol"],
            .netTable[hiddenCols~=netTimeCol] TD.netTimeCol {'{'}
            display: none;
            {'}'}
            .netRow {'{'}
            background: LightYellow;
            {'}'}
            .netRow.loaded {'{'}
            background: #FFFFFF;
            {'}'}
            .netRow.loaded:hover {'{'}
            background: #EFEFEF;
            {'}'}
            .netCol {'{'}
            padding: 0;
            vertical-align: top;
            border-bottom: 1px solid #EFEFEF;
            white-space: nowrap;
            height: 17px;
            {'}'}
            .netLabel {'{'}
            width: 100%;
            {'}'}
            .netStatusCol {'{'}
            padding-left: 10px;
            color: rgb(128, 128, 128);
            {'}'}
            .responseError&gt;.netStatusCol {'{'}
            color: red;
            {'}'}
            .netDomainCol {'{'}
            padding-left: 5px;
            {'}'}
            .netSizeCol {'{'}
            text-align: right;
            padding-right: 10px;
            {'}'}
            .netHrefLabel {'{'}
            -moz-box-sizing: padding-box;
            overflow: hidden;
            z-index: 10;
            position: absolute;
            padding-left: 18px;
            padding-top: 1px;
            max-width: 15%;
            font-weight: bold;
            {'}'}
            .netFullHrefLabel {'{'}
            display: none;
            -moz-user-select: none;
            padding-right: 10px;
            padding-bottom: 3px;
            max-width: 100%;
            background: #FFFFFF;
            z-index: 200;
            {'}'}
            .netHrefCol:hover&gt;.netFullHrefLabel {'{'}
            display: block;
            {'}'}
            .netRow.loaded:hover .netCol&gt;.netFullHrefLabel {'{'}
            background-color: #EFEFEF;
            {'}'}
            .useA11y .a11yShowFullLabel {'{'}
            display: block;
            background-image: none !important;
            border: 1px solid #CBE087;
            background-color: LightYellow;
            font-family: Monaco, monospace;
            color: #000000;
            font-size: 10px;
            z-index: 2147483647;
            {'}'}
            .netSizeLabel {'{'}
            padding-left: 6px;
            {'}'}
            .netStatusLabel,
            .netDomainLabel,
            .netSizeLabel,
            .netBar {'{'}
            padding: 1px 0 2px 0 !important;
            {'}'}
            .responseError {'{'}
            color: red;
            {'}'}
            .hasHeaders .netHrefLabel:hover {'{'}
            cursor: pointer;
            color: blue;
            text-decoration: underline;
            {'}'}
            .netLoadingIcon {'{'}
            position: absolute;
            border: 0;
            margin-left: 14px;
            width: 16px;
            height: 16px;
            background: transparent no-repeat 0 0;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/loading_16.gif);
            display: inline-block;
            {'}'}
            .loaded .netLoadingIcon {'{'}
            display: none;
            {'}'}
            .netBar,
            .netSummaryBar {'{'}
            position: relative;
            border-right: 50px solid transparent;
            {'}'}
            .netResolvingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #FFFFFF url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarResolving.gif) repeat-x;
            z-index: 60;
            {'}'}
            .netConnectingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #FFFFFF url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarConnecting.gif) repeat-x;
            z-index: 50;
            {'}'}
            .netBlockingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #FFFFFF url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarWaiting.gif) repeat-x;
            z-index: 40;
            {'}'}
            .netSendingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #FFFFFF url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarSending.gif) repeat-x;
            z-index: 30;
            {'}'}
            .netWaitingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #FFFFFF url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarResponded.gif) repeat-x;
            z-index: 20;
            min-width: 1px;
            {'}'}
            .netReceivingBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: #38D63B url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarLoading.gif) repeat-x;
            z-index: 10;
            {'}'}
            .netWindowLoadBar,
            .netContentLoadBar {'{'}
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: red;
            z-index: 70;
            opacity: 0.5;
            display: none;
            margin-bottom: -1px;
            {'}'}
            .netContentLoadBar {'{'}
            background-color: Blue;
            {'}'}
            .netTimeLabel {'{'}
            -moz-box-sizing: padding-box;
            position: absolute;
            top: 1px;
            left: 100%;
            padding-left: 6px;
            color: #444444;
            min-width: 16px;
            {'}'}
            .loaded .netReceivingBar,
            .loaded.netReceivingBar {'{'}
            background: #B6B6B6 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarLoaded.gif) repeat-x;
            border-color: #B6B6B6;
            {'}'}
            .fromCache .netReceivingBar,
            .fromCache.netReceivingBar {'{'}
            background: #D6D6D6 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/netBarCached.gif) repeat-x;
            border-color: #D6D6D6;
            {'}'}
            .netSummaryRow .netTimeLabel,
            .loaded .netTimeLabel {'{'}
            background: transparent;
            {'}'}
            .timeInfoTip {'{'}
            width: 150px;
            height: 40px
            {'}'}
            .timeInfoTipBar,
            .timeInfoTipEventBar {'{'}
            position: relative;
            display: block;
            margin: 0;
            opacity: 1;
            height: 15px;
            width: 4px;
            {'}'}
            .timeInfoTipEventBar {'{'}
            width: 1px !important;
            {'}'}
            .timeInfoTipCell.startTime {'{'}
            padding-right: 8px;
            {'}'}
            .timeInfoTipCell.elapsedTime {'{'}
            text-align: right;
            padding-right: 8px;
            {'}'}
            .sizeInfoLabelCol {'{'}
            font-weight: bold;
            padding-right: 10px;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-size: 11px;
            {'}'}
            .sizeInfoSizeCol {'{'}
            font-weight: bold;
            {'}'}
            .sizeInfoDetailCol {'{'}
            color: gray;
            text-align: right;
            {'}'}
            .sizeInfoDescCol {'{'}
            font-style: italic;
            {'}'}
            .netSummaryRow .netReceivingBar {'{'}
            background: #BBBBBB;
            border: none;
            {'}'}
            .netSummaryLabel {'{'}
            color: #222222;
            {'}'}
            .netSummaryRow {'{'}
            background: #BBBBBB !important;
            font-weight: bold;
            {'}'}
            .netSummaryRow .netBar {'{'}
            border-right-color: #BBBBBB;
            {'}'}
            .netSummaryRow&gt;.netCol {'{'}
            border-top: 1px solid #999999;
            border-bottom: 2px solid;
            -moz-border-bottom-colors: #EFEFEF #999999;
            padding-top: 1px;
            padding-bottom: 2px;
            {'}'}
            .netSummaryRow&gt;.netHrefCol:hover {'{'}
            background: transparent !important;
            {'}'}
            .netCountLabel {'{'}
            padding-left: 18px;
            {'}'}
            .netTotalSizeCol {'{'}
            text-align: right;
            padding-right: 10px;
            {'}'}
            .netTotalTimeCol {'{'}
            text-align: right;
            {'}'}
            .netCacheSizeLabel {'{'}
            position: absolute;
            z-index: 1000;
            left: 0;
            top: 0;
            {'}'}
            .netLimitRow {'{'}
            background: rgb(255, 255, 225) !important;
            font-weight: normal;
            color: black;
            font-weight: normal;
            {'}'}
            .netLimitLabel {'{'}
            padding-left: 18px;
            {'}'}
            .netLimitRow&gt;.netCol {'{'}
            border-bottom: 2px solid;
            -moz-border-bottom-colors: #EFEFEF #999999;
            vertical-align: middle !important;
            padding-top: 2px;
            padding-bottom: 2px;
            {'}'}
            .netLimitButton {'{'}
            font-size: 11px;
            padding-top: 1px;
            padding-bottom: 1px;
            {'}'}
            .netInfoCol {'{'}
            border-top: 1px solid #EEEEEE;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/group.gif) repeat-x #FFFFFF;
            {'}'}
            .netInfoBody {'{'}
            margin: 10px 0 4px 10px;
            {'}'}
            .netInfoTabs {'{'}
            position: relative;
            padding-left: 17px;
            {'}'}
            .netInfoTab {'{'}
            position: relative;
            top: -3px;
            margin-top: 10px;
            padding: 4px 6px;
            border: 1px solid transparent;
            border-bottom: none;
            _border: none;
            font-weight: bold;
            color: #565656;
            cursor: pointer;
            {'}'}
            .netInfoTabSelected {'{'}
            cursor: default !important;
            border: 1px solid #D7D7D7 !important;
            border-bottom: none !important;
            -moz-border-radius: 4px 4px 0 0;
            -webkit-border-radius: 4px 4px 0 0;
            border-radius: 4px 4px 0 0;
            background-color: #FFFFFF;
            {'}'}
            .logRow-netInfo.error .netInfoTitle {'{'}
            color: red;
            {'}'}
            .logRow-netInfo.loading .netInfoResponseText {'{'}
            font-style: italic;
            color: #888888;
            {'}'}
            .loading .netInfoResponseHeadersTitle {'{'}
            display: none;
            {'}'}
            .netInfoResponseSizeLimit {'{'}
            font-family: Lucida Grande, Tahoma, sans-serif;
            padding-top: 10px;
            font-size: 11px;
            {'}'}
            .netInfoText {'{'}
            display: none;
            margin: 0;
            border: 1px solid #D7D7D7;
            border-right: none;
            padding: 8px;
            background-color: #FFFFFF;
            font-family: Monaco, monospace;
            white-space: pre-wrap;
            {'}'}
            .netInfoTextSelected {'{'}
            display: block;
            {'}'}
            .netInfoParamName {'{'}
            padding-right: 10px;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-weight: bold;
            vertical-align: top;
            text-align: right;
            white-space: nowrap;
            {'}'}
            .netInfoPostText .netInfoParamName {'{'}
            width: 1px;
            {'}'}
            .netInfoParamValue {'{'}
            width: 100%;
            {'}'}
            .netInfoHeadersText,
            .netInfoPostText,
            .netInfoPutText {'{'}
            padding-top: 0;
            {'}'}
            .netInfoHeadersGroup,
            .netInfoPostParams,
            .netInfoPostSource {'{'}
            margin-bottom: 4px;
            border-bottom: 1px solid #D7D7D7;
            padding-top: 8px;
            padding-bottom: 2px;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-weight: bold;
            color: #565656;
            {'}'}
            .netInfoPostParamsTable,
            .netInfoPostPartsTable,
            .netInfoPostJSONTable,
            .netInfoPostXMLTable,
            .netInfoPostSourceTable {'{'}
            margin-bottom: 10px;
            width: 100%;
            {'}'}
            .netInfoPostContentType {'{'}
            color: #bdbdbd;
            padding-left: 50px;
            font-weight: normal;
            {'}'}
            .netInfoHtmlPreview {'{'}
            border: 0;
            width: 100%;
            height: 100%;
            {'}'}
            .netHeadersViewSource {'{'}
            color: #bdbdbd;
            margin-left: 200px;
            font-weight: normal;
            {'}'}
            .netHeadersViewSource:hover {'{'}
            color: blue;
            cursor: pointer;
            {'}'}
            .netActivationRow,
            .netPageSeparatorRow {'{'}
            background: rgb(229, 229, 229) !important;
            font-weight: normal;
            color: black;
            {'}'}
            .netActivationLabel {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/chrome://firebug/skin/infoIcon.png) no-repeat 3px 2px;
            padding-left: 22px;
            {'}'}
            .netPageSeparatorRow {'{'}
            height: 5px !important;
            {'}'}
            .netPageSeparatorLabel {'{'}
            padding-left: 22px;
            height: 5px !important;
            {'}'}
            .netPageRow {'{'}
            background-color: rgb(255, 255, 255);
            {'}'}
            .netPageRow:hover {'{'}
            background: #EFEFEF;
            {'}'}
            .netPageLabel {'{'}
            padding: 1px 0 2px 18px !important;
            font-weight: bold;
            {'}'}
            .netActivationRow&gt;.netCol {'{'}
            border-bottom: 2px solid;
            -moz-border-bottom-colors: #EFEFEF #999999;
            padding-top: 2px;
            padding-bottom: 3px;
            {'}'}
            .twisty,
            .logRow-errorMessage&gt;.hasTwisty&gt;.errorTitle,
            .logRow-log&gt;.objectBox-array.hasTwisty,
            .logRow-spy .spyHead .spyTitle,
            .logGroup&gt;.logRow,
            .memberRow.hasChildren&gt;.memberLabelCell&gt;.memberLabel,
            .hasHeaders .netHrefLabel,
            .netPageRow&gt;.netCol&gt;.netPageTitle {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_open.gif);
            background-repeat: no-repeat;
            background-position: 2px 2px;
            min-height: 12px;
            {'}'}
            .logRow-errorMessage&gt;.hasTwisty.opened&gt;.errorTitle,
            .logRow-log&gt;.objectBox-array.hasTwisty.opened,
            .logRow-spy.opened .spyHead .spyTitle,
            .logGroup.opened&gt;.logRow,
            .memberRow.hasChildren.opened&gt;.memberLabelCell&gt;.memberLabel,
            .nodeBox.highlightOpen&gt;.nodeLabel&gt;.twisty,
            .nodeBox.open&gt;.nodeLabel&gt;.twisty,
            .netRow.opened&gt;.netCol&gt;.netHrefLabel,
            .netPageRow.opened&gt;.netCol&gt;.netPageTitle {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_close.gif);
            {'}'}
            .twisty {'{'}
            background-position: 4px 4px;
            {'}'}
            * html .logRow-spy .spyHead .spyTitle,
            * html .logGroup .logGroupLabel,
            * html .hasChildren .memberLabelCell .memberLabel,
            * html .hasHeaders .netHrefLabel {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_open.gif);
            background-repeat: no-repeat;
            background-position: 2px 2px;
            {'}'}
            * html .opened .spyHead .spyTitle,
            * html .opened .logGroupLabel,
            * html .opened .memberLabelCell .memberLabel {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_close.gif);
            background-repeat: no-repeat;
            background-position: 2px 2px;
            {'}'}
            .panelNode-console {'{'}
            overflow-x: hidden;
            {'}'}
            .objectLink {'{'}
            text-decoration: none;
            {'}'}
            .objectLink:hover {'{'}
            cursor: pointer;
            text-decoration: underline;
            {'}'}
            .logRow {'{'}
            position: relative;
            margin: 0;
            border-bottom: 1px solid #D7D7D7;
            padding: 2px 4px 1px 6px;
            background-color: #FFFFFF;
            overflow: hidden !important;
            {'}'}
            .useA11y .logRow:focus {'{'}
            border-bottom: 1px solid #000000 !important;
            outline: none !important;
            background-color: #FFFFAD !important;
            {'}'}
            .useA11y .logRow:focus a.objectLink-sourceLink {'{'}
            background-color: #FFFFAD;
            {'}'}
            .useA11y .a11yFocus:focus,
            .useA11y .objectBox:focus {'{'}
            outline: 2px solid #FF9933;
            background-color: #FFFFAD;
            {'}'}
            .useA11y .objectBox-null:focus,
            .useA11y .objectBox-undefined:focus {'{'}
            background-color: #888888 !important;
            {'}'}
            .useA11y .logGroup.opened&gt;.logRow {'{'}
            border-bottom: 1px solid #ffffff;
            {'}'}
            .logGroup {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/group.gif) repeat-x #FFFFFF;
            padding: 0 !important;
            border: none !important;
            {'}'}
            .logGroupBody {'{'}
            display: none;
            margin-left: 16px;
            border-left: 1px solid #D7D7D7;
            border-top: 1px solid #D7D7D7;
            background: #FFFFFF;
            {'}'}
            .logGroup&gt;.logRow {'{'}
            background-color: transparent !important;
            font-weight: bold;
            {'}'}
            .logGroup.opened&gt;.logRow {'{'}
            border-bottom: none;
            {'}'}
            .logGroup.opened&gt;.logGroupBody {'{'}
            display: block;
            {'}'}
            .logRow-command&gt;.objectBox-text {'{'}
            font-family: Monaco, monospace;
            color: #0000FF;
            white-space: pre-wrap;
            {'}'}
            .logRow-info,
            .logRow-warn,
            .logRow-error,
            .logRow-assert,
            .logRow-warningMessage,
            .logRow-errorMessage {'{'}
            padding-left: 22px;
            background-repeat: no-repeat;
            background-position: 4px 2px;
            {'}'}
            .logRow-assert,
            .logRow-warningMessage,
            .logRow-errorMessage {'{'}
            padding-top: 0;
            padding-bottom: 0;
            {'}'}
            .logRow-info,
            .logRow-info .objectLink-sourceLink {'{'}
            background-color: #FFFFFF;
            {'}'}
            .logRow-warn,
            .logRow-warningMessage,
            .logRow-warn .objectLink-sourceLink,
            .logRow-warningMessage .objectLink-sourceLink {'{'}
            background-color: cyan;
            {'}'}
            .logRow-error,
            .logRow-assert,
            .logRow-errorMessage,
            .logRow-error .objectLink-sourceLink,
            .logRow-errorMessage .objectLink-sourceLink {'{'}
            background-color: LightYellow;
            {'}'}
            .logRow-error,
            .logRow-assert,
            .logRow-errorMessage {'{'}
            color: #FF0000;
            {'}'}
            .logRow-info {'{'}{'}'}
            .logRow-warn,
            .logRow-warningMessage {'{'}{'}'}
            .logRow-error,
            .logRow-assert,
            .logRow-errorMessage {'{'}{'}'}
            .objectBox-string,
            .objectBox-text,
            .objectBox-number,
            .objectLink-element,
            .objectLink-textNode,
            .objectLink-function,
            .objectBox-stackTrace,
            .objectLink-profile {'{'}
            font-family: Monaco, monospace;
            {'}'}
            .objectBox-string,
            .objectBox-text,
            .objectLink-textNode {'{'}
            white-space: pre-wrap;
            {'}'}
            .objectBox-number,
            .objectLink-styleRule,
            .objectLink-element,
            .objectLink-textNode {'{'}
            color: #000088;
            {'}'}
            .objectBox-string {'{'}
            color: #FF0000;
            {'}'}
            .objectLink-function,
            .objectBox-stackTrace,
            .objectLink-profile {'{'}
            color: DarkGreen;
            {'}'}
            .objectBox-null,
            .objectBox-undefined {'{'}
            padding: 0 2px;
            border: 1px solid #666666;
            background-color: #888888;
            color: #FFFFFF;
            {'}'}
            .objectBox-exception {'{'}
            padding: 0 2px 0 18px;
            color: red;
            {'}'}
            .objectLink-sourceLink {'{'}
            position: absolute;
            right: 4px;
            top: 2px;
            padding-left: 8px;
            font-family: Lucida Grande, sans-serif;
            font-weight: bold;
            color: #0000FF;
            {'}'}
            .errorTitle {'{'}
            margin-top: 0px;
            margin-bottom: 1px;
            padding-top: 2px;
            padding-bottom: 2px;
            {'}'}
            .errorTrace {'{'}
            margin-left: 17px;
            {'}'}
            .errorSourceBox {'{'}
            margin: 2px 0;
            {'}'}
            .errorSource-none {'{'}
            display: none;
            {'}'}
            .errorSource-syntax&gt;.errorBreak {'{'}
            visibility: hidden;
            {'}'}
            .errorSource {'{'}
            cursor: pointer;
            font-family: Monaco, monospace;
            color: DarkGreen;
            {'}'}
            .errorSource:hover {'{'}
            text-decoration: underline;
            {'}'}
            .errorBreak {'{'}
            cursor: pointer;
            display: none;
            margin: 0 6px 0 0;
            width: 13px;
            height: 14px;
            vertical-align: bottom;
            opacity: 0.1;
            {'}'}
            .hasBreakSwitch .errorBreak {'{'}
            display: inline;
            {'}'}
            .breakForError .errorBreak {'{'}
            opacity: 1;
            {'}'}
            .assertDescription {'{'}
            margin: 0;
            {'}'}
            .logRow-profile&gt;.logRow&gt;.objectBox-text {'{'}
            font-family: Lucida Grande, Tahoma, sans-serif;
            color: #000000;
            {'}'}
            .logRow-profile&gt;.logRow&gt;.objectBox-text:last-child {'{'}
            color: #555555;
            font-style: italic;
            {'}'}
            .logRow-profile.opened&gt;.logRow {'{'}
            padding-bottom: 4px;
            {'}'}
            .profilerRunning&gt;.logRow {'{'}
            padding-left: 22px !important;
            {'}'}
            .profileSizer {'{'}
            width: 100%;
            overflow-x: auto;
            overflow-y: scroll;
            {'}'}
            .profileTable {'{'}
            border-bottom: 1px solid #D7D7D7;
            padding: 0 0 4px 0;
            {'}'}
            .profileTable tr[odd="1"] {'{'}
            background-color: #F5F5F5;
            vertical-align: middle;
            {'}'}
            .profileTable a {'{'}
            vertical-align: middle;
            {'}'}
            .profileTable td {'{'}
            padding: 1px 4px 0 4px;
            {'}'}
            .headerCell {'{'}
            cursor: pointer;
            -moz-user-select: none;
            border-bottom: 1px solid #9C9C9C;
            padding: 0 !important;
            font-weight: bold;
            {'}'}
            .headerCellBox {'{'}
            padding: 2px 4px;
            border-left: 1px solid #D9D9D9;
            border-right: 1px solid #9C9C9C;
            {'}'}
            .headerCell:hover:active {'{'}{'}'}
            .headerSorted {'{'}{'}'}
            .headerSorted&gt;.headerCellBox {'{'}
            border-right-color: #6B7C93;
            {'}'}
            .headerSorted.sortedAscending&gt;.headerCellBox {'{'}{'}'}
            .headerSorted:hover:active {'{'}{'}'}
            .linkCell {'{'}
            text-align: right;
            {'}'}
            .linkCell&gt;.objectLink-sourceLink {'{'}
            position: static;
            {'}'}
            .logRow-stackTrace {'{'}
            padding-top: 0;
            background: #f8f8f8;
            {'}'}
            .logRow-stackTrace&gt;.objectBox-stackFrame {'{'}
            position: relative;
            padding-top: 2px;
            {'}'}
            .objectLink-object {'{'}
            font-family: Lucida Grande, sans-serif;
            font-weight: bold;
            color: DarkGreen;
            white-space: pre-wrap;
            {'}'}
            .objectProp-object {'{'}
            color: DarkGreen;
            {'}'}
            .objectProps {'{'}
            color: #000;
            font-weight: normal;
            {'}'}
            .objectPropName {'{'}
            color: #777;
            {'}'}
            .objectProps .objectProp-string {'{'}
            color: #f55;
            {'}'}
            .objectProps .objectProp-number {'{'}
            color: #55a;
            {'}'}
            .objectProps .objectProp-object {'{'}
            color: #585;
            {'}'}
            .selectorTag,
            .selectorId,
            .selectorClass {'{'}
            font-family: Monaco, monospace;
            font-weight: normal;
            {'}'}
            .selectorTag {'{'}
            color: #0000FF;
            {'}'}
            .selectorId {'{'}
            color: DarkBlue;
            {'}'}
            .selectorClass {'{'}
            color: red;
            {'}'}
            .selectorHidden&gt;.selectorTag {'{'}
            color: #5F82D9;
            {'}'}
            .selectorHidden&gt;.selectorId {'{'}
            color: #888888;
            {'}'}
            .selectorHidden&gt;.selectorClass {'{'}
            color: #D86060;
            {'}'}
            .selectorValue {'{'}
            font-family: Lucida Grande, sans-serif;
            font-style: italic;
            color: #555555;
            {'}'}
            .panelNode.searching .logRow {'{'}
            display: none;
            {'}'}
            .logRow.matched {'{'}
            display: block !important;
            {'}'}
            .logRow.matching {'{'}
            position: absolute;
            left: -1000px;
            top: -1000px;
            max-width: 0;
            max-height: 0;
            overflow: hidden;
            {'}'}
            .objectLeftBrace,
            .objectRightBrace,
            .objectEqual,
            .objectComma,
            .arrayLeftBracket,
            .arrayRightBracket,
            .arrayComma {'{'}
            font-family: Monaco, monospace;
            {'}'}
            .objectLeftBrace,
            .objectRightBrace,
            .arrayLeftBracket,
            .arrayRightBracket {'{'}
            font-weight: bold;
            {'}'}
            .objectLeftBrace,
            .arrayLeftBracket {'{'}
            margin-right: 4px;
            {'}'}
            .objectRightBrace,
            .arrayRightBracket {'{'}
            margin-left: 4px;
            {'}'}
            .logRow-dir {'{'}
            padding: 0;
            {'}'}
            .logRow-errorMessage .hasTwisty .errorTitle,
            .logRow-spy .spyHead .spyTitle,
            .logGroup .logRow {'{'}
            cursor: pointer;
            padding-left: 18px;
            background-repeat: no-repeat;
            background-position: 3px 3px;
            {'}'}
            .logRow-errorMessage&gt;.hasTwisty&gt;.errorTitle {'{'}
            background-position: 2px 3px;
            {'}'}
            .logRow-errorMessage&gt;.hasTwisty&gt;.errorTitle:hover,
            .logRow-spy .spyHead .spyTitle:hover,
            .logGroup&gt;.logRow:hover {'{'}
            text-decoration: underline;
            {'}'}
            .logRow-spy {'{'}
            padding: 0 !important;
            {'}'}
            .logRow-spy,
            .logRow-spy .objectLink-sourceLink {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/group.gif) repeat-x #FFFFFF;
            padding-right: 4px;
            right: 0;
            {'}'}
            .logRow-spy.opened {'{'}
            padding-bottom: 4px;
            border-bottom: none;
            {'}'}
            .spyTitle {'{'}
            color: #000000;
            font-weight: bold;
            -moz-box-sizing: padding-box;
            overflow: hidden;
            z-index: 100;
            padding-left: 18px;
            {'}'}
            .spyCol {'{'}
            padding: 0;
            white-space: nowrap;
            height: 16px;
            {'}'}
            .spyTitleCol:hover&gt;.objectLink-sourceLink,
            .spyTitleCol:hover&gt;.spyTime,
            .spyTitleCol:hover&gt;.spyStatus,
            .spyTitleCol:hover&gt;.spyTitle {'{'}
            display: none;
            {'}'}
            .spyFullTitle {'{'}
            display: none;
            -moz-user-select: none;
            max-width: 100%;
            background-color: Transparent;
            {'}'}
            .spyTitleCol:hover&gt;.spyFullTitle {'{'}
            display: block;
            {'}'}
            .spyStatus {'{'}
            padding-left: 10px;
            color: rgb(128, 128, 128);
            {'}'}
            .spyTime {'{'}
            margin-left: 4px;
            margin-right: 4px;
            color: rgb(128, 128, 128);
            {'}'}
            .spyIcon {'{'}
            margin-right: 4px;
            margin-left: 4px;
            width: 16px;
            height: 16px;
            vertical-align: middle;
            background: transparent no-repeat 0 0;
            display: none;
            {'}'}
            .loading .spyHead .spyRow .spyIcon {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/loading_16.gif);
            display: block;
            {'}'}
            .logRow-spy.loaded:not(.error) .spyHead .spyRow .spyIcon {'{'}
            width: 0;
            margin: 0;
            {'}'}
            .logRow-spy.error .spyHead .spyRow .spyIcon {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/errorIcon-sm.png);
            display: block;
            background-position: 2px 2px;
            {'}'}
            .logRow-spy .spyHead .netInfoBody {'{'}
            display: none;
            {'}'}
            .logRow-spy.opened .spyHead .netInfoBody {'{'}
            margin-top: 10px;
            display: block;
            {'}'}
            .logRow-spy.error .spyTitle,
            .logRow-spy.error .spyStatus,
            .logRow-spy.error .spyTime {'{'}
            color: red;
            {'}'}
            .logRow-spy.loading .spyResponseText {'{'}
            font-style: italic;
            color: #888888;
            {'}'}
            .caption {'{'}
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-weight: bold;
            color: #444444;
            {'}'}
            .warning {'{'}
            padding: 10px;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-weight: bold;
            color: #888888;
            {'}'}
            .panelNode-dom {'{'}
            overflow-x: hidden !important;
            {'}'}
            .domTable {'{'}
            font-size: 1em;
            width: 100%;
            table-layout: fixed;
            background: #fff;
            {'}'}
            .domTableIE {'{'}
            width: auto;
            {'}'}
            .memberLabelCell {'{'}
            padding: 2px 0 2px 0;
            vertical-align: top;
            {'}'}
            .memberValueCell {'{'}
            padding: 1px 0 1px 5px;
            display: block;
            overflow: hidden;
            {'}'}
            .memberLabel {'{'}
            display: block;
            cursor: default;
            -moz-user-select: none;
            overflow: hidden;
            padding-left: 18px;
            background-color: #FFFFFF;
            text-decoration: none;
            {'}'}
            .memberRow.hasChildren .memberLabelCell .memberLabel:hover {'{'}
            cursor: pointer;
            color: blue;
            text-decoration: underline;
            {'}'}
            .userLabel {'{'}
            color: #000000;
            font-weight: bold;
            {'}'}
            .userClassLabel {'{'}
            color: #E90000;
            font-weight: bold;
            {'}'}
            .userFunctionLabel {'{'}
            color: #025E2A;
            font-weight: bold;
            {'}'}
            .domLabel {'{'}
            color: #000000;
            {'}'}
            .domFunctionLabel {'{'}
            color: #025E2A;
            {'}'}
            .ordinalLabel {'{'}
            color: SlateBlue;
            font-weight: bold;
            {'}'}
            .scopesRow {'{'}
            padding: 2px 18px;
            background-color: LightYellow;
            border-bottom: 5px solid #BEBEBE;
            color: #666666;
            {'}'}
            .scopesLabel {'{'}
            background-color: LightYellow;
            {'}'}
            .watchEditCell {'{'}
            padding: 2px 18px;
            background-color: LightYellow;
            border-bottom: 1px solid #BEBEBE;
            color: #666666;
            {'}'}
            .editor-watchNewRow,
            .editor-memberRow {'{'}
            font-family: Monaco, monospace !important;
            {'}'}
            .editor-memberRow {'{'}
            padding: 1px 0 !important;
            {'}'}
            .editor-watchRow {'{'}
            padding-bottom: 0 !important;
            {'}'}
            .watchRow&gt;.memberLabelCell {'{'}
            font-family: Monaco, monospace;
            padding-top: 1px;
            padding-bottom: 1px;
            {'}'}
            .watchRow&gt;.memberLabelCell&gt;.memberLabel {'{'}
            background-color: transparent;
            {'}'}
            .watchRow&gt;.memberValueCell {'{'}
            padding-top: 2px;
            padding-bottom: 2px;
            {'}'}
            .watchRow&gt;.memberLabelCell,
            .watchRow&gt;.memberValueCell {'{'}
            background-color: #F5F5F5;
            border-bottom: 1px solid #BEBEBE;
            {'}'}
            .watchToolbox {'{'}
            z-index: 2147483647;
            position: absolute;
            right: 0;
            padding: 1px 2px;
            {'}'}
            #fbConsole {'{'}
            overflow-x: hidden !important;
            {'}'}
            #fbCSS {'{'}
            font: 1em Monaco, monospace;
            padding: 0 7px;
            {'}'}
            #fbstylesheetButtons select,
            #fbScriptButtons select {'{'}
            font: 11px Lucida Grande, Tahoma, sans-serif;
            margin-top: 1px;
            padding-left: 3px;
            background: #fafafa;
            border: 1px inset #fff;
            width: 220px;
            outline: none;
            {'}'}
            .Selector {'{'}
            margin-top: 10px
            {'}'}
            .CSSItem {'{'}
            margin-left: 4%
            {'}'}
            .CSSText {'{'}
            padding-left: 20px;
            {'}'}
            .CSSProperty {'{'}
            color: #005500;
            {'}'}
            .CSSValue {'{'}
            padding-left: 5px;
            color: #000088;
            {'}'}
            #fbHTMLStatusBar {'{'}
            display: inline;
            {'}'}
            .fbToolbarButtons {'{'}
            display: none;
            {'}'}
            .fbStatusSeparator {'{'}
            display: block;
            float: left;
            padding-top: 4px;
            {'}'}
            #fbStatusBarBox {'{'}
            display: none;
            {'}'}
            #fbToolbarContent {'{'}
            display: block;
            position: absolute;
            _position: absolute;
            top: 0;
            padding-top: 4px;
            height: 23px;
            clip: rect(0, 2048px, 27px, 0);
            {'}'}
            .fbTabMenuTarget {'{'}
            display: none !important;
            float: left;
            width: 10px;
            height: 10px;
            margin-top: 6px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuTarget.png);
            {'}'}
            .fbTabMenuTarget:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuTargetHover.png);
            {'}'}
            .fbShadow {'{'}
            float: left;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/shadowAlpha.png) no-repeat bottom right !important;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/shadow2.gif) no-repeat bottom right;
            margin: 10px 0 0 10px !important;
            margin: 10px 0 0 5px;
            {'}'}
            .fbShadowContent {'{'}
            display: block;
            position: relative;
            background-color: #fff;
            border: 1px solid #a9a9a9;
            top: -6px;
            left: -6px;
            {'}'}
            .fbMenu {'{'}
            display: none;
            position: absolute;
            font-size: 11px;
            line-height: 13px;
            z-index: 2147483647;
            {'}'}
            .fbMenuContent {'{'}
            padding: 2px;
            {'}'}
            .fbMenuSeparator {'{'}
            display: block;
            position: relative;
            padding: 1px 18px 0;
            text-decoration: none;
            color: #000;
            cursor: default;
            background: #ACA899;
            margin: 4px 0;
            {'}'}
            .fbMenuOption {'{'}
            display: block;
            position: relative;
            padding: 2px 18px;
            text-decoration: none;
            color: #000;
            cursor: default;
            {'}'}
            .fbMenuOption:hover {'{'}
            color: #fff;
            background: #316AC5;
            {'}'}
            .fbMenuGroup {'{'}
            background: transparent url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuPin.png) no-repeat right 0;
            {'}'}
            .fbMenuGroup:hover {'{'}
            background: #316AC5 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuPin.png) no-repeat right -17px;
            {'}'}
            .fbMenuGroupSelected {'{'}
            color: #fff;
            background: #316AC5 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuPin.png) no-repeat right -17px;
            {'}'}
            .fbMenuChecked {'{'}
            background: transparent url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuCheckbox.png) no-repeat 4px 0;
            {'}'}
            .fbMenuChecked:hover {'{'}
            background: #316AC5 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuCheckbox.png) no-repeat 4px -17px;
            {'}'}
            .fbMenuRadioSelected {'{'}
            background: transparent url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuRadio.png) no-repeat 4px 0;
            {'}'}
            .fbMenuRadioSelected:hover {'{'}
            background: #316AC5 url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tabMenuRadio.png) no-repeat 4px -17px;
            {'}'}
            .fbMenuShortcut {'{'}
            padding-right: 85px;
            {'}'}
            .fbMenuShortcutKey {'{'}
            position: absolute;
            right: 0;
            top: 2px;
            width: 77px;
            {'}'}
            #fbFirebugMenu {'{'}
            top: 22px;
            left: 0;
            {'}'}
            .fbMenuDisabled {'{'}
            color: #ACA899 !important;
            {'}'}
            #fbFirebugSettingsMenu {'{'}
            left: 245px;
            top: 99px;
            {'}'}
            #fbConsoleMenu {'{'}
            top: 42px;
            left: 48px;
            {'}'}
            .fbIconButton {'{'}
            display: block;
            {'}'}
            .fbIconButton {'{'}
            display: block;
            {'}'}
            .fbIconButton {'{'}
            display: block;
            float: left;
            height: 20px;
            width: 20px;
            color: #000;
            margin-right: 2px;
            text-decoration: none;
            cursor: default;
            {'}'}
            .fbIconButton:hover {'{'}
            position: relative;
            top: -1px;
            left: -1px;
            margin-right: 0;
            _margin-right: 1px;
            color: #333;
            border: 1px solid #fff;
            border-bottom: 1px solid #bbb;
            border-right: 1px solid #bbb;
            {'}'}
            .fbIconPressed {'{'}
            position: relative;
            margin-right: 0;
            _margin-right: 1px;
            top: 0 !important;
            left: 0 !important;
            height: 19px;
            color: #333 !important;
            border: 1px solid #bbb !important;
            border-bottom: 1px solid #cfcfcf !important;
            border-right: 1px solid #ddd !important;
            {'}'}
            #fbErrorPopup {'{'}
            position: absolute;
            right: 0;
            bottom: 0;
            height: 19px;
            width: 75px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #f1f2ee 0 0;
            z-index: 999;
            {'}'}
            #fbErrorPopupContent {'{'}
            position: absolute;
            right: 0;
            top: 1px;
            height: 18px;
            width: 75px;
            _width: 74px;
            border-left: 1px solid #aca899;
            {'}'}
            #fbErrorIndicator {'{'}
            position: absolute;
            top: 2px;
            right: 5px;
            {'}'}
            .fbBtnInspectActive {'{'}
            background: #aaa;
            color: #fff !important;
            {'}'}
            .fbBody {'{'}
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-size: 11px;
            background: #fff;
            {'}'}
            .clear {'{'}
            clear: both;
            {'}'}
            #fbMiniChrome {'{'}
            display: none;
            right: 0;
            height: 27px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #f1f2ee 0 0;
            margin-left: 1px;
            {'}'}
            #fbMiniContent {'{'}
            display: block;
            position: relative;
            left: -1px;
            right: 0;
            top: 1px;
            height: 25px;
            border-left: 1px solid #aca899;
            {'}'}
            #fbToolbarSearch {'{'}
            float: right;
            border: 1px solid #ccc;
            margin: 0 5px 0 0;
            background: #fff url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/search.png) no-repeat 4px 2px !important;
            background: #fff url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/search.gif) no-repeat 4px 2px;
            padding-left: 20px;
            font-size: 11px;
            {'}'}
            #fbToolbarErrors {'{'}
            float: right;
            margin: 1px 4px 0 0;
            font-size: 11px;
            {'}'}
            #fbLeftToolbarErrors {'{'}
            float: left;
            margin: 7px 0px 0 5px;
            font-size: 11px;
            {'}'}
            .fbErrors {'{'}
            padding-left: 20px;
            height: 14px;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/errorIcon.png) no-repeat !important;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/errorIcon.gif) no-repeat;
            color: #f00;
            font-weight: bold;
            {'}'}
            #fbMiniErrors {'{'}
            display: inline;
            display: none;
            float: right;
            margin: 5px 2px 0 5px;
            {'}'}
            #fbMiniIcon {'{'}
            float: right;
            margin: 3px 4px 0;
            height: 20px;
            width: 20px;
            float: right;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) 0 -135px;
            cursor: pointer;
            {'}'}
            #fbChrome {'{'}
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-size: 11px;
            position: absolute;
            _position: static;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            background: #fff;
            overflow: hidden;
            {'}'}
            #fbChrome&gt;tbody&gt;tr&gt;td {'{'}
            padding: 0;
            {'}'}
            #fbTop {'{'}
            height: 49px;
            {'}'}
            #fbToolbar {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #f1f2ee 0 0;
            height: 27px;
            font-size: 11px;
            line-height: 13px;
            {'}'}
            #fbPanelBarBox {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #dbd9c9 0 -27px;
            height: 22px;
            {'}'}
            #fbContent {'{'}
            height: 100%;
            vertical-align: top;
            {'}'}
            #fbBottom {'{'}
            height: 18px;
            background: #fff;
            {'}'}
            #fbToolbarIcon {'{'}
            float: left;
            padding: 0 5px 0;
            {'}'}
            #fbToolbarIcon a {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) 0 -135px;
            {'}'}
            #fbToolbarButtons {'{'}
            padding: 0 2px 0 5px;
            {'}'}
            #fbToolbarButtons {'{'}
            padding: 0 2px 0 5px;
            {'}'}
            .fbButton {'{'}
            text-decoration: none;
            display: block;
            float: left;
            color: #000;
            padding: 4px 6px 4px 7px;
            cursor: default;
            {'}'}
            .fbButton:hover {'{'}
            color: #333;
            background: #f5f5ef url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/buttonBg.png);
            padding: 3px 5px 3px 6px;
            border: 1px solid #fff;
            border-bottom: 1px solid #bbb;
            border-right: 1px solid #bbb;
            {'}'}
            .fbBtnPressed {'{'}
            background: #e3e3db url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/buttonBgHover.png) !important;
            padding: 3px 4px 2px 6px !important;
            margin: 1px 0 0 1px !important;
            border: 1px solid #ACA899 !important;
            border-color: #ACA899 #ECEBE3 #ECEBE3 #ACA899 !important;
            {'}'}
            #fbStatusBarBox {'{'}
            top: 4px;
            cursor: default;
            {'}'}
            .fbToolbarSeparator {'{'}
            overflow: hidden;
            border: 1px solid;
            border-color: transparent #fff transparent #777;
            _border-color: #eee #fff #eee #777;
            height: 7px;
            margin: 6px 3px;
            float: left;
            {'}'}
            .fbBtnSelected {'{'}
            font-weight: bold;
            {'}'}
            .fbStatusBar {'{'}
            color: #aca899;
            {'}'}
            .fbStatusBar a {'{'}
            text-decoration: none;
            color: black;
            {'}'}
            .fbStatusBar a:hover {'{'}
            color: blue;
            cursor: pointer;
            {'}'}
            #fbWindowButtons {'{'}
            position: absolute;
            white-space: nowrap;
            right: 0;
            top: 0;
            height: 17px;
            width: 48px;
            padding: 5px;
            z-index: 6;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #f1f2ee 0 0;
            {'}'}
            #fbPanelBar1 {'{'}
            width: 1024px;
            z-index: 8;
            left: 0;
            white-space: nowrap;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #dbd9c9 0 -27px;
            position: absolute;
            left: 4px;
            {'}'}
            #fbPanelBar2Box {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #dbd9c9 0 -27px;
            position: absolute;
            height: 22px;
            width: 300px;
            z-index: 9;
            right: 0;
            {'}'}
            #fbPanelBar2 {'{'}
            position: absolute;
            width: 290px;
            height: 22px;
            padding-left: 4px;
            {'}'}
            .fbPanel {'{'}
            display: none;
            {'}'}
            #fbPanelBox1,
            #fbPanelBox2 {'{'}
            max-height: inherit;
            height: 100%;
            font-size: 1em;
            {'}'}
            #fbPanelBox2 {'{'}
            background: #fff;
            {'}'}
            #fbPanelBox2 {'{'}
            width: 300px;
            background: #fff;
            {'}'}
            #fbPanel2 {'{'}
            margin-left: 6px;
            background: #fff;
            {'}'}
            #fbLargeCommandLine {'{'}
            display: none;
            position: absolute;
            z-index: 9;
            top: 27px;
            right: 0;
            width: 294px;
            height: 201px;
            border-width: 0;
            margin: 0;
            padding: 2px 0 0 2px;
            resize: none;
            outline: none;
            font-size: 11px;
            overflow: auto;
            border-top: 1px solid #B9B7AF;
            _right: -1px;
            _border-left: 1px solid #fff;
            {'}'}
            #fbLargeCommandButtons {'{'}
            display: none;
            background: #ECE9D8;
            bottom: 0;
            right: 0;
            width: 294px;
            height: 21px;
            padding-top: 1px;
            position: fixed;
            border-top: 1px solid #ACA899;
            z-index: 9;
            {'}'}
            #fbSmallCommandLineIcon {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/down.png) no-repeat;
            position: absolute;
            right: 2px;
            bottom: 3px;
            z-index: 99;
            {'}'}
            #fbSmallCommandLineIcon:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/downHover.png) no-repeat;
            {'}'}
            .hide {'{'}
            overflow: hidden !important;
            position: fixed !important;
            display: none !important;
            visibility: hidden !important;
            {'}'}
            #fbCommand {'{'}
            height: 18px;
            {'}'}
            #fbCommandBox {'{'}
            position: fixed;
            _position: absolute;
            width: 100%;
            height: 18px;
            bottom: 0;
            overflow: hidden;
            z-index: 9;
            background: #fff;
            border: 0;
            border-top: 1px solid #ccc;
            {'}'}
            #fbCommandIcon {'{'}
            position: absolute;
            color: #00f;
            top: 2px;
            left: 6px;
            display: inline;
            font: 11px Monaco, monospace;
            z-index: 10;
            {'}'}
            #fbCommandLine {'{'}
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            border: 0;
            margin: 0;
            padding: 2px 0 2px 32px;
            font: 11px Monaco, monospace;
            z-index: 9;
            outline: none;
            {'}'}
            #fbLargeCommandLineIcon {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/up.png) no-repeat;
            position: absolute;
            right: 1px;
            bottom: 1px;
            z-index: 10;
            {'}'}
            #fbLargeCommandLineIcon:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/upHover.png) no-repeat;
            {'}'}
            div.fbFitHeight {'{'}
            overflow: auto;
            position: relative;
            {'}'}
            .fbSmallButton {'{'}
            overflow: hidden;
            width: 16px;
            height: 16px;
            display: block;
            text-decoration: none;
            cursor: default;
            {'}'}
            #fbWindowButtons .fbSmallButton {'{'}
            float: right;
            {'}'}
            #fbWindow_btClose {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/min.png);
            {'}'}
            #fbWindow_btClose:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/minHover.png);
            {'}'}
            #fbWindow_btDetach {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/detach.png);
            {'}'}
            #fbWindow_btDetach:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/detachHover.png);
            {'}'}
            #fbWindow_btDeactivate {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/off.png);
            {'}'}
            #fbWindow_btDeactivate:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/offHover.png);
            {'}'}
            .fbTab {'{'}
            text-decoration: none;
            display: none;
            float: left;
            width: auto;
            float: left;
            cursor: default;
            font-family: Lucida Grande, Tahoma, sans-serif;
            font-size: 11px;
            line-height: 13px;
            font-weight: bold;
            height: 22px;
            color: #565656;
            {'}'}
            .fbPanelBar span {'{'}
            float: left;
            {'}'}
            .fbPanelBar .fbTabL,
            .fbPanelBar .fbTabR {'{'}
            height: 22px;
            width: 8px;
            {'}'}
            .fbPanelBar .fbTabText {'{'}
            padding: 4px 1px 0;
            {'}'}
            a.fbTab:hover {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) 0 -73px;
            {'}'}
            a.fbTab:hover .fbTabL {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) -16px -96px;
            {'}'}
            a.fbTab:hover .fbTabR {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) -24px -96px;
            {'}'}
            .fbSelectedTab {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) #f1f2ee 0 -50px !important;
            color: #000;
            {'}'}
            .fbSelectedTab .fbTabL {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) 0 -96px !important;
            {'}'}
            .fbSelectedTab .fbTabR {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/sprite.png) -8px -96px !important;
            {'}'}
            #fbHSplitter {'{'}
            position: fixed;
            _position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 5px;
            overflow: hidden;
            cursor: n-resize !important;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/pixel_transparent.gif);
            z-index: 9;
            {'}'}
            #fbHSplitter.fbOnMovingHSplitter {'{'}
            height: 100%;
            z-index: 100;
            {'}'}
            .fbVSplitter {'{'}
            background: #ece9d8;
            color: #000;
            border: 1px solid #716f64;
            border-width: 0 1px;
            border-left-color: #aca899;
            width: 4px;
            cursor: e-resize;
            overflow: hidden;
            right: 294px;
            text-decoration: none;
            z-index: 10;
            position: absolute;
            height: 100%;
            top: 27px;
            {'}'}
            div.lineNo {'{'}
            font: 1em/1.4545em Monaco, monospace;
            position: relative;
            float: left;
            top: 0;
            left: 0;
            margin: 0 5px 0 0;
            padding: 0 5px 0 10px;
            background: #eee;
            color: #888;
            border-right: 1px solid #ccc;
            text-align: right;
            {'}'}
            .sourceBox {'{'}
            position: absolute;
            {'}'}
            .sourceCode {'{'}
            font: 1em Monaco, monospace;
            overflow: hidden;
            white-space: pre;
            display: inline;
            {'}'}
            .nodeControl {'{'}
            margin-top: 3px;
            margin-left: -14px;
            float: left;
            width: 9px;
            height: 9px;
            overflow: hidden;
            cursor: default;
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_open.gif);
            _float: none;
            _display: inline;
            _position: absolute;
            {'}'}
            div.nodeMaximized {'{'}
            background: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/tree_close.gif);
            {'}'}
            div.objectBox-element {'{'}
            padding: 1px 3px;
            {'}'}
            .objectBox-selector {'{'}
            cursor: default;
            {'}'}
            .selectedElement {'{'}
            background: highlight;
            color: #fff !important;
            {'}'}
            .selectedElement span {'{'}
            color: #fff !important;
            {'}'}
            * html .selectedElement {'{'}
            position: relative;
            {'}'}
            @media screen and (-webkit-min-device-pixel-ratio:0) {'{'}
            .selectedElement {'{'}
            background: #316AC5;
            color: #fff !important;
            {'}'}
            {'}'}
            .logRow * {'{'}
            font-size: 1em;
            {'}'}
            .logRow {'{'}
            position: relative;
            border-bottom: 1px solid #D7D7D7;
            padding: 2px 4px 1px 6px;
            zbackground-color: #FFFFFF;
            {'}'}
            .logRow-command {'{'}
            font-family: Monaco, monospace;
            color: blue;
            {'}'}
            .objectBox-string,
            .objectBox-text,
            .objectBox-number,
            .objectBox-function,
            .objectLink-element,
            .objectLink-textNode,
            .objectLink-function,
            .objectBox-stackTrace,
            .objectLink-profile {'{'}
            font-family: Monaco, monospace;
            {'}'}
            .objectBox-null {'{'}
            padding: 0 2px;
            border: 1px solid #666666;
            background-color: #888888;
            color: #FFFFFF;
            {'}'}
            .objectBox-string {'{'}
            color: red;
            {'}'}
            .objectBox-number {'{'}
            color: #000088;
            {'}'}
            .objectBox-function {'{'}
            color: DarkGreen;
            {'}'}
            .objectBox-object {'{'}
            color: DarkGreen;
            font-weight: bold;
            font-family: Lucida Grande, sans-serif;
            {'}'}
            .objectBox-array {'{'}
            color: #000;
            {'}'}
            .logRow-info,
            .logRow-error,
            .logRow-warn {'{'}
            background: #fff no-repeat 2px 2px;
            padding-left: 20px;
            padding-bottom: 3px;
            {'}'}
            .logRow-info {'{'}
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/infoIcon.png) !important;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/infoIcon.gif);
            {'}'}
            .logRow-warn {'{'}
            background-color: cyan;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/warningIcon.png) !important;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/warningIcon.gif);
            {'}'}
            .logRow-error {'{'}
            background-color: LightYellow;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/errorIcon.png) !important;
            background-image: url(chrome-extension://ehemiojjcpldeipjhjkepfdaohajpbdo/skin/xp/errorIcon.gif);
            color: #f00;
            {'}'}
            .errorMessage {'{'}
            vertical-align: top;
            color: #f00;
            {'}'}
            .objectBox-sourceLink {'{'}
            position: absolute;
            right: 4px;
            top: 2px;
            padding-left: 8px;
            font-family: Lucida Grande, sans-serif;
            font-weight: bold;
            color: #0000FF;
            {'}'}
            .selectorTag,
            .selectorId,
            .selectorClass {'{'}
            font-family: Monaco, monospace;
            font-weight: normal;
            {'}'}
            .selectorTag {'{'}
            color: #0000FF;
            {'}'}
            .selectorId {'{'}
            color: DarkBlue;
            {'}'}
            .selectorClass {'{'}
            color: red;
            {'}'}
            .objectBox-element {'{'}
            font-family: Monaco, monospace;
            color: #000088;
            {'}'}
            .nodeChildren {'{'}
            padding-left: 26px;
            {'}'}
            .nodeTag {'{'}
            color: blue;
            cursor: pointer;
            {'}'}
            .nodeValue {'{'}
            color: #FF0000;
            font-weight: normal;
            {'}'}
            .nodeText,
            .nodeComment {'{'}
            margin: 0 2px;
            vertical-align: top;
            {'}'}
            .nodeText {'{'}
            color: #333333;
            font-family: Monaco, monospace;
            {'}'}
            .nodeComment {'{'}
            color: DarkGreen;
            {'}'}
            .nodeHidden,
            .nodeHidden * {'{'}
            color: #888888;
            {'}'}
            .nodeHidden .nodeTag {'{'}
            color: #5F82D9;
            {'}'}
            .nodeHidden .nodeValue {'{'}
            color: #D86060;
            {'}'}
            .selectedElement .nodeHidden,
            .selectedElement .nodeHidden * {'{'}
            color: SkyBlue !important;
            {'}'}
            .log-object {'{'}{'}'}
            .property {'{'}
            position: relative;
            clear: both;
            height: 15px;
            {'}'}
            .propertyNameCell {'{'}
            vertical-align: top;
            float: left;
            width: 28%;
            position: absolute;
            left: 0;
            z-index: 0;
            {'}'}
            .propertyValueCell {'{'}
            float: right;
            width: 68%;
            background: #fff;
            position: absolute;
            padding-left: 5px;
            display: table-cell;
            right: 0;
            z-index: 1;
            {'}'}
            .propertyName {'{'}
            font-weight: bold;
            {'}'}
            .FirebugPopup {'{'}
            height: 100% !important;
            {'}'}
            .FirebugPopup #fbWindowButtons {'{'}
            display: none !important;
            {'}'}
            .FirebugPopup #fbHSplitter {'{'}
            display: none !important;
            {'}'}
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));